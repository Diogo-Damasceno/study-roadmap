/* Conteúdo de AULA prática por areaId/stageId.
   Estrutura de cada aula:
   { intro, sections:[ {h, steps?, cmd?, code?, note?, risk?} ] }
   Tudo é HTML-escapado na renderização. */
window.RMAP_LESSONS = {

/* ============ PYTHON / s1 ============ */
"python/s1": {
  intro:"Vamos sair do 'veja o que faz' e realmente USAR Python. Abra o terminal e digite `python` (ou `python3`). Você entra no REPL — um prompt interativo onde cada linha é executada na hora. É o seu laboratório rápido de testes.",
  sections:[
    { h:"1. O REPL: seu laboratório ao vivo",
      steps:[
        "Digite `python` e veja o prompt `>>>`.",
        "Teste expressões: `2 + 3`, `10 / 4`, `2 ** 10` (potência).",
        "Veja tipos com `type(3)`, `type('oi')`, `type([1,2])`.",
        "Use `_` para repetir o último resultado (ex.: `10/4` depois `_ * 2`).",
        "Saia com `exit()` ou Ctrl+D."
      ],
      cmd:"$ python\n>>> 2 + 3\n5\n>>> type('oi')\n<class 'str'>\n>>> 2 ** 10\n1024\n>>> exit()",
      note:"O REPL é perfeito para testar uma ideia em 5 segundos antes de colocar num arquivo. Quando o código cresce, passe pro arquivo: `python arquivo.py`."
    },
    { h:"2. Variáveis, tipos e o operador walrus",
      steps:[
        "Crie variáveis: `nome = 'Ana'` e `idade = 20`.",
        "O operador walrus `:=` atribui DENTRO de uma expressão — útil em `while` e compreensões.",
        "Compare: sem walrus você precisaria de uma linha antes; com walrus, faz na hora."
      ],
      code:"# walrus: lê e guarda numa só expressão\nlinha = 'exemplo'\nwhile (dado := input('> ')) != 'sair':\n    print('você digitou:', dado)\n\n# vs sem walrus (mais verboso)\ndado = input('> ')\nwhile dado != 'sair':\n    print(dado)\n    dado = input('> ')",
      note:"Use walrus com moderação — ele deixa o código curto, mas se exagerar fica ilegível. Legibilidade > espertisse."
    },
    { h:"3. Listas, dicionários e compreensões",
      steps:[
        "Lista: `nums = [1,2,3,4,5]`. Acesse por índice: `nums[0]` (1) e `nums[-1]` (5, do fim).",
        "Dicionário: `p = {'nome':'Ana','score':3}`. Acesse `p['nome']`.",
        "Compreensão de lista cria listas filtrando/transformando: `[x*2 for x in nums if x>2]`.",
        "Compreensão é mais rápida e idiomática que um `for` append."
      ],
      code:"nums = [1, 2, 3, 4, 5]\n\n# dobra só os maiores que 2\ndobrados = [x * 2 for x in nums if x > 2]\nprint(dobrados)            # [6, 8, 10]\n\n# dicionário a partir de lista\nquadrados = {x: x*x for x in range(1, 4)}\nprint(quadrados)          # {1: 1, 2: 4, 3: 9}",
      note:"Compreensões também existem para set `{...}` e dict `{...}`. Evite aninhar 2+ delas — aí um loop normal fica mais claro."
    },
    { h:"4. Laços e decisões de verdade",
      steps:[
        "Use `if/elif/else` para ramificar.",
        "Em Python, indentação É sintaxe (4 espaços). Sem indentação, erro.",
        "Loop `for` itera sobre listas; `while` repete enquanto a condição for verdadeira.",
        "Cuidado com `while` infinito: sempre mude a condição DENTRO do loop."
      ],
      code:"for i in range(3):\n    print('repetição', i)\n\nnota = 85\nif nota >= 90:\n    print('A')\nelif nota >= 70:\n    print('B')          # <- este imprime\nelse:\n    print('C')",
      risk:"Loop infinito comum: `while x < 10:` sem nunca incrementar `x`. O terminal trava. Ctrl+C mata. Sempre garanta que a condição vai virar falsa."
    }
  ]
},

/* ============ RED / s1 ============ */
"red/s1": {
  intro:"Aula prática de como MONTAR e USAR um lab isolado para treinar — sem tocar em nada que não seja seu. O foco aqui é infraestrutura legal e operacional, não exploit.",
  sections:[
    { h:"1. Definir escopo e regras (antes de qualquer comando)",
      steps:[
        "Escreva em um arquivo o que é PERMITIDO: quais IPs, qual janela de tempo.",
        "Seu lab = VMs na sua rede interna (ex.: 10.10.10.0/24). Nada de alvo externo.",
        "Faça um 'termo de autorização' assinado por você mesmo (dono do lab)."
      ],
      cmd:"# exemplo de regras-of-engagement (markdown)\\n# Alvo: 10.10.10.0/24 (VMs isoladas no seu lab)\\n# Janela: livre\\n# Proibido: qualquer IP fora dessa faixa",
      risk:"ÉTICO E LEGAL: praticar em sistema que não é seu (sem autorização por escrito) é crime sob a Lei 12.737/12. Use apenas um lab que seja 100% seu. Saída de rede para fora do lab deve ficar desativada/isolada."
    },
    { h:"2. Criar VMs isoladas (via CLI do hipervisor)",
      steps:[
        "Liste os nodes: `qm list` ou `pvesh`.",
        "Clone um template existente (ex.: vm100) para vm101..vm103.",
        "Garanta que as VMs ficam num bridge privado (vmbr1) sem rota pra internet real.",
        "Ligue e confirme o IP com `ping`."
      ],
      cmd:"# clonar template vm100 em vm101 (linked, thin)\\nqm clone 100 101 --name lab-red-101 --full 0\\n# ligar\\nqm start 101\\n# ver status\\nqm status 101",
      note:"O ponto de saída de rede (se houver) deve ser um alvo simulado isolado e autorizado — nunca a internet real."
    },
    { h:"3. Reconhecimento passivo (sem tocar no alvo)",
      steps:[
        "Passivo = coletar sem enviar pacote ao alvo (ex.: ler documentação, metadados).",
        "Dentro do lab, você já 'conhece' o alvo, mas pratique o hábito de mapear serviços.",
        "Use `nmap` só no range do lab."
      ],
      cmd:"# mapear serviços e versões no range do lab (VOCÊ autorizou)\nnmap -sV -p- 10.10.10.0/24\n\n# varredura leve (top 100 portas)\nnmap --top-ports 100 10.10.10.101",
      risk:"Nunca rode `nmap` contra faixas que não são suas. Mesmo varredura 'leve' contra terceiro pode ser interceptada e gerar processo. Mantenha em 10.10.10.0/24."
    },
    { h:"4. Validar isolamento (provar que o lab é seguro)",
      steps:[
        "Confirme que a VM não alcança a internet real: `ping 8.8.8.8` deve falhar.",
        "Confirme que ela alcança só o alvo simulado do lab.",
        "Anote isso no relatório — mostra à banca que você entende escopo."
      ],
      cmd:"# deve FALHAR (lab isolado)\\nping -c1 8.8.8.8\\n# deve FUNCIONAR (alvo simulado do lab)\\nping -c1 10.10.10.110"
    }
  ]
},

/* ============ BLUE / s1 ============ */
"blue/s1": {
  intro:"Aula prática de como LER e ENTENDER logs para detectar um ataque real (SSH brute force). Você vai escrever um script que faz o que um analista de SOC faz no dia a dia.",
  sections:[
    { h:"1. Onde ficam os logs de autenticação",
      steps:[
        "No Linux, autenticação fica em `/var/log/auth.log` (Debian/Ubuntu) ou `/var/log/secure` (RHEL).",
        "Abra com `less` e procure por `Failed password`.",
        "Cada linha tem data, host, processo e a mensagem — essa é a sua matéria-prima."
      ],
      cmd:"# ver falhas de senha em tempo real (tail -f)\nsudo less /var/log/auth.log | grep 'Failed password'\n\n# contar falhas por IP\n grep 'Failed password' /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn",
      note:"`awk '{print $(NF-3)}'` pega o campo do endereço IP na linha do SSH. O `NF` é o número de campos; contar de trás ajuda quando o formato varia."
    },
    { h:"2. Escrever o detector em Python (o que um SOC faz)",
      steps:[
        "Leia o arquivo linha a linha.",
        "Para cada linha com 'Failed password', extraia o IP (regex simples).",
        "Conte falhas por IP num dicionário.",
        "Se um IP passar de N falhas (ex.: 5), marque como suspeito."
      ],
      code:"import re, collections\n\nLOG = '/var/log/auth.log'\nLIMITE = 5\nfalhas = collections.Counter()\n\nwith open(LOG) as f:\n    for linha in f:\n        if 'Failed password' in linha:\n            m = re.search(r'(\d+\\.\\d+\\.\\d+\\.\\d+)', linha)\n            if m:\n                falhas[m.group(1)] += 1\n\nfor ip, n in falhas.items():\n    if n >= LIMITE:\n        print(f'[ALERTA] {ip}: {n} falhas de senha')",
      note:"Rode como `sudo python detector.py` se o log for protegido. Isso é detections-as-code: a mesma lógica que vira uma regra no Kibana (etapa s2)."
    },
    { h:"3. Triage: falso positivo ou real?",
      steps:[
        "Falso positivo: um usuário esqueceu a senha e errou 2x (poucas falhas, IP conhecido).",
        "Real: 50 falhas em 1 minuto vindo de um IP estranho = brute force.",
        "Use contexto (IOC) + volume para decidir.",
        "Documente a decisão no runbook."
      ],
      cmd:"# ver de onde vieram as falhas de um IP suspeito\n grep '10.10.10.50' /var/log/auth.log | head",
      risk:"Não passe por cima de alertas só porque 'deve ser engano'. Valide com dados. Um analista que ignora é pior que um que alerta demais."
    },
    { h:"4. Responder (contenção rápida)",
      steps:[
        "Bloqueie o IP no firewall (dentro do lab).",
        "Se foi sucesso (não só tentativa), revogue a chave/usuário.",
        "Registre o incidente e feche o caso."
      ],
      cmd:"# bloquear IP no lab (nftables)\nsudo nft add rule inet filter input ip saddr 10.10.10.50 drop"
    }
  ]
},

/* ============ AI / s1 ============ */
"ai/s1": {
  intro:"Aula prática de como CONVERSAR com um LLM de forma que ele entregue resultado útil — não papo genérico. Você vai ver system prompt, few-shot e como medir custo de verdade.",
  sections:[
    { h:"1. O básico: prompt, completions e tokens",
      steps:[
        "Um LLM recebe texto e devolve texto (completion). Tudo vira 'tokens' (pedaços de palavras).",
        "Mais tokens na entrada + saída = mais custo. Entrada costuma ser mais barata que saída.",
        "Context window = limite de tokens por vez. Passar do limite = corta ou erro."
      ],
      code:"# chamada mínima via OpenAI-compatible (OpenRouter)\nfrom openai import OpenAI\n\nclient = OpenAI(base_url='https://openrouter.ai/api/v1', api_key='SUA_KEY')\nresp = client.chat.completions.create(\n    model='anthropic/claude-3.5-haiku',\n    messages=[{'role':'user','content':'Explique TCP em 3 frases'}],\n)\nprint(resp.choices[0].message.content)\nprint('tokens usados:', resp.usage.total_tokens)",
      note:"Use variável de ambiente para a key (ex.: `export OPENROUTER_KEY=...`), nunca cole no código. No lab, mantenha em vault/env, nunca em git."
    },
    { h:"2. System prompt: dê um papel e regras",
      steps:[
        "O system prompt define QUEM o modelo é e O QUE pode/deve fazer.",
        "Inclua: papel, tom, formato de saída, restrições.",
        "Sem system prompt, o modelo 'adivinha' o que você quer — inconsistente."
      ],
      code:"messages = [\n  {'role':'system','content':\n    'Você é um tutor de redes para iniciantes. '\n    'Responda em português, máx 3 frases, com 1 analogia. '\n    'Não use jargão sem explicar.'},\n  {'role':'user','content':'O que é subnet mask?'},\n]\nresp = client.chat.completions.create(model='...', messages=messages)",
      note:"System prompt é a alavanca mais barata de qualidade. Troque o papel e veja a resposta mudar completamente para o mesmo user message."
    },
    { h:"3. Few-shot e chain-of-thought",
      steps:[
        "Few-shot = dê 2-3 exemplos do formato desejado antes da tarefa real.",
        "Chain-of-thought (CoT): peça 'pense passo a passo' para problemas lógicos.",
        "CoT melhora muito em matemática/lógica, mas gasta mais tokens."
      ],
      code:"# few-shot: mostre o padrão primeiro\nmessages = [\n  {'role':'user','content':'CSV: a,b\\n1,2 -> JSON?'},\n  {'role':'assistant','content':'{\"a\":1,\"b\":2}'},\n  {'role':'user','content':'CSV: x,y\\n3,4 -> JSON?'},\n]\n# chain-of-thought\nmessages.append({'role':'user',\n  'content':'Quantos dias há em 7 semanas? Pense passo a passo.'})",
      note:"Few-shot funciona como 'calibrar' o modelo. Se a saída fugir do formato, adicione 1 exemplo a mais em vez de rewriter o prompt todo."
    },
    { h:"4. Medir custo de verdade (e converter pra BRL)",
      steps:[
        "Pegue `resp.usage` (prompt_tokens, completion_tokens).",
        "Multiplique pelo preço por 1k tokens do modelo (em USD).",
        "Converta USD→BRL pela taxa de referência (R$ 5,12 em jul/2026).",
        "Compare 2 modelos antes de escolher o 'padrão'."
      ],
      code:"USD_BRL = 5.12\npreco_prompt = 0.00000025   # exemplo: $0.25 / 1M tokens\npreco_out = 0.00000125\n\ndef custo(u):\n    usd = u.prompt_tokens*preco_prompt + u.completion_tokens*preco_out\n    return usd, usd*USD_BRL\n\nusd, brl = custo(resp.usage)\nprint(f'USD ${usd:.6f}  |  BRL R${brl:.4f}')",
      note:"Para apresentar à banca, mostre a derivada do custo: 'a cada 1k chamadas, gasta X'. Isso prova que você pensou em escala, não só no demo."
    }
  ]
},

/* ============ DEVOPS / s1 ============ */
"devops/s1": {
  intro:"Aula prática de shell Linux que você USA todo dia: como mover arquivos com segurança, agendar tarefas e debugar um serviço caído. Comandos reais, não só teoria.",
  sections:[
    { h:"1. Backup incremental com rsync (o comando que salva seus dados)",
      steps:[
        "rsync copia só o que mudou — muito mais rápido que `cp`.",
        "`--link-dest` cria snapshots sem duplicar arquivos (hard links).",
        "Use `-a` (archive) para preservar permissões e `-h` para human-readable."
      ],
      cmd:"# backup diário com snapshot linkado\nrsync -a --delete --link-dest=/backup/ontem /home/usuario/ /backup/hotelho/\n\n# ver diferença antes de copiar (dry run)\nrsync -a --dry-run /origem/ /destino/",
      note:"Hard links deixam vários snapshots ocupando quase o espaço de 1. Mude um arquivo e só ele ocupa bloco novo. Ideal para backups do lab."
    },
    { h:"2. Agendar com systemd timer (sem cron confuso)",
      steps:[
        "Crie um `.service` (o que roda) e um `.timer` (quando roda).",
        "O timer usa sintaxe OnCalendar tipo `daily` ou `*-*-* 09:00:00`.",
        "Habilite com `systemctl enable --now nome.timer`."
      ],
      cmd:"# /etc/systemd/system/backup.service\n[Unit]\nDescription=Backup do lab\n\n[Service]\nType=oneshot\nExecStart=/usr/bin/rsync -a /home/usuario/ /backup/hoje/\n\n# /etc/systemd/system/backup.timer\n[Unit]\nDescription=Backup diario\n\n[Timer]\nOnCalendar=daily\nPersistent=true\n\n[Install]\nWantedBy=timers.target",
      note:"systemd timer é mais robusto que cron: tem `Persistent=true` (roda na próxima boot se o PC estava desligado) e logs integrados via `journalctl`."
    },
    { h:"3. Debugar serviço caído com journalctl",
      steps:[
        "Veja o status: `systemctl status nome.service`.",
        "Veja logs da última boot: `journalctl -u nome.service -b`.",
        "Acompanhe ao vivo: `journalctl -u nome.service -f`.",
        "Erro comum: o caminho no ExecStart está errado ou falta permissão."
      ],
      cmd:"systemctl status backup.service\njournalctl -u backup.service -b --no-pager | tail -30\njournalctl -u backup.service -f",
      risk:"Nunca rode serviço como root se não precisar. Use usuário dedicado e `User=` no [Service]. Root desnecessário = superfície de ataque."
    },
    { h:"4. Aliases e launchers de 1 palavra",
      steps:[
        "Adicione atalhos em `~/.bashrc` para comandos que você repete.",
        "Para projetos, crie um launcher que entra no dir e ativa o venv.",
        "Recarregue com `source ~/.bashrc`."
      ],
      cmd:"# ~/.bashrc\nalias ll='ls -lah'\nalias lab='cd ~/AI/projects/study-roadmap && source .venv/bin/activate'\n\n# depois:\nsource ~/.bashrc\nlab",
      note:"Launchers de 1 palavra economizam tempo e evitam erro de digitar caminhos longos. O skill cli-launchers do Hermes automatiza isso."
    }
  ]
},

/* ============ ENG / s1 ============ */
"eng/s1": {
  intro:"Aula prática de git que muda a qualidade do seu histórico: commits pequenos e significativos, rebase para limpar, e como abrir um PR de feature para um colega colaborar.",
  sections:[
    { h:"1. Commits atômicos (regra do projeto: todo commit tem -)",
      steps:[
        "Commits pequenos: uma ideia lógica por commit, não 'várias coisas de uma vez'.",
        "Misture + e -: ao adicionar, extraia função / remova código morto / trate borda.",
        "Nunca um commit só de + (regra permanente): sempre há um refactor/rename/remoção legítimo.",
        "Mensagem no padrão: `tipo: resumo curto`."
      ],
      cmd:"# exemplo de 2 commits de uma mesma feature\ngit add src/parse.py && git commit -m 'refactor: extrair funcao validar_cpf de parse()'\ngit add tests/ && git commit -m 'test: cobrir borda CPF com digito零'",
      note:"Histórico limpo = code review fácil + bisect preciso. Se precisar 'desfazer', `git revert <hash>` cria commit de volta (não reescreve história pública)."
    },
    { h:"2. Rebase interativo (limpar antes de mandar)",
      steps:[
        "Use `git rebase -i HEAD~n` para juntar (squash) ou reordenar commits locais.",
        "`pick` mantém, `squash` junta no anterior, `reword` muda mensagem.",
        "Só reescreva histórico que AINDA NÃO foi enviado (não mexa em commit já no remote)."
      ],
      cmd:"# reescrever os últimos 3 commits\ngit rebase -i HEAD~3\n# no editor: pick, squash, reword...",
      risk:"Nunca faça `git push --force` em branch compartilhado. Use `--force-with-lease` no seu branch e avise a equipe. Reescrever histórico público quebra o trabalho dos colegas."
    },
    { h:"3. Branch de feature para colaboração",
      steps:[
        "Crie `feature/nome` a partir da main.",
        "Trabalhe nela; mantenha-a atualizada com `git merge main` ou rebase.",
        "Abra PR para o colega revisar antes de merge."
      ],
      cmd:"git switch -c feature/dashboard\n# ... trabalhar ...\ngit push -u origin feature/dashboard\ngh pr create --title 'Dashboard de monitor' --body 'Fecha #12'",
      note:"Em projetos colaborativos usamos branches de feature (ex.: feature/dashboard, feature/auth) para cada pessoa trabalhar em paralelo sem conflito. Cada colega numa branch = paralelismo real."
    },
    { h:"4. Resolver conflito de merge na mão",
      steps:[
        "Conflito = duas mudanças na mesma linha. Git marca com `<<<<<<<` / `=======` / `>>>>>>>`.",
        "Abra o arquivo, escolha a versão certa (ou misture), remova os marcadores.",
        "`git add` o arquivo resolvido e `git commit` para terminar."
      ],
      cmd:"git merge feature/kibana-siem\n# CONFLICT em dashboard.py -> editar\nnano dashboard.py\ngit add dashboard.py\ngit commit",
      note:"Ferramenta visual ajuda: `git mergetool` abre vimdiff/meld. Mas entender os marcadores manualmente é obrigatório para não apagar código do colega."
    }
  ]
},

/* ============ NET / s1 ============ */
"net/s1": {
  intro:"Aula prática de redes: calcular sub-rede na mão, capturar tráfego DNS com Wireshark e ver o handshake TCP ao vivo. Você vai ENTENDER o pacote, não só ver o nome.",
  sections:[
    { h:"1. Sub-rede /24 na mão (CIDR)",
      steps:[
        "/24 = máscara 255.255.255.0 = 24 bits de rede, 8 de host.",
        "8 bits de host = 256 endereços; menos 2 (rede e broadcast) = 254 utilizáveis.",
        "Range 10.10.10.0/24 vai de 10.10.10.1 a 10.10.10.254.",
        "Mude o prefixo e recalcule: /25 = 128 endereços (64 utilizáveis)."
      ],
      cmd:"# endereços de uma /24\nexemplo: 192.168.1.0/24\n  rede:       192.168.1.0\n  primeiro:   192.168.1.1\n  último:     192.168.1.254\n  broadcast:  192.168.1.255\n\n# calcular com ipcalc\nipcalc 192.168.1.0/24",
      note:"Pensar em binário ajuda: /24 = 11111111.11111111.11111111.00000000. Cada bit a menos na máscara dobra o tamanho da rede."
    },
    { h:"2. Capturar DNS com Wireshark (ver o nome sendo resolvido)",
      steps:[
        "Abra o Wireshark, escolha a interface (ex.: eth0) e inicie a captura.",
        "No filtro, digite `dns` para ver só resolução de nomes.",
        "Acesse um site em outra aba; veja a query (pergunta) e a response (IP).",
        "Expanda o pacote e leia os campos Transaction ID, Flags, Answers."
      ],
      cmd:"# via linha de comando (sem GUI): capturar 10 pacotes DNS\ntshark -i eth0 -Y dns -c 10\n\n# ou só resolver um nome\n dig +short google.com",
      note:"DNS é a 'agenda telefônica' da internet. Ver a query/response ao vivo tira o mistério: o navegador pergunta o IP, o servidor responde."
    },
    { h:"3. Handshake TCP de 3 vias (SYN, SYN-ACK, ACK)",
      steps:[
        "Toda conexão TCP começa com 3 pacotes: cliente manda SYN, servidor responde SYN-ACK, cliente confirma ACK.",
        "No Wireshark, filtre `tcp.flags.syn==1 && tcp.flags.ack==0` para achar os SYNs.",
        "Veja os números de sequência (seq/ack) — base da entrega confiável.",
        "Sem esse handshake, não há conexão — só UDP 'atira e esquece'."
      ],
      cmd:"# filtrar só o início de conexões\nwireshark filter: tcp.flags.syn == 1 and tcp.flags.ack == 0\n\n# via tshark: ver handshake de um host\ntshark -i eth0 -Y 'tcp.flags.syn==1' -c 5",
      risk:"Em redes alheias, capturar pacotes de terceiros é invasão de privacidade (e crime). Pratique só na sua interface ou no lab isolado."
    },
    { h:"4. Montar topologia pequena no lab (2 VMs se falham)",
      steps:[
        "Ligue 2 VMs no mesmo bridge (vmbr1) do lab.",
        "Configure IPs na mesma faixa (/24).",
        "Teste conectividade com `ping` e veja no Wireshark os ICMP/ARP."
      ],
      cmd:"# na vm101\nip a add 10.10.10.101/24 dev eth0\n# na vm102\nip a add 10.10.10.102/24 dev eth0\n# testar\nping -c2 10.10.10.102"
    }
  ]
},

/* ============ FORENSE / s1 ============ */
"forense/s1": {
  intro:"Aula prática de coleta de evidência: como não contaminar, como provar integridade com hash e como montar cadeia de custódia. O erro aqui invalida o caso inteiro.",
  sections:[
    { h:"1. Regra de ouro: não altere a cena",
      steps:[
        "Nunca analise o disco original. Faça IMAGEM primeiro.",
        "Trabalhe sobre a cópia (imagem), nunca sobre o dispositivo real.",
        "Qualquer toque no original pode ser contestado em tribunal.",
        "Documente quem tocou, quando e por quê (cadeia de custódia)."
      ],
      cmd:"# imagem de um pendrive (sda) com hash de integridade\nsudo dd if=/dev/sda of=evidencia.img bs=4M status=progress\nsha256sum evidencia.img > evidencia.img.sha256",
      risk:"Analisar o original = contaminação. Se a defesa provar que você mexeu no original, a evidência cai. Imagem + hash ou nada."
    },
    { h:"2. Provar integridade com hash (sha256)",
      steps:[
        "Hash é a 'impressão digital' do arquivo: muda 1 bit, muda tudo.",
        "Gere o hash na coleta e gere DE NOVO antes de analisar.",
        "Se bater, a cópia é idêntica ao original no momento da coleta.",
        "Anexe o hash ao relatório (append-only)."
      ],
      cmd:"# conferir se a imagem não foi alterada\nsha256sum -c evidencia.img.sha256\n# saída esperada: evidencia.img: OK",
      note:"Use sha256 (não md5) — md5 tem colisões conhecidas e não é aceito como prova forte hoje."
    },
    { h:"3. Cadeia de custódia (quem tocou, quando)",
      steps:[
        "Crie um formulário: data, hora, responsável, ação, assinatura.",
        "Cada transferência de evidência é registrada.",
        "Sem lacuna na cadeia, a evidência é questionável.",
        "Mantenha o formulário junto do caso."
      ],
      code:"# modelo simples de registro (CSV)\\nDATA,HORA,RESPONSAVEL,ACAO,EVIDENCIA,ASSINATURA\\n2026-08-14,10:15,Analista,COLETA,evidencia.img,Analista\\n2026-08-14,10:20,Analista,HASH,evidencia.img.sha256,Analista",
      note:"Em exercício de faculdade, a cadeia de custódia mostra maturidade: você entende que forense é processo jurídico, não só técnica."
    },
    { h:"4. Evidência volátil vs persistente",
      steps:[
        "Volátil: RAM, conexões de rede, processos — some ao desligar.",
        "Persistente: disco, logs gravados, arquivos — sobrevive ao reboot.",
        "Capture o volátil PRIMEIRO (se precisar), depois o persistente.",
        "No lab, simule capturar RAM antes de desligar a VM."
      ],
      cmd:"# listar conexões abertas (volátil) ANTES de desligar\nss -tunp\n# ou\nnetstat -tunp",
      risk:"Desligar a máquina 'pra ver se para' destrói a RAM (volátil). Se há suspeita de malware em memória, capture o dump ANTES do reboot."
    }
  ]
},

/* ============ CRYPTO / s1 ============ */
"crypto/s1": {
  intro:"Aula prática de hashes e HMAC: como provar que um arquivo não foi alterado e como autenticar uma mensagem com segredo. Você vai ver por que MD5 morreu e como o HMAC funciona.",
  sections:[
    { h:"1. Encoding ≠ Hash ≠ Cifra (o erro de iniciante)",
      steps:[
        "Encoding (base64) só transforma formato — NÃO esconde nada, dá pra reverter.",
        "Hash (sha256) é one-way — não dá pra reverter, só confere integridade.",
        "Cifra (AES) esconde com chave — dá pra recuperar o texto com a chave.",
        "Confundir os três é a causa de 80% dos bugs de 'segurança'."
      ],
      cmd:"# base64 é só encoding (não é seguro!)\necho -n 'segredo' | base64\n# sha256 prova integridade (não reverte)\necho -n 'segredo' | sha256sum",
      note:"Pergunte à banca: 'base64 esconde a senha?' Se disser sim, caiu na armadilha. Base64 é transporte, não proteção."
    },
    { h:"2. Verificar integridade de arquivo (o uso real do hash)",
      steps:[
        "Baixou um ISO? Gere o sha256 e compare com o publicado pelo site.",
        "Se diferente, o arquivo foi corrompido OU alterado (mitM).",
        "Automatize a checagem em scripts de download.",
        "Use sha256sum -c com o arquivo .sha256."
      ],
      cmd:"# baixar e conferir\nwget https://exemplo.com/arquivo.iso\nwget https://exemplo.com/arquivo.iso.sha256\nsha256sum -c arquivo.iso.sha256",
      note:"Esse é o mesmo princípio usado em atualizações de sistema (pacman verifica assinaturas). Integridade é a base de tudo."
    },
    { h:"3. Por que MD5/SHA1 morreram",
      steps:[
        "Colisão = dois arquivos diferentes com o mesmo hash.",
        "MD5 e SHA1 têm colisões conhecidas e baratas de calcular.",
        "Um atacante troca o arquivo 'bom' por um 'ruim' com mesmo hash.",
        "Use SHA-256 (ou SHA-3) para integridade."
      ],
      code:"import hashlib\n\ndef colisao_demonstracao():\n    # MD5 é quebrável; mostre que SHA256 é o caminho\n    a = hashlib.sha256(b'contrato bom').hexdigest()\n    b = hashlib.sha256(b'contrato ruim').hexdigest()\n    print('iguais?', a == b)   # False -> seguro\n\ncolisao_demonstracao()",
      risk:"Nunca use MD5/SHA1 para integridade ou assinatura. Só são aceitáveis para checksum interno sem motivo de segurança (ex.: deduplicação rápida)."
    },
    { h:"4. HMAC: autenticar mensagem com segredo",
      steps:[
        "Hash puro prova integridade, mas não origem (qualquer um gera).",
        "HMAC usa uma CHAVE secreta compartilhada: só quem tem a chave autentica.",
        "Útil para APIs: servidor e cliente confirmam que a mensagem é de quem diz ser.",
        "Mesmo se alguém alterar o corpo, o HMAC não bate."
      ],
      code:"import hmac, hashlib\n\nSEGREDO = b'chave-compartilhada'\nmensagem = b'TRANSFERIR 100'\n\n# gerar tag\ntag = hmac.new(SEGREDO, mensagem, hashlib.sha256).hexdigest()\nprint('tag:', tag)\n\n# verificar (lado do receptor)\nrecebido = hmac.new(SEGREDO, mensagem, hashlib.sha256).hexdigest()\nprint('valido?', hmac.compare_digest(tag, recebido))  # True",
      note:"Use `hmac.compare_digest` (comparação em tempo constante) — `==` comum vaza via timing attack em alguns casos."
    }
  ]
}

};
