/* data-core1.js — Python + Red Team (10 etapas x 6 atividades cada = 60) */
window.RMAP = window.RMAP || [];
window.RMAP.push({
  id:"python", icon:"🐍", color:"#b9bdc6", title:"Programação Python",
  desc:"Do zero ao código de verdade: 10 módulos com 6 atividades práticas cada. Fundamentos, tipagem, async, dados, OOP, pacotes e projetos reais.",
  stages:[
    { id:"s1", title:"Fundamentos da linguagem",
      blurb:"Sintaxe, tipos, controle de fluxo e funções — a base que tudo depende.",
      start:["Instale Python 3.14 e rode o REPL.","Entenda variáveis e os tipos básicos.","Domine list/dict/set/tuple.","Laços e if/elif.","Compreensões de lista.","Use o REPL como laboratório."],
      exercises:[
        {t:"FizzBuzz clássico (1 a 100).",tip:"% e elif.",check:{type:"code",lang:"python",expect:["fizz","buzz"]}},
        {t:"Função que retorna só pares com comprehension.",tip:"[x for x in l if x%2==0]",check:{type:"contains",words:["for","if","%2"]}},
        {t:"Jogo de adivinhação com input().",tip:"random.randint + while.",check:{type:"choice",q:"",opts:["usa input() e um loop","não precisa de loop","só imprime"],answer:0}},
        {t:"Contador de frequência com Counter.",tip:"collections."},
        {t:"Tabuada de um número com for.",tip:"range(1,11)."},
        {t:"Inverter uma string sem [::-1].",tip:"loop manual."}
      ],
      schedule:[{wk:"Sem 1",go:"REPL e tipos."},{wk:"Sem 2",go:"Estruturas + compreensões."},{wk:"Sem 3",go:"4 exercícios base."}],
      deep:[{label:"Docs tutorial",url:"https://docs.python.org/pt-br/3/tutorial/"},{label:"PEP 8",url:"https://peps.python.org/pep-0008/"},{label:"Exercism",url:"https://exercism.org/tracks/python"}]
    },
    { id:"s2", title:"Funções & escopo",
      blurb:"Parâmetros, *args/**kwargs, escopo local/global e recursão.",
      start:["Defina funções com def.","Parâmetros posicionais e nomeados.","*args e **kwargs.","Escopo LEGB.","Recursão vs iteração.","Docstrings e type hints."],
      exercises:[
        {t:"Função que soma N números via *args.",tip:"sum(args)."},
        {t:"Função que filtra dict por **kwargs.",tip:"items()."},
        {t:"Fatorial recursivo e iterativo.",tip:"compare."},
        {t:"Fibonacci com memoização.",tip:"dict cache."},
        {t:"Closure que conta chamadas.",tip:"nonlocal."},
        {t:"Função com valor padrão mutável (e o bug).",tip:"usar None)."}
      ],
      schedule:[{wk:"Sem 1",go:"def + args."},{wk:"Sem 2",go:"escopo + recursão."},{wk:"Sem 3",go:"closures + bugs."}],
      deep:[{label:"Python functions",url:"https://docs.python.org/3/tutorial/controlflow.html"},{label:"Real Python",url:"https://realpython.com/"}]
    },
    { id:"s3", title:"Tipagem, módulos e pacotes",
      blurb:"Código que se defende: type hints, pyproject.toml, pacotes.",
      start:["Type hints com mypy.","Crie pacote com pyproject.","__init__ e imports.","venv para isolar.","pyproject moderno.","Scripts de entrypoint."],
      exercises:[
        {t:"Refatore FizzBuzz com type hints + mypy.",tip:"pip install mypy."},
        {t:"Pacote calculadora com pyproject.",tip:"src/calculadora."},
        {t:"Testes pytest em 3 funções.",tip:"test_*.py."},
        {t:"CLI com typer.",tip:"typer.run."},
        {t:"Import circular resolvido.",tip:"move código."},
        {t:"__all__ para controlar exports.",tip:"from x import *."}
      ],
      schedule:[{wk:"Sem 1",go:"type hints."},{wk:"Sem 2",go:"pacote + venv."},{wk:"Sem 3",go:"pytest + CLI."}],
      deep:[{label:"mypy",url:"https://mypy.readthedocs.io/"},{label:"Packaging",url:"https://packaging.python.org/"},{label:"Typer",url:"https://typer.tiangolo.com/"}]
    },
    { id:"s4", title:"OOP & padrões",
      blurb:"Classes, herança, dataclasses e padrões úteis.",
      start:["class, __init__, self.","Herança e super().","@property e dunder.","dataclasses.","Padrão Strategy/Factory.","ABC para interfaces."],
      exercises:[
        {t:"Classe ContaBancaria com saldo.","tip":"métodos depositar/sacar."},
        {t:"Herança: ContaPoupanca.","tip":"super().__init__."},
        {t:"@dataclass para Produto.","tip":"@dataclass."},
        {t:"Property que valida idade.","tip":"setter."},
        {t:"Strategy: 2 descontos.","tip":"trocar em runtime."},
        {t:"ABC com método abstrato.","tip":"from abc."}
      ],
      schedule:[{wk:"Sem 1",go:"classes."},{wk:"Sem 2",go:"herança."},{wk:"Sem 3",go:"padrões."}],
      deep:[{label:"OOP tutorial",url:"https://docs.python.org/3/tutorial/classes.html"},{label:"dataclasses",url:"https://docs.python.org/3/library/dataclasses.html"}]
    },
    { id:"s5", title:"Programação assíncrona & I/O",
      blurb:"asyncio, await e quando paralelizar faz sentido.",
      start:["Event loop e corrotinas.","async def / await.","asyncio.gather.","multiprocessing p/ CPU.","aiohttp p/ requests.","GIL e limites."],
      exercises:[
        {t:"Baixar 10 páginas com asyncio+aiohttp.","tip":"gather."},
        {t:"Versão sync e meça tempo.","tip":"perf_counter."},
        {t:"multiprocessing em imagens.","tip":"CPU-bound."},
        {t:"await com timeout.","tip":"asyncio.wait_for."},
        {t:"Fila de tarefas async.","tip":"asyncio.Queue."},
        {t:"Explicar por que GIL importa.","tip":"anote no README."}
      ],
      schedule:[{wk:"Sem 1",go:"async/await."},{wk:"Sem 2",go:"aiohttp."},{wk:"Sem 3",go:"multiprocessing."}],
      deep:[{label:"asyncio",url:"https://docs.python.org/3/library/asyncio.html"},{label:"aiohttp",url:"https://docs.aiohttp.org/"},{label:"Real Python async",url:"https://realpython.com/async-io-python/"}]
    },
    { id:"s6", title:"Manipulação de dados",
      blurb:"pandas, numpy e visualização para a banca.",
      start:["pandas load CSV/JSON.","Limpeza: dropna/fillna.","groupby e merge.","numpy arrays.","matplotlib básico.","métricas reais."],
      exercises:[
        {t:"Ler CSV e 3 gráficos matplotlib.","tip":"subplots."},
        {t:"groupby vendas por mês.","tip":"tendência."},
        {t:"Gráfico custo por escala.","tip":"derivada marginal."},
        {t:"Exportar relatório PNG.","tip":"savefig."},
        {t:"Correlação entre 2 colunas.","tip":"df.corr."},
        {t:"Pivot table com pandas.","tip":"pivot_table."}
      ],
      schedule:[{wk:"Sem 1",go:"pandas load."},{wk:"Sem 2",go:"limpeza + groupby."},{wk:"Sem 3",go:"matplotlib."}],
      deep:[{label:"pandas",url:"https://pandas.pydata.org/docs/"},{label:"matplotlib",url:"https://matplotlib.org/stable/tutorials/"},{label:"numpy",url:"https://numpy.org/doc/"}]
    },
    { id:"s7", title:"Arquivos & serialização",
      blurb:"Ler/escrever JSON, CSV, YAML e binário.",
      start:["open() e context manager.","json dump/load.","csv reader/writer.","pathlib.","pickle com cuidado.","yaml para config."],
      exercises:[
        {t:"Salvar/ler dict em JSON.","tip":"json.dump."},
        {t:"Ler CSV com DictReader.","tip":"csv.DictReader."},
        {t:"pathlib para listar arquivos.","tip":"glob."},
        {t:"Config YAML do app.","tip":"PyYAML."},
        {t:"Copiar árvore com shutil.","tip":"shutil.copytree."},
        {t:"Explicar risco do pickle.","tip":"só trust."}
      ],
      schedule:[{wk:"Sem 1",go:"open + json."},{wk:"Sem 2",go:"csv + pathlib."},{wk:"Sem 3",go:"yaml + shutil."}],
      deep:[{label:"pathlib",url:"https://docs.python.org/3/library/pathlib.html"},{label:"json",url:"https://docs.python.org/3/library/json.html"}]
    },
    { id:"s8", title:"Testes & qualidade",
      blurb:"pytest, TDD, cobertura e lint.",
      start:["pytest básico.","TDD: teste antes.","fixtures.","coverage.","ruff/flake8.","mypy em CI."],
      exercises:[
        {t:"3 testes pytest para função.","tip":"assert."},
        {t:"TDD: teste que falha, implemente.","tip":"red-green."},
        {t:"fixture de DB fake.","tip":"@pytest.fixture."},
        {t:"coverage 100% no core.","tip":"--cov."},
        {t:"ruff limpa o código.","tip":"ruff check --fix."},
        {t:"Teste de exceção esperada.","tip":"pytest.raises."}
      ],
      schedule:[{wk:"Sem 1",go:"pytest."},{wk:"Sem 2",go:"TDD + fixtures."},{wk:"Sem 3",go:"coverage + lint."}],
      deep:[{label:"pytest",url:"https://docs.pytest.org/"},{label:"coverage",url:"https://coverage.readthedocs.io/"},{label:"ruff",url:"https://docs.astral.sh/ruff/"}]
    },
    { id:"s9", title:"APIs & integrações",
      blurb:"FastAPI, validação, auth e consumo.",
      start:["REST verbs e status.","FastAPI + pydantic.","Validação de entrada.","Auth por token.","Cliente requests.","OpenAPI."],
      exercises:[
        {t:"API FastAPI 3 endpoints.","tip":"@app.get."},
        {t:"Auth por token + middleware.","tip":"não confie no cliente."},
        {t:"Cliente que consome a API.","tip":"requests + retry."},
        {t:"OpenAPI gerado e testado.","tip":"/docs."},
        {t:"Upload de arquivo.","tip":"UploadFile."},
        {t:"Rate limit simples.","tip":"dict de contagem."}
      ],
      schedule:[{wk:"Sem 1",go:"REST + FastAPI."},{wk:"Sem 2",go:"validação + auth."},{wk:"Sem 3",go:"cliente + OpenAPI."}],
      deep:[{label:"FastAPI",url:"https://fastapi.tiangolo.com/"},{label:"pydantic",url:"https://docs.pydantic.dev/"},{label:"OpenAPI",url:"https://swagger.io/specification/"}]
    },
    { id:"s10", title:"Projetos reais & portfólio",
      blurb:"Aplica tudo em projeto que vira portfólio.",
      start:["Escolha projeto útil.","Aplique TDD.","README pt-BR.","Git commits pequenos.","Publique no GitHub.","Demonstre à banca."],
      exercises:[
        {t:"CLI que organiza pastas.","tip":"os.walk + shutil."},
        {t:"Logging estruturado.","tip":"logging."},
        {t:"100% cobertura core.","tip":"--cov."},
        {t:"README + MIT.","tip":"gh repo create."},
        {t:"Makefile/devcontainer.","tip":"reproducível."},
        {t:"Pitch de 5 min.","tip":"problema→solução."}
      ],
      schedule:[{wk:"Sem 1",go:"esqueleto + TDD."},{wk:"Sem 2",go:"features + testes."},{wk:"Sem 3",go:"publicar + pitch."}],
      deep:[{label:"Hitchhiker",url:"https://docs.python-guide.org/"},{label:"Refactoring",url:"https://refactoring.com/"},{label:"12factor",url:"https://12factor.net/"}]
    }
  ]
});

