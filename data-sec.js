/* data-sec.js — Dados + Eng Dados + Inglês + Ferramentas Próprias + Rev + Rev-Hacking (10x6) */
window.RMAP = window.RMAP || [];
window.RMAP.push({
  id:"dados", icon:"🗃️", color:"#b9bdc6", title:"Dados (Data Science)",
  desc:"Do dado bruto à insight: coleta, limpeza, análise e visualização. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Coleta & fontes",
      blurb:"Onde os dados moram.",
      start:["CSV/JSON.","APIs.","Web scrap ético.","Banco.","Qualidade.","Documentar."],
      exercises:[
        {t:"Ler CSV com pandas.","tip":"read_csv."},
        {t:"Consumir API JSON.","tip":"requests."},
        {t:"Scrap ético (seu site).","tip":"robots."},
        {t:"Query de banco.","tip":"SQL."},
        {t:"Checar qualidade.","tip":"nulos."},
        {t:"Documentar fonte.","tip":"data dictionary."}
      ],
      schedule:[{wk:"Sem 1",go:"ler."},{wk:"Sem 2",go:"API."},{wk:"Sem 3",go:"qualidade."}],
      deep:[{label:"pandas",url:"https://pandas.pydata.org/docs/"},{label:"requests",url:"https://docs.python-requests.org/"},{label:"StatQuest",url:"https://statquest.org/"}]
    },
    { id:"s2", title:"Limpeza & preparação",
      blurb:"80% do trabalho real.",
      start:["Nulos.","Duplicados.","Tipos.","Outliers.","Padronizar.","Pipeline."],
      exercises:[
        {t:"Tratar nulos.","tip":"drop/fill."},
        {t:"Remover duplicados.","tip":"drop_duplicates."},
        {t:"Corrigir tipos.","tip":"astype."},
        {t:"Detectar outliers.","tip":"boxplot."},
        {t:"Padronizar texto.","tip":"lower/strip."},
        {t:"Pipeline de limpeza.","tip":"função."}
      ],
      schedule:[{wk:"Sem 1",go:"nulos."},{wk:"Sem 2",go:"tipos."},{wk:"Sem 3",go:"pipeline."}],
      deep:[{label:"pandas",url:"https://pandas.pydata.org/docs/"},{label:"Tidy Data",url:"https://vita.had.co.nz/papers/tidy-data.pdf"}]
    },
    { id:"s3", title:"Análise exploratória (EDA)",
      blurb:"Conheça os dados.",
      start:["Resumo.","Distribuições.","Correlação.","Cruzamento.","Hipóteses.","Story."],
      exercises:[
        {t:"describe().","tip":"estatísticas."},
        {t:"Histogramas.","tip":"distribuição."},
        {t:"Matriz de correlação.","tip":"heatmap."},
        {t:"Cruzar 2 var.","tip":"groupby."},
        {t:"Gerar hipóteses.","tip":"padrões."},
        {t:"Contar história.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"resumo."},{wk:"Sem 2",go:"dist."},{wk:"Sem 3",go:"correlação."}],
      deep:[{label:"pandas",url:"https://pandas.pydata.org/docs/"},{label:"Seaborn",url:"https://seaborn.pydata.org/"}]
    },
    { id:"s4", title:"Visualização",
      blurb:"Mostre, não conte.",
      start:["Escolher gráfico.","matplotlib.","seaborn.","Dashboard.","Honestidade.","Storytelling."],
      exercises:[
        {t:"Barras vs linhas.","tip":"categoria vs tempo."},
        {t:"Scatter com cor.","tip":"terceira var."},
        {t:"Heatmap correlação.","tip":"seaborn."},
        {t:"Dashboard simples.","tip":"plotly."},
        {t:"Evitar gráfico mentiroso.","tip":"eixo."},
        {t:"Apresentar insight.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"escolher."},{wk:"Sem 2",go:"matplotlib."},{wk:"Sem 3",go:"dashboard."}],
      deep:[{label:"matplotlib",url:"https://matplotlib.org/stable/tutorials/"},{label:"Seaborn",url:"https://seaborn.pydata.org/"},{label:"Storytelling",url:"https://www.storytellingwithdata.com/"}]
    },
    { id:"s5", title:"Estatística aplicada",
      blurb:"Tire conclusões válidas.",
      start:["Hipótese.","p-value.","Teste t.","IC.","Efeito.","Erro tipo I/II."],
      exercises:[
        {t:"Teste A/B.","tip":"scipy."},
        {t:"p-value interpretação.","tip":"não certeza."},
        {t:"IC 95%.","tip":"margem."},
        {t:"Teste t dois grupos.","tip":"scipy.ttest."},
        {t:"Tamanho de efeito.","tip":"não só p."},
        {t:"Explicar p-value.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"hipótese."},{wk:"Sem 2",go:"teste."},{wk:"Sem 3",go:"efeito."}],
      deep:[{label:"StatQuest",url:"https://statquest.org/"},{label:"scipy",url:"https://docs.scipy.org/"},{label:"Khan Stats",url:"https://www.khanacademy.org/math/statistics-probability"}]
    },
    { id:"s6", title:"Feature engineering",
      blurb:"Monte entradas boas pro modelo.",
      start:["Encoding.","Escalar.","Derivar.","Interação.","Seleção.","Vazamento."],
      exercises:[
        {t:"One-hot categórico.","tip":"pandas get_dummies."},
        {t:"Normalizar numérico.","tip":"StandardScaler."},
        {t:"Derivar feature.","tip":"domínio."},
        {t:"Selecionar melhores.","tip":"importância."},
        {t:"Evitar vazamento.","tip":"leaky."},
        {t:"Explicar feature.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"encoding."},{wk:"Sem 2",go:"escalar."},{wk:"Sem 3",go:"vazamento."}],
      deep:[{label:"Sklearn Preproc",url:"https://scikit-learn.org/stable/modules/preprocessing.html"},{label:"Feature Eng",url:"https://machinelearningmastery.com/"}]
    },
    { id:"s7", title:"Modelos de ML (básico)",
      blurb:"Árvore, regressão, vizinho.",
      start:["Regressão.","Árvore.","KNN.","Treino.","Avaliar.","Comparar."],
      exercises:[
        {t:"Regressão sklearn.","tip":"LinearRegression."},
        {t:"Árvore de decisão.","tip":"DecisionTree."},
        {t:"KNN classificador.","tip":"KNeighbors."},
        {t:"Treinar e prever.","tip":"fit/predict."},
        {t:"Comparar modelos.","tip":"métrica."},
        {t:"Explicar modelo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"regressão."},{wk:"Sem 2",go:"árvore."},{wk:"Sem 3",go:"comparar."}],
      deep:[{label:"Sklearn",url:"https://scikit-learn.org/stable/"},{label:"StatQuest ML",url:"https://statquest.org/"}]
    },
    { id:"s8", title:"Validação de modelo",
      blurb:"Confie no resultado.",
      start:["Holdout.","CV.","Métrica.","Bias/variance.","Overfit.","Calibrar."],
      exercises:[
        {t:"Cross-validation.","tip":"cross_val_score."},
        {t:"Matriz confusão.","tip":"4 quad."},
        {t:"Bias x variance.","tip":"tradeoff."},
        {t:"Regularização.","tip":"alpha."},
        {t:"Curva de aprendizado.","tip":"diagnóstico."},
        {t:"Explicar CV.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"holdout."},{wk:"Sem 2",go:"CV."},{wk:"Sem 3",go:"bias/var."}],
      deep:[{label:"Sklearn",url:"https://scikit-learn.org/stable/"},{label:"StatQuest",url:"https://statquest.org/"}]
    },
    { id:"s9", title:"Comunicação de insight",
      blurb:"O entregável que importa.",
      start:["Pergunta.","Evidência.","Visual.","Recomendação.","Público.","Reprodutível."],
      exercises:[
        {t:"Relatório com gráficos.","tip":"jupyter."},
        {t:"Responder pergunta.","tip":"foco."},
        {t:"Recomendação clara.","tip":"ação."},
        {t:"Slide para banca.","tip":"menos é mais."},
        {t:"Notebook reprodutível.","tip":"seed."},
        {t:"Apresentar insight.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"relatório."},{wk:"Sem 2",go:"recomendação."},{wk:"Sem 3",go:"slide."}],
      deep:[{label:"Jupyter",url:"https://jupyter.org/"},{label:"Storytelling",url:"https://www.storytellingwithdata.com/"}]
    },
    { id:"s10", title:"Projeto de dados",
      blurb:"Tudo num caso real.",
      start:["Escolher.","Coletar.","Limpar.","Modelar.","Visualizar.","Entregar."],
      exercises:[
        {t:"Dataset do mundo real.","tip":"kaggle ético."},
        {t:"Pipeline completo.","tip":"fim a fim."},
        {t:"Modelo + métrica.","tip":"avalia."},
        {t:"Dashboard final.","tip":"plotly."},
        {t:"README + ética.","tip":"uso."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"escolher."},{wk:"Sem 2",go:"pipeline."},{wk:"Sem 3",go:"entregar."}],
      deep:[{label:"Kaggle",url:"https://www.kaggle.com/"},{label:"Sklearn",url:"https://scikit-learn.org/stable/"}]
    }
  ]
});

window.RMAP.push({
  id:"eng-dados", icon:"🛢️", color:"#aeb2ba", title:"Engenharia de Dados",
  desc:"Pipeline, armazenamento e processamento em escala. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Ingestão de dados",
      blurb:"Como dados entram no sistema.",
      start:["Batch.","Streaming.","CDC.","Fila.","Schema.","Idempotência."],
      exercises:[
        {t:"Ingestão batch.","tip":"job agendado."},
        {t:"Streaming Kafka (lab).","tip":"tópico."},
        {t:"CDC de banco.","tip":"log."},
        {t:"Fila de mensagens.","tip":"Redis."},
        {t:"Schema versionado.","tip":"evolução."},
        {t:"Explicar batch vs stream.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"batch."},{wk:"Sem 2",go:"stream."},{wk:"Sem 3",go:"schema."}],
      deep:[{label:"Kafka",url:"https://kafka.apache.org/documentation/"},{label:"Airflow",url:"https://airflow.apache.org/"}]
    },
    { id:"s2", title:"Armazenamento",
      blurb:"Onde e como guardar.",
      start:["OLTP.","OLAP.","Data lake.","Warehouse.","Colunar.","Partição."],
      exercises:[
        {t:"Postgres transacional.","tip":"OLTP."},
        {t:"Data lake arquivos.","tip":"objeto."},
        {t:"Warehouse colunar.","tip":"analytics."},
        {t:"Particionar por data.","tip":"leitura."},
        {t:"Diferença OLTP/OLAP.","tip":"uso."},
        {t:"Explicar lake vs warehouse.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"OLTP."},{wk:"Sem 2",go:"lake."},{wk:"Sem 3",go:"partição."}],
      deep:[{label:"Postgres",url:"https://www.postgresql.org/docs/"},{label:"Data Lake",url:"https://aws.amazon.com/big-data/data-lakes/"}]
    },
    { id:"s3", title:"Processamento distribuído",
      blurb:"Quando um PC não dá conta.",
      start:["MapReduce.","Spark.","Partição.","Shuffle.","Parallel.","Custo."],
      exercises:[
        {t:"Job Spark (lab).","tip":"RDD/DF."},
        {t:"Contar por chave.","tip":"reduceByKey."},
        {t:"Partição de entrada.","tip":"paralelo."},
        {t:"Evitar shuffle.","tip":"performance."},
        {t:"Custo de cluster.","tip":"nós."},
        {t:"Explicar MapReduce.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"spark."},{wk:"Sem 2",go:"partição."},{wk:"Sem 3",go:"custo."}],
      deep:[{label:"Spark",url:"https://spark.apache.org/docs/latest/"},{label:"MapReduce",url:"https://hadoop.apache.org/docs/r1.2.1/mapred_tutorial.html"}]
    },
    { id:"s4", title:"Orquestração",
      blurb:"Agende e encadeie pipelines.",
      start:["DAG.","Airflow.","Dependências.","Retries.","Sensor.","Monitorar."],
      exercises:[
        {t:"DAG no Airflow.","tip":"task decorators."},
        {t:"Dependência de tarefas.","tip":"<< ."},
        {t:"Retry com backoff.","tip":"config."},
        {t:"Sensor de arquivo.","tip":"espera."},
        {t:"Alerta de falha.","tip":"email/slack."},
        {t:"Explicar DAG.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"DAG."},{wk:"Sem 2",go:"depend."},{wk:"Sem 3",go:"alertas."}],
      deep:[{label:"Airflow",url:"https://airflow.apache.org/"},{label:"Prefect",url:"https://www.prefect.io/"}]
    },
    { id:"s5", title:"Modelagem analítica",
      blurb:"Estrela, fatos e dimensões.",
      start:["Star schema.","Fato.","Dimensão.","Snowflake.","ETL.","ELT."],
      exercises:[
        {t:"Star schema.","tip":"fato+dimensões."},
        {t:"Tabela fato.","tip":"métricas."},
        {t:"Dimensão de tempo.","tip":"calendário."},
        {t:"ETL vs ELT.","tip":"ordem."},
        {t:"Modelar pedidos.","tip":"exemplo."},
        {t:"Explicar star.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"star."},{wk:"Sem 2",go:"fato."},{wk:"Sem 3",go:"ETL/ELT."}],
      deep:[{label:"Kimball",url:"https://www.kimballgroup.com/"},{label:"Star Schema",url:"https://en.wikipedia.org/wiki/Star_schema"}]
    },
    { id:"s6", title:"Qualidade de dados",
      blurb:"Dados errados = decisões erradas.",
      start:["Validação.","Contratos.","Duplicatas.","Linha do tempo.","Monitorar.","DL."],
      exercises:[
        {t:"Validar schema.","tip":"great_expectations."},
        {t:"Contrato de dados.","tip":"regras."},
        {t:"Detectar duplicados.","tip":"hash."},
        {t:"Monitorar qualidade.","tip":"alertas."},
        {t:"Data quality gate.","tip":"bloqueia."},
        {t:"Explicar qualidade.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"validar."},{wk:"Sem 2",go:"contrato."},{wk:"Sem 3",go:"monitorar."}],
      deep:[{label:"Great Expectations",url:"https://greatexpectations.io/"},{label:"Data Quality",url:"https://www.ibm.com/topics/data-quality"}]
    },
    { id:"s7", title:"Streaming real-time",
      blurb:"Dados que chegam agora.",
      start:["Evento.","Kafka.","Consumidor.","Janela.","Estado.","Exatamente-uma-vez."],
      exercises:[
        {t:"Producer/consumer Kafka.","tip":"lab."},
        {t:"Janela deslizante.","tip":"agrega."},
        {t:"Estado de agregação.","tip":"checkpoint."},
        {t:"Exatamente-uma-vez.","tip":"idempot."},
        {t:"Contador em tempo real.","tip":"stream."},
        {t:"Explicar streaming.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"kafka."},{wk:"Sem 2",go:"janela."},{wk:"Sem 3",go:"estado."}],
      deep:[{label:"Kafka",url:"https://kafka.apache.org/documentation/"},{label:"Flink",url:"https://flink.apache.org/"}]
    },
    { id:"s8", title:"Lakehouse & formatos",
      blurb:"Junior lake e warehouse.",
      start:["Parquet.","Iceberg.","Delta.","ACID.","Time travel.","Partição."],
      exercises:[
        {t:"Salvar Parquet.","tip":"colunar."},
        {t:"Tabela Iceberg.","tip":"catálogo."},
        {t:"Time travel.","tip":"versão."},
        {t:"ACID no lake.","tip":"transação."},
        {t:"Particionar.","tip":"performance."},
        {t:"Explicar lakehouse.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"parquet."},{wk:"Sem 2",go:"iceberg."},{wk:"Sem 3",go:"acid."}],
      deep:[{label:"Iceberg",url:"https://iceberg.apache.org/"},{label:"Delta",url:"https://delta.io/"}]
    },
    { id:"s9", title:"Observabilidade de dados",
      blurb:"Veja o pipeline falhar antes da banca.",
      start:["Linha.","Métricas.","Logs.","Alertas.","SLA.","Runbook."],
      exercises:[
        {t:"Métricas de pipeline.","tip":"linhas/min."},
        {t:"Alerta de atraso.","tip":"SLA."},
        {t:"Log de erro.","tip":"rastreio."},
        {t:"Runbook de incidente.","tip":"passos."},
        {t:"Dashboard de dados.","tip":"grafana."},
        {t:"Explicar obs.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"métricas."},{wk:"Sem 2",go:"alertas."},{wk:"Sem 3",go:"runbook."}],
      deep:[{label:"OpenTelemetry",url:"https://opentelemetry.io/docs/"},{label:"Grafana",url:"https://grafana.com/docs/"}]
    },
    { id:"s10", title:"Plataforma de dados",
      blurb:"Monte um caso completo.",
      start:["Arquitetura.","Ingestão.","Armazenar.","Processar.","Servir.","Documentar."],
      exercises:[
        {t:"Arquitetura desenhada.","tip":"drawio."},
        {t:"Pipeline batch+stream.","tip":"híbrido."},
        {t:"Servir dashboard.","tip":"BI."},
        {t:"Catálogo de dados.","tip":"governança."},
        {t:"Documentar stack.","tip":"runbook."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"arquitetura."},{wk:"Sem 2",go:"pipeline."},{wk:"Sem 3",go:"servir."}],
      deep:[{label:"Data Engineering",url:"https://www.oreilly.com/library/view/data-engineering/"},{label:"Airflow",url:"https://airflow.apache.org/"}]
    }
  ]
});

window.RMAP.push({
  id:"ingles", icon:"🔤", color:"#b4b8c0", title:"Inglês (Técnico)",
  desc:"Inglês para ler docs, escrever issues e entender a área. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Alfabeto & som",
      blurb:"Base de leitura e pronúncia.",
      start:["Alfabeto.","Vogais.","TH.","Sílabas.","Soletrar.","Ouvir."],
      exercises:[
        {t:"Soletrar seu nome.","tip":"nato."},
        {t:"Som TH.","tip":"think/this."},
        {t:"Ler palavra em voz alta.","tip":"prática."},
        {t:"Contar sílabas.","tip":"dividir."},
        {t:"Ouvir e repetir.","tip":"shadowing."},
        {t:"Explicar som.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"alfabeto."},{wk:"Sem 2",go:"vogais."},{wk:"Sem 3",go:"ouvir."}],
      deep:[{label:"BBC Learning",url:"https://www.bbc.co.uk/learningenglish"},{label:"Duolingo",url:"https://www.duolingo.com/"}]
    },
    { id:"s2", title:"Gramática essencial",
      blurb:"Montar frases certas.",
      start:["Sujeito-verbo.","Presente.","Passado.","Futuro.","Plural.","Artigos."],
      exercises:[
        {t:"Presente simples.","tip":"routine."},
        {t:"Passado regular/irreg.","tip":"ed/2ª col."},
        {t:"Will vs going to.","tip":"futuro."},
        {t:"Plural -s/-es.","tip":"regra."},
        {t:"a/an/the.","tip":"artigos."},
        {t:"Escrever 5 frases.","tip":"prática."}
      ],
      schedule:[{wk:"Sem 1",go:"presente."},{wk:"Sem 2",go:"passado."},{wk:"Sem 3",go:"futuro."}],
      deep:[{label:"English Grammar",url:"https://www.englishgrammar.org/"},{label:"British Council",url:"https://learnenglish.britishcouncil.org/"}]
    },
    { id:"s3", title:"Vocabulário técnico",
      blurb:"Palavras da computação.",
      start:["Hardware.","Software.","Rede.","Bug.","Deploy.","API."],
      exercises:[
        {t:"10 termos TI.","tip":"flashcards."},
        {t:"Ler doc técnica.","tip":"skim."},
        {t:"Traduzir frase código.","tip":"exercício."},
        {t:"Usar termo em frase.","tip":"contexto."},
        {t:"Glossário pessoal.","tip":"anotar."},
        {t:"Explicar termo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"termos."},{wk:"Sem 2",go:"ler."},{wk:"Sem 3",go:"glossário."}],
      deep:[{label:"TechTerms",url:"https://techterms.com/"},{label:"MDN Glossary",url:"https://developer.mozilla.org/en-US/docs/Glossary"}]
    },
    { id:"s4", title:"Leitura de documentação",
      blurb:"A habilidade mais útil para TI.",
      start:["Skim.","Scan.","Comandos.","Exemplos.","Parâmetros.","Praticar."],
      exercises:[
        {t:"Ler doc de função.","tip":"args/return."},
        {t:"Achar exemplo.","tip":"scroll."},
        {t:"Entender --flag.","tip":"opções."},
        {t:"Ler mensagem de erro.","tip":"última linha."},
        {t:"Resumir doc.","tip":"próprias palavras."},
        {t:"Explicar doc.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"skim."},{wk:"Sem 2",go:"exemplos."},{wk:"Sem 3",go:"erros."}],
      deep:[{label:"MDN",url:"https://developer.mozilla.org/"},{label:"DevDocs",url:"https://devdocs.io/"}]
    },
    { id:"s5", title:"Escrita de issue/PR",
      blurb:"Comunique em inglês no GitHub.",
      start:["Title.","Body.","Steps.","Expected.","Code block.","Educado."],
      exercises:[
        {t:"Escrever issue.","tip":"passos."},
        {t:"Descrever PR.","tip":"o que muda."},
        {t:"Bloco de código.","tip":"backticks."},
        {t:"Pedir review.","tip":"polido."},
        {t:"Responder educado.","tip":"tom."},
        {t:"Explicar PR.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"issue."},{wk:"Sem 2",go:"PR."},{wk:"Sem 3",go:"tom."}],
      deep:[{label:"GH Writing",url:"https://docs.github.com/get-started/writing-on-github"},{label:"Conventional Commits",url:"https://www.conventionalcommits.org/"}]
    },
    { id:"s6", title:"Conversação básica",
      blurb:"Participar de reunião/standup.",
      start:["Saudação.","Status.","Pedir ajuda.","Esclarecer.","Agradecer.","Despedir."],
      exercises:[
        {t:"Standup de 1 min.","tip":"what did."},
        {t:"Pedir esclarecimento.","tip":"could you."},
        {t:"Oferecer ajuda.","tip":"i can."},
        {t:"Agradecer.","tip":"thanks."},
        {t:"Roleplay reunião.","tip":"prática."},
        {t:"Explicar fala.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"saudação."},{wk:"Sem 2",go:"status."},{wk:"Sem 3",go:"roleplay."}],
      deep:[{label:"BBC",url:"https://www.bbc.co.uk/learningenglish"},{label:"Meetup",url:"https://www.meetup.com/"}]
    },
    { id:"s7", title:"Escuta ativa",
      blurb:"Entender vídeo/podcast técnico.",
      start:["Podcast.","Vídeo.","Transcrição.","Palavras.","Pausar.","Repetir."],
      exercises:[
        {t:"Ouvir podcast TI.","tip":"legendas."},
        {t:"Ver talk com subtitle.","tip":"conference."},
        {t:"Transcrever trecho.","tip":"prática."},
        {t:"Listar palavras novas.","tip":"glossário."},
        {t:"Resumir ouvido.","tip":"próprias palavras."},
        {t:"Explicar escuta.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"podcast."},{wk:"Sem 2",go:"vídeo."},{wk:"Sem 3",go:"transcrever."}],
      deep:[{label:"YouTube EN",url:"https://www.youtube.com/"},{label:"TED",url:"https://www.ted.com/"}]
    },
    { id:"s8", title:"Apresentação em inglês",
      blurb:"Pitch para a banca/internacional.",
      start:["Slide.","Abertura.","Estrutura.","Fechar.","Perguntas.","Praticar."],
      exercises:[
        {t:"Slide em inglês.","tip":"curto."},
        {t:"Abrir apresentação.","tip":"hook."},
        {t:"Explicar resultado.","tip":"claro."},
        {t:"Prever perguntas.","tip":"Q&A."},
        {t:"Ensaiar 5 min.","tip":"gravar."},
        {t:"Explicar apresentação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"slide."},{wk:"Sem 2",go:"estrutura."},{wk:"Sem 3",go:"ensaiar."}],
      deep:[{label:"TED",url:"https://www.ted.com/"},{label:"Toastmasters",url:"https://www.toastmasters.org/"}]
    },
    { id:"s9", title:"Leitura de papers/artigos",
      blurb:"Acompanhe a área.",
      start:["Abstract.","Introdução.","Método.","Resultados.","Conclusão.","Resumo."],
      exercises:[
        {t:"Ler abstract.","tip":"resumo."},
        {t:"Skim introdução.","tip":"contexto."},
        {t:"Entender figura.","tip":"legenda."},
        {t:"Anotar contribution.","tip":"o que é novo."},
        {t:"Resumir 1 paper.","tip":"próprias palavras."},
        {t:"Explicar paper.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"abstract."},{wk:"Sem 2",go:"método."},{wk:"Sem 3",go:"resumo."}],
      deep:[{label:"arXiv",url:"https://arxiv.org/"},{label:"Semantic Scholar",url:"https://www.semanticscholar.org/"}]
    },
    { id:"s10", title:"Inglês integrado",
      blurb:"Use tudo junto.",
      start:["Revisar.","Ler.","Escrever.","Falar.","Ouvir.","Prova."],
      exercises:[
        {t:"Ler doc + resumir.","tip":"prática."},
        {t:"Escrever issue real.","tip":"github."},
        {t:"Falar 3 min.","tip":"gravar."},
        {t:"Ouvir talk.","tip":"resumo."},
        {t:"Lista de vocabulário.","tip":"100 palavras."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"usar."},{wk:"Sem 3",go:"prova."}],
      deep:[{label:"BBC",url:"https://www.bbc.co.uk/learningenglish"},{label:"Duolingo",url:"https://www.duolingo.com/"}]
    }
  ]
});

window.RMAP.push({
  id:"ferramentas-proprias", icon:"🔧", color:"#b9bdc6", title:"Criar Suas Ferramentas",
  desc:"Deixe de usar só o que existe: construa CLI, automações e utilitários próprios. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Clipe de utilitário",
      blurb:"Seu primeiro binário.",
      start:["argparse.","entrada.","saída.","erro.","help.","executável."],
      exercises:[
        {t:"CLI que renomeia.","tip":"argparse."},
        {t:"Ler stdin.","tip":"sys.stdin."},
        {t:"Mensagem de erro.","tip":"exit code."},
        {t:"--help automático.","tip":"argparse."},
        {t:"Tornar executável.","tip":"chmod +x."},
        {t:"Explicar CLI.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"argparse."},{wk:"Sem 2",go:"io."},{wk:"Sem 3",go:"exec."}],
      deep:[{label:"argparse",url:"https://docs.python.org/3/library/argparse.html"},{label:"Typer",url:"https://typer.tiangolo.com/"}]
    },
    { id:"s2", title:"Automação de arquivos",
      blurb:"Domar o sistema de arquivos.",
      start:["pathlib.","glob.","mover.","organizar.","backup.","log."],
      exercises:[
        {t:"Organizar por extensão.","tip":"os.walk."},
        {t:"Renomear em lote.","tip":"glob."},
        {t:"Backup seletivo.","tip":"shutil."},
        {t:"Log da ação.","tip":"logging."},
        {t:"Dry-run antes.","tip":"seguro."},
        {t:"Explicar automação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"pathlib."},{wk:"Sem 2",go:"mover."},{wk:"Sem 3",go:"log."}],
      deep:[{label:"pathlib",url:"https://docs.python.org/3/library/pathlib.html"},{label:"shutil",url:"https://docs.python.org/3/library/shutil.html"}]
    },
    { id:"s3", title:"Ferramenta de rede",
      blurb:"Use sockets e requests.",
      start:["socket.","requests.","ping.","porta.","timeout.","tratar."],
      exercises:[
        {t:"Checar porta aberta.","tip":"socket."},
        {t:"GET com requests.","tip":"status."},
        {t:"Timeout de conexão.","tip":"segurança."},
        {t:"Scanner de portas (lab).","tip":"autorizado."},
        {t:"Tratar erro de rede.","tip":"try/except."},
        {t:"Explicar socket.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"socket."},{wk:"Sem 2",go:"requests."},{wk:"Sem 3",go:"scanner."}],
      deep:[{label:"socket",url:"https://docs.python.org/3/library/socket.html"},{label:"requests",url:"https://docs.python-requests.org/"}]
    },
    { id:"s4", title:"Parser & processador",
      blurb:"Transforme texto em estrutura.",
      start:["regex.","split.","csv.","json.","template.","validar."],
      exercises:[
        {t:"Extrair emails (regex).","tip":"padrão."},
        {t:"Parse de log.","tip":"linha a linha."},
        {t:"Converter CSV→JSON.","tip":"dict."},
        {t:"Template de saída.","tip":"f-string."},
        {t:"Validar entrada.","tip":"schema."},
        {t:"Explicar parser.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"regex."},{wk:"Sem 2",go:"csv."},{wk:"Sem 3",go:"template."}],
      deep:[{label:"re",url:"https://docs.python.org/3/library/re.html"},{label:"json",url:"https://docs.python.org/3/library/json.html"}]
    },
    { id:"s5", title:"Ferramenta de dados própria",
      blurb:"Seu mini-pandas.",
      start:["ler.","filtrar.","agregar.","ordenar.","exportar.","CLI."],
      exercises:[
        {t:"Filtrar linhas.","tip":"condição."},
        {t:"Agregar por coluna.","tip":"group."},
        {t:"Ordenar.","tip":"sort."},
        {t:"Exportar CSV.","tip":"writer."},
        {t:"CLI com argparse.","tip":"opções."},
        {t:"Explicar ferramenta.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ler."},{wk:"Sem 2",go:"agregar."},{wk:"Sem 3",go:"CLI."}],
      deep:[{label:"pandas",url:"https://pandas.pydata.org/docs/"},{label:"csv",url:"https://docs.python.org/3/library/csv.html"}]
    },
    { id:"s6", title:"Plugin/extensão",
      blurb:"Estenda uma ferramenta existente.",
      start:["API da ferramenta.","Hook.","Config.","Distribuir.","Exemplo.","Documentar."],
      exercises:[
        {t:"Plugin de CLI (click).","tip":"grupo."},
        {t:"Hook de git.","tip":"pre-commit."},
        {t:"Config via arquivo.","tip":"yaml."},
        {t:"Empacotar (pyproject).","tip":"entry point."},
        {t:"README do plugin.","tip":"uso."},
        {t:"Explicar extensão.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"API."},{wk:"Sem 2",go:"hook."},{wk:"Sem 3",go:"empacotar."}],
      deep:[{label:"click",url:"https://click.palletsprojects.com/"},{label:"pre-commit",url:"https://pre-commit.com/"}]
    },
    { id:"s7", title:"Interface (TUI/GUI leve)",
      blurb:"Dê cara à ferramenta.",
      start:["TUI.","textual.","menu.","entrada.","saída.","acessível."],
      exercises:[
        {t:"TUI com textual.","tip":"widget."},
        {t:"Menu interativo.","tip":"setas."},
        {t:"Entrada validada.","tip":"form."},
        {t:"Saída colorida.","tip":"rich."},
        {t:"Atalhos.","tip":"teclado."},
        {t:"Explicar UI.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"TUI."},{wk:"Sem 2",go:"menu."},{wk:"Sem 3",go:"saída."}],
      deep:[{label:"Textual",url:"https://textual.textualize.io/"},{label:"Rich",url:"https://rich.readthedocs.io/"}]
    },
    { id:"s8", title:"Testes da ferramenta",
      blurb:"Ela tem que funcionar.",
      start:["pytest.","CLI test.","fixture.","tmp_path.","mock.","cover."],
      exercises:[
        {t:"Testar CLI.","tip":"CliRunner."},
        {t:"Fixture de arquivo.","tip":"tmp_path."},
        {t:"Mock de rede.","tip":"responses."},
        {t:"Cobertura.","tip":"--cov."},
        {t:"Teste de erro.","tip":"pytest.raises."},
        {t:"Explicar teste.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"pytest."},{wk:"Sem 2",go:"fixture."},{wk:"Sem 3",go:"cover."}],
      deep:[{label:"pytest",url:"https://docs.pytest.org/"},{label:"CliRunner",url:"https://click.palletsprojects.com/en/8.1.x/testing/"}]
    },
    { id:"s9", title:"Publicar & documentar",
      blurb:"Compartilhe (mesmo que só no lab).",
      start:["pyproject.","README.","licença.","gh.","versionar.","changelog."],
      exercises:[
        {t:"pyproject + entry.","tip":"scripts."},
        {t:"README claro.","tip":"exemplos."},
        {t:"Licença MIT.","tip":"arquivo."},
        {t:"Publicar no gh.","tip":"gh repo."},
        {t:"Changelog.","tip":"keepachangelog."},
        {t:"Explicar publicação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"pyproject."},{wk:"Sem 2",go:"readme."},{wk:"Sem 3",go:"gh."}],
      deep:[{label:"Packaging",url:"https://packaging.python.org/"},{label:"gh CLI",url:"https://cli.github.com/"}]
    },
    { id:"s10", title:"Catálogo de ferramentas",
      blurb:"Seu canivete suíço pessoal.",
      start:["Listar.","Padronizar.","CLI única.","Docs.","Manter.","Demo."],
      exercises:[
        {t:"Repo de utilitários.","tip":"pasta."},
        {t:"CLI mãe (grupo).","tip":"click group."},
        {t:"Docs de cada.","tip":"exemplos."},
        {t:"Atualizar.","tip":"PRs."},
        {t:"Demo gravada.","tip":"banca."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"listar."},{wk:"Sem 2",go:"padrão."},{wk:"Sem 3",go:"demo."}],
      deep:[{label:"click",url:"https://click.palletsprojects.com/"},{label:"Typer",url:"https://typer.tiangolo.com/"}]
    }
  ]
});

window.RMAP.push({
  id:"rev", icon:"🪛", color:"#aeb2ba", title:"Engenharia Reversa",
  desc:"Entender o que o software faz olhando por dentro. 10 módulos com 6 atividades (em binários seus/lab).",
  stages:[
    { id:"s1", title:"Conceitos & ética",
      blurb:"O que é permitido.",
      start:["O que é RE.","Licença.","Seu binário.","Finalidade.","Legal.","Documentar."],
      exercises:[
        {t:"RE de seu próprio bin.","tip":"autorizado."},
        {t:"Ler licença.","tip":"o que proíbe."},
        {t:"Definir objetivo.","tip":"o que descobrir."},
        {t:"Documentar passos.","tip":"log."},
        {t:"Explicar ética.","tip":"banca."},
        {t:"Laboratório isolado.","tip":"sem rede."}
      ],
      schedule:[{wk:"Sem 1",go:"conceito."},{wk:"Sem 2",go:"ética."},{wk:"Sem 3",go:"lab."}],
      deep:[{label:"Legal RE",url:"https://en.wikipedia.org/wiki/Reverse_engineering"},{label:"EULA",url:"https://en.wikipedia.org/wiki/End-user_license_agreement"}]
    },
    { id:"s2", title:"Formatos de binário",
      blurb:"Como o executável é montado.",
      start:["ELF.","PE.","Seções.","Símbolos.","Entry.","Strings."],
      exercises:[
        {t:"Ler cabeçalho ELF.","tip":"readelf."},
        {t:"Seções do binário.","tip":"objdump -h."},
        {t:"Símbolos presentes.","tip":"nm."},
        {t:"Strings do bin.","tip":"strings."},
        {t:"Entry point.","tip":"main."},
        {t:"Explicar formato.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ELF."},{wk:"Sem 2",go:"seções."},{wk:"Sem 3",go:"strings."}],
      deep:[{label:"ELF",url:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format"},{label:"readelf",url:"https://man7.org/linux/man-pages/man1/readelf.1.html"}]
    },
    { id:"s3", title:"Desmontagem (assembly)",
      blurb:"Leia o código de máquina.",
      start:["Assembly x86.","Registradores.","Instruções.","Função.","Chamada.","Desmontar."],
      exercises:[
        {t:"Disassembly com objdump.","tip":"-d."},
        {t:"Registradores comuns.","tip":"rax/rbx."},
        {t:"Prologue de função.","tip":"push rbp."},
        {t:"Chamada de função.","tip":"call."},
        {t:"Identificar main.","tip":"entry."},
        {t:"Explicar asm.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"asm."},{wk:"Sem 2",go:"regs."},{wk:"Sem 3",go:"função."}],
      deep:[{label:"x86 Guide",url:"https://www.felixcloutier.com/x86/"},{label:"Assembly",url:"https://en.wikipedia.org/wiki/X86"}]
    },
    { id:"s4", title:"Análise estática",
      blurb:"Sem executar.",
      start:["Strings.","Imports.","Seções.","Grafcet.","Constantes.","Padrões."],
      exercises:[
        {t:"Imports do bin.","tip":"objdump -T."},
        {t:"Constantes interessantes.","tip":"strings."},
        {t:"Gráfico de chamadas.","tip":"radare2."},
        {t:"Identificar libs.","tip":"linkadas."},
        {t:"Padrão de ofuscação.","tip":"observar."},
        {t:"Explicar estática.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"imports."},{wk:"Sem 2",go:"grafo."},{wk:"Sem 3",go:"padrões."}],
      deep:[{label:"radare2",url:"https://rada.re/n/"},{label:"Ghidra",url:"https://ghidra-sre.org/"}]
    },
    { id:"s5", title:"Depuração dinâmica",
      blurb:"Execute e observe.",
      start:["Breakpoint.","Registradores.","Memória.","Passo.","Watch.","gdb."],
      exercises:[
        {t:"Breakpoint no main.","tip":"gdb break."},
        {t:"Inspecionar registrador.","tip":"info reg."},
        {t:"Passo a passo.","tip":"step/next."},
        {t:"Ler memória.","tip":"x/10x."},
        {t:"Watch de variável.","tip":"watch."},
        {t:"Explicar debug.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"breakpoint."},{wk:"Sem 2",go:"regs."},{wk:"Sem 3",go:"memória."}],
      deep:[{label:"gdb",url:"https://www.sourceware.org/gdb/"},{label:"radare2",url:"https://rada.re/n/"}]
    },
    { id:"s6", title:"Descompilação",
      blurb:"Volte ao (quase) código fonte.",
      start:["Decompilador.","Pseudo-c.","Variáveis.","Estruturas.","Limites.","Comparar."],
      exercises:[
        {t:"Decompilar com Ghidra.","tip":"pseudo-c."},
        {t:"Renomear função.","tip":"contexto."},
        {t:"Identificar estrutura.","tip":"if/loop."},
        {t:"Tipos de variável.","tip":"inferir."},
        {t:"Comparar asm x pseudo.","tip":"validar."},
        {t:"Explicar limites.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"decomp."},{wk:"Sem 2",go:"renomear."},{wk:"Sem 3",go:"tipos."}],
      deep:[{label:"Ghidra",url:"https://ghidra-sre.org/"},{label:"IDA",url:"https://hex-rays.com/ida-free/"}]
    },
    { id:"s7", title:"Protocolos & formatos",
      blurb:"Reverter protocolos de rede/arquivo.",
      start:["Capturar.","Parser.","Campos.","Magic bytes.","Reconstruir.","Documentar."],
      exercises:[
        {t:"Magic bytes de formato.","tip":"header."},
        {t:"Parser de formato próprio.","tip":"script."},
        {t:"Capturar protocolo lab.","tip":"wireshark."},
        {t:"Inferir campos.","tip":"padrão."},
        {t:"Reconstruir mensagem.","tip":"estrutura."},
        {t:"Explicar protocolo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"magic."},{wk:"Sem 2",go:"parser."},{wk:"Sem 3",go:"capturar."}],
      deep:[{label:"Wireshark",url:"https://www.wireshark.org/docs/"},{label:"File Signatures",url:"https://en.wikipedia.org/wiki/List_of_file_signatures"}]
    },
    { id:"s8", title:"Anti-táticas (teoria)",
      blurb:"O que dificulta a RE.",
      start:["Packer.","Ofuscação.","Anti-debug.","Checksum.","VM.","Como driblar."],
      exercises:[
        {t:"Detectar packer.","tip":"entropia."},
        {t:"Anti-debug conceito.","tip":"ptrace."},
        {t:"Checksum de integridade.","tip":"self-check."},
        {t:"Ofuscação de strings.","tip":"observar."},
        {t:"Unpacking teoria.","tip":"lab."},
        {t:"Explicar defesa.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"packer."},{wk:"Sem 2",go:"anti-dbg."},{wk:"Sem 3",go:"unpack."}],
      deep:[{label:"Packing",url:"https://en.wikipedia.org/wiki/Executable_compression"},{label:"Anti-debug",url:"https://anti-debug.readthedocs.io/"}]
    },
    { id:"s9", title:"RE de malware (lab ético)",
      blurb:"Só em sandbox isolada e seu.",
      start:["Sandbox.","Comportamento.","IOC.","YARA.","Relatório.","Ética."],
      exercises:[
        {t:"Sample seu em sandbox.","tip":"nunca host."},
        {t:"Comportamento observado.","tip":"syscalls."},
        {t:"IOC extraído.","tip":"MITRE."},
        {t:"YARA da família.","tip":"padrão."},
        {t:"Relatório de RE.","tip":"prova."},
        {t:"Explicar ética.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"sandbox."},{wk:"Sem 2",go:"comport."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"Ghidra",url:"https://ghidra-sre.org/"},{label:"ANY.RUN",url:"https://any.run/"},{label:"MITRE",url:"https://attack.mitre.org/"}]
    },
    { id:"s10", title:"Caso de RE completo",
      blurb:"Revirando Ponta a Ponta.",
      start:["Escolher.","Estática.","Dinâmica.","Protocolo.","Relatório.","Apresentar."],
      exercises:[
        {t:"Binário seu de alvo.","tip":"autorizado."},
        {t:"Análise estática.","tip":"strings/asm."},
        {t:"Depurar.","tip":"gdb."},
        {t:"Reconstruir lógica.","tip":"pseudo-c."},
        {t:"Relatório técnico.","tip":"banca."},
        {t:"Defesa da análise.","tip":"pergunta."}
      ],
      schedule:[{wk:"Sem 1",go:"escolher."},{wk:"Sem 2",go:"estática."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"Ghidra",url:"https://ghidra-sre.org/"},{label:"radare2",url:"https://rada.re/n/"}]
    }
  ]
});

window.RMAP.push({
  id:"rev-hacking", icon:"🕵️", color:"#b4b8c0", title:"Rev p/ Op. em Hacking",
  desc:"Usar engenharia reversa em operações de segurança (lab autorizado). 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"RE em red team (lab)",
      blurb:"Entender a ferramenta antes de usá-la.",
      start:["Por quê.","Alvo seu.","Escopo.","Método.","Ética.","Documentar."],
      exercises:[
        {t:"RE de seu exploit lab.","tip":"autorizado."},
        {t:"Mapear comportamento.","tip":"estático."},
        {t:"Definir uso ofensivo.","tip":"planejar."},
        {t:"Respeitar escopo.","tip":"só lab."},
        {t:"Log de passos.","tip":"reprodutível."},
        {t:"Explicar propósito.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"porquê."},{wk:"Sem 2",go:"alvo."},{wk:"Sem 3",go:"escopo."}],
      deep:[{label:"MITRE",url:"https://attack.mitre.org/"},{label:"Ghidra",url:"https://ghidra-sre.org/"}]
    },
    { id:"s2", title:"Análise de C2 (lab)",
      blurb:"Como um canal de comando funciona.",
      start:["C2 conceito.","Protocolo.","Cripto.","IOC.","Detectar.","Lab."],
      exercises:[
        {t:"Estrutura de msg C2.","tip":"campos."},
        {t:"Capturar C2 lab.","tip":"wireshark."},
        {t:"Identificar beaconing.","tip":"frequência."},
        {t:"IOC de C2.","tip":"MITRE."},
        {t:"Como o blue detecta.","tip":"telemetria."},
        {t:"Explicar C2.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"conceito."},{wk:"Sem 2",go:"capturar."},{wk:"Sem 3",go:"detectar."}],
      deep:[{label:"MITRE C2",url:"https://attack.mitre.org/tactics/TA0011/"},{label:"Wireshark",url:"https://www.wireshark.org/docs/"}]
    },
    { id:"s3", title:"Fuzzing de binário",
      blurb:"Achar bugs para entender comportamento.",
      start:["Fuzzing.","Entrada.","Crash.","Triagem.","Reproduzir.","Lab."],
      exercises:[
        {t:"Fuzzer simples.","tip":"mutação."},
        {t:"Alimentar binário.","tip":"stdin."},
        {t:"Capturar crash.","tip":"core."},
        {t:"Triar crash.","tip":"unique."},
        {t:"Reproduzir.","tip":"determinístico."},
        {t:"Explicar fuzzing.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"fuzzer."},{wk:"Sem 2",go:"crash."},{wk:"Sem 3",go:"triar."}],
      deep:[{label:"AFL",url:"https://github.com/AFLplusplus/AFLplusplus"},{label:"libFuzzer",url:"https://llvm.org/docs/LibFuzzer.html"}]
    },
    { id:"s4", title:"Patch & hook (lab)",
      blurb:"Modificar comportamento para teste.",
      start:["Patch.","Nop.","Hook.","LD_PRELOAD.","Propósito.","Ética."],
      exercises:[
        {t:"Patch de binário.","tip":"hexedit."},
        {t:"Nop de instrução.","tip":"0x90."},
        {t:"Hook via LD_PRELOAD.","tip":"lib."},
        {t:"Modificar fluxo.","tip":"teste."},
        {t:"Restaurar original.","tip":"hash."},
        {t:"Explicar patch.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"patch."},{wk:"Sem 2",go:"hook."},{wk:"Sem 3",go:"restaurar."}],
      deep:[{label:"LD_PRELOAD",url:"https://mateusfreitas.dev/ld-preload/"},{label:"Ghidra",url:"https://ghidra-sre.org/"}]
    },
    { id:"s5", title:"Análise de exploit (estudo)",
      blurb:"Entenda CVE para defender melhor.",
      start:["CVE.","Root cause.","PoC.","Mitigação.","Lab.","Relatório."],
      exercises:[
        {t:"Ler CVE conhecido.","tip":"nvd."},
        {t:"Causa raiz.","tip":"bug."},
        {t:"PoC em lab.","tip":"seguro."},
        {t:"Escrever mitigação.","tip":"patch."},
        {t:"Explicar vetor.","tip":"banca."},
        {t:"Relatório de CVE.","tip":"estudo."}
      ],
      schedule:[{wk:"Sem 1",go:"CVE."},{wk:"Sem 2",go:"root."},{wk:"Sem 3",go:"mitig."}],
      deep:[{label:"NVD",url:"https://nvd.nist.gov/"},{label:"CVE",url:"https://cve.mitre.org/"}]
    },
    { id:"s6", title:"Cripto em binário",
      blurb:"Achar segredos e algoritmos.",
      start:["Strings.","Constantes.","Algoritmo.","Chave.","Hardcoded.","Reportar."],
      exercises:[
        {t:"Strings com segredo.","tip":"grep."},
        {t:"Identificar AES.","tip":"constantes."},
        {t:"Chave hardcoded.","tip":"extrair."},
        {t:"Por que é ruim.","tip":"segurança."},
        {t:"Sugerir correção.","tip":"vault."},
        {t:"Explicar risco.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"strings."},{wk:"Sem 2",go:"algo."},{wk:"Sem 3",go:"chave."}],
      deep:[{label:"Ghidra",url:"https://ghidra-sre.org/"},{label:"OWASP",url:"https://owasp.org/"}]
    },
    { id:"s7", title:"Evasão de defesa (teoria)",
      blurb:"Como o blue te veria.",
      start:["Telemetria.","EDR.","Logs.","Comportamento.","Detectar.","Ética."],
      exercises:[
        {t:"Mapear telemetria.","tip":"eventos."},
        {t:"Comportamento suspeito.","tip":"observar."},
        {t:"Como EDR detecta.","tip":"hooks."},
        {t:"Log de cada ação.","tip":"prever."},
        {t:"Reduzir rastro (lab).","tip":"opsec."},
        {t:"Explicar detecção.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"telemetria."},{wk:"Sem 2",go:"EDR."},{wk:"Sem 3",go:"opsec."}],
      deep:[{label:"MITRE",url:"https://attack.mitre.org/"},{label:"Atomic Tests",url:"https://github.com/redcanaryco/atomic-red-team"}]
    },
    { id:"s8", title:"Emulação & laboratório",
      blurb:"Reproduza o alvo.",
      start:["Emular.","QEMU.","Unicorn.","Arquitetura.","Testar.","Lab."],
      exercises:[
        {t:"Emular bin (QEMU).","tip":"user-mode."},
        {t:"Unicorn snippet.","tip":"exec."},
        {t:"Arquitetura alvo.","tip":"arm/x86."},
        {t:"Rodar trecho.","tip":"isolado."},
        {t:"Comparar real x emu.","tip":"validar."},
        {t:"Explicar emulação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"qemu."},{wk:"Sem 2",go:"unicorn."},{wk:"Sem 3",go:"arq."}],
      deep:[{label:"QEMU",url:"https://www.qemu.org/docs/"},{label:"Unicorn",url:"https://www.unicorn-engine.org/"}]
    },
    { id:"s9", title:"Relatório ofensivo de RE",
      blurb:"Comunique achados para defesa.",
      start:["Resumo.","Técnica.","Evidência.","Mitigação.","CVSS.","Entregar."],
      exercises:[
        {t:"Relatório técnico.","tip":"prova."},
        {t:"Evidência do bin.","tip":"hash."},
        {t:"Mitigação sugerida.","tip":"patch."},
        {t:"CVSS do achado.","tip":"calculadora."},
        {t:"Para o blue ler.","tip":"claro."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"resumo."},{wk:"Sem 2",go:"técnica."},{wk:"Sem 3",go:"entregar."}],
      deep:[{label:"MITRE",url:"https://attack.mitre.org/"},{label:"CVSS",url:"https://www.first.org/cvss/calculator/3.1"}]
    },
    { id:"s10", title:"Operação integrada",
      blurb:"RE apoiando um exercício.",
      start:["Brief.","Alvo.","Analisar.","Apoiar.","Relatório.","Lição."],
      exercises:[
        {t:"Brief de operação.","tip":"lab."},
        {t:"RE de ferramenta.","tip":"autorizado."},
        {t:"Apoiar passo ofensivo.","tip":"descoberta."},
        {t:"Documentar descoberta.","tip":"prova."},
        {t:"Relatório conjunto.","tip":"blue+red."},
        {t:"Retrospectiva.","tip":"lessons."}
      ],
      schedule:[{wk:"Sem 1",go:"brief."},{wk:"Sem 2",go:"analisar."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"MITRE",url:"https://attack.mitre.org/"},{label:"Atomic Red",url:"https://github.com/redcanaryco/atomic-red-team"}]
    }
  ]
});
