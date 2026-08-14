/* data-core2.js — Blue Team + IA + DevOps (10x6 cada) */
window.RMAP = window.RMAP || [];
window.RMAP.push({
  id:"blue", icon:"🛡️", color:"#aeb2ba", title:"Blue Team (Defensiva)",
  desc:"Detecção, resposta e SIEM. 10 módulos com 6 atividades. A arte de ver o atacante antes que ele termine o café.",
  stages:[
    { id:"s1", title:"Logs, SOC & triagem",
      blurb:"O que monitorar e o fluxo de um SOC.",
      start:["Tipos de log.","Ciclo de alerta.","auth.log e brute force.","NIST 800-61.","Triage.","Runbook."],
      exercises:[
        {t:"Detector brute force em Python.","tip":"contar por IP."},
        {t:"Classificar 10 alertas.","tip":"FP/real."},
        {t:"Runbook de triagem.","tip":"markdown."},
        {t:"Simular alerta e responder.","tip":"use lab red."},
        {t:"Grep de falhas por janela.","tip":"awk."},
        {t:"Matriz de severidade.","tip":"baixa/alta."}
      ],
      schedule:[{wk:"Sem 1",go:"logs."},{wk:"Sem 2",go:"ciclo."},{wk:"Sem 3",go:"runbook."}],
      deep:[{label:"NIST 800-61",url:"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf"},{label:"D3FEND",url:"https://d3fend.mitre.org/"},{label:"SANS",url:"https://www.sans.org/reading-room/"}]
    },
    { id:"s2", title:"SIEM & Kibana",
      blurb:"Centralize logs e detecte anomalias.",
      start:["Pipeline ingest.","Elasticsearch+Kibana.","Ingest pipelines.","Index patterns.","Dashboards.","Alerting."],
      exercises:[
        {t:"Ingest logs via Filebeat.","tip":"modules."},
        {t:"3 regras Kibana.","tip":"alerting."},
        {t:"Dashboard SSH por país.","tip":"Maps."},
        {t:"Export case PDF.","tip":"reporting."},
        {t:"Detecção de port scan.","tip":"threshold."},
        {t:"Dashboard de erros 4xx.","tip":"http."}
      ],
      schedule:[{wk:"Sem 1",go:"stack."},{wk:"Sem 2",go:"ingest."},{wk:"Sem 3",go:"regras."}],
      deep:[{label:"Elastic SIEM",url:"https://www.elastic.co/guide/en/siem/guide/current/index.html"},{label:"OpenSearch",url:"https://opensearch.org/"},{label:"Sigma",url:"https://github.com/SigmaHQ/sigma"}]
    },
    { id:"s3", title:"Resposta & threat hunting",
      blurb:"Caçe proativamente e feche o ciclo.",
      start:["Hunting com hipóteses.","IR: conter/erradicar.","Playbooks.","Lessons learned.","MITRE-based.","Automação."],
      exercises:[
        {t:"3 hipóteses de hunt.","tip":"beaconing?"},
        {t:"Playbook SSH comprometido.","tip":"bloquear+revogar."},
        {t:"Auto-bloqueio firewall.","tip":"nftables."},
        {t:"Retrospectiva simulada.","tip":"o que falhou."},
        {t:"MITRE mapping do hunt.","tip":"táticas."},
        {t:"Runbook de escalonamento.","tip":"quem chama."}
      ],
      schedule:[{wk:"Sem 1",go:"hunting."},{wk:"Sem 2",go:"playbooks."},{wk:"Sem 3",go:"lessons."}],
      deep:[{label:"MITRE",url:"https://attack.mitre.org/"},{label:"HUNT",url:"https://www.threathuntingproject.com/"},{label:"CISA",url:"https://www.cisa.gov/incident-response"}]
    },
    { id:"s4", title:"Hardening & baseline",
      blurb:"Deixe o sistema resistente por padrão.",
      start:["CIS Benchmark.","SSH hardening.","Firewall default-deny.","Patches.","lynis.","Política."],
      exercises:[
        {t:"SSH chaves + fail2ban.","tip":"teste bloqueio."},
        {t:"Firewall default-deny.","tip":"nftables."},
        {t:"CIS do sistema, 5 itens.","tip":"lynis."},
        {t:"Política de patch.","tip":"frequência."},
        {t:"Desabilitar serviços não usados.","tip":"systemctl disable."},
        {t:"Auditd básico.","tip":"regras."}
      ],
      schedule:[{wk:"Sem 1",go:"SSH."},{wk:"Sem 2",go:"firewall."},{wk:"Sem 3",go:"CIS."}],
      deep:[{label:"CIS",url:"https://www.cisecurity.org/benchmarks"},{label:"lynis",url:"https://cisofy.com/lynis/"},{label:"fail2ban",url:"https://www.fail2ban.org/"}]
    },
    { id:"s5", title:"Forense & resposta digital",
      blurb:"Coleta, timeline e cadeia de custódia.",
      start:["Princípios.","Imagem de disco.","Timeline plaso.","Artefatos.","Volátil.","Relatório."],
      exercises:[
        {t:"Imagem com hash.","tip":"dd+sha256."},
        {t:"Timeline plaso.","tip":"log2timeline."},
        {t:"Arquivo apagado recovery.","tip":"testdisk."},
        {t:"Cadeia de custódia.","tip":"template."},
        {t:"Dump de RAM lab.","tip":"avml."},
        {t:"Relatório forense.","tip":"prova."}
      ],
      schedule:[{wk:"Sem 1",go:"princípios."},{wk:"Sem 2",go:"timeline."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"SANS",url:"https://www.sans.org/digital-forensics/"},{label:"plaso",url:"https://github.com/log2timeline/plaso"},{label:"Autopsy",url:"https://www.autopsy.com/"}]
    },
    { id:"s6", title:"Detecção de malware",
      blurb:"IOC, YARA e comportamento.",
      start:["IOC o que é.","YARA rules.","Sandbox.","EDR na teoria.","Quarentena.","Threat intel."],
      exercises:[
        {t:"YARA rule simples.","tip":"string."},
        {t:"IOC de C2.","tip":"MITRE."},
        {t:"Quarentena no lab.","tip":"isolamento."},
        {t:"Hashes de prova.","tip":"sha256."},
        {t:"Feed de threat intel.","tip":"MISP."},
        {t:"Relatório de indicadores.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"IOC."},{wk:"Sem 2",go:"YARA."},{wk:"Sem 3",go:"intel."}],
      deep:[{label:"YARA",url:"https://yara.readthedocs.io/"},{label:"MISP",url:"https://www.misp-project.org/"},{label:"MITRE",url:"https://attack.mitre.org/"}]
    },
    { id:"s7", title:"Rede defensiva",
      blurb:"Segmentação e monitoramento de rede.",
      start:["VLANs.","IDS/IPS.","Suricata.","Mirroring.","DNS sinkhole.","Egress filtering."],
      exercises:[
        {t:"VLAN isolando serviços.","tip":"switch lab."},
        {t:"Suricata detectando.","tip":"regras."},
        {t:"DNS sinkhole lab.","tip":"bloqueia C2."},
        {t:"Egress filter nftables.","tip":"só saída ok."},
        {t:"Span port p/ IDS.","tip":"mirror."},
        {t:"Relatório de topologia.","tip":"drawio."}
      ],
      schedule:[{wk:"Sem 1",go:"VLAN."},{wk:"Sem 2",go:"IDS."},{wk:"Sem 3",go:"egress."}],
      deep:[{label:"Suricata",url:"https://suricata.io/"},{label:"Snort",url:"https://www.snort.org/"},{label:"MITRE",url:"https://attack.mitre.org/"}]
    },
    { id:"s8", title:"Identity & acesso",
      blurb:"IAM, MFA e privilégios.",
      start:["Princípio menor privilégio.","MFA.","RBAC.","SSO na teoria.","Revogação.","Auditoria."],
      exercises:[
        {t:"MFA no lab.","tip":"TOTP."},
        {t:"RBAC por função.","tip":"papéis."},
        {t:"Auditoria de contas.","tip":"último login."},
        {t:"Revogar acesso.","tip":"processo."},
        {t:"Política de senha.","tip":"não expira nunca."},
        {t:"Relatório de acessos.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"MFA."},{wk:"Sem 2",go:"RBAC."},{wk:"Sem 3",go:"auditoria."}],
      deep:[{label:"NIST 800-63B",url:"https://pages.nist.gov/800-63-3/sp800-63b.html"},{label:"OWASP",url:"https://owasp.org/"}]
    },
    { id:"s9", title:"Resilience & backup",
      blurb:"Continuidade e recuperação.",
      start:["3-2-1 backup.","Teste de restore.","RTO/RPO.","Replicação.","DR plan.","Tabletop."],
      exercises:[
        {t:"Backup 3-2-1 lab.","tip":"offsite."},
        {t:"Teste de restore.","tip":"confira."},
        {t:"Calcular RTO/RPO.","tip":"negócio."},
        {t:"Plano de DR.","tip":"markdown."},
        {t:"Replicação DB.","tip":"warm."},
        {t:"Tabletop exercise.","tip":"simule."}
      ],
      schedule:[{wk:"Sem 1",go:"backup."},{wk:"Sem 2",go:"RTO/RPO."},{wk:"Sem 3",go:"DR."}],
      deep:[{label:"NIST 800-34",url:"https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf"},{label:"Veeam",url:"https://www.veeam.com/"}]
    },
    { id:"s10", title:"SOC maturity & métricas",
      blurb:"Como medir e evoluir o time.",
      start:["Maturidade.","MTTD/MTTR.","Cobrir MITRE.","Dashboards.","Treino.","Cultura."],
      exercises:[
        {t:"Métricas MTTD/MTTR.","tip":"cronômetro."},
        {t:"Cobertura MITRE.","tip":"grafo."},
        {t:"Dashboard de alertas.","tip":"grafana."},
        {t:"Plano de treino.","tip":"CTF interno."},
        {t:"Game day.","tip":"simulação."},
        {t:"Relatório de maturidade.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"métricas."},{wk:"Sem 2",go:"cobertura."},{wk:"Sem 3",go:"cultura."}],
      deep:[{label:"MITRE",url:"https://attack.mitre.org/"},{label:"SOC maturity",url:"https://www.sans.org/white-papers/36909/"}]
    }
  ]
});

window.RMAP.push({
  id:"ai", icon:"🧠", color:"#c7cbd3", title:"IA & Agentes",
  desc:"LLMs, agentes e orquestração. 10 módulos com 6 atividades, do prompt à arquitetura multi-agente.",
  stages:[
    { id:"s1", title:"LLMs & prompting",
      blurb:"Como os modelos pensam e extrair o máximo.",
      start:["Tokens e janela.","Few-shot/CoT.","System prompts.","Custos.","Limitações.","Comparar modelos."],
      exercises:[
        {t:"3 system prompts.","tip":"papel+regras."},
        {t:"Medir custo/token 5 modelos.","tip":"USD→BRL."},
        {t:"CoT para lógica.","tip":"pense passo a passo."},
        {t:"Quebrar alucinação.","tip":"cite fontes."},
        {t:"Few-shot JSON.","tip":"formato."},
        {t:"Comparar 2 modelos.","tip":"mesmo prompt."}
      ],
      schedule:[{wk:"Sem 1",go:"tokens."},{wk:"Sem 2",go:"prompting."},{wk:"Sem 3",go:"benchmark."}],
      deep:[{label:"OpenRouter",url:"https://openrouter.ai/models"},{label:"Anthropic",url:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"},{label:"Learn Prompting",url:"https://learnprompting.org/"}]
    },
    { id:"s2", title:"Construindo agentes",
      blurb:"Tools, memória e loops.",
      start:["Loop observar-agir.","Ferramentas.","Memória.","Limite passos.","Framework leve.","Self-verify."],
      exercises:[
        {t:"Agente CLI 2 ferramentas.","tip":"loop."},
        {t:"Memória persistente.","tip":"sqlite."},
        {t:"Agente roda teste.","tip":"self-verify."},
        {t:"Limite de custo.","tip":"contador."},
        {t:"Tool de busca.","tip":"web."},
        {t:"Replan quando falha.","tip":"retry."}
      ],
      schedule:[{wk:"Sem 1",go:"loop."},{wk:"Sem 2",go:"ferramentas."},{wk:"Sem 3",go:"custo."}],
      deep:[{label:"Hermes",url:"https://hermes-agent.nousresearch.com/docs"},{label:"LangGraph",url:"https://langchain-ai.github.io/langgraph/"},{label:"ReAct",url:"https://arxiv.org/abs/2210.03629"}]
    },
    { id:"s3", title:"Multi-agente",
      blurb:"Vários agentes e orquestração.",
      start:["Papéis.","Supervisor.","Contratos.","Guardrails.","Timeouts.","Quando vale."],
      exercises:[
        {t:"2 agentes pesquisa+código.","tip":"ctx."},
        {t:"Supervisor roteia 3.","tip":"switch."},
        {t:"Guardrail custo/tempo.","tip":"kill N."},
        {t:"Comparar mono/multi.","tip":"medir."},
        {t:"Handoff entre agentes.","tip":"estado."},
        {t:"Relatório de arquitetura.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"papéis."},{wk:"Sem 2",go:"supervisor."},{wk:"Sem 3",go:"guardrails."}],
      deep:[{label:"AutoGen",url:"https://microsoft.github.io/autogen/"},{label:"CrewAI",url:"https://docs.crewai.com/"},{label:"Anthropic",url:"https://www.anthropic.com/research/building-effective-agents"}]
    },
    { id:"s4", title:"RAG & conhecimento",
      blurb:"Recuperação semântica para memória longa.",
      start:["Chunking.","Embeddings.","Vector store.","Pipeline.","Avaliar.","Precisão@k."],
      exercises:[
        {t:"Índice PDFs chromadb.","tip":"local."},
        {t:"Busca semântica.","tip":"embed."},
        {t:"Aumentar prompt top-3.","tip":"ctx."},
        {t:"Precisão@3.","tip":"5 queries."},
        {t:"Re-rank simples.","tip":"score."},
        {t:"Relatório de RAG.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"chunk."},{wk:"Sem 2",go:"vector."},{wk:"Sem 3",go:"avaliação."}],
      deep:[{label:"chromadb",url:"https://docs.trychroma.com/"},{label:"SBERT",url:"https://www.sbert.net/"},{label:"RAG",url:"https://arxiv.org/abs/2005.11401"}]
    },
    { id:"s5", title:"Fine-tuning & eval",
      blurb:"Treine/ajuste e meça honesto.",
      start:["Quando FT vs RAG.","Dataset.","Split.","Métricas.","Overfit.","Red flags."],
      exercises:[
        {t:"Dataset 50 exemplos.","tip":"qualidade."},
        {t:"Avaliar base vs ajustado.","tip":"cego."},
        {t:"LoRA leve.","tip":"recursos."},
        {t:"Relatório de gains.","tip":"honesto."},
        {t:"Evitar vazamento teste.","tip":"split."},
        {t:"Benchmark lm-eval.","tip":"harness."}
      ],
      schedule:[{wk:"Sem 1",go:"decisão."},{wk:"Sem 2",go:"treino."},{wk:"Sem 3",go:"eval."}],
      deep:[{label:"PEFT",url:"https://huggingface.co/docs/peft"},{label:"lm-eval",url:"https://github.com/EleutherAI/lm-evaluation-harness"},{label:"OpenAI FT",url:"https://platform.openai.com/docs/guides/fine-tuning"}]
    },
    { id:"s6", title:"Guardrails & segurança",
      blurb:"Proteja o agente e o usuário.",
      start:["Prompt injection.","Validação de saída.","Sandbox.","Segredos.","Rate limit.","Logs."],
      exercises:[
        {t:"Simular prompt injection.","tip":"defesa."},
        {t:"Validar JSON de saída.","tip":"schema."},
        {t:"Sandbox de execução.","tip":"container."},
        {t:"Segredos fora do código.","tip":"env."},
        {t:"Rate limit por user.","tip":"dict."},
        {t:"Log de chamadas.","tip":"auditoria."}
      ],
      schedule:[{wk:"Sem 1",go:"injection."},{wk:"Sem 2",go:"validação."},{wk:"Sem 3",go:"sandbox."}],
      deep:[{label:"OWASP LLM",url:"https://owasp.org/www-project-top-10-for-large-language-model-applications/"},{label:"Prompt injection",url:"https://arxiv.org/abs/2302.12173"}]
    },
    { id:"s7", title:"Embeddings & similaridade",
      blurb:"Como medir 'perto' em vetores.",
      start:["Espaço vetorial.","Cosseno.","Normalizar.","Distâncias.","Clustering.","Visualizar."],
      exercises:[
        {t:"Cosseno entre 2 textos.","tip":"sklearn."},
        {t:"Cluster de docs.","tip":"kmeans."},
        {t:"Busca por vizinho.","tip":"FAISS."},
        {t:"Reduzir dimensão.","tip":"PCA/UMAP."},
        {t:"Dedup por similaridade.","tip":"threshold."},
        {t:"Relatório de cluster.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"vetores."},{wk:"Sem 2",go:"cosseno."},{wk:"Sem 3",go:"cluster."}],
      deep:[{label:"FAISS",url:"https://github.com/facebookresearch/faiss"},{label:"sklearn",url:"https://scikit-learn.org/"},{label:"UMAP",url:"https://umap-learn.readthedocs.io/"}]
    },
    { id:"s8", title:"Eval de qualidade",
      blurb:"Meça se o modelo é bom de verdade.",
      start:["O que avaliar.","Golden set.","LLM-as-judge.","Human eval.","Regressão.","Custo x qualidade."],
      exercises:[
        {t:"Golden set 20 casos.","tip":"cego."},
        {t:"LLM-as-judge.","tip":"rubrica."},
        {t:"Checar regressão.","tip":"compare."},
        {t:"Custo por acerto.","tip":"razão."},
        {t:"Avaliação humana.","tip":"nota."},
        {t:"Relatório de eval.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"golden."},{wk:"Sem 2",go:"judge."},{wk:"Sem 3",go:"regressão."}],
      deep:[{label:"lm-eval",url:"https://github.com/EleutherAI/lm-evaluation-harness"},{label:"G-Eval",url:"https://arxiv.org/abs/2303.14287"}]
    },
    { id:"s9", title:"Agentes com código",
      blurb:"Deixe o agente escrever e rodar código.",
      start:["REPL do agente.","Validar antes.","Capturar erro.","Limitar escopo.","Idempotente.","Revisar."],
      exercises:[
        {t:"Agente gera Python.","tip":"executa."},
        {t:"Capturar traceback.","tip":"retry."},
        {t:"Sandbox de execução.","tip":"container."},
        {t:"Revisar diff.","tip":"humano."},
        {t:"Limite de tempo.","tip":"timeout."},
        {t:"Relatório de uso.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"gera."},{wk:"Sem 2",go:"executa."},{wk:"Sem 3",go:"revisa."}],
      deep:[{label:"Hermes",url:"https://hermes-agent.nousresearch.com/docs"},{label:"Code Interpreter",url:"https://openai.com/index/code-interpreter/"}]
    },
    { id:"s10", title:"Deploy de agentes",
      blurb:"Coloque em produção com responsabilidade.",
      start:["API do agente.","Fila/async.","Observabilidade.","Rollback.","Custo contínuo.","Humano no loop."],
      exercises:[
        {t:"Expor agente via API.","tip":"FastAPI."},
        {t:"Fila de tarefas.","tip":"celery."},
        {t:"Trace de chamadas.","tip":"logs."},
        {t:"Rollback de prompt.","tip":"versão."},
        {t:"Alerta de custo.","tip":"threshold."},
        {t:"Relatório de produção.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"API."},{wk:"Sem 2",go:"fila."},{wk:"Sem 3",go:"obs."}],
      deep:[{label:"FastAPI",url:"https://fastapi.tiangolo.com/"},{label:"OpenTelemetry",url:"https://opentelemetry.io/docs/"}]
    }
  ]
});

window.RMAP.push({
  id:"devops", icon:"⚙️", color:"#b4b8c0", title:"DevOps & Infra",
  desc:"Linux, containers, virtualização e automação. 10 módulos com 6 atividades. O chão de fábrica onde tudo roda.",
  stages:[
    { id:"s1", title:"Linux & shell",
      blurb:"Domínio da linha de comando.",
      start:["Bash pipes.","Permissões.","systemd.","pacman/yay.","journalctl.","Aliases."],
      exercises:[
        {t:"Backup incremental rsync.","tip":"--link-dest."},
        {t:"systemd timer diário.","tip":".service+.timer."},
        {t:"journalctl -u debug.","tip":"-b -f."},
        {t:"Aliases de 1 palavra.","tip":"bashrc."},
        {t:"grep/awk em log.","tip":"filtro."},
        {t:"find por tamanho.","tip":"-size."}
      ],
      schedule:[{wk:"Sem 1",go:"bash."},{wk:"Sem 2",go:"perm+systemd."},{wk:"Sem 3",go:"scripts."}],
      deep:[{label:"Arch Wiki",url:"https://wiki.archlinux.org/"},{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"},{label:"systemd",url:"https://www.freedesktop.org/wiki/Software/systemd/"}]
    },
    { id:"s2", title:"Containers & virtualização",
      blurb:"Docker e virtualização (containers e VMs).",
      start:["Imagem vs container.","Dockerfile multi-stage.","VMs/CTs.","Thin pools.","Rede virtual.","Snapshots."],
      exercises:[
        {t:"Dockerfile multi-stage.","tip":"slim."},
        {t:"Stack Elastic compose.","tip":"compose."},
        {t:"Template+clone de VM.",tip:"cloud-init."},
        {t:"Snapshot+rollback.","tip":"protege."},
        {t:"Volume persistente.","tip":"-v."},
        {t:"Rede isolada compose.","tip":"net."}
      ],
      schedule:[{wk:"Sem 1",go:"docker."},{wk:"Sem 2",go:"compose."},{wk:"Sem 3",go:"proxmox."}],
      deep:[{label:"Docker",url:"https://docs.docker.com/"},{label:"Proxmox",url:"https://pve.proxmox.com/wiki/Main_Page"},{label:"CT vs VM",url:"https://pve.proxmox.com/wiki/Container"}]
    },
    { id:"s3", title:"Automação & CI/CD",
      blurb:"Pipelines e entrega sem susto.",
      start:["GitHub Actions.","Secrets.","IaC ansible.","Observabilidade.","Testes no pipe.","Rollback."],
      exercises:[
        {t:"Pipeline pytest no push.","tip":"actions."},
        {t:"gh CLI repo+push.","tip":"sem token."},
        {t:"Playbook ansible 1 VM.","tip":"idempotente."},
        {t:"Healthcheck+alerta.","tip":"curl."},
        {t:"Lint no pipe.","tip":"ruff."},
        {t:"Rollback de deploy.","tip":"versão."}
      ],
      schedule:[{wk:"Sem 1",go:"actions."},{wk:"Sem 2",go:"secrets+gh."},{wk:"Sem 3",go:"ansible."}],
      deep:[{label:"GH Actions",url:"https://docs.github.com/actions"},{label:"Ansible",url:"https://docs.ansible.com/"},{label:"Terraform",url:"https://developer.hashicorp.com/terraform/docs"}]
    },
    { id:"s4", title:"Observabilidade",
      blurb:"Métricas, logs e traces.",
      start:["Prometheus.","Grafana.","Loki.","OTel.","SLO/SLI.","Alertas."],
      exercises:[
        {t:"Prometheus+Grafana lab.","tip":"compose."},
        {t:"Instrumentar app.","tip":"counter."},
        {t:"Dashboard p95+alerta.","tip":"grafana."},
        {t:"SLO 99.5%.","tip":"realista."},
        {t:"Trace com OTel.","tip":"spans."},
        {t:"Relatório de obs.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"stack."},{wk:"Sem 2",go:"instrumentar."},{wk:"Sem 3",go:"SLO."}],
      deep:[{label:"Prometheus",url:"https://prometheus.io/docs/"},{label:"Grafana",url:"https://grafana.com/docs/"},{label:"OTel",url:"https://opentelemetry.io/docs/"}]
    },
    { id:"s5", title:"Cloud & IaaS",
      blurb:"Conceitos e infra reproduzível.",
      start:["IaaS/PaaS/SaaS.","Compute/Storage.","VPC.","Terraform.","Custo.","Responsabilidade."],
      exercises:[
        {t:"Terraform 1 VM+rede.","tip":"provider."},
        {t:"Custo mensal.","tip":"calc."},
        {t:"Destroy/recreate.","tip":"idempotente."},
        {t:"Diagrama topologia.","tip":"drawio."},
        {t:"Tag de ownership.","tip":"governança."},
        {t:"Relatório de custo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"modelos."},{wk:"Sem 2",go:"terraform."},{wk:"Sem 3",go:"custo."}],
      deep:[{label:"Terraform",url:"https://developer.hashicorp.com/terraform/docs"},{label:"AWS Well-Arch",url:"https://docs.aws.amazon.com/wellarchitected/"},{label:"Hetzner",url:"https://www.hetzner.com/cloud/"}]
    },
    { id:"s6", title:"Rede de infra",
      blurb:"Como a infra se conecta.",
      start:["Sub-redes.","Load balancer.","DNS interno.","Firewall de borda.","Peering.","NAT."],
      exercises:[
        {t:"2 sub-redes + LB.","tip":"compose."},
        {t:"DNS interno.","tip":"coredns."},
        {t:"Firewall borda.","tip":"deny."},
        {t:"NAT saída.","tip":"masquerade."},
        {t:"Health check LB.","tip":"probe."},
        {t:"Relatório de topologia.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"sub-redes."},{wk:"Sem 2",go:"LB+DNS."},{wk:"Sem 3",go:"borda."}],
      deep:[{label:"Cisco",url:"https://www.netacad.com/"},{label:"nftables",url:"https://wiki.nftables.org/"}]
    },
    { id:"s7", title:"Segurança de infra",
      blurb:"Endureça a infraestrutura.",
      start:["SSH chaves.","Segredos vault.","MFA.","Atualização.","Auditoria.","Least privilege."],
      exercises:[
        {t:"SSH chaves+2FA.","tip":"lab."},
        {t:"Vault local.","tip":"sem git."},
        {t:"Auditoria de acessos.","tip":"logs."},
        {t:"Política de patch.","tip":"frequência."},
        {t:"RBAC de infra.","tip":"papéis."},
        {t:"Relatório de seg.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"SSH."},{wk:"Sem 2",go:"vault."},{wk:"Sem 3",go:"auditoria."}],
      deep:[{label:"Vault",url:"https://developer.hashicorp.com/vault/docs"},{label:"CIS",url:"https://www.cisecurity.org/benchmarks"}]
    },
    { id:"s8", title:"Banco & cache",
      blurb:"Postgres, Redis e filas.",
      start:["Postgres básico.","Índices.","Backup DB.","Redis cache.","Fila.","Replicação."],
      exercises:[
        {t:"Schema + índice.","tip":"EXPLAIN."},
        {t:"Backup + restore.","tip":"pg_dump."},
        {t:"Redis cache.","tip":"TTL."},
        {t:"Fila com Redis.","tip":"LPUSH."},
        {t:"Replicação warm.","tip":"stream."},
        {t:"Relatório de query.","tip":"lento."}
      ],
      schedule:[{wk:"Sem 1",go:"pg."},{wk:"Sem 2",go:"backup."},{wk:"Sem 3",go:"cache."}],
      deep:[{label:"Postgres",url:"https://www.postgresql.org/docs/"},{label:"Redis",url:"https://redis.io/docs/"}]
    },
    { id:"s9", title:"Resilience & SRE",
      blurb:"Confiabilidade na prática.",
      start:["SLO/SLI/SLA.","Error budget.","Circuit breaker.","Retry/backoff.","Caos.","Postmortem."],
      exercises:[
        {t:"Definir SLO.","tip":"realista."},
        {t:"Circuit breaker.","tip":"código."},
        {t:"Retry exp backoff.","tip":"jitter."},
        {t:"Caos: derrubar VM.","tip":"lab."},
        {t:"Postmortem sem culpa.","tip":"blameless."},
        {t:"Relatório de SRE.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"SLO."},{wk:"Sem 2",go:"breaker."},{wk:"Sem 3",go:"caos."}],
      deep:[{label:"SRE book",url:"https://sre.google/books/"},{label:"OTel",url:"https://opentelemetry.io/docs/"}]
    },
    { id:"s10", title:"Plataforma & IDP",
      blurb:"Internal Developer Platform.",
      start:["O que é IDP.","Templates.","Golden paths.","Self-service.","Catálogo.","Docs."],
      exercises:[
        {t:"Template de serviço.","tip":"cookiecutter."},
        {t:"Pipeline golden.","tip":"reuso."},
        {t:"Catálogo de serviços.","tip":"yaml."},
        {t:"Self-service deploy.","tip":"botão."},
        {t:"Docs de onboarding.","tip":"runbook."},
        {t:"Relatório de plataforma.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"IDP."},{wk:"Sem 2",go:"templates."},{wk:"Sem 3",go:"catálogo."}],
      deep:[{label:"Platform Eng",url:"https://platformengineering.org/"},{label:"Backstage",url:"https://backstage.io/"}]
    }
  ]
});
