/* lessons-core2.js — aulas praticas densas para blue/ai/devops.
   LESSONS[area/stage] = { intro, sections:[{h,doc,steps,cmd,code,note,risk}], exercises:[...] }. */
(function () {
  const LESSONS = {
    "blue/s1": {
      intro: "Nesta aula voce monta a base de um SOC: entender os tipos de log, o ciclo de alerta e como detectar brute force no seu proprio Linux. Fonte central: NIST SP 800-61r2 (Computer Security Incident Handling Guide).",
      sections: [
        { h: "Mapear os tipos de log", doc: "System (kernel), auth (login/SSH/sudo), application e network. O NIST 800-61 trata o log como base da resposta. Sincronize relogio com NTP para correlacionar eventos.", steps: ["Liste em /var/log o que existe", "Identifique auth.log / journalctl", "Verifique se o relogio esta sincronizado (timedatectl)"] },
        { h: "Detectar brute force", doc: "SSH quebra em 'Failed password' repetidos de 1 IP. Esse e o sinal classico que o blue deve pegar em minutos. fail2ban automatiza o bloqueio.", code: "sudo journalctl -u sshd --since '-10m' | grep 'Failed password'\n# contar por IP:\nsudo grep 'Failed password' /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn", note: "fail2ban -d detectar e banir automaticamente" },
        { h: "Triagem e runbook", doc: "Classifique o alerta (TP/FP) e tenha um runbook por tipo. SANS e MITRE recomendam matriz de severidade. Um alerta sem dono e so ruido.", cmd: "cat > runbook_ssh_bruteforce.md <<'EOF'\nGatilho: >50 Failed password/5min de 1 IP\n1. Confirmar IP (journalctl)\n2. Bloquear: iptables -A INPUT -s IP -j DROP\n3. Checar contas (lastlog)\n4. Escalonar se houve acesso\nEOF" }
      ],
      exercises: [
        { t: "No seu Linux, conte tentativas de SSH falhas por IP nos ultimos 10 min.", check: { type: "contains", words: ["journalctl", "awk"] } },
        { t: "Escreva um runbook de 4 passos para SSH brute force citando NIST 800-61.", check: { type: "contains", words: ["NIST", "bloque"] } }
      ]
    },
    "blue/s2": {
      intro: "Voce vai montar o inicio de um SIEM com o Elastic Stack: ingerir logs, normalizar e criar a primeira deteccao. Referencia: Elastic SIEM docs e o padrao ECS.",
      sections: [
        { h: "Pipeline de ingest", doc: "Filebeat coleta e envia para Elasticsearch; Kibana visualiza. O ECS (Elastic Common Schema) normaliza campos de fontes diferentes para cruzar eventos.", cmd: "docker run -p 5601:5601 -p 9200:9200 docker.elastic.co/elasticsearch/elasticsearch:8.x" },
        { h: "Criar index pattern", doc: "No Kibana, um Index Pattern (ex: filebeat-*) diz quais indices compoem a 'tabela' pesquisavel e o campo de tempo. Sem ele nao ha Discover nem dashboard.", steps: ["Abrir Stack Management > Index Patterns", "Escolher filebeat-* e o campo @timestamp", "Salvar e abrir Discover"] },
        { h: "Primeira regra de alerta", doc: "Regra no Kibana/Elastic SIEM: 'mais de 50 Failed password em 5 min de 1 IP' -> notifica. A doc de Elastic SIEM mapeia regras em MITRE ATT&CK.", code: "{\n  \"query\": { \"match\": { \"event.action\": \"user_login_failed\" } },\n  \"threshold\": { \"count\": 50, \"time_window\": \"5m\" }\n}" }
      ],
      exercises: [
        { t: "Desenhe (ou rode em docker) o fluxo Filebeat -> Elasticsearch -> Kibana.", check: { type: "contains", words: ["Filebeat", "Elasticsearch"] } },
        { t: "Escreva uma regra de alerta para port scan usando threshold.", check: { type: "contains", words: ["threshold", "port"] } }
      ]
    },
    "blue/s3": {
      intro: "Threat hunting e proativo: parte de uma hipotese e procura evidencia nos logs, ao contrario do alerta passivo. Base: SANS Hunting e MITRE ATT&CK.",
      sections: [
        { h: "Formular hipotese", doc: "Ex: 'ha beaconing de C2 a cada 60s?'. MITRE ATT&CK (Command and Control) guia quais tecnicas procurar. Hunting sem hipotese e so vagueacao.", steps: ["Escolher uma tacica do ATT&CK", "Definir o que seria a evidencia", "Escrever a consulta nos logs"] },
        { h: "Playbook de resposta", doc: "IR do NIST 800-61: conter (isolar), erradicar (remover persistencia), recovery. Playbook por cena (phishing, ransomware) e o que orquestra a resposta.", code: "Playbook SSH comprometido:\n1. Isolar host (desconectar rede)\n2. Revogar credenciais/sessoes\n3. Remover chave autorizada/backdoor\n4. Rebuild a partir de imagem limpa" },
        { h: "Lessons learned", doc: "A etapa final do NIST 800-61: documentar o que falhou e o que mudar. Sem isso, o mesmo ataque acerta de novo. Feedback loop que melhora deteccao.", note: "Auto-bloqueio (nftables) e a automacao defendida pela CISA: 'orquestrar o manual primeiro'." }
      ],
      exercises: [
        { t: "Escreva 3 hipoteses de hunt baseadas em taticas do MITRE ATT&CK.", check: { type: "contains", words: ["ATT&CK", "hipotese"] } },
        { t: "Desenhe um playbook de resposta para 'phishing abriu anexo'.", check: { type: "contains", words: ["playbook", "isolar"] } }
      ]
    },
    "blue/s4": {
      intro: "Hardening e o que reduz a superficie antes do comprometimento. Referencia: CIS Benchmarks e a doc do OpenSSH.",
      sections: [
        { h: "SSH hardening", doc: "PermitRootLogin no, PasswordAuthentication no (so chaves), trocar porta. CIS SSH Benchmark detalha cada parametro. Teste o bloqueio com fail2ban.", cmd: "sudo sed -i 's/^#\\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config\nsudo systemctl restart sshd" },
        { h: "Firewall default-deny", doc: "Bloquear tudo e abrir so o necessario. nftables e o padrao moderno. Egress filtering (saida) tambem importa para impedir C2/exfiltracao.", code: "nft add table inet filter\nnft add chain inet filter input '{ type filter hook input priority 0; policy drop; }'\nnft add rule inet filter input ct state established,related accept\nnft add rule inet filter input tcp dport 22 accept" },
        { h: "CIS e auditoria", doc: "Lynis varre o sistema e pontua conforme CIS/STIG. Rodar lynis e o 'check-up' rapido. A politica de patch (KEV da CISA) fecha CVEs conhecidos.", cmd: "sudo lynis audit system" }
      ],
      exercises: [
        { t: "Aplique SSH chaves + fail2ban e teste o bloqueio de um IP.", check: { type: "contains", words: ["fail2ban", "ssh"] } },
        { t: "Crie uma regra nftables default-deny que libera so SSH e HTTP.", check: { type: "contains", words: ["nft", "drop"] } }
      ]
    },
    "blue/s5": {
      intro: "Forensia digital tem principios rigorosos (nao alterar evidencia, cadeia de custodia). Referencia: SANS DFIR e a ordem de volatilidade.",
      sections: [
        { h: "Coletar com hash", doc: "Imagem o disco com dd e calcule sha256 ANTES de analisar. Sem hash, nao prova que a copia e fiel. A SANS ensina 'imaging before analysis'.", cmd: "sudo dd if=/dev/sda of=evidencia.dd bs=4M status=progress\nsha256sum evidencia.dd > evidencia.dd.sha256" },
        { h: "Timeline com plaso", doc: "log2timeline/plaso gera super-timeline unificando MFT, logs e registro. Responde 'o que aconteceu e quando?'.", cmd: "log2timeline.py timeline.plaso evidencia.dd" },
        { h: "Volatilidade", doc: "RAM, conexoes e processos somem ao desligar. Coleta volatil (avml para RAM) VEM ANTES da imagem. A SANS ensina a ordem POMP. Perder a RAM e perder malware em memoria.", risk: "Nunca analisar o original; sempre a imagem. Alterar evidencia a torna inadmissivel." }
      ],
      exercises: [
        { t: "Gere o sha256 de uma imagem de disco e explique a cadeia de custodia.", check: { type: "contains", words: ["sha256", "cadeia"] } },
        { t: "Liste a ordem de volatilidade (o que coletar primeiro) e por que.", check: { type: "contains", words: ["RAM", "volatil"] } }
      ]
    },
    "blue/s6": {
      intro: "Deteccao de malware usa IOCs, YARA e comportamento. Referencia: YARA docs, MITRE ATT&CK e MISP para threat intel.",
      sections: [
        { h: "IOC e threat intel", doc: "IOC e a pegada (hash, IP, dominio). MISP/STIX troca intel entre equipes. Consumir feeds atualiza suas deteccoes. Mandiant e MITRE definem IOCs.", steps: ["Coletar hashes de amostras", "Mapear para dominios C2", "Ingerir no SIEM como regra"] },
        { h: "YARA rule", doc: "YARA descreve padroes de malware (strings/regex/condicoes). Permite detectar familias sem ter cada hash. Usado em EDR e hunting.", code: "rule exemplo_malware {\n  strings: $a = \"cmd.exe /c powershell\"\n  condition: $a\n}" },
        { h: "Sandbox e quarentena", doc: "Sandbox (VM sem rede) executa malware para ver comportamento. Quarentenar isola sem destruir evidencia. Nunca fora de isolamento.", risk: "Executar malware fora de sandbox e RCE na sua maquina." }
      ],
      exercises: [
        { t: "Escreva uma YARA rule simples com 1 string e explique quando dispara.", check: { type: "contains", words: ["rule", "condition"] } },
        { t: "Explique a diferenca entre IOC de assinatura e deteccao comportamental (EDR).", check: { type: "contains", words: ["comport", "IOC"] } }
      ]
    },
    "blue/s7": {
      intro: "Rede defensiva: segmentar e monitorar. Referencia: Suricata docs, Cisco/Arch (network) e a pratica de egress filtering.",
      sections: [
        { h: "VLAN e segmentacao", doc: "VLAN (802.1Q) separa IoT/servidores/usuarios, limitando movimento lateral. Arch Wiki (network configuration) explica trunk/access. Segmentacao e o 'least privilege' na camada 2.", steps: ["Criar VLAN para servidores", "Isolar IoT em VLAN propria", "Roteamento entre VLANs com firewall"] },
        { h: "Suricata IDS", doc: "Suricata inspeciona trafego e aplica regras (Emerging Threats) emitindo alertas EVE (JSON) para o SIEM. Diferente de sniffer, age com base em assinatura/comportamento.", cmd: "sudo suricata -i eth0 -s /etc/suricata/rules/emerging-threats.rules" },
        { h: "DNS sinkhole e egress", doc: "DNS sinkhole redireciona dominios C2 para IP controlado; egress filtering (nftables saida) impede exfiltracao. A maioria esquece a saida.", code: "nft add rule inet filter output ip daddr != { 10.0.0.0/8 } drop  # exemplo de restricao" }
      ],
      exercises: [
        { t: "Explique como uma VLAN reduz movimento lateral do atacante.", check: { type: "contains", words: ["VLAN", "lateral"] } },
        { t: "Escreva uma regra Suricata que alerta port scan e explique o sinkhole.", check: { type: "contains", words: ["Suricata", "sinkhole"] } }
      ]
    },
    "blue/s8": {
      intro: "Identity e acesso: o fundamento e menor privilegio (NIST 800-53 AC-6) + MFA (NIST 800-63B) + RBAC + revogacao + auditoria.",
      sections: [
        { h: "MFA e RBAC", doc: "MFA (FIDO2 sobre SMS, por NIST 800-63B) quebra ataque de credencial. RBAC associa permissoes a papeis, nao usuarios (AC-2). Facilita revisao.", steps: ["Habilitar TOTP/FIDO2", "Definir papeis (admin/dev/leitor)", "Aplicar MFA no SSH/console"] },
        { h: "Revogacao e auditoria", doc: "Offboarding imediato (AC-2) e auditoria de contas inativas/permissoes (ISO 27001). Conta morta e a porta de atacante e ex-funcionario. Processo documentado fecha a porta.", cmd: "lastlog | awk '$3==\"Never\"'   # contas que nunca logaram" },
        { h: "SSO na teoria", doc: "SSO (OIDC/SAML) centraliza auth com politica unica, mas vira single point of failure -> exige MFA e monitoramento. A teoria importa: nao coloque todas as chaves num cofre sem alarme.", note: "Politica de senha 'nunca expira' (NIST 800-63B) e recomendada; expiracao forcada gera senhas faceis." }
      ],
      exercises: [
        { t: "Habilite MFA (TOTP) num servico e explique por que FIDO2 > SMS.", check: { type: "contains", words: ["MFA", "FIDO2"] } },
        { t: "Escreva um processo de revogacao de acesso (offboarding) em 4 passos.", check: { type: "contains", words: ["revog", "offboard"] } }
      ]
    },
    "blue/s9": {
      intro: "Resilience e backup: a regra 3-2-1 (NIST 800-34) e o minimo. Testar restore e obrigatorio.",
      sections: [
        { h: "3-2-1 e RTO/RPO", doc: "3 copias, 2 midias, 1 offsite. RPO = perda de dados tolerada; RTO = tempo para voltar (ISO 22301). Esses numeros guiam tecnologia (snapshot vs backup).", steps: ["Backup local + offsite", "Medir RPO (ex: 1h)", "Medir RTO (ex: 4h)"] },
        { h: "Testar restore", doc: "Backup nao testado e esperanca. O NIST 800-34 exige testar. Muitos descobrem corrompido no sinistro.", cmd: "pg_dump meu_db > b.sql && psql -d teste_restore -f b.sql" },
        { h: "DR plan e tabletop", doc: "DR plan documenta recuperacao (NIST 800-34). Tabletop (CISA) simula em sala sem risco. 'Ensaiar o desastre' e barato e valida o processo.", note: "Replicacao (warm standby) reduz RTO; diferente de backup (ponto no tempo)." }
      ],
      exercises: [
        { t: "Defina RPO e RTO para um servico hipotetico e justifique.", check: { type: "contains", words: ["RPO", "RTO"] } },
        { t: "Escreva um DR plan de 5 passos citando NIST 800-34.", check: { type: "contains", words: ["DR", "NIST"] } }
      ]
    },
    "blue/s10": {
      intro: "Maturidade de SOC mede-se por metricas (MTTD/MTTR) e cobertura MITRE, nao por 'achismo'. Referencia: SANS maturity e Google SRE (para MTTR).",
      sections: [
        { h: "MTTD/MTTR e cobertura", doc: "MTTD (tempo de detectar) e MTTR (tempo de responder) sao as metricas de ouro. Cobertura MITRE = % de taticas com deteccao. Um grafico de cobertura mostra buracos.", steps: ["Medir tempo de alerta a contenção", "Mapear deteccoes em ATT&CK", "Plotar cobertura"] },
        { h: "Dashboard e treino", doc: "Grafana/Kibana com alertas por severidade e MTTR. CTF interno/game day mantem o time afiado (SANS). Sem treino, runbook vira reflexo so no papel.", cmd: "grafana-server start  # ou docker grafana" },
        { h: "Cultura", doc: "Cultura sem culpa (reportar cedo) e o fator humano. ISO 27001 e o human firewall. Cultura toxica esconde o problema ate virar crise.", note: "Maturidade de SOC (SANS) vai de reacao ad-hoc a deteccao preditiva/caçada." }
      ],
      exercises: [
        { t: "Calcule MTTD/MTTR de um incidente hipotetico e explode por que importam.", check: { type: "contains", words: ["MTTD", "MTTR"] } },
        { t: "Desenhe um grafico de cobertura MITRE e aponte 1 buraco a fechar.", check: { type: "contains", words: ["MITRE", "cobertura"] } }
      ]
    },

    "ai/s1": {
      intro: "LLMs: entenda tokens, janela, prompt engineering (few-shot/CoT) e custos antes de usar. Referencia: doc da Anthropic (Prompt Engineering), OpenRouter (precos) e o paper 'Chain-of-Thought' (Wei 2022).",
      sections: [
        { h: "Tokens e janela", doc: "Tokens sao pedacos de texto (~4 chars). A janela (ex 128k) e o limite de memoria. Estourar trunca o historico. Custo = (in+out) x preco/1k. Conversao BRL e obrigatoria antes de producao.", steps: ["Rodar um modelo e ver contagem de tokens", "Medir custo de 1 tarefa em BRL", "Entender o que truncar"] },
        { h: "Few-shot e CoT", doc: "Few-shot (2-3 exemplos) e CoT ('pense passo a passo') melhoram raciocinio sem treinar. Paper de Wei et al. 2022 mostrou ganhos. Son o kit basica de prompt.", code: "prompt = '''Exemplo:\nQ: 2+3\nA: 5\n\nQ: 10-4\nA:'''  # few-shot\n# CoT: 'Explique passo a passo antes da resposta.'" },
        { h: "System prompts e limitacoes", doc: "System prompt define papel/regras (doc da Anthropic). LLMs alucinam e nao tem memoria (paper 'Stochastic Parrots', Bender 2021). Saber o limite separa ferramenta de oracle.", note: "Comparar modelos com MESMO prompt e rubrica, nao 'qual e melhor' subjectivo." }
      ],
      exercises: [
        { t: "Meça o custo de 5 modelos em BRL por 1k tokens usando OpenRouter.", check: { type: "contains", words: ["BRL", "token"] } },
        { t: "Escreva 3 system prompts com papel+regras e explique o CoT.", check: { type: "contains", words: ["system", "CoT"] } }
      ]
    },
    "ai/s2": {
      intro: "Agentes: o padrao ReAct (Yao et al. 2022, arxiv 2210.03629) e o nucleo — pensar, usar ferramenta, observar, repetir. Limite de passos e memoria sao obrigatorios.",
      sections: [
        { h: "Loop ReAct e ferramentas", doc: "ReAct: Thought -> Action (ferramenta) -> Observation, ate a resposta. Ferramentas bem tipadas (doc da Anthropic) sao o que torna o agente util. Sem loop, e so chatbot.", code: "Thought: preciso buscar X\nAction: web_search('X')\nObservation: ...\nThought: agora respondo" },
        { h: "Memoria e limite", doc: "Memoria (sqlite/JSON) lembra entre turnos. Limite de passos (ex 20) evita loop infinito e custo (doc da Anthropic: 'bounded steps').", steps: ["Persistir contexto em arquivo", "Definir max_steps=20", "Contar tokens do loop"] },
        { h: "Self-verify", doc: "Self-Consistency (Wang 2022) e verificacao: o agente confere o proprio resultado (ex: roda o teste que escreveu). Sem verificar, erro silencioso vira resposta.", note: "Framework leve (LangGraph/Hermes) melhor que overengineering (doc da Anthropic)." }
      ],
      exercises: [
        { t: "Desenhe o loop ReAct para um agente CLI com 2 ferramentas.", check: { type: "contains", words: ["ReAct", "Action"] } },
        { t: "Explique por que limitar passos e memoria evita custo e loop.", check: { type: "contains", words: ["passos", "memoria"] } }
      ]
    },
    "ai/s3": {
      intro: "Multi-agente divide por papel (AutoGen, CrewAI) com supervisor e contratos. Mas vale so quando decompravel (Anthropic: mono resolve 90%). OWASP LLM01/LLM06 sao os riscos.",
      sections: [
        { h: "Papéis e supervisor", doc: "CrewAI: agent com role+goal+backstory. LangGraph: supervisor que roteia (handoff). Sem supervisor, agentes se sobrepoem ou travam.", steps: ["Definir pesquisador/codificador/revisor", "Criar supervisor que roteia", "Passar estado entre eles"] },
        { h: "Contratos e guardrails", doc: "Contratos = saida estruturada (JSON) entre agentes. Guardrails limitam custo/tempo (kill N) e validam saida (OWASP LLM06). Sem guardrail, agente com ferramenta e arma.", code: "guardrail: max_steps=20, timeout=30s, schema=Response" },
        { h: "Quando vale", doc: "Multi so vale se paralelizavel. Anthropic recomenda comecar mono. Usar multi sem necessidade e complexidade que nao paga. O papel do supervisor e o que decide.", note: "Timeouts (LangGraph interrupt) impedem loop que se nega a si mesmo." }
      ],
      exercises: [
        { t: "Modele 2 agentes (pesquisa+codigo) com supervisor e explique o handoff.", check: { type: "contains", words: ["supervisor", "handoff"] } },
        { t: "Liste 2 guardrails obrigatorios para um agente com ferramentas.", check: { type: "contains", words: ["guardrail", "timeout"] } }
      ]
    },
    "ai/s4": {
      intro: "RAG (Retrieval-Augmented Generation, Lewis et al. 2020, arxiv 2005.11401) injeta conhecimento via busca semantica. Chunking e embeddings sao o que decidem a qualidade.",
      sections: [
        { h: "Chunking e embeddings", doc: "Chunk (512 tokens, sobreposicao) e embed (SBERT/OpenAI) mapeiam texto a vetor de 'sentido'. Doc do Chroma e SBERT. Chunk ruim = recuperacao ruim.", steps: ["Dividir PDFs em chunks", "Gerar embeddings", "Armazenar no Chroma"] },
        { h: "Vector store e pipeline", doc: "Chroma/FAISS/pgvector indexam vetores para busca por similaridade. Pipeline: ingerir->chunk->embed->armazenar->ao perguntar busca top-k->injeta no prompt.", code: "import chromadb\nc = chromadb.Client()\ncol = c.create_collection('docs')\ncol.add(documents=[...], embeddings=[...], ids=[...])" },
        { h: "Avaliar (precisao@k)", doc: "Precisao@k (IR, Manning) e dos k documentos quantos eram relevantes. RAGAS mede faithfulness. Sem avaliacao, RAG alucina para o usuario.", note: "Normalizar embeddings (L2) para cosseno consistente (doc SBERT)." }
      ],
      exercises: [
        { t: "Indexe PDFs no Chroma e faca uma busca semantica top-3.", check: { type: "contains", words: ["Chroma", "embed"] } },
        { t: "Explique precisao@k e por que RAG precisa de avaliacao.", check: { type: "contains", words: ["precisao", "RAG"] } }
      ]
    },
    "ai/s5": {
      intro: "Fine-tuning vs RAG: FT adapta estilo/comportamento; RAG injeta factos (guia OpenAI, paper RAG). Dataset de qualidade e split sao obrigatorios para nao overfit.",
      sections: [
        { h: "Decisao e dataset", doc: "Use RAG para 'saber factos', FT para 'falar como'. FT precisa de 50-100 exemplos bons (doc OpenAI), nao quantidade. Dataset ruim = modelo memoriza lixo.", steps: ["Separar 50 exemplos curados", "Definir split treino/teste", "Escolher LoRA (PEFT)"] },
        { h: "Treino e metricas", doc: "lm-evaluation-harness (EleutherAI) e o benchmark. Medir perda de validacao e eval cego. Overfit: perda treino cai, validacao sobe (doc PEFT).", cmd: "python -m lm_eval --model hf --model_args ... --tasks mmlu" },
        { h: "Red flags", doc: "Ganho so em frases do dataset, queda em tarefas gerais, custo sem retorno. Cultura de 'eval honesto' (OpenAI) manda reportar o que NAO melhorou.", note: "Split correto evita vazamento de teste no treino." }
      ],
      exercises: [
        { t: "Justifique FT vs RAG para um caso de 'responder com a politica interna'.", check: { type: "contains", words: ["RAG", "FT"] } },
        { t: "Explique overfit e como o split evita vazamento.", check: { type: "contains", words: ["overfit", "split"] } }
      ]
    },
    "ai/s6": {
      intro: "Guardrails de agentes: o risco #1 e prompt injection (Greshake 2023, arxiv 2302.12173; OWASP LLM01). Mitiga-se separando dados de instrucao e validando saida/sandbox.",
      sections: [
        { h: "Prompt injection e validacao", doc: "Dados externos (web/CSV) podem conter instrucoes que sequestram o agente. Mitiga: separar dados de instrucao, validar saida contra schema (Pydantic). OWASP LLM01/LLM06.", steps: ["Marcar dados externos claramente", "Validar JSON de saida", "Allowlist de acoes"] },
        { h: "Sandbox e segredos", doc: "Sandbox (container sem rede) isola execucao de codigo. Segredos FORA do codigo (env/manager). OWASP LLM e a boa pratica geral: nunca hardcode.", code: "docker run --network none --rm meu_agente  # isolado" },
        { h: "Rate limit e logs", doc: "Rate limit por usuario (dict/token bucket) impede abuso e custo (OWASP LLM04). Log de chamadas e auditoria/debug. Sem log, nao sabe o que o agente fez.", note: "Injection nao tem patch unico; em defesa em camadas." }
      ],
      exercises: [
        { t: "Simule um prompt injection e explique a defesa em camadas.", check: { type: "contains", words: ["injection", "defesa"] } },
        { t: "Escreva validacao de saida JSON com schema e explique o sandbox.", check: { type: "contains", words: ["schema", "sandbox"] } }
      ]
    },
    "ai/s7": {
      intro: "Embeddings vivem num espaco vetorial onde 'perto' = 'parecido'. Cosseno e a metrica de RAG/IR. Referencia: doc SBERT, paper Word2Vec (Mikolov 2013), FAISS.",
      sections: [
        { h: "Espaco vetorial e cosseno", doc: "Embeddings mapeiam 'sentido' a vetor; cosseno (1=igual, 0=ortogonal) mede similaridade independente de magnitude (doc sklearn). E a base da busca semantica.", code: "from sklearn.metrics.pairwise import cosine_similarity\ncosine_similarity([v1], [v2])" },
        { h: "Normalizar e distancias", doc: "Normalizar L2 (doc SBERT) faz cosseno consistente. Alem de cosseno ha euclidiana; FAISS usa indices (IVF/HNSW) para busca rapida em milhoes de vetores.", steps: ["normalizar embeddings", "Escolher metrica", "Indexar com FAISS"] },
        { h: "Clustering e visualizar", doc: "k-means agrupa por similaridade (sklearn); UMAP reduz a 2D para visualizar. Cluster ajuda a dedup e a ver cobertura do corpus. 'Um grafico vale mais que a matriz'.", note: "Distancia errada ou sem normalizar faz 'rei' nao ficar perto de 'rainha'." }
      ],
      exercises: [
        { t: "Calcule cosseno entre 2 textos curtos usando sklearn.", check: { type: "contains", words: ["cosine", "sklearn"] } },
        { t: "Explique por que normalizar embeddings importa para o cosseno.", check: { type: "contains", words: ["normaliz", "cosseno"] } }
      ]
    },
    "ai/s8": {
      intro: "Avaliacao de LLM exige definir o que conta como bom e medir com golden set + LLM-as-judge (G-Eval, Liu 2023, arxiv 2303.14287) + human eval.",
      sections: [
        { h: "Golden set e judge", doc: "Golden set (20-50 casos com resposta esperada) e o teste de regressao de prompt. LLM-as-judge (G-Eval) avalia com rubrica, mas tem viés (prefere texto longo) — usar com human eval amostral.", steps: ["Montar golden set fixo", "Rodar judge com rubrica", "Amostrar human eval"] },
        { h: "Regressao e custo", doc: "Regressao: rodar golden set a cada mudanca e comparar. Custo por acerto (OpenRouter) decide se modelo caro vale. Sem regressao, 'melhorou' e so na cabeca.", code: "for caso in golden: assert avalia(model, caso) >= base" },
        { h: "O que avaliar", doc: "Dimensoes (RAGAS): corretude, formato, seguranca, custo. Definir antes, senao metrica e vaidade. Human eval e o chao contra viés de judge.", note: "So judge automatico pode mascarar problema sistemico." }
      ],
      exercises: [
        { t: "Crie um golden set de 20 casos e explique o LLM-as-judge.", check: { type: "contains", words: ["golden", "judge"] } },
        { t: "Explique por que human eval ainda e necessario com LLM-as-judge.", check: { type: "contains", words: ["human", "viés"] } }
      ]
    },
    "ai/s9": {
      intro: "Agentes com codigo: REPL onde o agente gera, executa e corrige. Validar antes e capturar erro sao obrigatorios (OpenAI Code Interpreter, Hermes docs).",
      sections: [
        { h: "REPL e validar", doc: "Agente gera codigo, executa, le o erro e ajusta (ReAct). Validar sintaxe/entrada ANTES de rodar evita 'rm -rf'. Sandbox + allowlist de comandos e o minimo.", steps: ["Gerar codigo", "Validar antes de executar", "Rodar em container efemero"] },
        { h: "Capturar erro e idempotente", doc: "Capturar traceback e devolver ao modelo (self-correct). Comandos idempotentes sao seguros para retry. Sem capturar, o erro some e o agente repete o erro.", code: "try: exec(code)\nexcept Exception as e: observacao = str(e)" },
        { h: "Revisar", doc: "Revisar diff (humano ou outro agente) antes de aplicar (Anthropic, human-in-loop). Sem revisao, erro de modelo vira commit ruim. Limite de tempo (timeout) tambem.", note: "Escopo limitado (so tmp, so linguagem X) impede tocar o que nao deve." }
      ],
      exercises: [
        { t: "Modele um agente que gera Python, captura o traceback e tenta de novo.", check: { type: "contains", words: ["traceback", "retry"] } },
        { t: "Explique por que validar e limitar escopo antes de executar importa.", check: { type: "contains", words: ["validar", "escopo"] } }
      ]
    },
    "ai/s10": {
      intro: "Deploy de agentes: API (FastAPI) + fila (Celery) + observabilidade (OTel) + rollback versionado + human-in-loop. Referencia: FastAPI, OpenTelemetry, OWASP LLM06.",
      sections: [
        { h: "API e fila", doc: "Expor o agente via FastAPI desacopla e permite integrar. Fila (Celery/RQ) evita que tarefa longa trave o servidor. Um agente em producao e um servico, nao script.", code: "from fastapi import FastAPI\napp = FastAPI()\n@app.post('/agent') async def run(req): return agent(req.text)" },
        { h: "Observabilidade e rollback", doc: "OpenTelemetry traca cada chamada de LLM (tokens, latencia, custo). Rollback de prompt/modelo versionado (CI/CD) reverte se piorou no golden set.", steps: ["Instrumentar com OTel", "Versionar prompt", "Rollback se regredir"] },
        { h: "Custo e humano no loop", doc: "Custo de agente e recorrente (tokens x chamadas); alertar por threshold. Human-in-loop para acoes de alto impacto (OWASP LLM06). Sem humano, agente autonomo vira risco.", note: "Agente custa todo dia, nao so no deploy." }
      ],
      exercises: [
        { t: "Exponha um agente via FastAPI e explique a fila.", check: { type: "contains", words: ["FastAPI", "fila"] } },
        { t: "Explique por que human-in-loop importa para acoes de alto impacto.", check: { type: "contains", words: ["humano", "loop"] } }
      ]
    },

    "devops/s1": {
      intro: "Linux e shell: pipes, permissoes, systemd e pacman/yay sao o piso de operacao. Referencia: TLCL (The Linux Command Line) e Arch Wiki.",
      sections: [
        { h: "Pipes e permissoes", doc: "Pipes (|) conectam saida a entrada formando pipelines. Permissoes Unix (rwx, bits 755) controlam acesso. Arch Wiki (File permissions) e a referencia.", code: "ls -la | grep '.sh$' | awk '{print $5, $9}'" },
        { h: "systemd e journalctl", doc: "systemd sobe servicos/timers; journalctl -u nginx -b -f mostra log em tempo real. Dominar 'systemctl status/enable' e operar qualquer servidor hoje.", cmd: "systemctl status nginx\njournalctl -u nginx -b -f" },
        { h: "pacman/yay", doc: "pacman (oficial) e yay (AUR). Atualizar com -Syu; remover orfaos com -Rns. Ler PKGBUILD do AUR antes de build. Sem atualizar, vulns se acumulam.", code: "sudo pacman -Syu\nyay -S pacote-aur\npacman -Rns $(pacman -Qtdq)" }
      ],
      exercises: [
        { t: "Faca um pipeline que conte tentativas de SSH falhas por IP.", check: { type: "contains", words: ["grep", "awk"] } },
        { t: "Explique a diferenca entre 755 e 644 e quando usar cada.", check: { type: "contains", words: ["755", "644"] } }
      ]
    },
    "devops/s2": {
      intro: "Containers e virtualizacao: imagem vs container, multi-stage build e VMs/CTs (Proxmox). Referencia: Docker docs, Proxmox (CT vs VM).",
      sections: [
        { h: "Imagem vs container e multi-stage", doc: "Imagem e template imutavel (camadas); container e a instancia. Multi-stage build (Docker docs) separa build de runtime para imagem slim e segura.", code: "FROM golang:1.22 AS build\nRUN go build -o app .\nFROM alpine\nCOPY --from=build /app /app" },
        { h: "VMs/CTs e snapshots", doc: "CT (LXC) compartilha kernel (leve); VM emula hardware (isolado). Snapshot (Proxmox) e o 'ctrl+z' do sysadmin; rollback restaura. Cloud-init automatiza template.", steps: ["Criar template+clone", "Snapshot antes de mexer", "Rollback se quebrar"] },
        { h: "Rede e volumes", doc: "Rede virtual (bridge) isola containers. Volume persistente (-v) sobrevive ao container. Sem volume, dados do container somem ao parar.", note: "Thin pools (LVM/ZFS) permitem alocar mais que fisico." }
      ],
      exercises: [
        { t: "Escreva um Dockerfile multi-stage que reduza o tamanho da imagem.", check: { type: "contains", words: ["FROM", "COPY --from"] } },
        { t: "Explique quando usar CT vs VM e por que snapshot importa.", check: { type: "contains", words: ["CT", "snapshot"] } }
      ]
    },
    "devops/s3": {
      intro: "Automatizacao e CI/CD: GitHub Actions, secrets e IaC (Ansible). Referencia: GitHub docs, Ansible docs, SRE (Google).",
      sections: [
        { h: "GitHub Actions e secrets", doc: "Workflow em YAML roda em push/PR. Secrets sao criptografados, nunca no codigo (GitHub Encrypted secrets). Um token hardcoded em repo publico e comprometimento instantaneo.", code: "name: ci\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - run: pytest" },
        { h: "Ansible idempotente", doc: "Ansible aplica config em idempotente (rodar de novo = mesmo estado). Tira o servidor snowflake. IaC torna infra reprodutivel.", cmd: "ansible-playbook -i hosts site.yml" },
        { h: "Observabilidade e rollback", doc: "Healthcheck + alerta (curl) no pipe. Rollback de deploy (blue-green/versao) salva de deploy ruim. Sem CI, codigo ruim so descobre em producao.", note: "Lint (ruff) no pipe bloqueia merge ruim." }
      ],
      exercises: [
        { t: "Crie um pipeline GitHub Actions que roda pytest no push.", check: { type: "contains", words: ["pytest", "push"] } },
        { t: "Escreva um playbook Ansible de 1 VM e explique idempotencia.", check: { type: "contains", words: ["ansible", "idempot"] } }
      ]
    },
    "devops/s4": {
      intro: "Observabilidade: Prometheus (metricas), Grafana (dash), Loki (logs), OTel (traces). Referencia: docs oficiais e o livro SRE (Google) para SLO.",
      sections: [
        { h: "Prometheus e Grafana", doc: "Prometheus raspa /metrics (pull) e Grafana plota via PromQL. E o coracao de observabilidade. Sem Prometheus, voce nao mede latencia/taxa.", cmd: "prometheus --config.file=prometheus.yml" },
        { h: "Loki e OTel", doc: "Loki agrega logs (labels, estilo Prometheus); OTel e o padrao aberto de traces/metrics/logs. Sem OTel, cada ferramenta tem formato proprio e trace vira ilha.", code: "from opentelemetry import trace\ntracer = trace.get_tracer(__name__)" },
        { h: "SLO/SLI e alertas", doc: "SLI = medida (ex % <200ms); SLO = meta (99.5%) (livro SRE). Alerta deve ser acionavel e raro (SRE: Alerting) para evitar alert fatigue.", note: "Sem SLO, 'confiavel' e vago e o time nao sabe onde mirar." }
      ],
      exercises: [
        { t: "Suba Prometheus+Grafana em docker e instrumente um app com um counter.", check: { type: "contains", words: ["Prometheus", "Grafana"] } },
        { t: "Defina um SLO de 99.5% e explique por que alerta deve ser raro.", check: { type: "contains", words: ["SLO", "alerta"] } }
      ]
    },
    "devops/s5": {
      intro: "Cloud IaaS/PaaS/SaaS, VPC e Terraform. Referencia: AWS Well-Architected, Hetzner docs, Terraform docs (HashiCorp).",
      sections: [
        { h: "Modelos e VPC", doc: "IaaS (vm), PaaS (plataforma), SaaS (pronto). VPC isola na nuvem com sub-redes. Escolher certo evita pagar por gerenciar o que nao precisa.", steps: ["Criar VPC com sub-rede publica/privada", "Lançar vm na privada", "Calcular custo mensal"] },
        { h: "Terraform idempotente", doc: "Terraform declara infra em HCL e aplica idempotentemente (plan/apply). Torna infra em codigo versionavel. Sem IaC, infra vira manual e divergente.", code: "resource \"hcloud_server\" \"web\" {\n  name = \"web\"\n  image = \"ubuntu-22.04\"\n  server_type = \"cx22\"\n}" },
        { h: "Custo e responsabilidade", doc: "Custo por recurso/tempo; calcular antes de subir. Modelo de responsabilidade compartilhada: cloud cuida do hipervisor, voce do SO/app/dados. Achar que a nuvem e segura sozinha e o erro.", note: "Destroy/recreate idempotente (terraform destroy) valida o codigo." }
      ],
      exercises: [
        { t: "Escreva um Terraform que cria 1 VM e 1 rede e explique idempotencia.", check: { type: "contains", words: ["resource", "terraform"] } },
        { t: "Explique o modelo de responsabilidade compartilhada da nuvem.", check: { type: "contains", words: ["responsabilidade", "nuvem"] } }
      ]
    },
    "devops/s6": {
      intro: "Rede de infra: sub-redes, LB, DNS interno, firewall de borda e NAT. Referencia: AWS/Hetzner docs, nftables, CoreDNS.",
      sections: [
        { h: "Sub-redes e LB", doc: "Sub-redes (CIDR) dividem a VPC (publica/privada). Load balancer distribui e faz health check. Sem LB, uma instancia down derruba o servico.", steps: ["Criar 2 sub-redes", "Anexar LB", "Configurar health check"] },
        { h: "DNS interno e borda", doc: "DNS interno (CoreDNS) resolve nomes na VPC sem expor internet. Firewall de borda (security group/nftables) faz default-deny de entrada. Sem borda fechada, a VPC vira alvo.", code: "nft add rule inet filter input tcp dport 22,80,443 accept\nnft add rule inet filter input drop" },
        { h: "Peering e NAT", doc: "Peering conecta redes sem sair pra internet. NAT (masquerade) deixa privadas sairem sem IP publico. Sem NAT, tudo tem IP publico ou nao atualiza.", note: "DNS interno evita acoplar tudo a IPs que mudam." }
      ],
      exercises: [
        { t: "Desenhe 2 sub-redes + LB e explique o health check.", check: { type: "contains", words: ["sub-rede", "LB"] } },
        { t: "Escreva regra nftables de borda default-deny que libera so SSH/HTTP/HTTPS.", check: { type: "contains", words: ["nft", "drop"] } }
      ]
    },
    "devops/s7": {
      intro: "Seguranca de infra: SSH chaves, Vault, MFA, patch, auditoria, least privilege (NIST 800-53 AC-6). Referencia: Arch Wiki, Vault docs, NIST 800-63B.",
      sections: [
        { h: "SSH chaves e Vault", doc: "SSH ed25519 e muito mais seguro que senha; somado a MFA e o padrao. Vault guarda segredos com acesso controlado, fora do git. 'Segredo em git e incidente'.", cmd: "ssh-keygen -t ed25519\nssh-copy-id user@host" },
        { h: "MFA e atualizacao", doc: "MFA no acesso (NIST 800-63B) quebra ataque de credencial. Politica de patch (CIS/KEV) fecha CVEs. Sem atualizar, voce roda software exploitable.", steps: ["Habilitar MFA no console/SSH", "Automatizar patch com ansible", "Priorizar KEV"] },
        { h: "Auditoria e least privilege", doc: "Auditoria de acessos via logs SSH/sudo e vault (ISO 27001, NIST). Least privilege: sudo por comando, nao amplo. Sem isso, usuario comprometido vira root.", note: "Segredos em vault, nunca em .env commitado." }
      ],
      exercises: [
        { t: "Gere chave ed25519 e explique por que MFA importa.", check: { type: "contains", words: ["ed25519", "MFA"] } },
        { t: "Escreva uma politica de patch priorizando CVEs do KEV.", check: { type: "contains", words: ["patch", "KEV"] } }
      ]
    },
    "devops/s8": {
      intro: "Banco e cache: Postgres (indice/backup), Redis (cache/TTL), fila e replicacao. Referencia: Postgres docs, Redis docs.",
      sections: [
        { h: "Postgres e indices", doc: "Indice acelera busca (B-tree) mas custa escrita. EXPLAIN mostra se usa. Indice errado = full scan. 'EXPLAIN e o diagnostico'.", code: "EXPLAIN ANALYZE SELECT * FROM pedido WHERE cliente_id=42;\nCREATE INDEX idx_cliente ON pedido(cliente_id);" },
        { h: "Backup e Redis", doc: "pg_dump (logico) ou PITR (WAL) — testar restore (NIST 800-34). Redis cache com TTL; cache errado (sem invalidar) entrega dado velho.", cmd: "pg_dump meu_db > b.sql" },
        { h: "Fila e replicacao", doc: "Fila (Redis/BullMQ, RabbitMQ) desacopla e amortece picos. Replicacao (Postgres streaming, Redis replica) da leitura escalavel e failover. Sem replica, um node down tira o servico.", note: "Cache: TTL e a validade; fila: desacopla produtor de consumidor." }
      ],
      exercises: [
        { t: "Crie um schema com indice e use EXPLAIN para ver a query usar o indice.", check: { type: "contains", words: ["EXPLAIN", "INDEX"] } },
        { t: "Explique por que replicacao importa para failover de banco.", check: { type: "contains", words: ["replica", "failover"] } }
      ]
    },
    "devops/s9": {
      intro: "SRE: SLO/SLI/SLA, error budget, circuit breaker, retry/backoff, chaos, postmortem. Referencia: livro Site Reliability Engineering (Google, gratuito).",
      sections: [
        { h: "SLO/SLI e error budget", doc: "SLI = medida; SLO = meta; SLA = contrato. Error budget = 1-SLO; decide lancar ou estabilizar. Sem SLO, operar sem alvo.", steps: ["Definir SLI (ex % <200ms)", "Definir SLO 99.5%", "Calcular error budget"] },
        { h: "Circuit breaker e retry", doc: "Breaker abre quando dependencia falha muito (Fowler). Retry com backoff+jitter (AWS/SRE) evita tempestade. Sem breaker, servico lento derruba quem depende.", code: "if falhas > limite: estado = 'open'  # breaker" },
        { h: "Chaos e postmortem", doc: "Chaos engineering (derrubar de proposito) prova resiliência (Netflix/Gremlin). Postmortem blameless documenta causa raiz (SRE book). 'Aprender, nao punir'.", note: "Sem caos testado, 'e resiliente' e esperanca." }
      ],
      exercises: [
        { t: "Defina SLO/SLI/SLA para um servico e calcule o error budget.", check: { type: "contains", words: ["SLO", "error budget"] } },
        { t: "Explique circuit breaker e por que retry precisa de backoff.", check: { type: "contains", words: ["breaker", "backoff"] } }
      ]
    },
    "devops/s10": {
      intro: "Platform Engineering / IDP: templates, golden paths, self-service, catálogo (Backstage). Referencia: platformengineering.org, Backstage docs.",
      sections: [
        { h: "Templates e golden paths", doc: "Templates (cookiecutter) geram servico padrao (CI/docker). Golden path e o 'caminho feliz' suportado (deploy em 1 botao). Sem template, base fica inconsistente.", steps: ["Criar scaffold", "Definir golden path", "Documentar"] },
        { h: "Self-service e catalogo", doc: "Self-service (Backstage catalog) tira carga do ops e acelera o dev. Catalogo documenta dono/deps de cada servico. Sem catalogo, 'quem e dono?' vira caos em 50 microservicos.", code: "kind: Component\nmetadata:\n  name: pagamento-service\n  owner: time-pagamentos" },
        { h: "Docs e onboarding", doc: "Docs de onboarding no proprio IDP fazem o dev produzir no dia 1. Cultura de plataforma exige doc viva. Sem doc, o template gera servico que ninguem sabe operar.", note: "IDP abstrai infra para o dev nao precisar saber de k8s." }
      ],
      exercises: [
        { t: "Modele um template de servico com CI e docker e explique o golden path.", check: { type: "contains", words: ["template", "golden"] } },
        { t: "Explique por que um catalogo de servicos importa em microservicos.", check: { type: "contains", words: ["catalogo", "servico"] } }
      ]
    }
  };
  module.exports = { LESSONS: LESSONS };
})();
