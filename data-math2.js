/* data-math2.js — Cálculo 2 + Cálculo Dif/Integral + Física TI + Mat TI + Mat Dados (10x6) */
window.RMAP = window.RMAP || [];
window.RMAP.push({
  id:"calculo2", icon:"∮", color:"#b9bdc6", title:"Cálculo 2 (Integrais & Séries)",
  desc:"Integrais, técnicas e séries de potência. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Integral indefinida",
      blurb:"A antiderivada.",
      start:["Antiderivada.","+C.","Potência.","Soma.","Expo/log.","Verificar."],
      exercises:[
        {t:"∫x^n dx.","tip":"x^{n+1}/(n+1)."},
        {t:"∫e^x dx.","tip":"e^x."},
        {t:"∫1/x dx.","tip":"ln|x|."},
        {t:"Derivar p/ conferir.","tip":"volta f."},
        {t:"∫(3x^2+2x) dx.","tip":"termo a termo."},
        {t:"Explicar +C.","tip":"família."}
      ],
      schedule:[{wk:"Sem 1",go:"antideriv."},{wk:"Sem 2",go:"regras."},{wk:"Sem 3",go:"checar."}],
      deep:[{label:"Khan Antideriv",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/classes/calcII/integralsintro.aspx"}]
    },
    { id:"s2", title:"Integral definida & área",
      blurb:"Soma de infinitos retângulos.",
      start:["Soma de Riemann.","TFC.","Limite.","Área.","Sinal.","Geometria."],
      exercises:[
        {t:"∫0..1 x dx.","tip":"1/2."},
        {t:"Área sob curva.","tip":"F(b)-F(a)."},
        {t:"Riemann à mão.","tip":"n retângulos."},
        {t:"Área negativa.","tip":"abaixo eixo."},
        {t:"Propriedades.","tip":"soma intervalos."},
        {t:"Explicar limite.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"Riemann."},{wk:"Sem 2",go:"TFC."},{wk:"Sem 3",go:"área."}],
      deep:[{label:"Khan Definite",url:"https://www.khanacademy.org/math/calculus-2"},{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"}]
    },
    { id:"s3", title:"Técnicas de integração",
      blurb:"Como integrar o que não é óbvio.",
      start:["Substituição.","Por partes.","Frações parciais.","Trig.","Escolha.","Estratégia."],
      exercises:[
        {t:"Substituição u=x^2.","tip":"du=2x dx."},
        {t:"Integração por partes.","tip":"uv-∫v du."},
        {t:"Frações parciais.","tip":"decompor."},
        {t:"∫sen^2 x dx.","tip":"identidade."},
        {t:"Escolher técnica.","tip":"prática."},
        {t:"Conferir derivando.","tip":"volta."}
      ],
      schedule:[{wk:"Sem 1",go:"subst."},{wk:"Sem 2",go:"partes."},{wk:"Sem 3",go:"frações."}],
      deep:[{label:"Khan Techniques",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/classes/calcII/integrationtechniques.aspx"}]
    },
    { id:"s4", title:"Volumes & aplicações",
      blurb:"Integrais no mundo real.",
      start:["Discos.","Casca.","Comprimento arco.","Área superfície.","Trabalho.","Centro massa."],
      exercises:[
        {t:"Volume disco.","tip":"pi r^2 dx."},
        {t:"Volume casca.","tip":"2pi r h."},
        {t:"Comprimento de arco.","tip":"∫raiz(1+y'^2)."},
        {t:"Trabalho contra mola.","tip":"1/2 kx^2."},
        {t:"Área entre curvas.","tip":"subtrair."},
        {t:"Explicar método.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"discos."},{wk:"Sem 2",go:"casca."},{wk:"Sem 3",go:"aplicações."}],
      deep:[{label:"Khan Volumes",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s5", title:"Séries & convergência",
      blurb:"Soma infinita que faz sentido.",
      start:["Série.","Geométrica.","p-série.","Testes.","Convergir.","Divergir."],
      exercises:[
        {t:"Soma geométrica.","tip":"a/(1-r)."},
        {t:"Teste comparação.","tip":"maior/menor."},
        {t:"Teste razão.","tip":"lim a_{n+1}/a_n."},
        {t:"Integral test.","tip":"∫f."},
        {t:"Série alternada.","tip":"sinal."},
        {t:"Explicar convergência.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"geom."},{wk:"Sem 2",go:"testes."},{wk:"Sem 3",go:"razão."}],
      deep:[{label:"Khan Series",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/classes/calcII/seriesintro.aspx"}]
    },
    { id:"s6", title:"Séries de Taylor",
      blurb:"Funções como polinômios infinitos.",
      start:["Taylor.","Maclaurin.","Polinômio.","Resto.","Aproximar.","Convergência raio."],
      exercises:[
        {t:"Taylor de e^x.","tip":"soma x^n/n!."},
        {t:"Maclaurin de sen x.","tip":"ímpares."},
        {t:"Aprox f por grau 3.","tip":"polinômio."},
        {t:"Raio de convergência.","tip":"teste razão."},
        {t:"Erro de aproximação.","tip":"resto."},
        {t:"Explicar utilidade.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"Taylor."},{wk:"Sem 2",go:"Maclaurin."},{wk:"Sem 3",go:"raio."}],
      deep:[{label:"Khan Taylor",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s7", title:"Equações diferenciais (básico)",
      blurb:"Taxas que dependem do estado.",
      start:["EDO.","Separáveis.","Linear 1ª.","Crescimento.","Decaimento.","Modelar."],
      exercises:[
        {t:"EDO separável.","tip":"dy/y=dx."},
        {t:"Crescimento exponencial.","tip":"y'=ky."},
        {t:"Decaimento radioativo.","tip":"meia-vida."},
        {t:"Condição inicial.","tip":"C."},
        {t:"Modelar população.","tip":"logística."},
        {t:"Explicar solução.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"EDO."},{wk:"Sem 2",go:"separável."},{wk:"Sem 3",go:"modelar."}],
      deep:[{label:"Khan DiffEq",url:"https://www.khanacademy.org/math/differential-equations"},{label:"Paul",url:"https://tutorial.math.lamar.edu/classes/de/de.aspx"}]
    },
    { id:"s8", title:"Coordenadas polares",
      blurb:"Outro jeito de descrever pontos.",
      start:["Polar.","Conversão.","Gráficos.","Área polar.","Curvas.","Comprimento."],
      exercises:[
        {t:"Cartesiano→polar.","tip":"r,theta."},
        {t:"Gráfico rosa.","tip":"r=cos(2t)."},
        {t:"Área em polar.","tip":"1/2 ∫r^2."},
        {t:"Converter equação.","tip":"x=r cos."},
        {t:"Espiral.","tip":"r=a t."},
        {t:"Explicar ângulo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"polar."},{wk:"Sem 2",go:"área."},{wk:"Sem 3",go:"curvas."}],
      deep:[{label:"Khan Polar",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s9", title:"Sequências de funções",
      blurb:"Convergência de funções.",
      start:["Ponto a ponto.","Uniforme.","Séries função.","Weierstrass.","Aplicação.","Convergência."],
      exercises:[
        {t:"Limite de f_n(x).","tip":"ponto."},
        {t:"Série de funções.","tip":"soma."},
        {t:"Teste uniforme.","tip":"sup."},
        {t:"Exemplo convergente.","tip":"prática."},
        {t:"Gráfico aproximação.","tip":"desmos."},
        {t:"Explicar convergência.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ponto."},{wk:"Sem 2",go:"uniforme."},{wk:"Sem 3",go:"séries."}],
      deep:[{label:"Paul",url:"https://tutorial.math.lamar.edu/"},{label:"Khan",url:"https://www.khanacademy.org/math/calculus-2"}]
    },
    { id:"s10", title:"Cálculo 2 integrado",
      blurb:"Problemas completos.",
      start:["Revisar.","Misturar.","Modelar.","Gráficos.","Erros.","Prova."],
      exercises:[
        {t:"Integral por partes.","tip":"prática."},
        {t:"Volume aplicado.","tip":"modelo."},
        {t:"Série convergente.","tip":"teste."},
        {t:"Taylor aproxima.","tip":"uso."},
        {t:"Lista 20.","tip":"variado."},
        {t:"Simulado.","tip":"nota."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"modelar."},{wk:"Sem 3",go:"simulado."}],
      deep:[{label:"Khan Calc2",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/classes/calcII/calcII.aspx"}]
    }
  ]
});

window.RMAP.push({
  id:"calc-diff-int", icon:"∂", color:"#aeb2ba", title:"Cálculo Diferencial e Integral",
  desc:"Visão unificada: derivada e integral lado a lado, com intuição física. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Taxa de variação",
      blurb:"Derivada como velocidade.",
      start:["Variação.","Média vs inst.","Gráfico.","Tangente.","Unidades.","Interpretar."],
      exercises:[
        {t:"Taxa média intervalo.","tip":"delta/delta."},
        {t:"Taxa instantânea.","tip":"limite."},
        {t:"Tangente em ponto.","tip":"reta."},
        {t:"Unidades derivada.","tip":"por tempo."},
        {t:"Gráfico f e f'.","tip":"relação."},
        {t:"Explicar intuição.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"média."},{wk:"Sem 2",go:"inst."},{wk:"Sem 3",go:"tangente."}],
      deep:[{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"},{label:"Khan",url:"https://www.khanacademy.org/math/calculus-1"}]
    },
    { id:"s2", title:"Acumulação",
      blurb:"Integral como soma.",
      start:["Acumular.","Área.","Riemann.","TFC.","Sinal.","Aplicar."],
      exercises:[
        {t:"Área por soma.","tip":"retângulos."},
        {t:"TFC liga lados.","tip":"antideriv."},
        {t:"Integral definida.","tip":"F(b)-F(a)."},
        {t:"Acúmulo de taxa.","tip":"distância."},
        {t:"Área negativa.","tip":"abaixo."},
        {t:"Explicar acúmulo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"soma."},{wk:"Sem 2",go:"TFC."},{wk:"Sem 3",go:"aplicar."}],
      deep:[{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"},{label:"Khan",url:"https://www.khanacademy.org/math/calculus-2"}]
    },
    { id:"s3", title:"Regra da cadeia",
      blurb:"Derivar compostas.",
      start:["Composta.","Externa·interna.","Exemplos.","2ª cadeia.","Aplicar.","Erros."],
      exercises:[
        {t:"Derivar (x^2+1)^5.","tip":"5·( )^4·2x."},
        {t:"Cadeia dupla.","tip":"3 funções."},
        {t:"Derivada implícita.","tip":"usar."},
        {t:"Conferir gráfico.","tip":"reta."},
        {t:"Erro comum.","tip":"esquecer interna."},
        {t:"Explicar regra.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"composta."},{wk:"Sem 2",go:"exemplos."},{wk:"Sem 3",go:"erros."}],
      deep:[{label:"Khan Chain",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s4", title:"Otimização",
      blurb:"Máximos e mínimos na prática.",
      start:["Críticos.","Modelar.","Restrição.","Testes.","Interpretar.","Conclusão."],
      exercises:[
        {t:"Caixa máx volume.","tip":"área→volume."},
        {t:"Custa mínimo.","tip":"função custo."},
        {t:"Restrição de perímetro.","tip":"substituir."},
        {t:"Teste 2ª deriv.","tip":"sinal."},
        {t:"Conclusão real.","tip":"unidades."},
        {t:"Explicar ótimo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"modelar."},{wk:"Sem 2",go:"testes."},{wk:"Sem 3",go:"conclusão."}],
      deep:[{label:"Khan Optimization",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s5", title:"Movimento",
      blurb:"Posição, velocidade, aceleração.",
      start:["Posição.","v=x'.","a=v'.","Soltar.","Queda.","Interpretar."],
      exercises:[
        {t:"v e a de x(t).","tip":"derivar."},
        {t:"Quando para.","tip":"v=0."},
        {t:"Queda livre.","tip":"-g/2 t^2."},
        {t:"Distância percorrida.","tip":"∫|v|."},
        {t:"Mudança de direção.","tip":"sinal v."},
        {t:"Explicar física.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"v,a."},{wk:"Sem 2",go:"queda."},{wk:"Sem 3",go:"interpretar."}],
      deep:[{label:"Khan Motion",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s6", title:"Área entre curvas",
      blurb:"Integrais em comparação.",
      start:["Duas curvas.","Topo-fundo.","Interseção.","Simetria.","Aplicar.","Checar."],
      exercises:[
        {t:"Área entre f e g.","tip":"∫(topo-fundo)."},
        {t:"Achar interseção.","tip":"igualar."},
        {t:"Usar simetria.","tip":"metade."},
        {t:"Conferir positivo.","tip":"área>0."},
        {t:"Gráfico da região.","tip":"desenhar."},
        {t:"Explicar método.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"topo-fundo."},{wk:"Sem 2",go:"interseção."},{wk:"Sem 3",go:"simetria."}],
      deep:[{label:"Khan Area",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s7", title:"Substituição",
      blurb:"Mudança de variável na integral.",
      start:["u=x^2.","du.","Limites.","Trig sub.","Escolha.","Conferir."],
      exercises:[
        {t:"∫2x cos(x^2) dx.","tip":"u=x^2."},
        {t:"Mudar limites.","tip":"u(a),u(b)."},
        {t:"Trig substitution.","tip":"x=sen t."},
        {t:"Escolher u.","tip":"prática."},
        {t:"Derivar p/ checar.","tip":"volta."},
        {t:"Explicar substituição.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"u."},{wk:"Sem 2",go:"limites."},{wk:"Sem 3",go:"trigsub."}],
      deep:[{label:"Khan Subst",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s8", title:"Teorema valor médio",
      blurb:"Liga média e instantâneo.",
      start:["MVT deriv.","MVT integral.","Reta secante.","Média função.","Aplicar.","Interpretar."],
      exercises:[
        {t:"MVT em [a,b].","tip":"f'(c)=delta/delta."},
        {t:"Média de f.","tip":"1/(b-a)∫f."},
        {t:"Secante=derivada.","tip":"ponto c."},
        {t:"Exemplo concreto.","tip":"prática."},
        {t:"Gráfico ilustra.","tip":"reta."},
        {t:"Explicar teorema.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"MVTd."},{wk:"Sem 2",go:"MVTi."},{wk:"Sem 3",go:"interpretar."}],
      deep:[{label:"Khan MVT",url:"https://www.khanacademy.org/math/calculus-1"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s9", title:"Aplicações combinadas",
      blurb:"Derivada + integral num problema.",
      start:["Modelar.","Derivar.","Integrar.","Conferir.","Gráfico.","Relatório."],
      exercises:[
        {t:"Problema de fluxo.","tip":"taxa→volume."},
        {t:"Custo marginal.","tip":"∫custo'."},
        {t:"Velocidade→distância.","tip":"∫v."},
        {t:"Otimizar + checar.","tip":"2ª."},
        {t:"Gráfico duplo.","tip":"f e F."},
        {t:"Explicar solução.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"modelar."},{wk:"Sem 2",go:"aplicar."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"Khan",url:"https://www.khanacademy.org/math/calculus-2"},{label:"Paul",url:"https://tutorial.math.lamar.edu/"}]
    },
    { id:"s10", title:"Síntese",
      blurb:"Os dois lados como um.",
      start:["Revisar.","Conexão.","Problemas.","Erros.","Mapa mental.","Prova."],
      exercises:[
        {t:"Derivar integral TFC.","tip":"volta."},
        {t:"Problema misto.","tip":"prática."},
        {t:"Mapa conceitual.","tip":"desenho."},
        {t:"Lista 20.","tip":"variado."},
        {t:"Revisar erros.","tip":"corrigir."},
        {t:"Simulado.","tip":"nota."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"conexão."},{wk:"Sem 3",go:"prova."}],
      deep:[{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"},{label:"Khan",url:"https://www.khanacademy.org/math/calculus-1"}]
    }
  ]
});

window.RMAP.push({
  id:"fisica-ti", icon:"⚛", color:"#b4b8c0", title:"Física para TI",
  desc:"Física que aparece em computação: circuitos, sinais e mecânica básica. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Grandezas & unidades",
      blurb:"SI e conversão.",
      start:["SI.","Prefixos.","Conversão.","Notação científica.","Erro.","Dimensão."],
      exercises:[
        {t:"Converter km→m.","tip":"1000."},
        {t:"Prefixos (k, M, G).","tip":"10^3."},
        {t:"Notação científica.","tip":"3e8."},
        {t:"Conversão de unidade.","tip":"fator."},
        {t:"Análise dimensional.","tip":"checar."},
        {t:"Explicar prefixo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"SI."},{wk:"Sem 2",go:"prefixos."},{wk:"Sem 3",go:"conversão."}],
      deep:[{label:"Khan Physics",url:"https://www.khanacademy.org/science/physics"},{label:"Britannica",url:"https://www.britannica.com/science/SI"}]
    },
    { id:"s2", title:"Cinemática",
      blurb:"Movimento retilíneo.",
      start:["Posição.","Velocidade.","Aceleração.","Queda.","Gráfico.","Equações."],
      exercises:[
        {t:"v constante.","tip":"x=vt."},
        {t:"Queda livre.","tip":"1/2gt^2."},
        {t:"v=v0+at.","tip":"mruv."},
        {t:"Gráfico x(t).","tip":"reta/curva."},
        {t:"Tempo de queda.","tip":"raiz."},
        {t:"Explicar mruv.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"v."},{wk:"Sem 2",go:"queda."},{wk:"Sem 3",go:"equações."}],
      deep:[{label:"Khan Kinematics",url:"https://www.khanacademy.org/science/physics/one-dimensional-motion"},{label:"HyperPhysics",url:"https://hyperphysics.phy-astr.gsu.edu/"}]
    },
    { id:"s3", title:"Forças & energia",
      blurb:"Newton e trabalho.",
      start:["1ª lei.","2ª lei.","3ª lei.","Trabalho.","Energia.","Conservação."],
      exercises:[
        {t:"F=ma.","tip":"força."},
        {t:"Peso mg.","tip":"gravidade."},
        {t:"Trabalho F·d.","tip":"W=Fd."},
        {t:"Cinética 1/2mv^2.","tip":"energia."},
        {t:"Conservação.","tip":"soma."},
        {t:"Explicar 2ª lei.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"leis."},{wk:"Sem 2",go:"trabalho."},{wk:"Sem 3",go:"energia."}],
      deep:[{label:"Khan Forces",url:"https://www.khanacademy.org/science/physics/forces-newtons-laws"},{label:"HyperPhysics",url:"https://hyperphysics.phy-astr.gsu.edu/"}]
    },
    { id:"s4", title:"Ondas & sinais",
      blurb:"Base de áudio e comunicação.",
      start:["Onda.","Frequência.","Wavelength.","Amplitude.","Senoide.","Fourier (intro)."],
      exercises:[
        {t:"f=c/lambda.","tip":"relação."},
        {t:"Período de seno.","tip":"2pi/w."},
        {t:"Amplitude e energia.","tip":"quadrado."},
        {t:"Som 440 Hz.","tip":"A4."},
        {t:"Fourier intuitivo.","tip":"soma senos."},
        {t:"Explicar onda.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"onda."},{wk:"Sem 2",go:"freq."},{wk:"Sem 3",go:"fourier."}],
      deep:[{label:"Khan Waves",url:"https://www.khanacademy.org/science/physics/mechanical-waves"},{label:"3Blue1Brown Fourier",url:"https://www.3blue1brown.com/"}]
    },
    { id:"s5", title:"Eletricidade básica",
      blurb:"O que alimenta o hardware.",
      start:["Carga.","Corrente.","Tensão.","Lei Ohm.","Potência.","Resistores."],
      exercises:[
        {t:"V=IR.","tip":"Ohm."},
        {t:"P=VI.","tip":"potência."},
        {t:"Série/paralelo.","tip":"R_eq."},
        {t:"Corrente por fio.","tip":"I=V/R."},
        {t:"Consumo de fonte.","tip":"W."},
        {t:"Explicar tensão.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"V,I."},{wk:"Sem 2",go:"Ohm."},{wk:"Sem 3",go:"potência."}],
      deep:[{label:"Khan Circuits",url:"https://www.khanacademy.org/science/physics/circuits-topic"},{label:"HyperPhysics",url:"https://hyperphysics.phy-astr.gsu.edu/"}]
    },
    { id:"s6", title:"Eletrônica digital",
      blurb:"Bits viram voltagem.",
      start:["0/1 voltagem.","Portas.","Clock.","Flip-flop.","Buses.","Latência."],
      exercises:[
        {t:"Porta AND/OR.","tip":"tabela."},
        {t:"Clock sincroniza.","tip":"pulso."},
        {t:"Flip-flop memória.","tip":"estado."},
        {t:"Bus de dados.","tip":"fios."},
        {t:"Latência vs throughput.","tip":"dois conceitos."},
        {t:"Explicar bit.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"portas."},{wk:"Sem 2",go:"clock."},{wk:"Sem 3",go:"memória."}],
      deep:[{label:"NandLand",url:"https://nandland.com/"},{label:"Ben Eater",url:"https://eater.net/"}]
    },
    { id:"s7", title:"Termodinâmica & calor",
      blurb:"Por que o processador esquenta.",
      start:["Temperatura.","Calor.","Potência térmica.","Dissipador.","TJ max.","Eficiência."],
      exercises:[
        {t:"Potência dissipada.","tip":"P=V·I."},
        {t:"TJ max do CPU.","tip":"datasheet."},
        {t:"Dissipador baixa T.","tip":"área."},
        {t:"Eficiência energética.","tip":"menos calor."},
        {t:"Thermal throttling.","tip":"reduz clock."},
        {t:"Explicar aquecimento.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"calor."},{wk:"Sem 2",go:"dissipador."},{wk:"Sem 3",go:"throttle."}],
      deep:[{label:"HyperPhysics Thermo",url:"https://hyperphysics.phy-astr.gsu.edu/"},{label:"Intel Docs",url:"https://www.intel.com/"}]
    },
    { id:"s8", title:"Óptica & displays",
      blurb:"Como a tela mostra pixels.",
      start:["Luz.","Pixel.","RGB.","Reflexão.","Resolução.","Hz."],
      exercises:[
        {t:"Pixel como RGB.","tip":"3 sub."},
        {t:"Resolução 1920x1080.","tip":"pixels."},
        {t:"Taxa 60Hz.","tip":"frames/s."},
        {t:"Luminância.","tip":"cd/m²."},
        {t:"Refresh vs FPS.","tip":"conceitos."},
        {t:"Explicar display.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"pixel."},{wk:"Sem 2",go:"resolução."},{wk:"Sem 3",go:"hz."}],
      deep:[{label:"Khan Light",url:"https://www.khanacademy.org/science/physics/light-waves"},{label:"RTINGS",url:"https://www.rtings.com/"}]
    },
    { id:"s9", title:"Relatividade & quântica (intro)",
      blurb:"Limites da física clássica.",
      start:["c constante.","E=mc^2.","Quanto.","Bit quântico.","Superposição.","Contexto."],
      exercises:[
        {t:"E=mc^2.","tip":"energia."},
        {t:"Qubit superposição.","tip":"|0>+|1>."},
        {t:"Limite de velocidade.","tip":"c."},
        {t:"Incerteza (intro).","tip":"princípio."},
        {t:"Computação quântica.","tip":"conceito."},
        {t:"Explicar relevância.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"relat."},{wk:"Sem 2",go:"quanto."},{wk:"Sem 3",go:"qubit."}],
      deep:[{label:"Khan Special Rel",url:"https://www.khanacademy.org/science/physics/special-relativity"},{label:"IBM Quantum",url:"https://www.ibm.com/quantum"}]
    },
    { id:"s10", title:"Física na prática em TI",
      blurb:"Junte os conceitos.",
      start:["Revisar.","Modelar.","Medir.","Erros.","Relatório.","Prova."],
      exercises:[
        {t:"Consumo do setup.","tip":"W."},
        {t:"Latência de rede.","tip":"física sinal."},
        {t:"Aquecimento sob carga.","tip":"teste."},
        {t:"Relatório de medição.","tip":"dados."},
        {t:"Erros de medida.","tip":"incerteza."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"modelar."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"Khan Physics",url:"https://www.khanacademy.org/science/physics"},{label:"HyperPhysics",url:"https://hyperphysics.phy-astr.gsu.edu/"}]
    }
  ]
});

window.RMAP.push({
  id:"mat-ti", icon:"➗", color:"#b9bdc6", title:"Matemática para TI",
  desc:"A matemática que você usa programando: lógica, discreta, conjuntos. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Lógica proposicional",
      blurb:"Base de condicionais e circuitos.",
      start:["Proposições.","AND/OR/NOT.","Implicação.","Tabela-verdade.","Equivalências.","Quantificadores."],
      exercises:[
        {t:"Tabela de p→q.","tip":"só falso se V→F."},
        {t:"Negar implicação.","tip":"p AND not q."},
        {t:"De Morgan.","tip":"not(p and q)."},
        {t:"Equivalência lógica.","tip":"tabela."},
        {t:"Expressar if.","tip":"código."},
        {t:"Explicar implicação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"props."},{wk:"Sem 2",go:"tabela."},{wk:"Sem 3",go:"equival."}],
      deep:[{label:"Khan Logic",url:"https://www.khanacademy.org/computing/computer-science/cryptography"},{label:"Rosen Discrete",url:"https://www.pearson.com/us/higher-education/program/Rosen-Discrete-Mathematics-And-Its-Applications-7th-Edition/PGM1644187.html"}]
    },
    { id:"s2", title:"Conjuntos & relações",
      blurb:"Dados e bancos.",
      start:["Conjuntos.","União/intersec.","Diferença.","Relação.","Função.","Cartesiano."],
      exercises:[
        {t:"Operar conjuntos.","tip":"diagrama."},
        {t:"Relação como pares.","tip":"(a,b)."},
        {t:"Função é relação.","tip":"1 p/ cada."},
        {t:"Produto cartesiano.","tip":"pares."},
        {t:"Diferença simétrica.","tip":"xor."},
        {t:"Explicar relação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"conjuntos."},{wk:"Sem 2",go:"relação."},{wk:"Sem 3",go:"função."}],
      deep:[{label:"Rosen",url:"https://www.pearson.com/us/higher-education/program/Rosen-Discrete-Mathematics-And-Its-Applications-7th-Edition/PGM1644187.html"},{label:"Khan Sets",url:"https://www.khanacademy.org/"}]
    },
    { id:"s3", title:"Combinatória",
      blurb:"Contar sem enumerar.",
      start:["Permutação.","Arranjo.","Combinação.","Princípio.","Repetição.","Aplicar."],
      exercises:[
        {t:"Permuta n!.","tip":"ordenar."},
        {t:"Combinação C(n,k).","tip":"escolher."},
        {t:"Senha de tamanho k.","tip":"26^k."},
        {t:"Princípio multiplicação.","tip":"produto."},
        {t:"Com repetição.","tip":"estrelas barras."},
        {t:"Explicar contagem.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"permuta."},{wk:"Sem 2",go:"combinação."},{wk:"Sem 3",go:"aplicar."}],
      deep:[{label:"Khan Counting",url:"https://www.khanacademy.org/math/probability/xa88397b6f9c9e9a3:counting-permutations-and-combinations"},{label:"Rosen",url:"https://www.pearson.com/us/higher-education/program/Rosen-Discrete-Mathematics-And-Its-Applications-7th-Edition/PGM1644187.html"}]
    },
    { id:"s4", title:"Teoria dos grafos",
      blurb:"Redes, dependências, caminhos.",
      start:["Vértice/aresta.","Caminho.","Árvore.","Ciclo.","Grau.","Conectividade."],
      exercises:[
        {t:"Modelar rede.","tip":"nós/arestas."},
        {t:"Árvore vs grafo.","tip":"sem ciclo."},
        {t:"Caminho mais curto.","tip":"Dijkstra."},
        {t:"Grau de vértice.","tip":"nº arestas."},
        {t:"Detectar ciclo.","tip":"DFS."},
        {t:"Explicar grafo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"básico."},{wk:"Sem 2",go:"caminho."},{wk:"Sem 3",go:"árvore."}],
      deep:[{label:"Khan Graphs",url:"https://www.khanacademy.org/computing/computer-science/algorithms"},{label:"Rosen",url:"https://www.pearson.com/us/higher-education/program/Rosen-Discrete-Mathematics-And-Its-Applications-7th-Edition/PGM1644187.html"}]
    },
    { id:"s5", title:"Recursão & indúção",
      blurb:"Provar e programar passo a passo.",
      start:["Recursão.","Base.","Passo.","Indução.","Invariante.","Fechamento."],
      exercises:[
        {t:"Fatorial recursivo.","tip":"n*f(n-1)."},
        {t:"Prova por indução.","tip":"base+passo."},
        {t:"Fibonacci.","tip":"f(n-1)+f(n-2)."},
        {t:"Invariante de loop.","tip":"mantém."},
        {t:"Terminação.","tip":"decresce."},
        {t:"Explicar indução.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"recursão."},{wk:"Sem 2",go:"indução."},{wk:"Sem 3",go:"invariante."}],
      deep:[{label:"Khan Recursion",url:"https://www.khanacademy.org/computing/computer-science/algorithms"},{label:"Rosen",url:"https://www.pearson.com/us/higher-education/program/Rosen-Discrete-Mathematics-And-Its-Applications-7th-Edition/PGM1644187.html"}]
    },
    { id:"s6", title:"Álgebra booleana",
      blurb:"O coração dos circuitos e buscas.",
      start:["0/1.","AND/OR/XOR.","Simplificar.","Mapa Karnaugh.","Portas.","Expressões."],
      exercises:[
        {t:"XOR como expressão.","tip":"p xor q."},
        {t:"Simplificar (a and a)=a.","tip":"idempot."},
        {t:"Karnaugh 2 var.","tip":"agrupar."},
        {t:"Expressão p/ porta.","tip":"árvoRe."},
        {t:"Negar expressão.","tip":"De Morgan."},
        {t:"Explicar bool.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"op."},{wk:"Sem 2",go:"simplificar."},{wk:"Sem 3",go:"karnaugh."}],
      deep:[{label:"NandLand",url:"https://nandland.com/"},{label:"Rosen",url:"https://www.pearson.com/us/higher-education/program/Rosen-Discrete-Mathematics-And-Its-Applications-7th-Edition/PGM1644187.html"}]
    },
    { id:"s7", title:"Números & representação",
      blurb:"Bits, bases e precisão.",
      start:["Binário.","Hex.","Complemento 2.","Ponto flutuante.","Overflow.","Precisão."],
      exercises:[
        {t:"Decimal→binário.","tip":"divisões."},
        {t:"Bin→hex.","tip":"nibbles."},
        {t:"Complemento 2 negativo.","tip":"inverter+soma1."},
        {t:"Overflow signed.","tip":"estouro."},
        {t:"Float impreciso.","tip":"0.1+0.2."},
        {t:"Explicar base.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"bin/hex."},{wk:"Sem 2",go:"comp2."},{wk:"Sem 3",go:"float."}],
      deep:[{label:"Khan Binary",url:"https://www.khanacademy.org/computing/computer-science"},{label:"Floating Point",url:"https://floating-point-gui.de/"}]
    },
    { id:"s8", title:"Probabilidade básica",
      blurb:"Incerteza e algoritmos.",
      start:["Evento.","P(A).","Independência.","Bayes.","Esperança.","Aplicar."],
      exercises:[
        {t:"P de cara em 2 dados.","tip":"contar."},
        {t:"Independência.","tip":"P(A and B)."},
        {t:"Teorema de Bayes.","tip":"posterior."},
        {t:"Esperança média.","tip":"soma p·x."},
        {t:"Prob de falha.","tip":"1-p."},
        {t:"Explicar Bayes.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"evento."},{wk:"Sem 2",go:"indep."},{wk:"Sem 3",go:"bayes."}],
      deep:[{label:"Khan Probability",url:"https://www.khanacademy.org/math/statistics-probability"},{label:"3Blue1Brown Bayes",url:"https://www.3blue1brown.com/"}]
    },
    { id:"s9", title:"Complexidade & Big-O",
      blurb:"Quanto custa um algoritmo.",
      start:["O(n).","O(log n).","O(n^2).","Pior caso.","Espaço.","Comparar."],
      exercises:[
        {t:"O de busca linear.","tip":"O(n)."},
        {t:"O de busca binária.","tip":"O(log n)."},
        {t:"O de loop aninhado.","tip":"O(n^2)."},
        {t:"Comparar 2 algoritmos.","tip":"crescimento."},
        {t:"Complexidade de espaço.","tip":"memória."},
        {t:"Explicar Big-O.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"O(n)."},{wk:"Sem 2",go:"log."},{wk:"Sem 3",go:"comparar."}],
      deep:[{label:"Khan Algs",url:"https://www.khanacademy.org/computing/computer-science/algorithms"},{label:"Brilliant Big-O",url:"https://brilliant.org/wiki/big-o-notation/"}]
    },
    { id:"s10", title:"Matemática TI integrada",
      blurb:"Tudo junto em código.",
      start:["Revisar.","Modelar.","Codar.","Medir.","Erros.","Prova."],
      exercises:[
        {t:"Grafo em código.","tip":"dict."},
        {t:"Busca binária O(log).","tip":"prática."},
        {t:"Prob de teste.","tip":"Bayes."},
        {t:"Big-O na prática.","tip":"medir."},
        {t:"Lista 20 variados.","tip":"variado."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"codar."},{wk:"Sem 3",go:"prova."}],
      deep:[{label:"Rosen",url:"https://www.pearson.com/us/higher-education/program/Rosen-Discrete-Mathematics-And-Its-Applications-7th-Edition/PGM1644187.html"},{label:"Khan",url:"https://www.khanacademy.org/computing/computer-science"}]
    }
  ]
});

window.RMAP.push({
  id:"mat-dados", icon:"📊", color:"#aeb2ba", title:"Matemática para Dados",
  desc:"Estatística e álgebra linear que Data Science exige. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Estatística descritiva",
      blurb:"Resumir dados.",
      start:["Média.","Mediana.","Moda.","Variância.","Desvio.","Quartis."],
      exercises:[
        {t:"Média de vetor.","tip":"soma/n."},
        {t:"Mediana.","tip":"centro."},
        {t:"Variância.","tip":"média dos quadrados."},
        {t:"Desvio padrão.","tip":"raiz."},
        {t:"Quartis Q1/Q3.","tip":"25/75%."},
        {t:"Explicar média vs mediana.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"média."},{wk:"Sem 2",go:"variância."},{wk:"Sem 3",go:"quartis."}],
      deep:[{label:"Khan Stats",url:"https://www.khanacademy.org/math/statistics-probability"},{label:"StatQuest",url:"https://statquest.org/"}]
    },
    { id:"s2", title:"Distribuições",
      blurb:"Formas de variáveis.",
      start:["Normal.","Uniforme.","Binomial.","Poisson.","Histograma.","Assimetria."],
      exercises:[
        {t:"Plotar histograma.","tip":"matplotlib."},
        {t:"Normal padrão.","tip":"z."},
        {t:"Binomial n,p.","tip":"ensaios."},
        {t:"Poisson lambda.","tip":"eventos."},
        {t:"Assimetria.","tip":"cauda."},
        {t:"Explicar normal.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"normal."},{wk:"Sem 2",go:"binomial."},{wk:"Sem 3",go:"hist."}],
      deep:[{label:"StatQuest Dist",url:"https://statquest.org/"},{label:"Khan",url:"https://www.khanacademy.org/math/statistics-probability"}]
    },
    { id:"s3", title:"Probabilidade & amostragem",
      blurb:"Inferir da amostra.",
      start:["Amostra.","Enviesamento.","IC.","Teorema central.","Erro.","Representar."],
      exercises:[
        {t:"Média amostral.","tip":"estimativa."},
        {t:"Intervalo 95%.","tip":"+-1.96 dp."},
        {t:"Viés de seleção.","tip":"cuidado."},
        {t:"TCL intuitivo.","tip":"soma→normal."},
        {t:"Tamanho amostra.","tip":"precisão."},
        {t:"Explicar IC.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"amostra."},{wk:"Sem 2",go:"IC."},{wk:"Sem 3",go:"TCL."}],
      deep:[{label:"StatQuest",url:"https://statquest.org/"},{label:"Khan",url:"https://www.khanacademy.org/math/statistics-probability"}]
    },
    { id:"s4", title:"Álgebra linear: vetores",
      blurb:"O idioma do ML.",
      start:["Vetor.","Soma.","Escalar.","Produto interno.","Norma.","Ângulo."],
      exercises:[
        {t:"Soma de vetores.","tip":"componente."},
        {t:"Produto interno.","tip":"soma a_i b_i."},
        {t:"Norma (módulo).","tip":"raiz soma quad."},
        {t:"Ângulo cosseno.","tip":"u·v/(|u||v|)."},
        {t:"Vetor em numpy.","tip":"np.array."},
        {t:"Explicar vetor.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"vetores."},{wk:"Sem 2",go:"interno."},{wk:"Sem 3",go:"norma."}],
      deep:[{label:"3Blue1Brown LinAlg",url:"https://www.3blue1brown.com/"},{label:"Khan Vectors",url:"https://www.khanacademy.org/math/linear-algebra"}]
    },
    { id:"s5", title:"Matrizes",
      blurb:"Transformações e dados.",
      start:["Matriz.","Multiplicação.","Identidade.","Transposta.","Inversa.","Aplicar."],
      exercises:[
        {t:"Multiplicar matrizes.","tip":"linha·coluna."},
        {t:"Transposta.","tip":"espelhar."},
        {t:"Identidade.","tip":"diagonal 1."},
        {t:"Inversa 2x2.","tip":"fórmula."},
        {t:"Matriz no numpy.","tip":"@."},
        {t:"Explicar transformação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"multiplicar."},{wk:"Sem 2",go:"transposta."},{wk:"Sem 3",go:"inversa."}],
      deep:[{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"},{label:"Khan Matrices",url:"https://www.khanacademy.org/math/linear-algebra"}]
    },
    { id:"s6", title:"Autovalores & SVD",
      blurb:"Reduzir dimensão.",
      start:["Autovalor.","Autovetor.","PCA.","SVD.","Compressão.","Variância."],
      exercises:[
        {t:"Encontrar autovetor.","tip":"Av=lv."},
        {t:"PCA 2D→1D.","tip":"eixo maior."},
        {t:"SVD intuitivo.","tip":"decompor."},
        {t:"Comprimir imagem.","tip":"rank menor."},
        {t:"Variância retida.","tip":"%."},
        {t:"Explicar PCA.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"autovalor."},{wk:"Sem 2",go:"PCA."},{wk:"Sem 3",go:"SVD."}],
      deep:[{label:"StatQuest PCA",url:"https://statquest.org/"},{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"}]
    },
    { id:"s7", title:"Regressão linear",
      blurb:"Prever com reta.",
      start:["Reta.","MSE.","Mínimos quadrados.","Coeficiente.","R².","Avaliar."],
      exercises:[
        {t:"Ajuste de reta.","tip":"numpy polyfit."},
        {t:"Erro MSE.","tip":"média quad."},
        {t:"Coeficiente angular.","tip":"inclinação."},
        {t:"R².","tip":"variância explicada."},
        {t:"Prever novo ponto.","tip":"reta."},
        {t:"Explicar regressão.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"reta."},{wk:"Sem 2",go:"MSE."},{wk:"Sem 3",go:"R2."}],
      deep:[{label:"StatQuest Regression",url:"https://statquest.org/"},{label:"Khan",url:"https://www.khanacademy.org/math/statistics-probability"}]
    },
    { id:"s8", title:"Gradiente & otimização",
      blurb:"Como o ML aprende.",
      start:["Gradiente.","Descida.","Taxa.","Convergência.","Loss.","Passo."],
      exercises:[
        {t:"Gradiente de f.","tip":"derivadas parciais."},
        {t:"Passo de descida.","tip":"w=w-lr·grad."},
        {t:"Taxa de aprendizado.","tip":"lr."},
        {t:"Loss diminui.","tip":"curva."},
        {t:"Convergência.","tip":"platô."},
        {t:"Explicar gradiente.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"gradiente."},{wk:"Sem 2",go:"descida."},{wk:"Sem 3",go:"lr."}],
      deep:[{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"},{label:"StatQuest",url:"https://statquest.org/"}]
    },
    { id:"s9", title:"Métricas & validação",
      blurb:"Saber se o modelo presta.",
      start:["Treino/teste.","Acurácia.","Precisão/revocação.","F1.","Matriz confusão.","Overfit."],
      exercises:[
        {t:"Split treino/teste.","tip":"sklearn."},
        {t:"Acurácia.","tip":"acertos/total."},
        {t:"Precisão/revocação.","tip":"VP/(VP+FP)."},
        {t:"F1.","tip":"média harmônica."},
        {t:"Matriz confusão.","tip":"4 quad."},
        {t:"Explicar overfit.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"split."},{wk:"Sem 2",go:"acurácia."},{wk:"Sem 3",go:"F1."}],
      deep:[{label:"StatQuest",url:"https://statquest.org/"},{label:"Khan",url:"https://www.khanacademy.org/math/statistics-probability"}]
    },
    { id:"s10", title:"Matemática dados integrada",
      blurb:"Pipeline de ponta a ponta.",
      start:["Revisar.","Pipeline.","Codar.","Medir.","Erros.","Prova."],
      exercises:[
        {t:"Pipeline sklearn.","tip":"fit/predict."},
        {t:"PCA + regressão.","tip":"combinar."},
        {t:"Avaliar modelo.","tip":"métrica."},
        {t:"Gráfico de resultado.","tip":"matplotlib."},
        {t:"Lista 20.","tip":"variado."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"pipeline."},{wk:"Sem 3",go:"prova."}],
      deep:[{label:"StatQuest",url:"https://statquest.org/"},{label:"3Blue1Brown",url:"https://www.3blue1brown.com/"}]
    }
  ]
});