window.RMAP.push({
  id:"red", icon:"🗡️", color:"#c2c6ce", title:"Red Team (Ofensiva)",
  desc:"Entenda o atacante para se defender. 10 módulos com 6 atividades, em lab isolado e autorizado. Ética em primeiro lugar.",
  stages:[
    { id:"s1", title:"Fundamentos & ambiente legal",
      blurb:"Lei, escopo e lab isolado antes de qualquer exploit.",
      start:["Leia Lei 12.737/12.","Monte lab isolado.","Recon passivo/ativo.","Documente escopo.","Autorização por escrito.","Alvo simulado ético."],
      exercises:[
        {t:"Termo de autorização do seu lab.",tip:"IPs + janela."},
        {t:"3 máquinas virtuais isoladas (sem rede externa).",tip:"ambiente de teste próprio."},
        {t:"nmap no range do lab.",tip:"-sV 10.10.10.0/24 (exemplo)."},
        {t:"Alvo simulado ético.",tip:"alvo autorizado."},
        {t:"Mapa de escopo em drawio.",tip:"mostre à banca."},
        {t:"Checklist de legalidade.",tip:"assine."}
      ],
      schedule:[{wk:"Sem 1",go:"lei + doc."},{wk:"Sem 2",go:"lab isolado."},{wk:"Sem 3",go:"recon no escopo."}],
      deep:[{label:"OWASP Top 10",url:"https://owasp.org/www-project-top-ten/"},{label:"HackTricks",url:"https://book.hacktricks.xyz/"},{label:"Lei 12.737",url:"https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12737.htm"}]
    },
    { id:"s2", title:"Reconhecimento & web",
      blurb:"Enumeração e vulnerabilidades web clássicas.",
      start:["Enumere subdomínios/portas.","OWASP Top 10.","Burp/ZAP.","WebGoat local.","SQLi/XSS.","Relatório CVSS."],
      exercises:[
        {t:"WebGoat: 3 falhas.","tip":"docker local."},
        {t:"Script detecta params refletidos.","tip":"requests+regex."},
        {t:"Relatório com CVSS.","tip":"cvss calc."},
        {t:"SQLi + mitigação.","tip":"prepare statement."},
        {t:"XSS refletido no lab.","tip":"encode saida."},
        {t:"Subdomain enum no lab.","tip":"wordlist."}
      ],
      schedule:[{wk:"Sem 1",go:"enum + Burp."},{wk:"Sem 2",go:"WebGoat."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"PortSwigger",url:"https://portswigger.net/web-security"},{label:"WebGoat",url:"https://owasp.org/www-project-webgoat/"},{label:"CVSS",url:"https://www.first.org/cvss/calculator/3.1"}]
    },
    { id:"s3", title:"Redes & pivoting",
      blurb:"Tunelamento, proxies e movimentação.",
      start:["Proxychains em ambiente de teste.","pivoting SSH/chisel.","relatório exec+técnico.","detecção pelo blue.","Contas/IP por ambiente.","Provedor de proxy (exemplo)."],
      exercises:[
        {t:"Uso de proxy com conta/IP por ambiente.",tip:"exemplo didático."},
        {t:"Pivoting SSH 2 VMs.","tip":"-L/-D."},
        {t:"Relatório com gráficos.","tip":"matplotlib."},
        {t:"Mapa de attack path.","tip":"Excalidraw."},
        {t:"Simular detecção por logs.","tip":"pense blue."},
        {t:"Chisel tunnel no lab.","tip":"socks."}
      ],
      schedule:[{wk:"Sem 1",go:"proxies."},{wk:"Sem 2",go:"pivoting."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"MITRE ATT&CK",url:"https://attack.mitre.org/"},{label:"proxychains",url:"https://github.com/haad/proxychains"},{label:"chisel",url:"https://github.com/jpillora/chisel"}]
    },
    { id:"s4", title:"Exploitação de binários",
      blurb:"Buffer overflow, fuzzing e privesc.",
      start:["Pilha e registradores.","ASLR/NX/canary.","overflow em lab.","linpeas/winpeas.","CVE em lab.","mitigação."],
      exercises:[
        {t:"Overflow simples em C lab.","tip":"gdb."},
        {t:"linpeas: 2 vetores.","tip":"no lab."},
        {t:"CVE antigo em VM vuln.","tip":"Metasploitable."},
        {t:"Fuzzing com AFL.","tip":"input mut."},
        {t:"Mitigação sugerida.","tip":"hardening."},
        {t:"Explicar canary.","tip":"stack guard."}
      ],
      schedule:[{wk:"Sem 1",go:"pilha."},{wk:"Sem 2",go:"overflow."},{wk:"Sem 3",go:"privesc."}],
      deep:[{label:"picoCTF",url:"https://picoctf.org/"},{label:"Metasploit",url:"https://www.offsec.com/metasploit-unleashed/"},{label:"PayloadsAllTheThings",url:"https://github.com/swisskyrepo/PayloadsAllTheThings"}]
    },
    { id:"s5", title:"Active Directory (lab)",
      blurb:"Kerberos, AD e ataques comuns em lab.",
      start:["Estrutura AD.","Kerberos na teoria.","AS-REP/kerberoasting lab.","bloodhound.","privesc AD.","detecção."],
      exercises:[
        {t:"Lab AD com 2 usuários.","tip":"vm vuln."},
        {t:"Kerberoasting no lab.","tip":"impacket."},
        {t:"BloodHound path.","tip":"neo4j."},
        {t:"AS-REP roasting.","tip":"sem preauth."},
        {t:"Mitigação de cada vetor.","tip":"hardening."},
        {t:"Relatório AD.","tip":"grafo."}
      ],
      schedule:[{wk:"Sem 1",go:"AD base."},{wk:"Sem 2",go:"Kerberos."},{wk:"Sem 3",go:"BloodHound."}],
      deep:[{label:"BloodHound",url:"https://bloodhoundenterprise.io/"},{label:"impacket",url:"https://github.com/fortra/impacket"},{label:"MITRE",url:"https://attack.mitre.org/"}]
    },
    { id:"s6", title:"Phishing simulado",
      blurb:"Engenharia social ética em lab (templates, não real).",
      start:["Por que phishing funciona.","Template de simulação.","Domínio de teste.","Indicadores visuais.","Relatório de conscientização.","Nunca externo."],
      exercises:[
        {t:"Template de simulação lab.","tip":"isolado."},
        {t:"Indicadores de phishing.","tip":"mostre à banca."},
        {t:"Spoofing de FROM (lab).","tip":"entenda o vetor."},
        {t:"Quiz de conscientização.","tip":"treine colegas."},
        {t:"Relatório de campanha.","tip":"taxa de cliques."},
        {t:"Mitigação: SPF/DKIM/DMARC.","tip":"teoria."}
      ],
      schedule:[{wk:"Sem 1",go:"teoria."},{wk:"Sem 2",go:"templates."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"OWASP",url:"https://owasp.org/"},{label:"PhishTank",url:"https://phishtank.org/"}]
    },
    { id:"s7", title:"Malware & análise",
      blurb:"Como malware funciona (em sandbox isolada).",
      start:["Tipos de malware.","Sandbox isolada.","Comportamento vs assinatura.","Strings e IOCs.","Detecção.","Ética."],
      exercises:[
        {t:"Sample em sandbox lab.","tip":"never host."},
        {t:"Extrair strings de binário.","tip":"strings."},
        {t:"IOC de C2 simulado.","tip":"MITRE."},
        {t:"YARA rule simples.","tip":"padrão."},
        {t:"Relatório de comportamento.","tip":"timeline."},
        {t:"Explicar vetor de entrega.","tip":"email/usb."}
      ],
      schedule:[{wk:"Sem 1",go:"tipos."},{wk:"Sem 2",go:"sandbox."},{wk:"Sem 3",go:"IOC."}],
      deep:[{label:"YARA",url:"https://yara.readthedocs.io/"},{label:"ANY.RUN",url:"https://any.run/"},{label:"MITRE",url:"https://attack.mitre.org/"}]
    },
    { id:"s8", title:"Evasão & OPSEC",
      blurb:"Técnicas de evasão e operação segura (teórico/ético).",
      start:["OPSEC básico.","Evasão de logs.","Living-off-the-land.","Timestomping (teoria).","Detecção.","Legal."],
      exercises:[
        {t:"Mapear o que gera log.","tip":"blue view."},
        {t:"LoLBin conhecido.","tip":"docs."},
        {t:"Plano de OPSEC.","tip":"lab."},
        {t:"Explicar detecção.","tip":"telemetria."},
        {t:"Timestomping: por que é rastro.","tip":"forense."},
        {t:"Relatório de risco.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"OPSEC."},{wk:"Sem 2",go:"evasão teoria."},{wk:"Sem 3",go:"detecção."}],
      deep:[{label:"MITRE",url:"https://attack.mitre.org/"},{label:"LOLBins",url:"https://lolbas-project.github.io/"}]
    },
    { id:"s9", title:"Redação de relatórios",
      blurb:"Comunicar impacto para a banca.",
      start:["Resumo executivo.","Metodologia.","Achados + CVSS.","Evidências.","Gráficos.","Pitch."],
      exercises:[
        {t:"Relatório completo 1 sim.","tip":"exec+técnico."},
        {t:"Gráfico de risco.","tip":"barras."},
        {t:"Mapa attack path.","tip":"Excalidraw."},
        {t:"Evidências reproduzíveis.","tip":"hashes."},
        {t:"Pitch 5 min.","tip":"gravar."},
        {t:"Template reutilizável.","tip":"markdown."}
      ],
      schedule:[{wk:"Sem 1",go:"template."},{wk:"Sem 2",go:"evidências."},{wk:"Sem 3",go:"pitch."}],
      deep:[{label:"OWASP WSTG",url:"https://owasp.org/www-project-web-security-testing-guide/"},{label:"MITRE",url:"https://attack.mitre.org/"}]
    },
    { id:"s10", title:"Purple Team (junte os lados)",
      blurb:"Ofensiva + defensiva colaborando.",
      start:["O que é purple.","Mapear MITRE.","Teste + detecção.","Feedback loop.","Metricas.","Cultura."],
      exercises:[
        {t:"1 ataque + 1 detecção.","tip":"loop."},
        {t:"Mapear MITRE do lab.","tip":"táticas."},
        {t:"Medir MTTR simulado.","tip":"cronômetro."},
        {t:"Plano de melhoria.","tip":"blue+red."},
        {t:"Dashboard de cobertura.","tip":"grafana."},
        {t:"Retrospectiva.","tip":"lessons."}
      ],
      schedule:[{wk:"Sem 1",go:"conceito."},{wk:"Sem 2",go:"loop."},{wk:"Sem 3",go:"métricas."}],
      deep:[{label:"MITRE",url:"https://attack.mitre.org/"},{label:"Purple Team",url:"https://www.purpleteam.com/"}]
    }
  ]
});
