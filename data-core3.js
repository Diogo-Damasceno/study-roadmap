/* data-core3.js — Eng. Software + Redes + Forense + Cripto (10x6 cada) */
window.RMAP = window.RMAP || [];
window.RMAP.push({
  id:"eng", icon:"📐", color:"#b9bdc6", title:"Eng. de Software",
  desc:"Além de código: arquitetura, git limpo, design e entrega. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Git & colaboração",
      blurb:"Histórico limpo e code review que funciona.",
      start:["rebase/--amend.","Commits atômicos.","Branches feature.","Conventional Commits.","Code review.","Conflitos."],
      exercises:[
        {t:"Reflow commits misturando + e -.","tip":"todo tem -."},
        {t:"PR branch feature.","tip":"gh pr create."},
        {t:"Review 1 PR 3 melhorias.","tip":"seg/leg/teste."},
        {t:"Resolver conflito na mão.","tip":"mergetool."},
        {t:"Revert sem reescrever.","tip":"git revert."},
        {t:"Tag de release.","tip":"semver."}
      ],
      schedule:[{wk:"Sem 1",go:"rebase."},{wk:"Sem 2",go:"rebase."},{wk:"Sem 3",go:"rebase."}],
      deep:[{label:"Pro Git",url:"https://git-scm.com/book/pt-br/v2"},{label:"Conventional",url:"https://www.conventionalcommits.org/"},{label:"GitHub flow",url:"https://docs.github.com/get-started/quickstart/github-flow"}]
    },
    { id:"s2", title:"Arquitetura & design",
      blurb:"SOLID, padrões e não virar bola de neve.",
      start:["SOLID.","Repository/Factory.","Camadas.","Diagramas.","ADR.","Acoplamento."],
      exercises:[
        {t:"Refatorar módulo acoplado.","tip":"injeção."},
        {t:"Strategy em código.","tip":"runtime."},
        {t:"Desenhar arquitetura.","tip":"camadas."},
        {t:"ADR.","tip":"por que."},
        {t:"Reduzir acoplamento.","tip":"interfaces."},
        {t:"Relatório de design.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"SOLID."},{wk:"Sem 2",go:"SOLID."},{wk:"Sem 3",go:"SOLID."}],
      deep:[{label:"Refactoring",url:"https://refactoring.com/"},{label:"12factor",url:"https://12factor.net/"},{label:"Excalidraw",url:"https://excalidraw.com/"}]
    },
    { id:"s3", title:"Qualidade & testes",
      blurb:"Testes, perf e demonstração.",
      start:["Pirâmide.","Cobertura.","Profiling.","E2E.","Mocks.","Perf real."],
      exercises:[
        {t:"Testes integração.","tip":"setup/teardown."},
        {t:"Profile -20%.","tip":"cProfile."},
        {t:"Gráfico custo escala.","tip":"derivada."},
        {t:"Mock externo.","tip":"unittest.mock."},
        {t:"E2E básico.","tip":"playwright."},
        {t:"Pitch 5 min.","tip":"problema→prova."}
      ],
      schedule:[{wk:"Sem 1",go:"pirâmide."},{wk:"Sem 2",go:"pirâmide."},{wk:"Sem 3",go:"pirâmide."}],
      deep:[{label:"pytest",url:"https://docs.pytest.org/"},{label:"cProfile",url:"https://docs.python.org/3/library/profile.html"},{label:"matplotlib",url:"https://matplotlib.org/stable/tutorials/"}]
    },
    { id:"s4", title:"APIs & integrações",
      blurb:"REST e a fronteira entre sistemas.",
      start:["REST.","Validação pydantic.","Auth.","OpenAPI.","Versionamento.","Idempotência."],
      exercises:[
        {t:"API FastAPI 3 endpoints.","tip":"pydantic."},
        {t:"Auth token.","tip":"middleware."},
        {t:"Cliente da API.","tip":"requests."},
        {t:"OpenAPI.","tip":"/docs."},
        {t:"v2 sem quebrar v1.","tip":"version."},
        {t:"Idempotência POST.","tip":"key."}
      ],
      schedule:[{wk:"Sem 1",go:"REST."},{wk:"Sem 2",go:"REST."},{wk:"Sem 3",go:"REST."}],
      deep:[{label:"FastAPI",url:"https://fastapi.tiangolo.com/"},{label:"pydantic",url:"https://docs.pydantic.dev/"},{label:"OpenAPI",url:"https://swagger.io/specification/"}]
    },
    { id:"s5", title:"Banco de dados & modelagem",
      blurb:"Modelar dados de forma sólida.",
      start:["Modelo relacional.","Normalização.","Índices.","SQL.","Migrations.","NoSQL quando."],
      exercises:[
        {t:"Schema 3 tabelas.","tip":"FK."},
        {t:"Normalizar até 3FN.","tip":"dependências."},
        {t:"Índice que acelera.","tip":"EXPLAIN."},
        {t:"Query SQL complexa.","tip":"JOIN."},
        {t:"Migration.","tip":"Alembic."},
        {t:"Quando NoSQL.","tip":"caso."}
      ],
      schedule:[{wk:"Sem 1",go:"modelo."},{wk:"Sem 2",go:"modelo."},{wk:"Sem 3",go:"modelo."}],
      deep:[{label:"Postgres",url:"https://www.postgresql.org/docs/"},{label:"Alembic",url:"https://alembic.sqlalchemy.org/"},{label:"Use The Index",url:"https://use-the-index-luke.com/"}]
    },
    { id:"s6", title:"Frontend & UX",
      blurb:"Interface que não atrapalha.",
      start:["HTML/CSS.","Acessibilidade.","Estado.","Componentes.","Responsivo.","Perf web."],
      exercises:[
        {t:"Página sem framework.","tip":"semântica."},
        {t:"Contraste AA.","tip":"acessibilidade."},
        {t:"Componente reutilizável.","tip":"props."},
        {t:"Responsivo.","tip":"grid."},
        {t:"Lazy load.","tip":"img."},
        {t:"Relatório de UX.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"HTML/CSS."},{wk:"Sem 2",go:"HTML/CSS."},{wk:"Sem 3",go:"HTML/CSS."}],
      deep:[{label:"MDN",url:"https://developer.mozilla.org/"},{label:"Web.dev",url:"https://web.dev/"},{label:"a11y",url:"https://www.w3.org/WAI/"}]
    },
    { id:"s7", title:"Padrões de projeto",
      blurb:"Repertório de soluções conhecidas.",
      start:["Criacionais.","Estruturais.","Comportamentais.","Anti-patterns.","KISS/YAGNI.","Quando não usar."],
      exercises:[
        {t:"Factory de conexões.","tip":"criacional."},
        {t:"Adapter legado.","tip":"estrutural."},
        {t:"Observer eventos.","tip":"comportamental."},
        {t:"Evitar Singleton.","tip":"injeção."},
        {t:"Aplicar KISS.","tip":"simples."},
        {t:"Refatorar anti-pattern.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"criacionais."},{wk:"Sem 2",go:"criacionais."},{wk:"Sem 3",go:"criacionais."}],
      deep:[{label:"Refactoring",url:"https://refactoring.com/"},{label:"SourceMaking",url:"https://sourcemaking.com/design_patterns"}]
    },
    { id:"s8", title:"Domínio & DDD",
      blurb:"Modelar o negócio em código.",
      start:["Domínio.","Entidades.","Value objects.","Aggregates.","Bounded context.","Ubiquitous lang."],
      exercises:[
        {t:"Entidade com identidade.","tip":"igualdade."},
        {t:"Value object imutável.","tip":"sem id."},
        {t:"Aggregate raiz.","tip":"consistência."},
        {t:"Bounded context.","tip":"divisão."},
        {t:"Linguagem ubíqua.","tip":"glossário."},
        {t:"Relatório de DDD.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"entidades."},{wk:"Sem 2",go:"entidades."},{wk:"Sem 3",go:"entidades."}],
      deep:[{label:"DDD",url:"https://www.domainlanguage.com/"},{label:"Martin Fowler",url:"https://martinfowler.com/tags/domain%20driven%20design.html"}]
    },
    { id:"s9", title:"Entrega & portfólio",
      blurb:"Empacote o valor para a banca.",
      start:["README história.","Demo.","Métricas.","GitHub Pages.","Changelog.","Apresentação."],
      exercises:[
        {t:"README pt-BR + ético.","tip":"estrutura."},
        {t:"Demo 3 min.","tip":"fallback."},
        {t:"Métricas antes/depois.","tip":"números."},
        {t:"Site portfólio.","tip":"pages."},
        {t:"Changelog.","tip":"keepachangelog."},
        {t:"Pitch gravado.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"README."},{wk:"Sem 2",go:"README."},{wk:"Sem 3",go:"README."}],
      deep:[{label:"Pages",url:"https://pages.github.com/"},{label:"Changelog",url:"https://keepachangelog.com/"}]
    },
    { id:"s10", title:"Legado & manutenção",
      blurb:"Sobreviver a código antigo.",
      start:["Ler código alheio.","Testes de caracterização.","Strangler.","Dívida técnica.","Documentar.","Refactor seguro."],
      exercises:[
        {t:"Teste caracterização.","tip":"comporta."},
        {t:"Strangler fig.","tip":"isolado."},
        {t:"Mapear dívida.","tip":"lista."},
        {t:"Documentar módulo.","tip":"diagrama."},
        {t:"Refactor com testes.","tip":"seguro."},
        {t:"Relatório de legado.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ler."},{wk:"Sem 2",go:"ler."},{wk:"Sem 3",go:"ler."}],
      deep:[{label:"Refactoring",url:"https://refactoring.com/"},{label:"Strangler",url:"https://martinfowler.com/bliki/StranglerFigApplication.html"}]
    }
  ]
});

window.RMAP.push({
  id:"net", icon:"📡", color:"#aeb2ba", title:"Redes & Wi-Fi",
  desc:"Do pacote ao sinal: TCP/IP, roteamento e Wi-Fi ético. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Fundamentos de redes",
      blurb:"Modelos, endereçamento e o que acontece ao abrir uma página.",
      start:["OSI vs TCP/IP.","IPv4/IPv6 CIDR.","ARP/DNS.","Wireshark.","Pacote.","Topologia lab."],
      exercises:[
        {t:"Sub-rede /24 na mão.","tip":"CIDR."},
        {t:"Capturar DNS.","tip":"filtro dns."},
        {t:"Handshake TCP 3 vias.","tip":"flags."},
        {t:"Topologia 2 VMs.","tip":"ping."},
        {t:"IPv6 link-local.","tip":"fe80."},
        {t:"Explicar encapsulamento.","tip":"camadas."}
      ],
      schedule:[{wk:"Sem 1",go:"modelos."},{wk:"Sem 2",go:"modelos."},{wk:"Sem 3",go:"modelos."}],
      deep:[{label:"Wireshark",url:"https://www.wireshark.org/docs/"},{label:"Cloudflare",url:"https://www.cloudflare.com/pt-br/learning/"},{label:"Subnet calc",url:"https://www.calculator.net/ip-subnet-calculator.html"}]
    },
    { id:"s2", title:"Roteamento & switching",
      blurb:"Como pacotes encontram o caminho.",
      start:["Estatico vs dinamico.","VLANs.","NAT.","Firewall borda.","Tabela.","Convergência."],
      exercises:[
        {t:"Rota estática 2 redes.","tip":"ip route."},
        {t:"2 VLANs bloqueadas.","tip":"switch."},
        {t:"NAT saída VM.","tip":"masquerade."},
        {t:"Forward default-deny.","tip":"segurança."},
        {t:"Traceroute lab.","tip":"caminho."},
        {t:"Explicar OSPF.","tip":"teoria."}
      ],
      schedule:[{wk:"Sem 1",go:"roteamento."},{wk:"Sem 2",go:"roteamento."},{wk:"Sem 3",go:"roteamento."}],
      deep:[{label:"Cisco",url:"https://www.netacad.com/"},{label:"nftables",url:"https://wiki.nftables.org/"},{label:"RFC 1918",url:"https://datatracker.ietf.org/doc/html/rfc1918"}]
    },
    { id:"s3", title:"Wi-Fi ético em lab",
      blurb:"Como o sinal funciona e testar seu próprio AP.",
      start:["802.11.","WPA2/WPA3.","Modo monitor.","Handshake.","AP seu.","Hardening."],
      exercises:[
        {t:"Listar redes modo monitor.","tip":"iw."},
        {t:"Capturar handshake seu AP.","tip":"autorizado."},
        {t:"Por que WPA3.","tip":"SAE."},
        {t:"Endurecer AP.","tip":"boas práticas."},
        {t:"Canal menos congestionado.","tip":"scan."},
        {t:"Explicar WEP morto.","tip":"RC4."}
      ],
      schedule:[{wk:"Sem 1",go:"teoria."},{wk:"Sem 2",go:"teoria."},{wk:"Sem 3",go:"teoria."}],
      deep:[{label:"aircrack-ng",url:"https://www.aircrack-ng.org/"},{label:"WPA3",url:"https://www.wi-fi.org/security"},{label:"802.11",url:"https://en.wikipedia.org/wiki/802.11_frame_types"}]
    },
    { id:"s4", title:"VPN & túneis",
      blurb:"Canais seguros e acesso ao lab.",
      start:["Site-to-site vs remote.","WireGuard.","SSH tunnels.","Throughput.","Anonimato.","MTU."],
      exercises:[
        {t:"WireGuard 2 VMs.","tip":"chaves."},
        {t:"SSH -D proxy.","tip":"socks."},
        {t:"Throughput iperf3.","tip":"medir."},
        {t:"Explicar limites.","tip":"honesto."},
        {t:"Túnel reverso -R.","tip":"lab."},
        {t:"Path MTU.","tip":"descoberta."}
      ],
      schedule:[{wk:"Sem 1",go:"teoria."},{wk:"Sem 2",go:"wireguard."},{wk:"Sem 3",go:"teoria."}],
      deep:[{label:"WireGuard",url:"https://www.wireguard.com/"},{label:"OpenVPN",url:"https://openvpn.net/community-resources/"},{label:"iperf3",url:"https://iperf.fr/"}]
    },
    { id:"s5", title:"Diagnóstico & performance",
      blurb:"Quando a rede 'tá lenta'.",
      start:["Baseline.","mtr.","tcpdump.","QoS.","Gargalo.","Evidência."],
      exercises:[
        {t:"Baseline mtr.","tip":"horários."},
        {t:"tcpdump 1 conversa.","tip":"host+port."},
        {t:"Achar gargalo lab.","tip":"eliminação."},
        {t:"QoS básico.","tip":"prioridade."},
        {t:"Latência p95.","tip":"medir."},
        {t:"Explicar 'não é rede'.","tip":"app vs transp."}
      ],
      schedule:[{wk:"Sem 1",go:"baseline."},{wk:"Sem 2",go:"baseline."},{wk:"Sem 3",go:"baseline."}],
      deep:[{label:"tcpdump",url:"https://www.tcpdump.org/manpages/tcpdump.1.html"},{label:"mtr",url:"https://github.com/traviscross/mtr"},{label:"PMTU",url:"https://en.wikipedia.org/wiki/Path_MTU_Discovery"}]
    },
    { id:"s6", title:"DNS & HTTP",
      blurb:"Os protocolos da web.",
      start:["Resolução.","Registros.","HTTP/2.","TLS.","CDN.","Caching."],
      exercises:[
        {t:"Registros A/MX/CNAME.","tip":"dig."},
        {t:"HTTP/2 multiplex.","tip":"teoria."},
        {t:"Cert self-signed lab.","tip":"openssl."},
        {t:"Cache headers.","tip":"ETag."},
        {t:"CDN conceito.","tip":"edge."},
        {t:"Explicar resolver.","tip":"recursivo."}
      ],
      schedule:[{wk:"Sem 1",go:"DNS."},{wk:"Sem 2",go:"HTTP."},{wk:"Sem 3",go:"TLS."}],
      deep:[{label:"Cloudflare",url:"https://www.cloudflare.com/pt-br/learning/"},{label:"MDN HTTP",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP"},{label:"Let's Encrypt",url:"https://letsencrypt.org/docs/"}]
    },
    { id:"s7", title:"Segurança de rede",
      blurb:"Defenda a camada de rede.",
      start:["Segmentação.","IDS/IPS.","Egress.","Honeypot.","Zero trust.","Telemetria."],
      exercises:[
        {t:"Segmentar por função.","tip":"VLAN."},
        {t:"Suricata lab.","tip":"regras."},
        {t:"Egress filter.","tip":"saída."},
        {t:"Honeypot simulado.","tip":"lab."},
        {t:"Zero trust concept.","tip":"verifique."},
        {t:"Relatório de topologia.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"segmentar."},{wk:"Sem 2",go:"IDS."},{wk:"Sem 3",go:"egress."}],
      deep:[{label:"Suricata",url:"https://suricata.io/"},{label:"MITRE",url:"https://attack.mitre.org/"},{label:"Zero Trust",url:"https://www.cisa.gov/zero-trust-maturity-model"}]
    },
    { id:"s8", title:"Load balancing & HA",
      blurb:"Escalar e não cair.",
      start:["LB algoritmos.","Health check.","HA.","Sticky.","Failover.","Quorum."],
      exercises:[
        {t:"LB round-robin lab.","tip":"nginx."},
        {t:"Health probe.","tip":"endpoint."},
        {t:"Failover simulado.","tip":"derrubar."},
        {t:"Sticky session.","tip":"cookie."},
        {t:"Quorum 3 nós.","tip":"maioria."},
        {t:"Relatório de HA.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"algoritmos."},{wk:"Sem 2",go:"health."},{wk:"Sem 3",go:"failover."}],
      deep:[{label:"nginx",url:"https://nginx.org/en/docs/"},{label:"HAProxy",url:"https://www.haproxy.org/"}]
    },
    { id:"s9", title:"Automação de rede",
      blurb:"Infra como código para redes.",
      start:["NetConf.","Ansible net.","Templates.","GitOps.","Validar.","Rollback."],
      exercises:[
        {t:"Ansible config switch lab.","tip":"idempotente."},
        {t:"Template de config.","tip":"jinja."},
        {t:"Validar antes apply.","tip":"lint."},
        {t:"GitOps de rede.","tip":"PR."},
        {t:"Rollback config.","tip":"versão."},
        {t:"Relatório de automação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ansible."},{wk:"Sem 2",go:"templates."},{wk:"Sem 3",go:"gitops."}],
      deep:[{label:"Ansible",url:"https://docs.ansible.com/"},{label:"NetConf",url:"https://datatracker.ietf.org/doc/html/rfc6241"}]
    },
    { id:"s10", title:"Lab de redes completo",
      blurb:"Monte um cenário integrado.",
      start:["Topologia.","Serviços.","Monitorar.","Atacar (ético).","Defender.","Documentar."],
      exercises:[
        {t:"Topologia 3 camadas.","tip":"drawio."},
        {t:"Serviços: DNS+HTTP+SSH.","tip":"lab."},
        {t:"Monitorar com grafana.","tip":"metrics."},
        {t:"Simular 1 ataque lab.","tip":"autorizado."},
        {t:"Defender o vetor.","tip":"hardening."},
        {t:"Relatório final.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"topologia."},{wk:"Sem 2",go:"serviços."},{wk:"Sem 3",go:"defesa."}],
      deep:[{label:"GNS3",url:"https://www.gns3.com/"},{label:"Eve-NG",url:"https://www.eve-ng.net/"}]
    }
  ]
});

window.RMAP.push({
  id:"forense", icon:"🔍", color:"#b4b8c0", title:"Forense Digital",
  desc:"Evidência, timeline e cadeia de custódia. 10 módulos com 6 atividades. Lado investigativo.",
  stages:[
    { id:"s1", title:"Princípios & cadeia",
      blurb:"Não contaminar, documentar, prover.",
      start:["Não alterar.","Hash.","Cadeia.","Volátil.","Imagem.","Legal."],
      exercises:[
        {t:"Protocolo de coleta.","tip":"hash+assina."},
        {t:"Imagem com hash.","tip":"dd+sha256."},
        {t:"Formulário cadeia.","tip":"template."},
        {t:"Volátil vs persistente.","tip":"lista."},
        {t:"Evidência sem lacuna.","tip":"registro."},
        {t:"Explicar contaminação.","tip":"tribunal."}
      ],
      schedule:[{wk:"Sem 1",go:"princípios."},{wk:"Sem 2",go:"imagem."},{wk:"Sem 3",go:"cadeia."}],
      deep:[{label:"NIST 800-86",url:"https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf"},{label:"RFC 3227",url:"https://datatracker.ietf.org/doc/html/rfc3227"},{label:"SANS",url:"https://www.sans.org/digital-forensics/"}]
    },
    { id:"s2", title:"Disco & arquivos",
      blurb:"Sistemas de arquivos e recovery.",
      start:["ext4/NTFS.","Recovery.","Timestamps.","Carving.","Metadados.","Strings."],
      exercises:[
        {t:"Recuperar apagado.","tip":"testdisk."},
        {t:"Comparar timestamps.","tip":"stat."},
        {t:"Carving strings.","tip":"strings+grep."},
        {t:"Metadados de arquivo.","tip":"exiftool."},
        {t:"Timeline básica.","tip":"ls -lu."},
        {t:"Relatório de arquivo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"fs."},{wk:"Sem 2",go:"recovery."},{wk:"Sem 3",go:"timestamps."}],
      deep:[{label:"testdisk",url:"https://www.cgsecurity.org/"},{label:"Sleuth Kit",url:"https://www.sleuthkit.org/"},{label:"ext4",url:"https://ext4.wiki.kernel.org/"}]
    },
    { id:"s3", title:"Memória",
      blurb:"O que a RAM esconde.",
      start:["Volatilidade.","Dump.","Volatility 3.","Processos.","Conexões.","IOC."],
      exercises:[
        {t:"Dump RAM VM lab.","tip":"avml."},
        {t:"Pslist Volatility.","tip":"windows.pslist."},
        {t:"Netscan C2.","tip":"conexões."},
        {t:"IOC em memória.","tip":"honesto."},
        {t:"Mapear processo suspeito.","tip":"lab."},
        {t:"Relatório de memória.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"teoria."},{wk:"Sem 2",go:"dump."},{wk:"Sem 3",go:"volatility."}],
      deep:[{label:"Volatility 3",url:"https://volatility3.readthedocs.io/"},{label:"AVML",url:"https://github.com/microsoft/avml"},{label:"REMnux",url:"https://docs.remnux.org/"}]
    },
    { id:"s4", title:"Rede forense",
      blurb:"Pacotes como prova.",
      start:["pcap.","Reconstruir.","DNS tunneling.","Timeline.","Correlação.","Wireshark."],
      exercises:[
        {t:"Capturar pcap lab.","tip":"tcpdump -w."},
        {t:"Reconstruir download.","tip":"follow stream."},
        {t:"Detectar beaconing.","tip":"frequência."},
        {t:"Casar rede+host.","tip":"correlação."},
        {t:"Filtrar por IP.","tip":"display filter."},
        {t:"Relatório de pcap.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"pcap."},{wk:"Sem 2",go:"reconstruir."},{wk:"Sem 3",go:"correlação."}],
      deep:[{label:"Wireshark",url:"https://www.wireshark.org/docs/"},{label:"NetworkMiner",url:"https://www.netresec.com/?page=NetworkMiner"},{label:"Suricata",url:"https://suricata.io/"}]
    },
    { id:"s5", title:"Malware forense",
      blurb:"Comportamento e indicadores.",
      start:["Sandbox.","Strings.","IOC.","YARA.","Comportamento.","Hashes."],
      exercises:[
        {t:"Sample sandbox lab.","tip":"nunca host."},
        {t:"Strings de binário.","tip":"strings."},
        {t:"YARA rule.","tip":"padrão."},
        {t:"IOC de C2.","tip":"MITRE."},
        {t:"Timeline de ação.","tip":"eventos."},
        {t:"Relatório de malware.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"sandbox."},{wk:"Sem 2",go:"strings."},{wk:"Sem 3",go:"yara."}],
      deep:[{label:"YARA",url:"https://yara.readthedocs.io/"},{label:"ANY.RUN",url:"https://any.run/"},{label:"MITRE",url:"https://attack.mitre.org/"}]
    },
    { id:"s6", title:"Logs & correlação",
      blurb:"Junte fontes de evidência.",
      start:["Fontes.","Timestamps UTC.","Correlação.","Anomalias.","Timelines.","Ferramentas."],
      exercises:[
        {t:"Centralizar logs lab.","tip":"filebeat."},
        {t:"Normalizar UTC.","tip":"tz."},
        {t:"Correlacionar 2 fontes.","tip":"join."},
        {t:"Anomalia de horário.","tip":"fora do padrão."},
        {t:"Timeline unificada.","tip":"plaso."},
        {t:"Relatório de correlação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"fontes."},{wk:"Sem 2",go:"utc."},{wk:"Sem 3",go:"timeline."}],
      deep:[{label:"Elastic",url:"https://www.elastic.co/guide/en/siem/guide/current/index.html"},{label:"plaso",url:"https://github.com/log2timeline/plaso"}]
    },
    { id:"s7", title:"Cloud forense",
      blurb:"Evidência em nuvem (lab/teoria).",
      start:["Responsabilidade.","Logs de API.","Snapshots.","Trilhas.","Imutabilidade.","Coleta."],
      exercises:[
        {t:"Logs de API lab.","tip":"cloudtrail-like."},
        {t:"Snapshot de VM.","tip":"imagem."},
        {t:"Trilha de acesso.","tip":"quem/quando."},
        {t:"Bucket público erro.","tip":"vazamento."},
        {t:"Coleta com hash.","tip":"integridade."},
        {t:"Relatório de cloud.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"modelo."},{wk:"Sem 2",go:"logs."},{wk:"Sem 3",go:"coleta."}],
      deep:[{label:"AWS IR",url:"https://docs.aws.amazon.com/incident-response/"},{label:"CISA",url:"https://www.cisa.gov/incident-response"}]
    },
    { id:"s8", title:"Anti-forense & contramedidas",
      blurb:"O que atrapalha a investigação.",
      start:["Timestomping.","Wiping.","Steganografia.","Cripto.","Detecção.","Mitigação."],
      exercises:[
        {t:"Timestomping (teoria).","tip":"rastro."},
        {t:"Wiping conceito.","tip":"sobrescreve."},
        {t:"Stego básico lab.","tip":"imagem."},
        {t:"Cripto em disco.","tip":"bitlocker-like."},
        {t:"Detectar timestomp.","tip":"forense."},
        {t:"Relatório de risco.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"timestomp."},{wk:"Sem 2",go:"wiping."},{wk:"Sem 3",go:"stego."}],
      deep:[{label:"Mitre",url:"https://attack.mitre.org/"},{label:"Stego",url:"https://www.cs.cmu.edu/~dst/CAVE/software/stegodemo/"}]
    },
    { id:"s9", title:"Relatório & testemunho",
      blurb:"Transformar achados em prova comunicável.",
      start:["Estrutura.","Hashes.","Fato vs inferência.","Perito.","Template.","Revisão."],
      exercises:[
        {t:"Relatório completo lab.","tip":"tudo hasheado."},
        {t:"Hashes no apêndice.","tip":"sha256."},
        {t:"Separar fato/inferência.","tip":"disciplina."},
        {t:"Depoimento 5 min.","tip":"'não sei'."},
        {t:"Peer review.","tip":"colega."},
        {t:"Template reutilizável.","tip":"markdown."}
      ],
      schedule:[{wk:"Sem 1",go:"estrutura."},{wk:"Sem 2",go:"hashes."},{wk:"Sem 3",go:"depoimento."}],
      deep:[{label:"NIST 800-86",url:"https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-86.pdf"},{label:"SANS FOR508",url:"https://www.sans.org/cyber-security-courses/advanced-incident-response-threat-hunting/"}]
    },
    { id:"s10", title:"Caso integrado",
      blurb:"Investigue Ponta a Ponta.",
      start:["Cenário.","Coletar.","Timeline.","IOC.","Relatório.","Apresentar."],
      exercises:[
        {t:"Cenário lab montado.","tip":"simule."},
        {t:"Coletar todas fontes.","tip":"hash."},
        {t:"Timeline unificada.","tip":"plaso."},
        {t:"IOC final.","tip":"MITRE."},
        {t:"Relatório executivo.","tip":"banca."},
        {t:"Defesa da análise.","tip":"pergunta."}
      ],
      schedule:[{wk:"Sem 1",go:"cenário."},{wk:"Sem 2",go:"coleta."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"SANS",url:"https://www.sans.org/digital-forensics/"},{label:"Autopsy",url:"https://www.autopsy.com/"}]
    }
  ]
});

window.RMAP.push({
  id:"crypto", icon:"🔐", color:"#b9bdc6", title:"Criptografia & Seg. Aplicada",
  desc:"Do hash à TLS: proteger dados de verdade. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Fundamentos: hash & encoding",
      blurb:"Integridade e a diferença entre encoding, hash e cifra.",
      start:["Encoding≠hash.","Propriedades.","MD5/SHA1 mortos.","HMAC.","SHA-256.","Verificar."],
      exercises:[
        {t:"base64 vs sha256.","tip":"não confunda."},
        {t:"sha256 de arquivo.","tip":"sha256sum."},
        {t:"HMAC mensagem.","tip":"hmac.new."},
        {t:"Explicar colisão.","tip":"MD5."},
        {t:"Conferir iso baixado.","tip":"-c."},
        {t:"Por que sha256.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"encoding."},{wk:"Sem 2",go:"hash."},{wk:"Sem 3",go:"hmac."}],
      deep:[{label:"NIST hash",url:"https://csrc.nist.gov/projects/hash-functions"},{label:"HMAC",url:"https://datatracker.ietf.org/doc/html/rfc2104"},{label:"Crypto 101",url:"https://www.crypto101.io/"}]
    },
    { id:"s2", title:"Cifras simétricas",
      blurb:"AES, modos e nunca reusar IV.",
      start:["Fluxo vs bloco.","AES.","Modos.","IV/nonce.","GCM.","AEAD."],
      exercises:[
        {t:"AES-GCM Python.","tip":"cryptography."},
        {t:"ECB vaza padrão.","tip":"penguin."},
        {t:"Reusar nonce quebra.","tip":"GCM."},
        {t:"Verificar tag.","tip":"auth."},
        {t:"KDF de senha.","tip":"scrypt."},
        {t:"Explicar AEAD.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"AES."},{wk:"Sem 2",go:"modos."},{wk:"Sem 3",go:"GCM."}],
      deep:[{label:"cryptography",url:"https://cryptography.io/en/latest/"},{label:"NIST AES",url:"https://csrc.nist.gov/pubs/sp/800/38/d/final"},{label:"ECB",url:"https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation"}]
    },
    { id:"s3", title:"Cifras assimétricas & PKI",
      blurb:"RSA, ECC e a cadeia de confiança.",
      start:["Par de chaves.","RSA vs ECC.","X.509.","CA.","TLS handshake.","PFS."],
      exercises:[
        {t:"Par Ed25519 + assinar.","tip":"openssl."},
        {t:"Inspecionar cert site.","tip":"s_client."},
        {t:"Explicar ECDHE.","tip":"PFS."},
        {t:"Por que RSA pequeno.","tip":"fatoração."},
        {t:"Cadeia de confiança.","tip":"root->leaf."},
        {t:"Renovar cert lab.","tip":"acme."}
      ],
      schedule:[{wk:"Sem 1",go:"RSA/ECC."},{wk:"Sem 2",go:"X.509."},{wk:"Sem 3",go:"TLS."}],
      deep:[{label:"OpenSSL",url:"https://www.openssl.org/docs/"},{label:"Let's Encrypt",url:"https://letsencrypt.org/docs/"},{label:"RFC 8446",url:"https://datatracker.ietf.org/doc/html/rfc8446"}]
    },
    { id:"s4", title:"Armazenamento de senhas",
      blurb:"Como não vazar a senha de todo mundo.",
      start:["Nunca plaintext.","Salt+cost.","bcrypt/scrypt/argon2.","Pepper.","Timing.","Reset."],
      exercises:[
        {t:"Argon2id.","tip":"argon2-cffi."},
        {t:"Tabela arco-íris.","tip":"sem salt."},
        {t:"Compare constant-time.","tip":"hmac.compare."},
        {t:"Auditar esquema.","tip":"lab."},
        {t:"Pepper seguro.","tip":"separado."},
        {t:"Reset sem vazar.","tip":"token."}
      ],
      schedule:[{wk:"Sem 1",go:"salt."},{wk:"Sem 2",go:"argon2."},{wk:"Sem 3",go:"timing."}],
      deep:[{label:"Argon2",url:"https://password-hashing.net/"},{label:"OWASP",url:"https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"},{label:"bcrypt",url:"https://www.usenix.org/legacy/events/usenix99/provos.html"}]
    },
    { id:"s5", title:"Protocolos seguros",
      blurb:"TLS, SSH e por que confiamos.",
      start:["TLS 1.3.","SSH.","Cert pinning.","Forward secrecy.","Algoritmos.","Fallback."],
      exercises:[
        {t:"TLS 1.3 handcheck.","tip":"openssl s_client."},
        {t:"SSH key only.","tip":"sem senha."},
        {t:"Pinned cert lab.","tip":"app."},
        {t:"Listar ciphers fracos.","tip":"scan."},
        {t:"Desabilitar TLS1.0.","tip":"harden."},
        {t:"Explicar PFS.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"TLS."},{wk:"Sem 2",go:"SSH."},{wk:"Sem 3",go:"harden."}],
      deep:[{label:"RFC 8446",url:"https://datatracker.ietf.org/doc/html/rfc8446"},{label:"SSH",url:"https://www.ssh.com/academy/ssh"}]
    },
    { id:"s6", title:"Random & geradores",
      blurb:"O perigo do 'aleatório' errado.",
      start:["CSPRNG.","secrets vs random.","Entropia.","Seed.","Nonce.","PRNG fraco."],
      exercises:[
        {t:"secrets.token_bytes.","tip":"não random."},
        {t:"Explicar seed previsível.","tip":"quebra."},
        {t:"Entropia de chave.","tip":"bits."},
        {t:"Substituir random por secrets.","tip":"vuln."},
        {t:"Nonce único.","tip":"contador."},
        {t:"Relatório de RNG.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"CSPRNG."},{wk:"Sem 2",go:"secrets."},{wk:"Sem 3",go:"entropia."}],
      deep:[{label:"Python secrets",url:"https://docs.python.org/3/library/secrets.html"},{label:"NIST RNG",url:"https://csrc.nist.gov/projects/random-bit-generation"}]
    },
    { id:"s7", title:"Cripto em repouso & trânsito",
      blurb:"Quando aplicar cada um.",
      start:["Em repouso.","Em trânsito.","KMS.","Envelope.","Rotação.","Backup cifrado."],
      exercises:[
        {t:"Arquivo cifrado AES.","tip":"key file."},
        {t:"TLS em trânsito.","tip":"padrão."},
        {t:"KMS conceito.","tip":"lab."},
        {t:"Rotação de chave.","tip":"processo."},
        {t:"Backup cifrado.","tip":"restaura."},
        {t:"Explicar envelope.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"repouso."},{wk:"Sem 2",go:"trânsito."},{wk:"Sem 3",go:"kms."}],
      deep:[{label:"AWS KMS",url:"https://docs.aws.amazon.com/kms/"},{label:"Vault transit",url:"https://developer.hashicorp.com/vault/docs/secrets/transit"}]
    },
    { id:"s8", title:"Assinaturas & não-repúdio",
      blurb:"Provar origem e integridade.",
      start:["Assinatura.","Verificação.","Timestamp.","Certificado.","Não-repúdio.","Revogação."],
      exercises:[
        {t:"Assinar doc com Ed25519.","tip":"openssl."},
        {t:"Verificar assinatura.","tip":"cli."},
        {t:"Timestamp authority (teoria).","tip":"proof."},
        {t:"Revogar cert.","tip":"CRL/OCSP."},
        {t:"Cadeia assinatura.","tip":"banca."},
        {t:"Explicar não-repúdio.","tip":"legal."}
      ],
      schedule:[{wk:"Sem 1",go:"assinar."},{wk:"Sem 2",go:"verificar."},{wk:"Sem 3",go:"revogar."}],
      deep:[{label:"RFC 3161",url:"https://datatracker.ietf.org/doc/html/rfc3161"},{label:"OpenSSL",url:"https://www.openssl.org/docs/"}]
    },
    { id:"s9", title:"Aplicando na prática",
      blurb:"Junte tudo sem reinventar a roda.",
      start:["Libs auditadas.","Segredos.","RNG seguro.","CVE review.","HSM.","Config."],
      exercises:[
        {t:"App cifra config env.","tip":"sem hardcoded."},
        {t:"Vault local segredos.","tip":"não git."},
        {t:"RNG seguro app.","tip":"secrets."},
        {t:"Post-mortem CVE.","tip":"Heartbleed."},
        {t:"HSM conceito.","tip":"hardware."},
        {t:"Relatório de cripto.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"libs."},{wk:"Sem 2",go:"segredos."},{wk:"Sem 3",go:"cve."}],
      deep:[{label:"OWASP",url:"https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/"},{label:"Heartbleed",url:"https://en.wikipedia.org/wiki/Heartbleed"}]
    },
    { id:"s10", title:"Criptoanálise & mitigação",
      blurb:"Por que certas escolhas quebram.",
      start:["Ataques.","Tamanho de chave.","Side-channel.","Quantum.","Migração.","Defesa."],
      exercises:[
        {t:"Força bruta vs tamanho.","tip":"2^n."},
        {t:"Por que 128-bit ok.","tip":"banca."},
        {t:"Side-channel (teoria).","tip":"timing."},
        {t:"Post-quantum conceito.","tip":"lattice."},
        {t:"Migrar algo fraco.","tip":"plano."},
        {t:"Relatório de mitigação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ataques."},{wk:"Sem 2",go:"tamanho."},{wk:"Sem 3",go:"quantum."}],
      deep:[{label:"NIST PQC",url:"https://csrc.nist.gov/projects/post-quantum-cryptography"},{label:"Side-channel",url:"https://en.wikipedia.org/wiki/Side-channel_attack"}]
    }
  ]
});
