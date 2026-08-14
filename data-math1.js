/* data-math1.js — Pré-Cálculo + Cálculo 1 (10x6 cada) */
window.RMAP = window.RMAP || [];
window.RMAP.push({
  id:"precalculo", icon:"∑", color:"#b9bdc6", title:"Pré-Cálculo",
  desc:"A base que o cálculo exige: funções, álgebra, trigonometria e gráficos. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Conjuntos & números",
      blurb:"Linguagem da matemática.",
      start:["Conjuntos.","Reais/complexos.","Intervalos.","Valor absoluto.","Desigualdades.","Notação."],
      exercises:[
        {t:"União/interseção de conjuntos.","tip":"diagrama."},
        {t:"Resolver |x-2|<3.","tip":"intervalo."},
        {t:"Representar intervalo na reta.","tip":"[a,b]."},
        {t:"Operar com i (complexos).","tip":"i^2=-1."},
        {t:"Desigualdade quadrática.","tip":"sinais."},
        {t:"Explicar número irracional.","tip":"raiz."}
      ],
      schedule:[{wk:"Sem 1",go:"conjuntos."},{wk:"Sem 2",go:"reais."},{wk:"Sem 3",go:"intervalos."}],
      deep:[{label:"Khan Precalc",url:"https://www.khanacademy.org/math/precalculus"},{label:"Paul Notes",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s2", title:"Funções & gráficos",
      blurb:"O conceito central do cálculo.",
      start:["Definição.","Domínio/contradomínio.","Gráfico.","Zero da função.","Crescimento.","Simétria."],
      exercises:[
        {t:"Domínio de f(x)=1/(x-1).","tip":"x≠1."},
        {t:"Gráfico de parábola.","tip":"vértice."},
        {t:"Achar zeros.","tip":"f(x)=0."},
        {t:"Função par/ímpar.","tip":"f(-x)."},
        {t:"Composição f(g(x)).","tip":"dentro."},
        {t:"Inversa (se existir).","tip":"troca x/y."}
      ],
      schedule:[{wk:"Sem 1",go:"definição."},{wk:"Sem 2",go:"gráfico."},{wk:"Sem 3",go:"inversa."}],
      deep:[{label:"Khan Functions",url:"https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions"},{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"}]
    },
    { id:"s3", title:"Álgebra & polinômios",
      blurb:"Manipular expressões com confiança.",
      start:["Fatoração.","Produtos notáveis.","Divisão.","Teorema resto.","Equações.","Sistemas."],
      exercises:[
        {t:"Fatorar x^2-5x+6.","tip":"raízes."},
        {t:"Produto notável (a+b)^2.","tip":"expandir."},
        {t:"Dividir polinômios.","tip":"Ruffini."},
        {t:"Resolver sistema 2x2.","tip":"substituição."},
        {t:"Teorema do resto.","tip":"P(a)."},
        {t:"Equação do 2º grau.","tip":"bhaskara."}
      ],
      schedule:[{wk:"Sem 1",go:"fatorar."},{wk:"Sem 2",go:"dividir."},{wk:"Sem 3",go:"sistemas."}],
      deep:[{label:"Paul Algebra",url:"https://tutorial.math.lamar.edu/classes/alg/Alg.aspx"},{label:"Khan",url:"https://www.khanacademy.org/math/algebra"}]
    },
    { id:"s4", title:"Expoentes & logaritmos",
      blurb:"Crescimento e sua inversa.",
      start:["Leis de potência.","Raízes.","Log propriedades.","Troca base.","Equações.","Aplicações."],
      exercises:[
        {t:"Simplificar 2^3·2^5.","tip":"soma expo."},
        {t:"log(ab)=log a+log b.","tip":"propriedade."},
        {t:"Resolver 2^x=16.","tip":"log."},
        {t:"Mudar base log.","tip":"fórmula."},
        {t:"Equação logística.","tip":"isolar."},
        {t:"Explicar pH/ Richter.","tip":"log."}
      ],
      schedule:[{wk:"Sem 1",go:"potências."},{wk:"Sem 2",go:"logs."},{wk:"Sem 3",go:"equações."}],
      deep:[{label:"Khan Logs",url:"https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s5", title:"Trigonometria",
      blurb:"Ângulos, seno e cosseno.",
      start:["Triângulo retângulo.","Sen/cos/tg.","Círculo unitário.","Identidades.","Arcos.","Radianos."],
      exercises:[
        {t:"sen/cos de 30/60/90.","tip":"especial."},
        {t:"Círculo unitário.","tip":"raio 1."},
        {t:"Identidade pitagórica.","tip":"sen^2+cos^2=1."},
        {t:"Converter graus→rad.","tip":"pi/180."},
        {t:"Lei dos senos.","tip":"triângulo."},
        {t:"Gráfico de seno.","tip":"período."}
      ],
      schedule:[{wk:"Sem 1",go:"triângulo."},{wk:"Sem 2",go:"círculo."},{wk:"Sem 3",go:"identidades."}],
      deep:[{label:"Khan Trig",url:"https://www.khanacademy.org/math/trigonometry"},{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"}]
    },
    { id:"s6", title:"Sequências & séries",
      blurb:"Listas e somas.",
      start:["Sequência.","PA.","PG.","Limite de seq.","Série.","Soma finita."],
      exercises:[
        {t:"Termo geral PA.","tip":"a_n=a1+(n-1)r."},
        {t:"Soma PG finita.","tip":"fórmula."},
        {t:"Convergência de 1/n^2.","tip":"série p."},
        {t:"Sequência recursiva.","tip":"a_{n+1}."},
        {t:"Soma dos 100 primeiros.","tip":"PA."},
        {t:"Explicar série infinita.","tip":"limite."}
      ],
      schedule:[{wk:"Sem 1",go:"PA/PG."},{wk:"Sem 2",go:"séries."},{wk:"Sem 3",go:"convergência."}],
      deep:[{label:"Khan Series",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s7", title:"Limiares intuitivos",
      blurb:"O que vem antes do cálculo.",
      start:["Ideia de limite.","Gráfico.","Infinito.","Indeterminados.","Continuidade.","Vizinhança."],
      exercises:[
        {t:"lim x→2 de x^2.","tip":"2 ao quadrado."},
        {t:"Gráfico e vizinhança.","tip":"zoom."},
        {t:"0/0 intuitivo.","tip":"fatorar."},
        {t:"Continuidade em ponto.","tip":"sem salto."},
        {t:"lim 1/x x→∞.","tip":"0."},
        {t:"Explicar assíntota.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"intuição."},{wk:"Sem 2",go:"cont."},{wk:"Sem 3",go:"assíntota."}],
      deep:[{label:"Khan Limits",url:"https://www.khanacademy.org/math/calculus-1"},{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"}]
    },
    { id:"s8", title:"Reta & reta tangente",
      blurb:"Preparação para derivada.",
      start:["Coeficiente angular.","Reta.","Ponto.","Tangente.","Secante.","Aproximação."],
      exercises:[
        {t:"Inclinação de reta.","tip":"delta y/delta x."},
        {t:"Equação da reta.","tip":"y=mx+b."},
        {t:"Secante entre 2 pontos.","tip":"média."},
        {t:"Aprox tangente por secante.","tip":"chega perto."},
        {t:"Reta por ponto.","tip":"ponto-inclinação."},
        {t:"Explicar taxa média.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"reta."},{wk:"Sem 2",go:"tangente."},{wk:"Sem 3",go:"aprox."}],
      deep:[{label:"Khan",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s9", title:"Modelagem com funções",
      blurb:"Aplicar na prática.",
      start:["Linear.","Exponencial.","Logística.","População.","Juros.","Interpolação."],
      exercises:[
        {t:"Crescimento exponencial.","tip":"2^t."},
        {t:"Juros compostos.","tip":"M(1+i)^n."},
        {t:"Modelo logístico.","tip":"teto."},
        {t:"Regressão linear.","tip":"mínimos q."},
        {t:"Interpolar ponto.","tip":"entre."},
        {t:"Explicar saturação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"exp."},{wk:"Sem 2",go:"juros."},{wk:"Sem 3",go:"modelo."}],
      deep:[{label:"Khan Modeling",url:"https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions"},{label:"Desmos",url:"https://www.desmos.com/"}]
    },
    { id:"s10", title:"Pré-cálculo integrado",
      blurb:"Junte tudo antes do Cálculo 1.",
      start:["Revisar.","Misturar tópicos.","Problemas.","Gráficos.","Erros.","Checklist."],
      exercises:[
        {t:"Problema misto.","tip":"função+log."},
        {t:"Gráfico completo.","tip":"transformações."},
        {t:"Erro comum de sinal.","tip":"revisar."},
        {t:"Lista de fórmulas.","tip":"resumo."},
        {t:"Resolver 10 variados.","tip":"prática."},
        {t:"Autoavaliação.","tip":"corrigir."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"problemas."},{wk:"Sem 3",go:"checklist."}],
      deep:[{label:"Khan Precalc",url:"https://www.khanacademy.org/math/precalculus"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    }
  ]
});

window.RMAP.push({
  id:"calculo1", icon:"∫", color:"#aeb2ba", title:"Cálculo 1 (Limites & Derivadas)",
  desc:"Derivadas e limites do zero. 10 módulos com 6 atividades, com intuição e cálculo à mão.",
  stages:[
    { id:"s1", title:"Limites",
      blurb:"O fundamento do cálculo.",
      start:["Definição.","Gráfico.","Laterais.","Infinito.","Indeterminados.","Propriedades."],
      exercises:[
        {t:"lim x→a f(x) por tabela.","tip":"valores."},
        {t:"Limites laterais iguais.","tip":"continuidade."},
        {t:"lim 1/x² x→0.","tip":"infinito."},
        {t:"0/0 fatorando.","tip":"cancelar."},
        {t:"lim sen x/x =1.","tip":"fundamental."},
        {t:"Explicar não-existência.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"def."},{wk:"Sem 2",go:"laterais."},{wk:"Sem 3",go:"indet."}],
      deep:[{label:"Khan Limits",url:"https://www.khanacademy.org/math/calculus-1/getting-started-calc-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/classes/calci/limits.aspx"}]
    },
    { id:"s2", title:"Continuidade",
      blurb:"Funções sem 'pulos'.",
      start:["Definição.","Tipos de descont.","Removível.","Intervalos.","Teorema valor intermédio.","Aplicação."],
      exercises:[
        {t:"Ver continuidade em ponto.","tip":"3 condições."},
        {t:"Descontinuidade removível.","tip":"buraco."},
        {t:"IVT exemplo.","tip":"raiz."},
        {t:"Continuidade por partes.","tip":"checar junta."},
        {t:"Gráfico descontínuo.","tip":"desenhar."},
        {t:"Explicar IVT.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"def."},{wk:"Sem 2",go:"tipos."},{wk:"Sem 3",go:"IVT."}],
      deep:[{label:"Khan Continuity",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s3", title:"Definição de derivada",
      blurb:"Taxa de variação instantânea.",
      start:["Quociente diferencial.","Limite.","Tangente.","Notações.","Velocidade.","Interpretar."],
      exercises:[
        {t:"f'(x) pelo limite.","tip":"[f(x+h)-f(x)]/h."},
        {t:"Derivada de x^2.","tip":"2x."},
        {t:"Tangente em ponto.","tip":"inclinação."},
        {t:"Velocidade instantânea.","tip":"dx/dt."},
        {t:"Interpretação gráfica.","tip":"reta."},
        {t:"Explicar h→0.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"quociente."},{wk:"Sem 2",go:"limite."},{wk:"Sem 3",go:"tangente."}],
      deep:[{label:"Khan Derivative",url:"https://www.khanacademy.org/math/calculus-1"},{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"}]
    },
    { id:"s4", title:"Regras de derivação",
      blurb:"Derive sem o limite toda hora.",
      start:["Potência.","Soma.","Produto.","Quociente.","Cadeia.","Expo/log."],
      exercises:[
        {t:"Derivada de x^n.","tip":"n x^{n-1}."},
        {t:"Regra do produto.","tip":"uv' + u'v."},
        {t:"Regra da cadeia.","tip":"externa·interna'."},
        {t:"Derivada de e^x.","tip":"e^x."},
        {t:"Derivada de ln x.","tip":"1/x."},
        {t:"Misturar regras.","tip":"prática."}
      ],
      schedule:[{wk:"Sem 1",go:"potência."},{wk:"Sem 2",go:"prod/quo."},{wk:"Sem 3",go:"cadeia."}],
      deep:[{label:"Khan Rules",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/classes/calci/derivativesshortcuts.aspx"}]
    },
    { id:"s5", title:"Derivadas trigonométricas",
      blurb:"sen, cos e companhia.",
      start:["sen/cos.","tg.","Inversas.","Cadeia.","Aplicações.","Identidades."],
      exercises:[
        {t:"Derivada de sen x.","tip":"cos x."},
        {t:"Derivada de tg x.","tip":"sec^2."},
        {t:"Derivada de arcsin.","tip":"1/raiz."},
        {t:"Cadeia com trig.","tip":"prática."},
        {t:"Movimento harmônico.","tip":"oscilação."},
        {t:"Explicar período.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"sen/cos."},{wk:"Sem 2",go:"tg."},{wk:"Sem 3",go:"inversas."}],
      deep:[{label:"Khan Trig Deriv",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s6", title:"Derivada implícita & log",
      blurb:"Quando y não está isolado.",
      start:["Implícita.","d/dx em ambos.","Log diff.","Expo geral.","Tangente implícita.","Aplicações."],
      exercises:[
        {t:"Derivar x^2+y^2=1.","tip":"dy/dx."},
        {t:"Log differentiation.","tip":"ln dos 2 lados."},
        {t:"Derivada de a^x.","tip":"a^x ln a."},
        {t:"Tangente implícita.","tip":"ponto."},
        {t:"x^x por log.","tip":"truque."},
        {t:"Explicar implícita.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"implícita."},{wk:"Sem 2",go:"logdiff."},{wk:"Sem 3",go:"expos."}],
      deep:[{label:"Khan Implicit",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s7", title:"Aplicações: máximos/mínimos",
      blurb:"Onde a derivada vira zero.",
      start:["Pontos críticos.","Teste 1ª deriv.","Teste 2ª deriv.","Otimização.","Fronteira.","Interpretar."],
      exercises:[
        {t:"Achar críticos.","tip":"f'=0."},
        {t:"Máx/min teste 2ª.","tip":"sinal."},
        {t:"Otimizar caixa.","tip":"área."},
        {t:"Problema de custo.","tip":"modelar."},
        {t:"Concavidade.","tip":"f''."},
        {t:"Explicar ótimo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"críticos."},{wk:"Sem 2",go:"testes."},{wk:"Sem 3",go:"otimização."}],
      deep:[{label:"Khan Optimization",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s8", title:"Taxas relacionadas & MV",
      blurb:"Derivada em contexto.",
      start:["Taxas.","Chain rule.","MVT.","Teorema valor médio.","Aceleração.","Contexto."],
      exercises:[
        {t:"Balão inflando.","tip":"dr/dt."},
        {t:"MVT exemplo.","tip":"reta secante."},
        {t:"Velocidade/aceleração.","tip":"1ª/2ª."},
        {t:"Taxa de sombra.","tip":"semelhança."},
        {t:"Interpretar unidades.","tip":"por tempo."},
        {t:"Explicar MVT.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"taxas."},{wk:"Sem 2",go:"MVT."},{wk:"Sem 3",go:"contexto."}],
      deep:[{label:"Khan Related",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s9", title:"Teorema fundamental (intro)",
      blurb:"Liga derivada e integral.",
      start:["Antiderivada.","Área.","TFC parte 1.","TFC parte 2.","Notação.","Preparar C2."],
      exercises:[
        {t:"Achar antiderivada.","tip":"+C."},
        {t:"Integral definida básica.","tip":"F(b)-F(a)."},
        {t:"Área sob curva.","tip":"sinal."},
        {t:"TFM parte 1.","tip":"d/dx integral."},
        {t:"Integral de linha reta.","tip":"geométrica."},
        {t:"Explicar TFC.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"antideriv."},{wk:"Sem 2",go:"área."},{wk:"Sem 3",go:"TFC."}],
      deep:[{label:"Khan FTC",url:"https://www.khanacademy.org/math/calculus-1"},{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"}]
    },
    { id:"s10", title:"Cálculo 1 integrado",
      blurb:"Problemas completos.",
      start:["Revisar.","Misturar.","Modelar.","Gráficos.","Erros.","Prova."],
      exercises:[
        {t:"Problema de otimização.","tip":"modelo."},
        {t:"Derivar integral.","tip":"TFC."},
        {t:"Curva completa.","tip":"f,f',f''."},
        {t:"Lista 20 variados.","tip":"prática."},
        {t:"Revisar erros.","tip":"corrigir."},
        {t:"Simulado.","tip":"nota."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"modelar."},{wk:"Sem 3",go:"simulado."}],
      deep:[{label:"Khan Calc1",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/classes/calci/calci.aspx"}]
    }
  ]
});
