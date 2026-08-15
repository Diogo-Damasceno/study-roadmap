/* explain-core2.js — explicacoes didaticas densas para blue/ai/devops.
   Cada topico cita a fonte (docs oficiais / papers). Formato: EXPLAIN[area/stage] = [{topic,text}]. */
(function () {
  const EXPLAIN = {
    "blue/s1": [
      { topic: "Tipos de log.", text: "Log e a evidencia forense primaria. Os principais: system (kernel/servicos), auth (login/SSH/sudo — onde aparece brute force), application (erros de app) e network/firewall (conexoes). O NIST SP 800-61r2 (Computer Security Incident Handling Guide) trata o log como base do ciclo de resposta e recomenda sincronia de relogio (NTP) e retencao. Sem log estruturado, voce nao detecta nem prove nada." },
      { topic: "Ciclo de alerta.", text: "O fluxo de um SOC: coleta -> normalizacao -> deteccao (regra/ML) -> alerta -> triagem -> investigacao -> resposta -> lessons learned. O D3FEND (MITRE) mapeia tecnicas de deteccao defensiva que devem alimentar esse ciclo. Um alerta so tem valor se houver quem trie e feche; alerta sem dono e so ruido." },
      { topic: "auth.log e brute force.", text: "Em Linux, /var/log/auth.log (ou journalctl) registra tentativas de SSH. Padroes de 'Failed password' repetidos de um IP sao brute force — o sinal classico que um SOC deve pegar em minutos. fail2ban e Lyns automatizam o bloqueio; detectar e o primeiro passo de 'blue'." },
      { topic: "NIST 800-61.", text: "O NIST Special Publication 800-61r2 e o livro de regras de tratamento de incidentes: preparacao, deteccao/analise, contenção/erradicação/recuperacao, e 'lessons learned'. Ele define que resposta e um processo documentado, nao ad-hoc. E a referencia basica para montar um SOC e um runbook." },
      { topic: "Triage.", text: "Triagem e o filtro rapido: o alerta e verdadeiro (True Positive), falsje (False Positive), ou indecidivel? Classificar em segundos evita sobrecarga (alert fatigue). SANS e MITRE recomendam matrizes de severidade (baixa/media/alta/critica) e runbooks de triagem por tipo de alerta." },
      { topic: "Runbook.", text: "Runbook e o passo-a-passo documentado de como responder a um tipo especifico de alerta (ex: 'SSH brute force de IP X'). Sem runbook, a resposta depende de quem esta de plantao e vira inconsistente. Um bom runbook tem gatilho, passos de contenção, comando de remediacao e contato de escalonamento." }
    ],
    "blue/s2": [
      { topic: "Pipeline ingest.", text: "SIEM (Security Information and Event Management) nasce de um pipeline: agentes (Filebeat/Winlogbeat) coletam logs -> transportam (Kafka/Redis) -> parseiam/normalizam -> armazenam em indice. A Elastic ('Elastic SIEM') usa Elasticsearch como motor de busca e o padrao ECS (Elastic Common Schema) para normalizar campos de fontes diferentes. Sem normalizacao, vc nao cruza eventos." },
      { topic: "Elasticsearch+Kibana.", text: "Elasticsearch e um motor de busca distribuido (Lucene) que indexa documentos JSON; Kibana e a UI para visualizar e criar dashboards/alertas. Juntos formam o 'ELK/Elastic Stack'. A doc oficial de Elastic SIEM explica como mapear eventos em deteccoes (rules) e casos (cases). E a base open-source de muitos SOCs." },
      { topic: "Ingest pipelines.", text: "Ingest pipelines (Logstash ou Elasticsearch ingest node) transformam o log bruto antes de indexar: parsear timestamp, extrair campos, geoip, remover ruido. Sem pipeline, voce indexa texto ilegivel e a busca fica lenta. A doc do Elasticsearch tem processadores (grok, dissect, date) para isso." },
      { topic: "Index patterns.", text: "No Kibana, um Index Pattern diz quais indices (ex: filebeat-*) compoem uma 'tabela' pesquisavel e quais sao os campos de tempo. Sem ele, nao ha dashboard nem Discover. E a ponte entre o dado bruto e a visualizacao." },
      { topic: "Dashboards.", text: "Dashboard nao e enfeite: e como o analista ve o estado do ambiente (logins falhos por pais, erros 4xx, picos de CPU). A doc do Kibana ensina Lens e TSVB para construir visualizacoes que responde uma pergunta de seguranca. Grafico sem pergunta e ruido." },
      { topic: "Alerting.", text: "Alerting transforma busca em acao: uma regra (ex: 'mais de 50 Failed password em 5 min de 1 IP') dispara notificacao. A doc de Elastic SIEM tem 'detection rules' baseadas em MITRE ATT&CK. Regra sem destino (quem recebe) e alerta perdido." }
    ],
    "blue/s3": [
      { topic: "Hunting com hipóteses.", text: "Threat hunting e proativo: parte de uma hipotese ('ha beaconing de C2?') e procura evidencia nos logs, ao contrario do alerta passivo. O SANS e a comunidade de hunt defendem o 'hunter mindset': voce assume que ja foram comprometidos e procura o indicador. MITRE ATT&CK serve de catalogo de taticas para guiar a hipotese." },
      { topic: "IR: conter/erradicar.", text: "Incident Response (NIST 800-61): Preparation -> Detection&Analysis -> Containment -> Eradication -> Recovery -> Lessons Learned. Conter = parar o sangramento (isolar host, bloquear IP); erradicar = remover o root cause (persistencia, credencial roubada); recovery = restaurar com seguranca. Pular erradicacao faz o atacante voltar." },
      { topic: "Playbooks.", text: "Playbook e a automacao do runbook: uma resposta estruturada por tipo de incidente, com gatilhos e acoes. CISA e SANS recomendam playbooks por cena (phishing, ransomware, DDoS). Diferente de runbook (manual), o playbook pode ser orquestrado (SOAR) para agir em segundos." },
      { topic: "Lessons learned.", text: "A etapa final do NIST 800-61: depois do incidente, documenta-se o que falhou, o que funcionou e o que mudar. Sem 'lessons learned', o mesmo ataque acerta de novo. E o feedback loop que melhora deteccao e processo." },
      { topic: "MITRE-based.", text: "Mapear deteccao e resposta em MITRE ATT&CK (taticas como Initial Access, Execution, Persistence) permite medir cobertura: 'detectamos X% das taticas?'. O framework e a linguagem comum entre blue e red. D3FEND e o espelho defensivo." },
      { topic: "Automação.", text: "Automatizar resposta (SOAR) reduz MTTR: ao detectar IP malicioso, um playbook bloqueia no firewall e revoga a sessao automaticamente. Mas automacao sem teste vira perigo (bloqueio falso). A CISA recomenda 'orquestrar o manual primeiro, automatizar depois'." }
    ],
    "blue/s4": [
      { topic: "CIS Benchmark.", text: "O CIS Benchmarks (Center for Internet Security) e o catalogo de hardening por sistema (Linux, Windows, Docker, Kubernetes) com niveis de perfil (L1/L2). Cada item tem 'razao' e comando de verificacao. Seguir CIS e a forma mais barata de reduzir superficie de ataque antes de um comprometimento." },
      { topic: "SSH hardening.", text: "SSH e a porta de entrada mais atacada. Hardening: desabilitar root login (PermitRootLogin no), so chaves (PasswordAuthentication no), trocar porta, e fail2ban para brute force. A doc do OpenSSH e o CIS SSH Benchmark detalham cada parametro. Sem isso, o servidor e descoberto e testado em minutos." },
      { topic: "Firewall default-deny.", text: "Principio de menor privilegio na rede: bloquear tudo e abrir so o necessario (default-deny). Com nftables/iptables, a regra de saida tambem importa (egress filtering impede exfiltracao/C2). Um firewall mal configurado (allow-all) e a porta aberta para o atacante." },
      { topic: "Patches.", text: "A maioria dos comprometimentos explora CVEs com patch disponivel ha meses. Uma politica de patch (frequencia por severidade) fecha a porta mais batida. O NIST e o CISA Known Exploited Vulnerabilities (KEV) listam o que patchar primeiro. 'Patch Tuesday' existe por isso." },
      { topic: "lynis.", text: "Lynis e um auditor de hardening open-source: varre o sistema e pontua conforme CIS/STIG, apontando o que esta fraco (permissoes, servicosem uso). Rodar lynis e o 'check-up' rapido de um SysAdmin defensivo. A saida ja vem com remediacao sugerida." },
      { topic: "Política.", text: "Hardening sem politica nao sobrevive: documenta-se o baseline (CIS L1), a frequencia de patch e a revisao. SANS e ISO 27001 exigem politica escrita. Sem politica, cada admin faz do seu jeito e a superficie fica desigual." }
    ],
    "blue/s5": [
      { topic: "Princípios.", text: "Forensia digital tem pilares: nao alterar a evidencia (trabalhar sobre imagem, nao o original), cadeia de custodia e reprodutibilidade. A SANS (FOR508/DFIR) e a referência. Sem esses principios, a evidencia e inadmissivel e a investigacao e contestavel." },
      { topic: "Imagem de disco.", text: "A coleta correta e um hash (sha256) do disco inteiro via dd ou ferramenta forense, nao copiar arquivos. A imagem preservedata de metadados e espaco nao alocado. A doc da SANS ensina 'imaging before analysis'. Sem hash, nao prova que a copia e fiel." },
      { topic: "Timeline plaso.", text: "Plaso (log2timeline) gera uma 'super-timeline' unificando eventos de varios artefatos (MFT, logs, registro). A analise de timeline e como responder 'o que aconteceu e quando?'. E a ferramenta padrao de DFIR citada em cursos SANS." },
      { topic: "Artefatos.", text: "Artefatos sao restos digitais: MFT (Windows), bash_history, .bashrc, logs, prefetch, registro. Cada um conta uma parte da historia. Autopsy e a UI open-source para analisar. Saber onde olhar e o diferencial do analista forense." },
      { topic: "Volátil.", text: "Dados volateis (RAM, conexoes de rede, processos) somem ao desligar. A coleta volatil (avml para RAM, netstat) vem ANTES da imagem de disco. A SANS ensina a ordem de volatilidade (POMP/memory first). Perder a RAM e perder o malware em memoria e as chaves." },
      { topic: "Relatório.", text: "O entregavel da forense e o relatorio: cadeia de custodia, metodologia, evidencia (hashes), linha do tempo e conclusao. Sem relatorio claro, a investigacao nao serve para resposta ou processo. A estrutura segue SANS/ISO 27037." }
    ],
    "blue/s6": [
      { topic: "IOC o que é.", text: "Indicator of Compromise (IOC) e a 'pegada' de um ataque: hash de malware, IP/C2, dominio, regex de log. O MITRE e a Mandiant definem IOCs como artefatos observaveis. E a unidade de troca de inteligencia entre equipes (MISP). Sem IOC, cada um reinventa a deteccao." },
      { topic: "YARA rules.", text: "YARA ('o antivirus do analista') descreve padroes de malware por strings/regexices/condicoes. A doc oficial (yara.readthedocs.io) ensina a escrever regras que casam familias de amostras. É como detectar variacoes de um mesmo malware sem ter o hash de cada um. Usado em EDR e threat hunting." },
      { topic: "Sandbox.", text: "Sandbox e o ambiente isolado (VM sem rede) onde se executa malware para observar comportamento (chamadas de sistema, conexoes, persistencia). Cuckoo/ANY.RUN sao exemplos. A observacao de comportamento (e nao so assinatura) e o que pega malware novo. Nunca fora de isolamento." },
      { topic: "EDR na teoria.", text: "EDR (Endpoint Detection and Response) monitora o endpoint em tempo real (processos, rede, arquivos) e aplica deteccao comportamental + resposta remota. Diferente de AV (assinarura), o EDR usa telemetria e ML. A teoria (MITRE ATT&CK mappings) e o que separa 'detectar' de 'so avisar'." },
      { topic: "Quarentena.", text: "Quarentenar e isolar o arquivo/host comprometido para impedir propagacao, sem destruir a evidencia. Em lab, isso e 'desconectar da rede mas manter o host para analise'. A resposta correta preserva forense." },
      { topic: "Threat intel.", text: "Threat Intelligence (MISP, STIX/TAXII) e o ecossistema de compartilhar IOCs/attribution entre organizacoes. A CISA e o MITRE lideram feeds. Consumir intel atualiza suas YARA e regras. Sem intel, voce joga contra ataques ja mapeados por outros." }
    ],
    "blue/s7": [
      { topic: "VLANs.", text: "VLAN (802.1Q) segmenta a rede em dominios broadcast logicos: separar IoT, servidores e usuarios limita o movimento lateral do atacante. A doc da Cisco e do Arch (network configuration) ensina a criar trunk/access. Segmentacao e o 'least privilege' na camada 2." },
      { topic: "IDS/IPS.", text: "IDS detecta (alert), IPS bloqueia (drop). Suricata e Snort sao os motores open-source de regras (Emerging Threats). A doc do Suricata explica rules com 'alert tcp ...'. IDS/IPS na borda e o 'radar' do blue antes do host ser tocado." },
      { topic: "Suricata.", text: "Suricata e um IDS/IPS multithread que inspeciona trafego e aplica regras Emergons Threats + proprias, emitindo alertas EVE (JSON) para o SIEM. A doc oficial detalha af-packet e regras. Diferente de sniffer, ele age com base em assinatura/comportamento." },
      { topic: "Mirroring.", text: "SPAN port (mirror) copia o trafego de uma interface para o sensor de IDS sem afetar a rede. Sem mirror, o IDS nao 've' o trafego. A doc de switches explica configurar um port-mirror para o sensor Suricata." },
      { topic: "DNS sinkhole.", text: "DNS sinkhole redireciona dominios maliciosos (C2) para um IP controlado, cortando o comando do malware. E uma das defesas mais baratas contra botnets. Em lab, voce aponta o DNS para um sinkhole e vê o que tenta ligar para onde." },
      { topic: "Egress filtering.", text: "Egress filtering (nftables/iptables na saida) so libera o que e legitimo (proxy, DNS, atualizacoes). Bloquear saida arbitraria impede exfiltracao e C2. A maioria esquece a saida; o atacante conta com isso." }
    ],
    "blue/s8": [
      { topic: "Princípio menor privilégio.", text: "Menor privilegio: cada conta/processo tem so o necessario. E o fundamento do NIST 800-53 (AC-6) e da seguranca de identidade. Violar isso e o que faz um comprometimento virar dominio comprometido. Aplicar: sem sudo amplo, sem servico como root." },
      { topic: "MFA.", text: "MFA (Multi-Factor Authentication) adiciona segundo fator (TOTP, FIDO2). O NIST 800-63B recomenda MFA forte (FIDO2 sobre SMS). MFA quebra a maioria dos ataques de credencial vazada. Sem MFA, senha vazada = acesso." },
      { topic: "RBAC.", text: "RBAC (Role-Based Access Control) associa permissoes a papeis (admin, dev, leitor), nao a usuarios. Facilita revisao e escala. NIST 800-53 (AC-2) e o padrao. Sem RBAC, permissao vira caos e ninguem sabe quem pode o que." },
      { topic: "SSO na teoria.", text: "SSO (SAML/OIDC) centraliza autenticacao: um login, varias apps, com politica unica de MFA e revogacao. A teoria (OIDC spec) reduz superficie de senha espalhada. Risco: virar 'single point of failure' — por isso exige MFA e monitoramento." },
      { topic: "Revogação.", text: "Revogar acesso (offboarding) tem que ser imediato: conta morta e a porta que atacantes e ex-funcionarios usam. NIST 800-53 (AC-2) exige processo de desprovisionamento. Um 'processo de revogacao' documentado fecha essa porta." },
      { topic: "Auditoria.", text: "Auditoria de acessos (ultimo login, contas inativas, permissoes) e como voce descobre contas zombie e excesso de privilegio. ISO 27001 e NIST recomendam revisao periodica. Sem auditoria, o acumulo de acesso vira risco silencioso." }
    ],
    "blue/s9": [
      { topic: "3-2-1 backup.", text: "Regra 3-2-1: 3 copias, 2 midias diferentes, 1 offsite. E o baseline de resilienta contra ransomware e falha. A doc da Veeam e da AWS resume isso. Sem offsite/imutavel, ransomware cifra o backup junto e voce perde tudo." },
      { topic: "Teste de restore.", text: "Backup que nao foi restaurado e so uma esperanca. O NIST 800-34 (Contingency Planning) exige testar restore periodicamente. Muitos descobrem o backup corrompido no dia do sinistro. Testar e o que separa backup de ilusao." },
      { topic: "RTO/RPO.", text: "RPO (Recovery Point Objective) = quanta perda de dados tolera (ex: 1h). RTO (Recovery Time Objective) = quanto tempo para voltar. Esses numeros guiam tecnologia (snapshot vs backup) e custo. ISO 22301 e a base de continuidade." },
      { topic: "Replicação.", text: "Replicacao (warm standby, DB streaming) reduz RTO: um secundario ja esta quase em dia. Diferente de backup (ponto no tempo), replicacao e continuidade. A doc do Postgres (streaming replication) e do Render explicam. Sem replicacao, queda vira horas de parada." },
      { topic: "DR plan.", text: "Disaster Recovery Plan documenta como recuperar (passos, donos, recursos). O NIST 800-34 e o template. Sem DR plan escrito, a recuperacao vira panico. Ele deve ser testado (tabletop) e nao so guardado." },
      { topic: "Tabletop.", text: "Tabletop exercise e uma simulacao em sala (sem sistema real) do plano de DR/IR: 'e ransomware, o que fazemos?'. A CISA recomenda tabletop para validar processos sem risco. E o 'ensaiar o desastre' barato." }
    ],
    "blue/s10": [
      { topic: "Maturidade.", text: "Maturidade de SOC (SANS, modelo de 5 niveis) vai de 'reacao ad-hoc' a 'deteccao preditiva/caçada'. Medir maturidade evita achar que esta protegido quando nao esta. E a resposta a 'somos maduros em seguranca?'." },
      { topic: "MTTD/MTTR.", text: "MTTD (Mean Time To Detect) e MTTR (Mean Time To Respond) sao as metricas de ouro: quanto demora para ver e para conter. Reduzi-las e o objetivo de um SOC. Grafana/Elastic medem. Sem metrica, nao se sabe se melhorou." },
      { topic: "Cobrir MITRE.", text: "Cobertura MITRE ATT&CK = percentual de taticas/tecnicas com deteccao. Um grafico de cobertura mostra onde ha buraco (ex: sem deteccao de 'Persistence'). E como o blue mede 'o que o red pode fazer que eu nao vejo'." },
      { topic: "Dashboards.", text: "Dashboard de alertas (Grafana/Kibana) por severidade, MTTR e cobertura e o 'painel do carro' do SOC. Sem visibilidade, o time opera no escuro. A doc do Grafana ensina paineis de SLA." },
      { topic: "Treino.", text: "CTF interno e game day mantem o time afiado e validam playbooks. SANS e MITRE recomendam treino continuo. Time sem treino trava no incidente real. Praticar e o que transforma runbook em reflexo." },
      { topic: "Cultura.", text: "Cultura de seguranca (sem culpa em incidente, reportar cedo) e o fator humano que decide se o SOC funciona. ISO 27001 e o 'human firewall'. Cultura tóxica faz o problema ser escondido ate virar crise." }
    ],

    "ai/s1": [
      { topic: "Tokens e janela.", text: "LLMs processam texto em tokens (pedacos de palavras, ~4 chars em PT/EN). A 'janela de contexto' (ex: 128k tokens) e o limite de memoria de uma conversa. A doc da Anthropic e do OpenRouter explica custo por token. Estourar a janela trunca o historicos e o modelo 'esquece' o inicio. Entender tokens e prever custo e qualidade." },
      { topic: "Few-shot/CoT.", text: "Few-shot (dar 2-3 exemplos no prompt) e Chain-of-Thought (pedir 'pense passo a passo') sao tecnicas de prompt que melhoram raciocinio sem treinar. O paper 'Chain-of-Thought Prompting' (Wei et al., 2022) mostrou ganhos em matematica/logica. Sao o 'kit basica' do engenheiro de prompt." },
      { topic: "System prompts.", text: "System prompt define papel, regras e tom do modelo para toda a conversa. A doc de engenharia de prompt (Anthropic) recomenda ser explicito: 'voce e X, nunca faca Y, use formato Z'. Um system prompt ruim deixa o modelo inconsequente. E a 'constituicao' do agente." },
      { topic: "Custos.", text: "Custo = (input+output tokens) x preco por 1k. Modelos grandes sao caros; small sao baratos e rapidos. A doc do OpenRouter compara USD/token. Converter para BRL e medir 'custo por tarefa' e obrigatorio antes de por em producao. Sem controle, a conta explode." },
      { topic: "Limitações.", text: "LLMs alucinam (inventam factos), nao tem memoria persistida e so 'completam' texto. O paper 'On the Dangers of Stochastic Parrots' (Bender et al., 2021) alerta sobre viesos e falta de compreensao real. Saber o limite e o que separa ferramenta de oracle." },
      { topic: "Comparar modelos.", text: "Comparar modelos com o MESMO prompt e rubricas (nao 'qual e melhor?' subjectivo) e como se escolhe. Benchmarks (MMLU, HumanEval) ajudam, mas o caso real e o que decide. A doc do Anthropic e o 'model card' de cada um guiam o tradeoff custo/qualidade." }
    ],
    "ai/s2": [
      { topic: "Loop observar-agir.", text: "O padrao ReAct (Yao et al., 2022, arxiv 2210.03629) e o nucleo do agente: o modelo pensa (Thought), usa uma ferramenta (Action), observa o resultado (Observation) e repete ate a resposta. Esse loop e o que transforma LLM em agente. Sem loop, e so um chatbot." },
      { topic: "Ferramentas.", text: "Ferramentas sao funcoes que o agente pode chamar (buscar web, rodar codigo, ler arquivo). A doc da Anthropic ('Building Effective Agents') recomenda ferramentas bem tipadas com descricao clara. Ferramenta mal descrita = modelo nao usa ou usa errado." },
      { topic: "Memória.", text: "Memoria e como o agente lembra entre passos/turnos: em arquivo (sqlite/JSON), em resumo ou em vetor. Sem memoria, cada chamada e amnesica. A doc do Hermes e de frameworks mostra persistir contexto. Memoria mal gerenciada estoura a janela." },
      { topic: "Limite passos.", text: "Limitar o numero de passos (ex: 20) evita loops infinitos e custo descontrolado. A doc da Anthropic recomenda 'bounded steps'. Sem limite, um agente pode girar em circulo gastando tokens. E o 'circuit breaker' do agente." },
      { topic: "Framework leve.", text: "Frameworks (LangGraph, AutoGen, Hermes) orquestram o loop, ferramentas e memoria. A doc do LangGraph explica grafos de estado. Mas 'leve' (sem overengineering) e a recomendacao da Anthropic: comecar simples e so adicionar complexidade quando necessario." },
      { topic: "Self-verify.", text: "Self-verify e o agente conferir o proprio resultado (ex: rodar o teste que ele mesmo escreveu). O paper 'Self-Consistency' (Wang et al., 2022) e tecnicas de verificacao mostram que checar melhora confiabilidade. Um agente que nao confere comete erro silencioso." }
    ],
    "ai/s3": [
      { topic: "Papéis.", text: "Multi-agente divide trabalho por papel (pesquisador, codificador, revisor), como uma equipe. O AutoGen (Microsoft) e o CrewAI implementam isso. Papel claro evita que um agente tente fazer tudo mal. A doc da CrewAI detalha 'agent role + goal + backstory'." },
      { topic: "Supervisor.", text: "Supervisor e o agente que roteia tarefas para os outros (switch). A doc do LangGraph (supervisor pattern) explica o 'handoff'. Sem supervisor, agentes nao sabem quem faz o que e se sobrepoem ou travam." },
      { topic: "Contratos.", text: "Contratos sao o formato de mensagem entre agentes (JSON com campos definidos). Sem contrato, a comunicacao vira texto solto e erro. A doc da Anthropic recomenda saidas estruturadas (schema) para que um agente consuma o de cima." },
      { topic: "Guardrails.", text: "Guardrails limitam custo/tempo (kill apos N) e validam saida. O OWASP LLM Top 10 (LLM01 Prompt Injection, LLM06 Excessive Agency) lista riscos de agentes descontrolados. Sem guardrail, um agente com ferramenta pode fazer estrago." },
      { topic: "Timeouts.", text: "Timeout por agente/etapa impede que um passo travado paralise o sistema. A doc de orquestracao (LangGraph) usa interrupt/human-in-loop. Sem timeout, o 'loop observar-agir' vira negacao de servico a si mesmo." },
      { topic: "Quando vale.", text: "Multi-agente so vale quando o problema e decompravel e paralelizavel. O paper da Anthropic ('Building Effective Agents') diz que mono-agente simples resolve 90% dos casos. Usar multi sem necessidade e complexidade que nao paga." }
    ],
    "ai/s4": [
      { topic: "Chunking.", text: "Chunking e dividir documentos em pedacos (ex: 512 tokens com sobreposicao) para indexar e recuperar. A doc do Chroma e do LangChain explica que chunk ruim = recuperacao ruim. Muito grande estoura janela; muito pequeno perde contexto. E o passo que decide a qualidade do RAG." },
      { topic: "Embeddings.", text: "Embedding e um vetor (lista de numeros) que representa o 'significado' de um texto; textos parecidos tem vetores proximos (cosseno). A doc do SBERT e da OpenAI explica modelos. Sem embedding, busca e por palavra-chave, nao por sentido." },
      { topic: "Vector store.", text: "Vector store (Chroma, FAISS, pgvector) indexa embeddings para busca por similaridade em milhares de docs. A doc do Chroma mosta add/query. E o 'banco de dados semantico' do RAG. Substituir SQL por vizinho mais proximo." },
      { topic: "Pipeline.", text: "Pipeline RAG: ingerir -> chunk -> embed -> armazenar -> ao perguntar, embed a pergunta -> busca top-k -> injeta no prompt do LLM. O paper 'Retrieval-Augmented Generation' (Lewis et al., 2020, arxiv 2005.11401) e a origem. Sem pipeline, o LLM alucina em vez de citar." },
      { topic: "Avaliar.", text: "Avaliar RAG com precisao@k (quantos dos top-k sao relevantes) e resposta correta (RAGAS, faithfulness). A doc do RAGAS explica metricas. Sem avaliacao, voce acha que funciona e entrega alucinacao para o usuario." },
      { topic: "Precisão@k.", text: "Precision@k = (relevantes nos top-k) / k. E a metrica de 'dos k documentos que trouxe, quantos eram bons?'. A literatura de IR (Manning, Introduction to Information Retrieval) usa isso. Monitorar precision@3 guia ajuste de chunk/embed." }
    ],
    "ai/s5": [
      { topic: "Quando FT vs RAG.", text: "Fine-tuning adapta o estilo/comportamento do modelo a um dominio; RAG injeta conhecimento factual sem retreinar. O guia da OpenAI e o paper de RAG deixam claro: use RAG para 'saber factos', FT para 'falar como'. FT caro e nao atualiza conhecimento sozinho." },
      { topic: "Dataset.", text: "Dataset de FT sao pares (input, output) de qualidade, nao quantidade. A doc da OpenAI recomenda 50-100 exemplos bons e curados. Dataset ruim = modelo 'memoriza lixo'. Qualidade de dataset decide o ganho." },
      { topic: "Split.", text: "Split treino/validacao/teste evita overfit e vazamento (teste deve ser invisivel no treino). A doc do sklearn e do PEFT explicam holdout. Sem split, voce mede o modelo treinado, nao o generalizavel." },
      { topic: "Métricas.", text: "Metricas de FT: perda de validacao, accuracy/eval no teste cego, e comparacao base vs ajustado. O lm-evaluation-harness (EleutherAI) e o padrao de benchmark. Sem metrica cega, 'melhorou' e opiniao." },
      { topic: "Overfit.", text: "Overfit e quando o modelo decora o treino e falha no novo. Sinais: perda de treino cai mas de validacao sobe. Regularizacao/LoRA com rank baixo ajudam. A doc da PEFT (HuggingFace) explica LoRA. Sem vigiar, voce entrega um modelo que 'sabe o exemplo mas nao o conceito'." },
      { topic: "Red flags.", text: "Red flags de FT: ganho so em frases do dataset, queda em tarefas gerais, custo alto sem ganho de negocio. A cultura de 'eval honesto' (OpenAI) manda reportar o que NAO melhorou. Esconder red flag e o erro classico." }
    ],
    "ai/s6": [
      { topic: "Prompt injection.", text: "Prompt injection e quando dados externos (web, CSV) contem instrucoes que sequestram o agente ('ignore o anterior e...'). O paper 'Prompt Injection' (Greshake et al., 2023, arxiv 2302.12173) e o OWASP LLM01 mostram que e o risco #1 de LLM. Nao tem 'patch unico'; mitiga-se com separar dados de instrucao e validar saida." },
      { topic: "Validação de saída.", text: "Validar a saida contra um schema (JSON) antes de agir evita que o modelo entregue formato quebrado ou comando perigoso. A doc da Pydantic e do OWASP LLM06 recomendam saida estruturada + allowlist. Sem validacao, agente com ferramenta e arma." },
      { topic: "Sandbox.", text: "Sandbox (container sem rede, sem privilegio) isola a execucao de codigo/acao do agente. Sem sandbox, 'rode este comando' vira RCE na sua maquina. A pratica de 'execute em container efemero' e o minimo para agentes que geram codigo." },
      { topic: "Segredos.", text: "Segredos (API keys) FORA do codigo, em env/secret manager. O OWASP LLM e a boa pratica geral dizem: nunca hardcode. Um agente que loga o prompt podevazar um token se ele estiver no codigo. Separar segredo de contexto." },
      { topic: "Rate limit.", text: "Rate limit por usuario (dict de contagem ou token bucket) impede abuso e custo. A doc de APIs e o OWASP LLM04 (Model Denial) recomendam limite. Sem rate limit, um loop ou usuario malvado derruba ou fature a conta." },
      { topic: "Logs.", text: "Log de chamadas (prompt, modelo, tokens, resposta) e auditoria e debug. Sem log, voce nao sabe o que o agente fez nem o custo. A doc de observabilidade (OpenTelemetry) aplica-se a agentes tambem." }
    ],
    "ai/s7": [
      { topic: "Espaço vetorial.", text: "Embeddings vivem num espaco vetorial onde 'perto' = 'parecido'. A intuição geométrica (distância) e o que faz busca semantica funcionar. A doc do SBERT e o paper de Word2Vec (Mikolov et al., 2013) sao a base. Entender o espaco e entender por que 'rei' e proximo de 'rainha'." },
      { topic: "Cosseno.", text: "Similaridade de cosseno mede o angulo entre vetores (1 = identico, 0 = ortogonal, -1 = oposto), independente do tamanho. A doc do sklearn (cosine_similarity) e a literatura de IR usam isso. E a metrica padrao de RAG/recuperacao." },
      { topic: "Normalizar.", text: "Normalizar (L2) os vetores faz o cosseno ser consistente. Sem normalizar, vetor grande 'vence' por magnitude, nao sentido. A doc do SBERT recomenda normalize_embeddings. Detalhe tecnico que muda o resultado." },
      { topic: "Distâncias.", text: "Alem de cosseno, ha euclidiana e Manhattan; cada uma serve a um tipo de dado. A doc do FAISS compara metricas e indices (IVF, HNSW) para busca rapida em milhoes de vetores. Escolher metrica/index e o que faz RAG escalar." },
      { topic: "Clustering.", text: "Clustering (k-means) agrupa documentos por similaridade para descobrir topicos. A doc do sklearn explica. Em RAG, cluster ajuda a dedup e a entender a cobertura do corpus. E 'ver sem rotular'." },
      { topic: "Visualizar.", text: "Reduzir dimensao (PCA, UMAP) para 2D/3D e visualizar como os documentos se agrupam. A doc do UMAP explica. Visualizar ajuda a detectar cluster vazio (conteudo faltando) ou ruido. 'Um grafico vale mais que a matriz'." }
    ],
    "ai/s8": [
      { topic: "O que avaliar.", text: "Avaliar LLM exige definir o que conta como 'bom': corretude, formato, seguranca, custo. A doc do RAGAS e do G-Eval (Liu et al., 2023, arxiv 2303.14287) listam dimensoes. Sem definir, metrica e vaidade." },
      { topic: "Golden set.", text: "Golden set e um conjunto fixo de casos (20-50) com resposta esperada, para testar cego e comparar versoes de prompt/modelo. A cultura de eval (OpenAI, Anthropic) usa isso como 'teste de regressao de prompt'. Sem golden set, voce nao sabe se piorou." },
      { topic: "LLM-as-judge.", text: "LLM-as-judge usa um modelo para avaliar a saida de outro (com rubrica). O paper G-Eval formaliza isso. E barato e escala, mas tem viés (prefere texto longo); usado com human eval de amostra. Sem validacao, judge vira eco." },
      { topic: "Human eval.", text: "Human eval (nota de pessoa em amostra) e o chao de verdade contra vies de LLM-judge. A boa pratica (Anthropic) combina judge automatico + humano em amostra. So judge automatico pode mascarar problema sistemico." },
      { topic: "Regressão.", text: "Regressao de eval: rodar o golden set em cada mudanca de prompt/modelo e comparar. Se piorou, nao sobe. A doc de CI aplica-se a prompts tambem. Sem regressao, 'melhoria' e so na sua cabeca." },
      { topic: "Custo x qualidade.", text: "Medir razao custo por acerto: modelo caro que acerta 2% a mais pode nao valer. A doc do OpenRouter e o 'unit economics' de agentes. Sem essa conta, voce otimiza qualidade que o usuario nao paga." }
    ],
    "ai/s9": [
      { topic: "REPL do agente.", text: "REPL (Read-Eval-Print Loop) do agente e ele gerar codigo, executar e ler o erro num loop. A doc do Code Interpreter (OpenAI) e do Hermes descrevem isso. E como o agente 'aprende fazendo'. Sem capturar o erro, ele nao corrige." },
      { topic: "Validar antes.", text: "Validar o codigo (sintaxe, schema de entrada) ANTES de executar evita comando destrutivo. A pratica de 'sandbox + allowlist de comandos' e o minimo. Sem validar, o agente roda 'rm -rf' se o prompt sugerir." },
      { topic: "Capturar erro.", text: "Capturar traceback e devolver ao modelo para ele ajustar (self-correct). O loop ReAct aplica isso. Sem capturar, o erro some e o agente repete o erro. 'Erro e dado de treino do agente'." },
      { topic: "Limitar escopo.", text: "Limitar escopo (so leitura, so pasta tmp, so linguagem X) impede o agente de tocar o que nao deve. A doc de seguranca de agentes recomenda 'least privilege de execucao'. Sem limite, 'gere codigo' vira 'gere e rode qualquer coisa'." },
      { topic: "Idempotente.", text: "Comandos idempotentes (rodar de novo da o mesmo resultado) sao seguros para agentes que podem repetir. A cultura de infra (idempotencia) aplica-se a agentes tambem. Sem idempotencia, retry vira duplo efeito." },
      { topic: "Revisar.", text: "Revisar o diff (humano ou outro agente) antes de aplicar e o 'code review' do agente. A doc da Anthropic recomenda human-in-the-loop para acoes de alto impacto. Sem revisao, erro de modelo vira commit ruim." }
    ],
    "ai/s10": [
      { topic: "API do agente.", text: "Expor o agente via API (FastAPI) desacopla dele do CLI e permite integrar. A doc do FastAPI ensina. Um agente em producao e um servico, nao um script. Sem API, nao escala nem monitora." },
      { topic: "Fila/async.", text: "Fila (Celery/RQ) e async evitam que requisicoes longas (agente pensando) travem o servidor. A doc do FastAPI (BackgroundTasks) e do Celery explica. Sem fila, uma tarefa lenta derruba as outras." },
      { topic: "Observabilidade.", text: "Observabilidade de agentes = tracar cada chamada de LLM (tokens, latencia, custo), erros e saida. OpenTelemetry e a doc de observabilidade aplicam-se. Sem trace, voce nao sabe onde o custo ou o bug esta." },
      { topic: "Rollback.", text: "Rollback de prompt/modelo (versionar e reverter) e o 'deploy seguro' de agentes. A doc de CI/CD aplica-se: se o novo prompt piorou no golden set, volta. Sem rollback versionado, 'melhoria' pode ficar no ar quebrada." },
      { topic: "Custo contínuo.", text: "Custo de agente em producao e recorrente (tokens x chamadas). Alertar quando passar de limite (threshold) e obrigatorio. Sem alerta de custo, a conta vem imprevisivel. 'Agente custa todo dia, nao so no deploy'." },
      { topic: "Humano no loop.", text: "Human-in-the-loop para acoes de alto impacto (enviar email, deploy, delete) e a recomendacao da Anthropic e do OWASP LLM06. Sem humano no loop, agente autonomo vira risco de negocio/seguranca." }
    ],

    "devops/s1": [
      { topic: "Bash pipes.", text: "Pipes (|) conectam a saida de um comando a entrada de outro, formando pipelines de texto. A TLCL (The Linux Command Line) e a base. 'ls | grep | awk' e o superpoder do shell. Sem pipes, voce faz trabalho manual que o shell faz em uma linha." },
      { topic: "Permissões.", text: "Permissoes Unix (rwx, dono/grupo/outros, bits 755) controlam quem le/escreve/executa. A Arch Wiki (File permissions) e a referencia. Entender chmod/chown e o minimo de seguranca e operacao. Permissao 777 e a porta aberta." },
      { topic: "systemd.", text: "systemd e o init moderno que sobe servicos, timers e sockets. A doc do freedesktop e a Arch Wiki explicam unit files. Dominar 'systemctl status/enable' e operar qualquer servidor Linux hoje. systemd e onipresente em distros principais." },
      { topic: "pacman/yay.", text: "pacman (Arch) e o gerenciador oficial; yay e o wrapper do AUR ( repositorio da comunidade). A Arch Wiki detalha '-S, -Syu, -Rns'. Usar AUR bem (e ler o PKGBUILD) e o diferencial de um usuario Arch. Sem atualizar, vulns se acumulam." },
      { topic: "journalctl.", text: "journalctl e o leitor de logs do systemd (substitui syslog). 'journalctl -u nginx -b -f' mostra o log do servico desde o boot, em tempo real. A doc do systemd explica. Sem journalctl, voce caça log em arquivo antigo." },
      { topic: "Aliases.", text: "Aliases (em .bashrc/.zshrc) criam atalhos (ex: 'll'='ls -la'). A TLCL ensina. Pequeno, mas reduz erro e acelera o dia. Um alias de 'rm -i' ou de backup pode salvar de desastre." }
    ],
    "devops/s2": [
      { topic: "Imagem vs container.", text: "Imagem e o 'template' imutavel (camadas); container e a instancia rodando. A doc do Docker explica camadas e copy-on-write. Entender a diferenca e o que faz 'docker build' ser reproduzivel e 'docker run' ser efemero." },
      { topic: "Dockerfile multi-stage.", text: "Multi-stage build separa build de runtime (ex: compila em uma imagem, copia o binario para uma slim). A doc do Docker recomenda para reduzir tamanho e superficie. Sem multi-stage, a imagem carrega o compilador e vira pesada e insegura." },
      { topic: "VMs/CTs.", text: "VM (maquina virtual) emula hardware; CT (container LXC, tipo Proxmox) compartilha kernel — mais leve. A doc do Proxmox (CT vs VM) explica. Escolher CT para isolamento leve e VM para kernel isolado. Cloud-init automatiza o template." },
      { topic: "Thin pools.", text: "Thin provisioning (LVM/ZFS) permite alocar mais 'virtual' que fisico e crescer sob demanda. A doc do Proxmox (storage) explica thin pools. Sem entender, voce either subutiliza ou estoura o disco." },
      { topic: "Rede virtual.", text: "Rede virtual (bridge, vlan no Proxmox/Docker) conecta containers/VMs isoladamente. A doc do Proxmox e do Docker detalha bridges. Isolar em rede e o 'segmentacao' que impede movimento lateral." },
      { topic: "Snapshots.", text: "Snapshot e o estado pontual do disco/VM; rollback restaura. A doc do Proxmox (snapshots) e do libvirt explica. Snapshot antes de mexer e o 'ctrl+z' do sysadmin. Sem snapshot, mudanca ruim vira reinstalacao." }
    ],
    "devops/s3": [
      { topic: "GitHub Actions.", text: "GitHub Actions roda workflows em eventos (push/PR) com jobs/steps. A doc do GitHub explica YAML de workflow. Ter 'pytest no push' e o piso de qualidade. Sem CI, codigo ruim so descobre em producao." },
      { topic: "Secrets.", text: "Secrets no CI sao variaveis criptografadas, nunca no codigo. A doc do GitHub (Encrypted secrets) e a boa pratica geral mandam. Um token hardcoded em repo publico e comprometimento instantaneo. Usar secrets + least scope." },
      { topic: "IaC ansible.", text: "Ansible (YAML, agentless) aplica config em idempotente: rodar de novo da o mesmo estado. A doc do Ansible explica playbooks. IaC tira o 'servidor snowflake' e torna infra reprodutivel. Sem IaC, infra vira manual e divergente." },
      { topic: "Observabilidade.", text: "Observabilidade = metricas + logs + traces (MPM). A doc do Prometheus/Grafana e do OpenTelemetry explica. Sem observabilidade, 'ta lenta' vira adivinhacao. Healthcheck + alerta e o minimo." },
      { topic: "Testes no pipe.", text: "Rodar testes (pytest/ruff) no pipeline bloqueia merge ruim. A doc do GitHub Actions mostra steps de test. Sem teste no pipe, o 'main' quebra sem ninguem ver. 'CI verde e a porta'." },
      { topic: "Rollback.", text: "Rollback de deploy (versao anterior ou blue-green) e o que salva de um deploy ruim. A doc de CI/CD (Octopus, GitHub) recomenda estrategia. Sem rollback, deploy ruim vira intervencao manual." }
    ],
    "devops/s4": [
      { topic: "Prometheus.", text: "Prometheus e o banco de serie temporal que raspa metricas (pull) via endpoints /metrics. A doc oficial explica o modelo de dados e PromQL. E o coracao de observabilidade moderna. Sem Prometheus, voce nao mede latencia/taxa." },
      { topic: "Grafana.", text: "Grafana e a UI que monta dashboards sobre Prometheus/Loki/etc. A doc explica paineis e alertas. Grafana transforma numeros em 'esta tudo bem?'. Sem dashboard, metrica e invisivel." },
      { topic: "Loki.", text: "Loki e o log agregado estilo Prometheus (labels, nao full-text). A doc da Grafana Loki explica. Junto com Prometheus, fecha MPM (metrics+logs). Sem log central, voce caça em cada host." },
      { topic: "OTel.", text: "OpenTelemetry e o padrao aberto para traces/metrics/logs (instrumentacao una). A doc do OTel explica spans e exportadores. Sem OTel, cada ferramenta tem formato proprio e trace vira ilha." },
      { topic: "SLO/SLI.", text: "SLI e a medida real (ex: % requests < 200ms); SLO e a meta (99.5%). A doc do Google SRE (Site Reliability Engineering, livro gratuito) define isso. Sem SLO, 'confiavel' e vago e o time nao sabe onde mirar." },
      { topic: "Alertas.", text: "Alerta deve ser acionavel e raro (alarme, nao ruido). A doc do Google SRE (Alerting) recomenda alertar so quando humano deve agir. Sem disciplina de alerta, 'alert fatigue' faz ignorar o real." }
    ],
    "devops/s5": [
      { topic: "IaaS/PaaS/SaaS.", text: "IaaS (vm crua), PaaS (plataforma gerenciada), SaaS (software pronto). O AWS Well-Architected explica o tradeoff controle vs operacao. Escolher certo evita pagar por gerenciar o que nao precisa." },
      { topic: "Compute/Storage.", text: "Compute (vm/containers) e storage (objeto/bloco) sao os blocos de infra. A doc da Hetzner/AWS detalha tipos. Entender a diferenca (bloco = disco, objeto = S3) e o que cobra cada um. Escolha errada inflaciona a conta." },
      { topic: "VPC.", text: "VPC (Virtual Private Cloud) isola sua rede na nuvem, com sub-redes e roteamento. A doc da AWS/Hetzner explica. Sem VPC bem feita, recursos ficam expostos ou isolados demais." },
      { topic: "Terraform.", text: "Terraform (HashiCorp) declara infra em HCL e a aplica idempotentemente (plan/apply). A doc oficial explica state e modules. Terraform torna infra em codigo versionavel. Sem IaC, infra vira manual e divergente." },
      { topic: "Custo.", text: "Custo de nuvem e por recurso/tempo; calcular mensal antes de subir. A doc do AWS Pricing e do Hetzner mosta calculadoras. Sem prever, a conta surpreende. 'Nuvem barata se voce medir'." },
      { topic: "Responsabilidade.", text: "Modelo de responsabilidade compartilhada: cloud cuida do hipervisor, voce cuida do SO/app/dados. A doc da AWS Well-Architetd e a AWSShared Responsibility resumem. Achar que a nuvem 'e segura sozinha' e o erro comum." }
    ],
    "devops/s6": [
      { topic: "Sub-redes.", text: "Sub-redes (CIDR) dividem a VPC em camadas (publica/privada). A doc da AWS/Hetzner explica. Sub-rede privada para banco e o que impede acesso direto. Sem segmentacao, tudo fica na mesma rede." },
      { topic: "Load balancer.", text: "Load balancer distribui trafego entre instancias (e faz health check). A doc do HAProxy/Nginx e da cloud explica. Sem LB, uma instancia down derruba o servico. LB e o 'divisor de carga'." },
      { topic: "DNS interno.", text: "DNS interno (CoreDNS, Route53 interno) resolve nomes dentro da VPC sem expor a internet. A doc do Kubernetes (CoreDNS) explica. Sem DNS interno, voce acopla tudo a IPs que mudam." },
      { topic: "Firewall de borda.", text: "Firewall de borda (security group, nftables) faz default-deny de entrada. A doc da cloud e do nftables explica regras. Sem borda fechada, a VPC vira alvo. 'So abre o que serve'." },
      { topic: "Peering.", text: "Peering/VPC peering conecta redes sem sair para a internet. A doc da cloud explica. Sem peering, voce expoe trafego interno ou paga transit." },
      { topic: "NAT.", text: "NAT (masquerade) deixa instancias privadas sairem para a internet sem IP publico. A doc do nftables e da cloud explica. Sem NAT, ou tudo tem IP publico (ruim) ou nao atualiza (pior)." }
    ],
    "devops/s7": [
      { topic: "SSH chaves.", text: "SSH por chaves (ed25519) e muito mais seguro que senha. A Arch Wiki (SSH keys) explica gerar e copiar. Somado a MFA, e o padrao de acesso. Senha em SSH e o que brute force quebra." },
      { topic: "Segredos vault.", text: "Vault (HashiCorp) guarda segredos com acesso controlado e auditado, fora do codigo/git. A doc do Vault explica. Sem vault, segredo vira 'arquivo .env commitado' (vazamento). 'Segredo em git e incidente'." },
      { topic: "MFA.", text: "MFA no acesso de infra (SSH com TOTP/FIDO, console com MFA) quebra ataque de credencial. A doc da AWS/Google e o NIST 800-63B recomendam. Sem MFA, acesso vira senha vazada." },
      { topic: "Atualização.", text: "Politica de patch na infra (automacao com ansible/patch manager) fecha CVEs. A CISA KEV lista o que priorizar. Sem atualizar, voce roda software conhecidamente exploitable." },
      { topic: "Auditoria.", text: "Auditoria de acessos (quem entrou, quando, o que fez) via logs de SSH/sudo e vault. A ISO 27001 e o NIST exigem. Sem auditoria, comprometimento interno passa despercebido." },
      { topic: "Least privilege.", text: "Least privilege na infra: cada conta/servico so o necessario, com sudo por comando, nao sudo amplo. A NIST 800-53 (AC-6) e a regra. Sem isso, um usuario comprometido vira root." }
    ],
    "devops/s8": [
      { topic: "Postgres básico.", text: "Postgres e o banco relacional open-source de referencia. A doc oficial (tutorial) explica roles, tabelas, tipos. Dominar SQL e o piso de backend. Sem entender transacao/indice, app lento e dados inconsistentes." },
      { topic: "Índices.", text: "Indice acelera busca (B-tree) mas custa escrita. A doc do Postgres (Indexes) recomenda EXPLAIN para ver se usa. Indice errado/faltando = query em full scan. 'EXPLAIN e o diagnostico'." },
      { topic: "Backup DB.", text: "Backup de DB com pg_dump (logico) ou PITR (WAL). A doc do Postgres (Backup) e o NIST 800-34 mandam testar restore. Sem backup testado, queda de DB e perda de dados." },
      { topic: "Redis cache.", text: "Redis e o store chave-valor em memoria para cache/sessao/fila, com TTL. A doc do Redis explica. Cache errado (sem invalidar) entrega dado velho. 'TTL e a validade do cache'." },
      { topic: "Fila.", text: "Fila (Redis/BullMQ, RabbitMQ) desacopla produtor de consumidor e amortece picos. A doc do RabbitMQ explica. Sem fila, um servico lento derruba o que chama." },
      { topic: "Replicação.", text: "Replicacao (Postgres streaming, Redis replica) da leitura escalavel e failover. A doc oficial explica. Sem replica, um node down tira o servico. 'Replica e seguro de vida'." }
    ],
    "devops/s9": [
      { topic: "SLO/SLI/SLA.", text: "SLI (medida), SLO (meta), SLA (contrato com pena). O livro Site Reliability Engineering (Google, gratuito) define. SRE sem SLO e operar sem alvo. 'Voce so controla o que define'." },
      { topic: "Error budget.", text: "Error budget = 1 - SLO (ex: 0.5% de erro permitido). O SRE book ensina usa-lo para decidir lançar ou estabilizar. Sem error budget, 'estavel' e opinião e nao numero." },
      { topic: "Circuit breaker.", text: "Circuit breaker abre (bloqueia chamada) quando a dependencia falha muito, evitando cascata. A doc de resiliencia (Martin Fowler, 'Circuit Breaker') explica. Sem breaker, um servico lento derruba os que dependem dele." },
      { topic: "Retry/backoff.", text: "Retry com exponential backoff + jitter evita tempestade e permite recuperar. A doc da AWS (Retrying) e do Google SRE recomendam. Sem backoff, retry vira ataque de restart a si mesmo." },
      { topic: "Caos.", text: "Chaos engineering (derrubar VM/dependencia de proposito) prova resiliência. O livro do Netflix e o Gremlin explicam. Sem caos testado, 'e resiliente' e esperanca. 'Teste o desastre'." },
      { topic: "Postmortem.", text: "Postmortem blameless documenta causa raiz e acao, sem culpar. O SRE book e a cultura de confiabilidade exigem. Sem postmortem, o mesmo bug acerta de novo. 'Aprender, nao punir'." }
    ],
    "devops/s10": [
      { topic: "O que é IDP.", text: "Internal Developer Platform abstrai infra (templates, pipelines, catálogo) para o dev self-service. A Platform Engineering (platformengineering.org) e a referencia. IDP tira o 'eu preciso saber de k8s pra subir um serviço'." },
      { topic: "Templates.", text: "Templates (cookiecutter, scaffold) geram serviço com estrutura padrao (CI, docker, helm). A doc do Backstage explica. Sem template, cada dev faz do jeito dele e a base fica inconsistente." },
      { topic: "Golden paths.", text: "Golden path e o 'caminho feliz' suportado pela plataforma (deploy em 1 botao). A doc de Platform Eng recomenda. Sem golden path, o dev contorna a plataforma e cria sombra." },
      { topic: "Self-service.", text: "Self-service (dev cria recurso sem ticket) acelera e tira carga do ops. A doc do Backstage (Software Catalog) explica. Sem self-service, ops vira gargalo de cada provisionamento." },
      { topic: "Catálogo.", text: "Catálogo de serviços (Backstage) documenta dono, deps e status de cada serviço. Sem catálogo, 'quem e dono disso?' vira caos em 50 microservicos." },
      { topic: "Docs.", text: "Docs de onboarding (runbook, README) no proprio IDP fazem o dev produzir no dia 1. A cultura de plataforma exige doc viva. Sem doc, o template gera servico que ninguem sabe operar." }
    ]
  };
  module.exports = { EXPLAIN: EXPLAIN };
})();
