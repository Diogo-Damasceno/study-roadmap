/* lessons-gen.js — aulas praticas densas por etapa.
   Formato consumido por app.js/renderLesson:
     buildLesson(areaId, stage, override) -> { intro, sections:[{h,doc,steps,cmd,code,note,risk}], exercises:[...] }
   override (de RMAP_LESSONS) sobrescreve por area/stage se existir. */
(function () {
  const LESSONS = {
    "python/s1": {
      intro: "Nesta aula voce instala o Python 3.14, entra no REPL e escreve seus primeiros programas. O objetivo e ganhar conforto com a sintaxe e entender que em Python o tipo vem do valor, nao da declaracao.",
      sections: [
        { h: "Passo 1 — Instalacao e REPL", doc: "Baixe o Python em python.org (ou use a versao do seu sistema). No terminal, rode `python3 --version` para confirmar. Entre no REPL com `python3` e saia com Ctrl-D. O REPL e seu laboratorio rapido.", steps: ["Verifique a versao com python3 --version", "Abra o REPL digitando python3", "Teste: digite 2 + 2 e veja 4", "Saia com Ctrl-D (ou exit())"] },
        { h: "Passo 2 — Tipos e variaveis", doc: "Em Python voce nao declara tipo: x = 42 faz x ser int; x = '42' faz ser str. Tipos errados sao a causa numero um de bugs. Use type() para inspecionar.", code: "x = 42\nprint(type(x))   # <class 'int'>\nx = 'oi'\nprint(type(x))   # <class 'str'>\n# 42 + 'oi' -> TypeError!" },
        { h: "Passo 3 — Estruturas e compreensao", doc: "list e mutavel; tuple imutavel; dict mapeia chave->valor; set guarda unicos. A compreensao cria listas de forma concisa.", code: "nums = [1,2,3,4]\npares = [n for n in nums if n % 2 == 0]\nd = {'a': 1}\ns = {1,2,2,3}   # {1,2,3}" }
      ],
      exercises: [
        { t: "No REPL, calcule a soma de 1 a 100 com sum(range(1,101)).", check: { type: "contains", words: ["sum", "range"] } },
        { t: "Crie uma lista de quadrados de 0 a 9 com compreensao.", check: { type: "contains", words: ["for", "in"] } }
      ]
    },
    "python/s2": {
      intro: "Funcoes sao o bloco de montar da reutilizacao. Aqui voce define funcoes, entende escopo LEGB, parametros e quando usar recursao.",
      sections: [
        { h: "Definindo funcoes", doc: "def nome(params): corpo indentado. Uma funcao faz uma coisa. Docstring documenta.", code: "def soma(a, b=0):\n    '''Soma a e b (b opcional).'''\n    return a + b\nprint(soma(3, 4))   # 7" },
        { h: "Escopo LEGB", doc: "Local -> Enclosing -> Global -> Built-in. Variavel criada na funcao e local. Para mexer em global, use global; para fechar sobre variavel externa, nonlocal.", code: "x = 10\ndef f():\n    x = 5   # local, nao muda o global\n    return x" },
        { h: "Recursao vs iteracao", doc: "Recursao chama a si mesma (fatorial), elegante mas usa pilha. Iteracao e mais eficiente em Python.", code: "def fat(n):\n    return 1 if n <= 1 else n * fat(n-1)" }
      ],
      exercises: [
        { t: "Escreva uma funcao que recebe *args e soma todos.", check: { type: "contains", words: ["args", "sum"] } },
        { t: "Fatorial iterativo (com for), nao recursivo.", check: { type: "contains", words: ["for", "range"] } }
      ]
    },
    "python/s3": {
      intro: "Empacotar codigo em projetos reutilizaveis e a ponte entre 'script' e 'software'. Voce vai criar um pacote com pyproject.toml e isolar dependencias com venv.",
      sections: [
        { h: "venv e isolamento", doc: "Sempre isole: python3 -m venv .venv e source .venv/bin/activate. Nunca instale global em producao.", cmd: "python3 -m venv .venv\nsource .venv/bin/activate   # Windows: .venv\\Scripts\\activate\npip install --upgrade pip" },
        { h: "pyproject.toml", doc: "Arquivo unico de metadados e build (PEP 621). Declara nome, versao, dependencias e entrypoints.", code: "[project]\nname = \"minha_lib\"\nversion = \"0.1.0\"\ndependencies = [\"requests\"]\n[project.scripts]\nminha-cli = \"minha_lib:main\"" },
        { h: "Type hints + mypy", doc: "Anotacoes dizem o tipo esperado; mypy checa estaticamente. Instale com pip e rode mypy arquivo.py.", cmd: "pip install mypy\nmypy minha_lib.py" }
      ],
      exercises: [
        { t: "Crie um venv e instale o mypy dentro dele.", check: { type: "contains", words: ["venv", "mypy"] } },
        { t: "Escreva uma funcao anotada def dobro(x: int) -> int.", check: { type: "contains", words: ["int", "->"] } }
      ]
    },
    "python/s4": {
      intro: "OOP modela o dominio em objetos. Voce vai criar classes, usar heranca, @dataclass e entender quando padroes ajudam.",
      sections: [
        { h: "Classes basicas", doc: "class com __init__(self,...) e metodos. self e a referencia ao objeto.", code: "class Conta:\n    def __init__(self, saldo=0):\n        self.saldo = saldo\n    def depositar(self, v):\n        self.saldo += v" },
        { h: "Heranca e super", doc: "Subclasse reaproveita e especializa. super() chama o pai sem acoplar nome.", code: "class Poupanca(Conta):\n    def render(self, tx):\n        super().depositar(self.saldo * tx)" },
        { h: "dataclass", doc: "Decorador gera __init__/__repr__/__eq__ a partir de anotacoes. Menos boilerplate.", code: "from dataclasses import dataclass\n@dataclass\nclass Produto:\n    nome: str\n    preco: float" }
      ],
      exercises: [
        { t: "Classe Retangulo com area() e perimetro().", check: { type: "contains", words: ["class", "def"] } },
        { t: "Use @dataclass para um modelo Pessoa.", check: { type: "contains", words: ["dataclass", "class"] } }
      ]
    },
    "python/s5": {
      intro: "asyncio brilha em I/O (muitas requisicoes lentas); multiprocessing em CPU. Voce vai medir a diferenca.",
      sections: [
        { h: "async/await", doc: "async def cria corrotina; await suspende ate a operacao. So chame com await ou asyncio.run.", code: "import asyncio\nasync def oi():\n    await asyncio.sleep(1)\n    print('oi')\nasyncio.run(oi())" },
        { h: "gather concorrente", doc: "gather roda varias corrotinas juntas. Para I/O, e o ganho real.", code: "async def tarefa(n):\n    await asyncio.sleep(1)\n    return n\nprint(asyncio.run(asyncio.gather(tarefa(1), tarefa(2))))" },
        { h: "CPU-bound: multiprocessing", doc: "GIL impede paralelismo de CPU em threads. Use multiprocessing para isso.", note: "Confunda I/O (asyncio) de CPU (multiprocessing) e o codigo fica lento." }
      ],
      exercises: [
        { t: "Meça o tempo de 5 sleeps sequenciais vs gather.", check: { type: "contains", words: ["gather", "perf_counter"] } },
        { t: "Explique por que asyncio nao acelera soma de 1e8 numeros.", check: { type: "contains", words: ["GIL", "CPU"] } }
      ]
    },
    "python/s6": {
      intro: "pandas/numpy sao a base da analise. Voce vai carregar, limpar, agregar e plotar — com raciocinio estatistico.",
      sections: [
        { h: "Carregar e inspecionar", doc: "read_csv carrega em DataFrame. Sempre .head()/.info()/.shape ao carregar.", code: "import pandas as pd\ndf = pd.read_csv('dados.csv')\nprint(df.shape, df.info())" },
        { h: "Limpeza e agregacao", doc: "dropna/fillna tratam lacunas; groupby agrega. Justifique cada limpeza.", code: "df = df.dropna()\nprint(df.groupby('mes')['venda'].sum())" },
        { h: "Visualizar", doc: "matplotlib.pyplot.plot/bar. Rotule eixos. Grafico sem contexto engana.", code: "import matplotlib.pyplot as plt\nplt.bar(df['mes'], df['venda'])\nplt.xlabel('mes'); plt.show()" }
      ],
      exercises: [
        { t: "Calcule media e desvio de uma coluna.", check: { type: "contains", words: ["mean", "std"] } },
        { t: "Gere um grafico de barras de frequencia.", check: { type: "contains", words: ["bar", "plt"] } }
      ]
    },
    "python/s7": {
      intro: "Arquivos sao onde dados vivem. Voce vai ler/escrever JSON, CSV, usar pathlib e entender o risco do pickle.",
      sections: [
        { h: "context manager", doc: "with open(...) as f fecha sozinho, mesmo com erro. Nunca deixe arquivo aberto.", code: "with open('a.txt', encoding='utf-8') as f:\n    conteudo = f.read()" },
        { h: "JSON e CSV", doc: "json.dump/load para troca de dados; csv.DictReader para tabelas. Use encoding='utf-8'.", code: "import json\nwith open('c.json') as f:\n    d = json.load(f)" },
        { h: "pickle: cuidado", doc: "Unpickle de fonte nao confiavel = RCE. Nunca. Use JSON para dados, controle a origem para ML.", risk: "pickle.load em dados de terceiro executa codigo arbitrario." }
      ],
      exercises: [
        { t: "Salve um dict em JSON e leia de volta.", check: { type: "contains", words: ["json", "dump"] } },
        { t: "Liste arquivos .py com pathlib.glob.", check: { type: "contains", words: ["pathlib", "glob"] } }
      ]
    },
    "python/s8": {
      intro: "Testes sao a rede de seguranca do codigo. Voce vai escrever testes pytest, aplicar TDD e rodar lint no CI.",
      sections: [
        { h: "pytest basico", doc: "Funcoes test_* com assert. pytest as descobre automaticamente.", code: "def test_soma():\n    assert soma(2,3) == 5" },
        { h: "TDD red-green-refactor", doc: "Escreva o teste que falha, implemente o minimo, refatore. Forca design limpo.", steps: ["Escreva test_ que falha (red)", "Implemente para passar (green)", "Refatore sem quebrar (refactor)"] },
        { h: "Lint e tipos no CI", doc: "ruff para estilo, mypy para tipos. Rodar no CI impede codigo ruim de entrar.", cmd: "pip install ruff mypy\nruff check . && mypy ." }
      ],
      exercises: [
        { t: "Escreva 3 testes para uma funcao fatorial.", check: { type: "contains", words: ["def test", "assert"] } },
        { t: "Use pytest.raises para testar excecao.", check: { type: "contains", words: ["pytest.raises"] } }
      ]
    },
    "python/s9": {
      intro: "APIs sao como sistemas conversam. Voce vai criar uma FastAPI com validacao, auth por token e entender o cliente.",
      sections: [
        { h: "FastAPI + pydantic", doc: "Declare o modelo e a validacao ocorre na borda. 422 em entrada errada antes do seu codigo.", code: "from fastapi import FastAPI\nfrom pydantic import BaseModel\napp = FastAPI()\nclass Item(BaseModel):\n    nome: str\n@app.post('/item')\ndef cria(i: Item):\n    return i" },
        { h: "Validacao e auth", doc: "NUNCA confie no cliente. Valide entrada e filtre por user_id do token. Middleware centraliza.", risk: "Entrada nao validada e a porta de injecao; falta de auth por usuario vaza dados alheios." },
        { h: "Cliente e OpenAPI", doc: "requests/httpx consomem APIs com timeout e retry. FastAPI gera /docs automatico.", code: "import requests\nr = requests.get('http://localhost:8000/item', timeout=5)\nprint(r.json())" }
      ],
      exercises: [
        { t: "Crie um endpoint GET que retorna um item por id.", check: { type: "contains", words: ["@app.get", "return"] } },
        { t: "Explique por que validar entrada e obrigatorio.", check: { type: "contains", words: ["valid", "cliente"] } }
      ]
    },
    "python/s10": {
      intro: "Este e o modulo de sintese: voce transforma o aprendido em projeto de portifolio publico e apresentavel.",
      sections: [
        { h: "Esqueleto com TDD", doc: "Comece com testes e venv. Estrutura: src/, tests/, pyproject.toml, README.", steps: ["Crie venv e pyproject", "Escreva o test_ que falha", "Implemente e rode pytest"] },
        { h: "README pt-BR", doc: "O que e, como instalar, como usar, como contribuir. Exemplos copy-paste. Licenca MIT.", code: "# Minha Lib\n## Instalar\npip install -e .\n## Usar\nfrom minha_lib import x" },
        { h: "Publicar e pitch", doc: "gh repo create --public --source=. --push. Prepare pitch de 5 min: problema -> solucao -> testes.", cmd: "gh repo create --public --source=. --push" }
      ],
      exercises: [
        { t: "Crie um repo no GitHub com licenca MIT e README.", check: { type: "contains", words: ["gh", "README"] } },
        { t: "Escreva o pitch de 5 min em 5 bullet points.", check: { type: "contains", words: ["problema", "solucao"] } }
      ]
    },
    "red/s1": {
      intro: "Antes de qualquer exploit, a fronteira legal. Voce vai entender a Lei 12.737/12, montar lab isolado e documentar escopo.",
      sections: [
        { h: "Lei 12.737/12", doc: "Tipifica crimes contra computador: invasao, interceptacao, divulgacao de senha. Penas de prisao. Estudo, pentest e lab isolado sao legais; acessar terceiro sem autorizacao NUNCA.", note: "Leia a lei na integra em planalto.gov.br. Ignorancia nao e defesa." },
        { h: "Lab isolado", doc: "Maquinas virtuais suas, rede privada/NAT, sem rota externa. Metasploitable/DVWA/WebGoat rodam local. Isolamento e a fronteira entre estudo e crime.", steps: ["Crie 2-3 VMs no VirtualBox", "Rede em NAT ou host-only", "Sem ponte para a internet"] },
        { h: "Escopo por escrito", doc: "Autorizacao define IPs, janela e o permitido. Sem escopo escrito, qualquer teste e invasao.", risk: "Apontar ferramenta para site real 'por curiosidade' e crime e fim de carreira." }
      ],
      exercises: [
        { t: "Escreva um termo de autorizacao do seu lab (IPs + janela).", check: { type: "contains", words: ["autoriz", "ip"] } },
        { t: "Liste 3 praticas que sao legais em lab mas ilegais fora dele.", check: { type: "contains", words: ["lab", "ilegal"] } }
      ]
    },
    "red/s2": {
      intro: "Web e o alvo mais comum. Voce vai enumerar, estudar OWASP Top 10 e praticar em WebGoat local.",
      sections: [
        { h: "Enumeracao", doc: "nmap -sV revela portas/servicos; subdomain enum mapeia superficie. So com autorizacao. Em lab, isso revela o exposto.", cmd: "nmap -sV 10.10.10.0/24   # exemplo de lab" },
        { h: "OWASP Top 10", doc: "Catalogo das 10 falhas web criticas (injecao, auth quebrada, XSS...). A biblia do pentester. Estude cada item com exemplo e mitigacao.", note: "A banca espera que voce cite o Top 10." },
        { h: "SQLi e mitigacao", doc: "Injecao SQL vaza/altera dados. Mitigue SEMPRE com prepared statements (parametros, nao concatenacao).", code: "cursor.execute('SELECT * FROM u WHERE id=?', (uid,))  # seguro" }
      ],
      exercises: [
        { t: "Rode o WebGoat em docker e resolva 3 falhas.", check: { type: "contains", words: ["docker", "webgoat"] } },
        { t: "Mostre um prepared statement que previne SQLi.", check: { type: "contains", words: ["execute", "?"] } }
      ]
    },
    "red/s3": {
      intro: "Movimentacao e o que separa 'achei uma vuln' de 'comprometi a rede'. EM LAB, voce entende o conceito sem cometer intrusao.",
      sections: [
        { h: "Pivoting", doc: "Usar maquina comprometida como ponte (ssh -L/-D, chisel). Em lab ensina topologia; na rede alheia e intrusao.", note: "Aponte ferramenta para alvo nao autorizado e crime." },
        { h: "Relatorio executivo + tecnico", doc: "Exec fala impacto para decisor; tecnico detalha passos e provas para quem corrige. Um bom relatorio tem os dois.", steps: ["Resumo do impacto", "Passos reproduziveis", "Evidencias e CVSS"] },
        { h: "Visao azul", doc: "O que gera log? auth falha, conexoes estranhas. Pensar azul e o que torna seu relatorio acionavel.", risk: "Evasao de deteccao fora do lab autorizado e destruicao de evidencia (ilegal)." }
      ],
      exercises: [
        { t: "Desenhe um mapa de attack path em drawio.", check: { type: "contains", words: ["drawio", "path"] } },
        { t: "Liste 2 sinais que o azul usaria para detectar o movimento.", check: { type: "contains", words: ["log", "detect"] } }
      ]
    },
    "red/s4": {
      intro: "Exploracao de binarios e o nucleo da corruptcao de memoria. ESTUDE em C/gdb em lab — entender para defender.",
      sections: [
        { h: "Stack e registradores", doc: "Pilha guarda endereco de retorno; RIP aponta execucao. Sobrescrever retorno muda o fluxo. Base de todo overflow.", note: "Pratique so em programa C vulneravel seu, com gdb." },
        { h: "Mitigacoes", doc: "ASLR randomiza enderecos, NX marca memoria nao-executavel, canary detecta estouro. Entender cada um e propor defesa.", code: "// defesa: compilar com -fstack-protector, PIE, NX" },
        { h: "Privesc e CVE", doc: "linpeas/winpeas enumeram vetores locais em lab. CVE antigo em VM vuln ensina ciclo. Nunca aponte contra real.", risk: "CVE e para corrigir e aprender, nao para atacar sistemas alheios." }
      ],
      exercises: [
        { t: "Explique o que e stack canary e para que serve.", check: { type: "contains", words: ["canary", "estouro"] } },
        { t: "Liste 2 mitigacoes de SO contra overflow.", check: { type: "contains", words: ["ASLR", "NX"] } }
      ]
    },
    "red/s5": {
      intro: "Active Directory e o diretorio corporativo. Entender a estrutura e o Kerberos e o prerequisito para ataque e defesa AD.",
      sections: [
        { h: "Estrutura AD", doc: "DC, OU, grupos, politicas centralizados num dominio. Dominar a estrutura e o prerequisito de qualquer analise AD.", steps: ["Identifique o DC", "Mapeie OUs e grupos", "Liste permissoes"] },
        { h: "Kerberos na teoria", doc: "TGT e TGS com chaves. Entender o handshake explica ataques. Estude a teoria antes da ferramenta.", note: "AS-REP/kerberoasting so EM LAB com contas de teste." },
        { h: "BloodHound e deteccao", doc: "BloodHound desenha o grafo de relacoes. O azul detecta por volume de TGS e consultas LDAP anormais.", risk: "Uso contra AD real sem autorizacao e intrusion em sistema critic." }
      ],
      exercises: [
        { t: "Explique a diferenca entre TGT e TGS.", check: { type: "contains", words: ["TGT", "TGS"] } },
        { t: "Liste 1 mitigacao para kerberoasting.", check: { type: "contains", words: ["senha", "preauth"] } }
      ]
    },
    "red/s6": {
      intro: "Phishing e engenharia social. Aqui e estudo do vetor para DEFESA e conscientizacao, nunca pratica contra terceiros.",
      sections: [
        { h: "Por que funciona", doc: "Urgencia, autoridade e erro humano. Entender a psicologia e a base da defesa por treinamento.", note: "Simulacoes so com autorizacao da org e em dominio de teste." },
        { h: "Indicadores e SPF/DKIM/DMARC", doc: "Ensine a identificar remetente estranho, urgencia, links que nao batem. tecnica: SPF/DKIM validam remetente.", steps: ["Treine o olho do usuario", "Configure SPF/DKIM/DMARC", "Meça taxa de cliques"] },
        { h: "Etica", doc: "Simulacoes somente em ambiente autorizado. Apontar phishing real e ilegal e destroi confianca.", risk: "Engenharia social real contra pessoas e crime." }
      ],
      exercises: [
        { t: "Liste 3 indicadores visuais de phishing.", check: { type: "contains", words: ["remetente", "urgencia"] } },
        { t: "Explique o que SPF/DKIM fazem.", check: { type: "contains", words: ["SPF", "DKIM"] } }
      ]
    },
    "red/s7": {
      intro: "Analise de malware e para defesa em sandbox isolada. Entender comportamento vs assinatura e a base de EDR.",
      sections: [
        { h: "Sandbox isolada", doc: "VM descartavel sem rede e o UNICO lugar para observar amostras. Nunca na maquina real.", risk: "Analisar malware com rede ou fora de VM pode deixar escapar." },
        { h: "Comportamento vs assinatura", doc: "Assinatura (hash) e fragil; comportamento (o que faz) e robusto. Base de EDR moderno.", steps: ["Extraia strings", "Observe rede/arquivos", "Gere IOCs"] },
        { h: "Etica", doc: "Analise e para defesa autorizada. Criar/disseminar e crime. Deixe explicito o proposito educacional.", note: "Sempre documente isolamento e autorizacao." }
      ],
      exercises: [
        { t: "Explique por que deteccao por comportamento supera assinatura.", check: { type: "contains", words: ["comportamento", "assinatura"] } },
        { t: "Liste 2 IOCs extraiveis de um binario.", check: { type: "contains", words: ["IOC", "string"] } }
      ]
    },
    "red/s8": {
      intro: "Evasao e OPSEC. ESTUDO em lab para entender como o defensor detecta. Fora do autorizado, e ilegal — deixe claro.",
      sections: [
        { h: "OPSEC e LoLBin", doc: "OPSEC protege suas info; LoLBin abusa ferramentas legítimas (powershell). Defesa olha comportamento, nao so arquivo.", note: "Uso ofensivo nao autorizado de evasao e crime." },
        { h: "Timestomping (teoria)", doc: "Altera timestamps para confundir forense. Em TEORIA, entenda o vetor e por que logs centralizados/imutaveis sao a defesa.", risk: "Destruicao de evidencia fora do lab e crime." },
        { h: "Deteccao", doc: "O azul pega evasao por gaps de log, processos anomos, telemetria. Sempre feche com 'como o azul pega'.", steps: ["Mapeie o que gera log", "Simule e veja o que falta", "Proponha SIEM"] }
      ],
      exercises: [
        { t: "Explique por que logs centralizados impedem timestomping.", check: { type: "contains", words: ["log", "central"] } },
        { t: "Liste 1 LoLBin e o que ele pode fazer.", check: { type: "contains", words: ["LoLBin", "powershell"] } }
      ]
    },
    "red/s9": {
      intro: "Relatorio e o entregavel final. A banca avalia comunicacao de impacto para tecnicos e decisores.",
      sections: [
        { h: "Resumo executivo", doc: "Primeira pagina: risco e o que fazer, sem jargao. Se o cliente so le isso, deve entender.", steps: ["Risco em 1 paragrafo", "Impacto de negocio", "Recomendacao top"] },
        { h: "Achados + CVSS + evidencias", doc: "Cada achado: severidade (CVSS), descricao, impacto, prova reproduzivel. Sem evidencia, e opiniao.", code: "# CVSS exemplo: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H -> 9.8" },
        { h: "Graficos e pitch", doc: "Barras por severidade comunicam mais que texto. Pitch de 5 min sintetiza para decisores.", note: "Pratique gravado: problema -> impacto -> recomendacao." }
      ],
      exercises: [
        { t: "Escreva um resumo executivo de 3 linhas para um achado hipotetico.", check: { type: "contains", words: ["risco", "impacto"] } },
        { t: "Calcule um CVSS simples para SQLi em login.", check: { type: "contains", words: ["CVSS", "SQLi"] } }
      ]
    },
    "red/s10": {
      intro: "Purple teaming junta vermelho e azul no mesmo loop. O valor e medir o que o azul detecta do que o vermelho faz.",
      sections: [
        { h: "Mapear MITRE ATT&CK", doc: "Matriz de tecnicas de adversario. Mapear seus testes mostra cobertura e lacunas. Linguagem esperada da banca.", steps: ["Liste as tecnicas usadas", "Marque no ATT&CK", "Identifique lacunas"] },
        { h: "Loop teste-detecao", doc: "Vermelho ataca -> azul detecta/falha -> ajusta controle -> re-teste. Continuo, nao avulso.", code: "# metrica: MTTC (detectar) e MTTR (responder)" },
        { h: "Cultura", doc: "Purple e colaboracao, nao culpa. O objetivo e fortalecer o sistema. Comunique isso no relatorio.", note: "Seguranca e trabalho de time." }
      ],
      exercises: [
        { t: "Mapeie 1 ataque no MITRE ATT&CK (ex: initial access).", check: { type: "contains", words: ["MITRE", "ATT&CK"] } },
        { t: "Defina MTTC e MTTR e por que importam.", check: { type: "contains", words: ["MTTC", "MTTR"] } }
      ]
    }
  };

  module.exports = { LESSONS: LESSONS };
})();
