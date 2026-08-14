window.RMAP.push({
  id:"cqrs", icon:"⇄", color:"#b9bdc6", title:"CQRS",
  desc:"Command Query Responsibility Segregation: separar leitura de escrita. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Conceito de CQRS",
      blurb:"Por que separar comando de consulta.",
      start:["Comando.","Consulta.","Modelos.","Separação.","Motivação.","Quando."],
      exercises:[
        {t:"Diferenciar comando e query.",tip:"escreve vs lê."},
        {t:"Exemplo de modelo de leitura.",tip:"view desnormalizada."},
        {t:"Exemplo de modelo de escrita.",tip:"entidade de domínio."},
        {t:"Quando não usar CQRS.",tip:"crud simples."},
        {t:"Custo de separar.",tip:"complexidade."},
        {t:"Explicar CQRS.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"comando."},{wk:"Sem 2",go:"comando."},{wk:"Sem 3",go:"comando."}],
      deep:[{label:"Martin Fowler",url:"https://martinfowler.com/bliki/CQRS.html"},{label:"MSDN",url:"https://learn.microsoft.com/azure/architecture/patterns/cqrs"}]
    },
    { id:"s2", title:"Modelo de escrita (Command)",
      blurb:"Handlers de comando e validação.",
      start:["Handler.","Validar.","Domínio.","Evento.","Idempotência.","Erro."],
      exercises:[
        {t:"Handler de CreateOrder.",tip:"recebe cmd."},
        {t:"Validar antes de escrever.",tip:"regra de negócio."},
        {t:"Emitir evento após gravar.",tip:"OrderCreated."},
        {t:"Rejeitar comando inválido.",tip:"erro de domínio."},
        {t:"Log do comando.",tip:"auditoria."},
        {t:"Explicar write model.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"handler."},{wk:"Sem 2",go:"handler."},{wk:"Sem 3",go:"handler."}],
      deep:[{label:"Fowler",url:"https://martinfowler.com/bliki/CQRS.html"},{label:"CQRS Docs",url:"https://learn.microsoft.com/azure/architecture/patterns/cqrs"}]
    },
    { id:"s3", title:"Modelo de leitura (Query)",
      blurb:"Projeções e views otimizadas.",
      start:["Projeção.","View.","DTO.","Desnormalizar.","Atualizar.","Cache."],
      exercises:[
        {t:"DTO de listagem.",tip:"sem lógica."},
        {t:"View desnormalizada.",tip:"junta pronta."},
        {t:"Atualizar projeção por evento.",tip:"listener."},
        {t:"Consulta direto na view.",tip:"sem join."},
        {t:"Invalidar cache da view.",tip:"evento."},
        {t:"Explicar read model.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"dto."},{wk:"Sem 2",go:"dto."},{wk:"Sem 3",go:"dto."}],
      deep:[{label:"Eventual Consistency",url:"https://en.wikipedia.org/wiki/Eventual_consistency"},{label:"MSDN",url:"https://learn.microsoft.com/azure/architecture/patterns/cqrs"}]
    },
    { id:"s4", title:"Sincronização entre lados",
      blurb:"Como a escrita alimenta a leitura.",
      start:["Evento.","Listener.","Projetar.","Atraso.","Replay.","Consistência."],
      exercises:[
        {t:"Listener de evento.",tip:"atualiza view."},
        {t:"Medir atraso de projeção.",tip:"lag."},
        {t:"Replay de eventos.",tip:"rebuild view."},
        {t:"Consistência eventual.",tip:"ler pode estar velho."},
        {t:"Handler idempotente.",tip:"replay safe."},
        {t:"Explicar sincronização.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"evento."},{wk:"Sem 2",go:"listener."},{wk:"Sem 3",go:"replay."}],
      deep:[{label:"Event Sourcing",url:"https://martinfowler.com/eaaDev/EventSourcing.html"},{label:"Consistency",url:"https://en.wikipedia.org/wiki/Eventual_consistency"}]
    },
    { id:"s5", title:"Eventual consistency",
      blurb:"O lado difícil do CQRS.",
      start:["Janela.","Stale.","Leitura velha.","UX.","Retry.","Métrica."],
      exercises:[
        {t:"Simular leitura stale.",tip:"ler antes do evento."},
        {t:"UX de carregando.",tip:"otimistic."},
        {t:"Retry de leitura.",tip:"poll."},
        {t:"Métrica de lag.",tip:"grafana."},
        {t:"Documentar limitação.",tip:"contrato."},
        {t:"Explicar eventual.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"stale."},{wk:"Sem 2",go:"stale."},{wk:"Sem 3",go:"stale."}],
      deep:[{label:"Consistency",url:"https://en.wikipedia.org/wiki/Eventual_consistency"},{label:"CAP",url:"https://en.wikipedia.org/wiki/CAP_theorem"}]
    },
    { id:"s6", title:"Escalabilidade",
      blurb:"Escalar leitura e escrita separado.",
      start:["Leitura.","Escrita.","Réplicas.","Shard.","Custo.","Tradeoff."],
      exercises:[
        {t:"Réplica só-leitura.",tip:"scale read."},
        {t:"Shard de escrita.",tip:"partition key."},
        {t:"Separar pools de conexão.",tip:"cqrs infra."},
        {t:"Custo de 2 modelos.",tip:"manutenção."},
        {t:"Quando vale a pena.",tip:"alta carga leitura."},
        {t:"Explicar escala.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"réplica."},{wk:"Sem 2",go:"réplica."},{wk:"Sem 3",go:"réplica."}],
      deep:[{label:"Scalability",url:"https://en.wikipedia.org/wiki/Scalability"},{label:"MSDN",url:"https://learn.microsoft.com/azure/architecture/patterns/cqrs"}]
    },
    { id:"s7", title:"CQRS mais Event Sourcing",
      blurb:"Juntando os dois padrões.",
      start:["Log.","Evento.","Rebuild.","Snapshot.","Audit.","Debug."],
      exercises:[
        {t:"Log de eventos.",tip:"fonte da verdade."},
        {t:"Rebuild de estado.",tip:"replay."},
        {t:"Snapshot periódico.",tip:"performance."},
        {t:"Auditoria nativa.",tip:"histórico."},
        {t:"Depurar por evento.",tip:"replay."},
        {t:"Explicar combo.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"log."},{wk:"Sem 2",go:"log."},{wk:"Sem 3",go:"log."}],
      deep:[{label:"Event Sourcing",url:"https://martinfowler.com/eaaDev/EventSourcing.html"},{label:"Fowler",url:"https://martinfowler.com/bliki/CQRS.html"}]
    },
    { id:"s8", title:"Segurança no CQRS",
      blurb:"Autorização em cada lado.",
      start:["Authz escrita.","Authz leitura.","Filtro.","Mask.","Audit.","Erro."],
      exercises:[
        {t:"Authz no command.",tip:"pode escrever?"},
        {t:"Authz na query.",tip:"pode ver?"},
        {t:"Filtrar view por tenant.",tip:"row level."},
        {t:"Mascarar dado sensível.",tip:"view."},
        {t:"Audit de leitura sensível.",tip:"lgpd."},
        {t:"Explicar segurança.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"authz write."},{wk:"Sem 2",go:"authz read."},{wk:"Sem 3",go:"mask."}],
      deep:[{label:"OWASP",url:"https://owasp.org/"},{label:"LGPD",url:"https://www.gov.br/anpd/pt-br"}]
    },
    { id:"s9", title:"Testes de CQRS",
      blurb:"Validar os dois lados.",
      start:["Testar cmd.","Testar query.","Evento.","Integração.","Stale.","Contrato."],
      exercises:[
        {t:"Teste de handler de cmd.",tip:"estado esperado."},
        {t:"Teste de projeção.",tip:"view correta."},
        {t:"Teste de evento.",tip:"emitido."},
        {t:"Teste de integração.",tip:"end-to-end."},
        {t:"Testar leitura stale.",tip:"retry."},
        {t:"Explicar testes.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"cmd."},{wk:"Sem 2",go:"query."},{wk:"Sem 3",go:"integração."}],
      deep:[{label:"Testing",url:"https://martinfowler.com/articles/practical-test-pyramid.html"},{label:"MSDN",url:"https://learn.microsoft.com/azure/architecture/patterns/cqrs"}]
    },
    { id:"s10", title:"Caso CQRS completo",
      blurb:"Projete um subsistema.",
      start:["Escolher.","Modelar.","Evento.","View.","Medir.","Apresentar."],
      exercises:[
        {t:"Subsistema com CQRS.",tip:"exemplo real."},
        {t:"Command handlers.",tip:"write."},
        {t:"Query handlers.",tip:"read."},
        {t:"Projeção por evento.",tip:"sync."},
        {t:"Métrica de lag.",tip:"grafana."},
        {t:"Apresentar.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"modelar."},{wk:"Sem 2",go:"evento."},{wk:"Sem 3",go:"medir."}],
      deep:[{label:"Fowler",url:"https://martinfowler.com/bliki/CQRS.html"},{label:"MSDN",url:"https://learn.microsoft.com/azure/architecture/patterns/cqrs"}]
    }
  ]
});

window.RMAP.push({
  id:"idempotencia", icon:"↻", color:"#aeb2ba", title:"Idempotência",
  desc:"Garantir que repetir a mesma operação não muda o resultado além da primeira vez. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"O que é idempotência",
      blurb:"f(f(x)) é igual a f(x).",
      start:["Definição.","Exemplo.","PUT.","POST.","Retry.","Porquê."],
      exercises:[
        {t:"Definir idempotência.",tip:"repetir igual."},
        {t:"PUT é idempotente.",tip:"substitui."},
        {t:"POST não é.",tip:"cria novo."},
        {t:"Retry seguro.",tip:"não duplica."},
        {t:"Exemplo matemático.",tip:"abs(abs(x))."},
        {t:"Explicar conceito.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"def."},{wk:"Sem 2",go:"put."},{wk:"Sem 3",go:"retry."}],
      deep:[{label:"REST Idempotency",url:"https://restfulapi.net/idempotent-rest-apis/"},{label:"MDN",url:"https://developer.mozilla.org/"}]
    },
    { id:"s2", title:"Idempotency key",
      blurb:"Identificador de requisição.",
      start:["Chave.","Header.","Store.","TTL.","Dedupe.","Erro."],
      exercises:[
        {t:"Header Idempotency-Key.",tip:"cliente gera."},
        {t:"Armazenar resultado.",tip:"cache da resposta."},
        {t:"Retornar mesmo resultado.",tip:"segunda vez."},
        {t:"TTL da chave.",tip:"expira."},
        {t:"Deduplicar no servidor.",tip:"lock."},
        {t:"Explicar chave.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"chave."},{wk:"Sem 2",go:"store."},{wk:"Sem 3",go:"ttl."}],
      deep:[{label:"Stripe Idempotency",url:"https://stripe.com/docs/api/idempotent_requests"},{label:"REST",url:"https://restfulapi.net/idempotent-rest-apis/"}]
    },
    { id:"s3", title:"Idempotência em DB",
      blurb:"Upsert e constraints.",
      start:["Upsert.","Unique.","ON CONFLICT.","Versão.","Lock.","Retry."],
      exercises:[
        {t:"UPSERT (ON CONFLICT).",tip:"insert or update."},
        {t:"Unique constraint.",tip:"dedupe."},
        {t:"Versão otimista.",tip:"where version."},
        {t:"Lock de linha.",tip:"select for update."},
        {t:"Retry idempotente.",tip:"mesmo efeito."},
        {t:"Explicar DB.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"upsert."},{wk:"Sem 2",go:"unique."},{wk:"Sem 3",go:"lock."}],
      deep:[{label:"Postgres Upsert",url:"https://www.postgresql.org/docs/current/sql-insert.html"},{label:"SQL",url:"https://en.wikipedia.org/wiki/Upsert"}]
    },
    { id:"s4", title:"Filas e mensageria",
      blurb:"At-least-once exige idempotência.",
      start:["At-least-once.","Duplicata.","Consumer.","Dedup.","Offset.","Erro."],
      exercises:[
        {t:"Por que fila duplica.",tip:"at-least-once."},
        {t:"Consumer idempotente.",tip:"dedupe por id."},
        {t:"Chave de mensagem.",tip:"message id."},
        {t:"Commit de offset.",tip:"após processar."},
        {t:"Reprocessar seguro.",tip:"mesmo efeito."},
        {t:"Explicar fila.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"at-least-once."},{wk:"Sem 2",go:"dedup."},{wk:"Sem 3",go:"offset."}],
      deep:[{label:"Kafka",url:"https://kafka.apache.org/documentation/"},{label:"Idempotent Consumer",url:"https://www.confluent.io/blog/"}]
    },
    { id:"s5", title:"Idempotência em pagamentos",
      blurb:"O caso que não pode falhar.",
      start:["Pagamento.","Duplo.","Chave.","Estado.","Reverter.","Auditar."],
      exercises:[
        {t:"Duplo débito.",tip:"retry perigoso."},
        {t:"Idempotency key no pagamento.",tip:"stripe."},
        {t:"Estado da transação.",tip:"pending ou done."},
        {t:"Reverter só se não done.",tip:"seguro."},
        {t:"Auditoria de pagamento.",tip:"log."},
        {t:"Explicar risco.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"duplo."},{wk:"Sem 2",go:"chave."},{wk:"Sem 3",go:"estado."}],
      deep:[{label:"Stripe",url:"https://stripe.com/docs/api/idempotent_requests"},{label:"Payments",url:"https://www.baeldung.com/idempotent-consumer"}]
    },
    { id:"s6", title:"HTTP e APIs",
      blurb:"Métodos idempotentes.",
      start:["GET.","PUT.","DELETE.","POST.","PATCH.","Safe."],
      exercises:[
        {t:"GET idempotente.",tip:"safe."},
        {t:"PUT idempotente.",tip:"substitui."},
        {t:"DELETE idempotente.",tip:"já sumiu."},
        {t:"POST não.",tip:"cria."},
        {t:"PATCH cuidado.",tip:"pode não ser."},
        {t:"Explicar métodos.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"get/put."},{wk:"Sem 2",go:"delete."},{wk:"Sem 3",go:"post."}],
      deep:[{label:"MDN Methods",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},{label:"REST",url:"https://restfulapi.net/idempotent-rest-apis/"}]
    },
    { id:"s7", title:"Deduplicação",
      blurb:"Detectar repetidos.",
      start:["Hash.","Fingerprint.","Janela.","Store.","TTL.","Falso positivo."],
      exercises:[
        {t:"Hash de payload.",tip:"dedupe."},
        {t:"Janela de tempo.",tip:"recentes."},
        {t:"Bloom filter.",tip:"opcional."},
        {t:"Armazenar processados.",tip:"redis."},
        {t:"TTL de dedupe.",tip:"expira."},
        {t:"Explicar dedupe.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"hash."},{wk:"Sem 2",go:"janela."},{wk:"Sem 3",go:"store."}],
      deep:[{label:"Bloom Filter",url:"https://en.wikipedia.org/wiki/Bloom_filter"},{label:"Redis",url:"https://redis.io/docs/latest/"}]
    },
    { id:"s8", title:"Idempotência distribuída",
      blurb:"Vários nós, mesma garantia.",
      start:["Lock dist.","Redis.","Quorum.","Falha.","Clock.","Retry."],
      exercises:[
        {t:"Lock em Redis.",tip:"setnx."},
        {t:"Chave com TTL.",tip:"não trava para sempre."},
        {t:"Falha de lock.",tip:"release."},
        {t:"Clock skew.",tip:"cuidado."},
        {t:"Retry com mesma chave.",tip:"idempotente."},
        {t:"Explicar dist.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"lock."},{wk:"Sem 2",go:"ttl."},{wk:"Sem 3",go:"retry."}],
      deep:[{label:"Redis Lock",url:"https://redis.io/docs/latest/develop/use/patterns/distributed-locks/"},{label:"Redlock",url:"https://redis.io/docs/latest/develop/use/patterns/distributed-locks/"}]
    },
    { id:"s9", title:"Testando idempotência",
      blurb:"Como provar que funciona.",
      start:["Cenário.","Repetir.","Assert.","Estado.","Concorrência.","Fuzz."],
      exercises:[
        {t:"Enviar 2x mesma req.",tip:"mesmo resultado."},
        {t:"Assert de estado.",tip:"não duplicou."},
        {t:"Concorrência simultânea.",tip:"race."},
        {t:"Fuzz de chaves.",tip:"aleatório."},
        {t:"Teste de TTL.",tip:"expira e reprocessa."},
        {t:"Explicar teste.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"cenário."},{wk:"Sem 2",go:"assert."},{wk:"Sem 3",go:"concorrência."}],
      deep:[{label:"Testing",url:"https://martinfowler.com/articles/practical-test-pyramid.html"},{label:"Chaos",url:"https://en.wikipedia.org/wiki/Chaos_engineering"}]
    },
    { id:"s10", title:"Caso idempotente",
      blurb:"Implemente ponta a ponta.",
      start:["Endpoint.","Chave.","Store.","DB.","Teste.","Demo."],
      exercises:[
        {t:"Endpoint com idempotency.",tip:"middleware."},
        {t:"Middleware de chave.",tip:"store."},
        {t:"Gravar com upsert.",tip:"db."},
        {t:"Retry do cliente.",tip:"seguro."},
        {t:"Teste de dupla chamada.",tip:"pytest."},
        {t:"Apresentar.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"endpoint."},{wk:"Sem 2",go:"store."},{wk:"Sem 3",go:"teste."}],
      deep:[{label:"Stripe",url:"https://stripe.com/docs/api/idempotent_requests"},{label:"Baeldung",url:"https://www.baeldung.com/idempotent-consumer"}]
    }
  ]
});

window.RMAP.push({
  id:"race-condition", icon:"⚡", color:"#b4b8c0", title:"Race Condition",
  desc:"Quando o resultado depende da ordem de execução. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"O que é race condition",
      blurb:"Timing muda o resultado.",
      start:["Definição.","Exemplo.","Concorrência.","Não-determinístico.","Bug.","Porquê."],
      exercises:[
        {t:"Definir race.",tip:"ordem importa."},
        {t:"Exemplo contador.",tip:"lost update."},
        {t:"'Lost update' em saldo.",tip:"double spend."},
        {t:"Por que é perigoso.",tip:"silêncio."},
        {t:"Diferença de deadlock.",tip:"não travou."},
        {t:"Explicar race.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"def."},{wk:"Sem 2",go:"exemplo."},{wk:"Sem 3",go:"perigo."}],
      deep:[{label:"Race Condition",url:"https://en.wikipedia.org/wiki/Race_condition"},{label:"Concurrency",url:"https://en.wikipedia.org/wiki/Concurrency_(computer_science)"}]
    },
    { id:"s2", title:"Check-then-act",
      blurb:"A clássica TOCTOU.",
      start:["TOCTOU.","Check.","Act.","Janela.","Gap.","Exemplo."],
      exercises:[
        {t:"Padrão check-then-act.",tip:"if existe then cria."},
        {t:"Janela entre passos.",tip:"outro entra."},
        {t:"Exemplo arquivo.",tip:"race file."},
        {t:"Exemplo saldo.",tip:"double spend."},
        {t:"Por que falha.",tip:"gap."},
        {t:"Explicar TOCTOU.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"toctou."},{wk:"Sem 2",go:"janela."},{wk:"Sem 3",go:"exemplo."}],
      deep:[{label:"TOCTOU",url:"https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use"},{label:"OWASP",url:"https://owasp.org/"}]
    },
    { id:"s3", title:"Sincronização",
      blurb:"Locks e mutex.",
      start:["Mutex.","Lock.","Critical.","Seção.","Granularidade.","Deadlock."],
      exercises:[
        {t:"Mutex em thread.",tip:"lock e unlock."},
        {t:"Seção crítica.",tip:"protegida."},
        {t:"Granularidade do lock.",tip:"escopo."},
        {t:"Evitar deadlock.",tip:"ordem."},
        {t:"Lock reentrante.",tip:"recursive."},
        {t:"Explicar sincronização.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"mutex."},{wk:"Sem 2",go:"critical."},{wk:"Sem 3",go:"deadlock."}],
      deep:[{label:"Mutex",url:"https://en.wikipedia.org/wiki/Lock_(computer_science)"},{label:"Deadlock",url:"https://en.wikipedia.org/wiki/Deadlock"}]
    },
    { id:"s4", title:"Atomicidade",
      blurb:"Operação indivisível.",
      start:["Atômico.","CAS.","Compare.","Swap.","DB trans.","Isolamento."],
      exercises:[
        {t:"Operação atômica.",tip:"indivisível."},
        {t:"Compare-and-swap.",tip:"CAS loop."},
        {t:"Transação DB.",tip:"atomic."},
        {t:"Nível de isolamento.",tip:"serializable."},
        {t:"Incremento atômico.",tip:"redis incr."},
        {t:"Explicar atomic.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"atômico."},{wk:"Sem 2",go:"cas."},{wk:"Sem 3",go:"transação."}],
      deep:[{label:"Atomic",url:"https://en.wikipedia.org/wiki/Linearizability"},{label:"Isolation",url:"https://en.wikipedia.org/wiki/Isolation_(database_systems)"}]
    },
    { id:"s5", title:"Race em DB",
      blurb:"Lost update e phantom.",
      start:["Lost update.","Read-modify-write.","Lock.","MVCC.","Serial.","Select for update."],
      exercises:[
        {t:"Lost update.",tip:"2 writes perdem."},
        {t:"Read-modify-write.",tip:"não atômico."},
        {t:"SELECT FOR UPDATE.",tip:"lock linha."},
        {t:"MVCC.",tip:"versões."},
        {t:"Serializable.",tip:"isolamento forte."},
        {t:"Explicar DB race.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"lost."},{wk:"Sem 2",go:"rmw."},{wk:"Sem 3",go:"serial."}],
      deep:[{label:"Postgres Isolation",url:"https://www.postgresql.org/docs/current/transaction-iso.html"},{label:"Lost Update",url:"https://en.wikipedia.org/wiki/Concurrency_control"}]
    },
    { id:"s6", title:"Race em filas ou distribuído",
      blurb:"Dois consumidores, um recurso.",
      start:["Consumer.","Claim.","Lock.","Lease.","Retry.","Idempotente."],
      exercises:[
        {t:"2 consumers mesma msg.",tip:"at-least-once."},
        {t:"Claim com lease.",tip:"posse temporária."},
        {t:"Lock de recurso.",tip:"redis."},
        {t:"Release no crash.",tip:"ttl."},
        {t:"Idempotente ajuda.",tip:"dedupe."},
        {t:"Explicar fila race.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"consumer."},{wk:"Sem 2",go:"lease."},{wk:"Sem 3",go:"idempotente."}],
      deep:[{label:"Kafka",url:"https://kafka.apache.org/documentation/"},{label:"Lease",url:"https://en.wikipedia.org/wiki/Lease_(computer_science)"}]
    },
    { id:"s7", title:"Detecção",
      blurb:"Como achar o bug.",
      start:["Reproduzir.","Stress.","Log.","Thread sanitizer.","Race detector.","Canário."],
      exercises:[
        {t:"Stress test.",tip:"aumenta chance."},
        {t:"Log de ordem.",tip:"timestamp."},
        {t:"ThreadSanitizer.",tip:"fsanitize."},
        {t:"Race detector Go.",tip:"race."},
        {t:"Canário em prod.",tip:"observar."},
        {t:"Explicar detecção.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"stress."},{wk:"Sem 2",go:"sanitizer."},{wk:"Sem 3",go:"canário."}],
      deep:[{label:"TSan",url:"https://github.com/google/sanitizers/wiki/ThreadSanitizer"},{label:"Go Race",url:"https://go.dev/doc/articles/race_detector"}]
    },
    { id:"s8", title:"Prevenção",
      blurb:"Design sem race.",
      start:["Imutável.","Fila.","Serial.","Lock.","Escopo.","Review."],
      exercises:[
        {t:"Estado imutável.",tip:"copia."},
        {t:"Serializar acesso.",tip:"fila."},
        {t:"Escopo mínimo de lock.",tip:"evita deadlock."},
        {t:"Evitar shared state.",tip:"message passing."},
        {t:"Code review de concorrência.",tip:"olhar."},
        {t:"Explicar prevenção.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"imutável."},{wk:"Sem 2",go:"serial."},{wk:"Sem 3",go:"review."}],
      deep:[{label:"Concurrency",url:"https://en.wikipedia.org/wiki/Concurrency_(computer_science)"},{label:"Actor Model",url:"https://en.wikipedia.org/wiki/Actor_model"}]
    },
    { id:"s9", title:"Testes de concorrência",
      blurb:"Provando que é safe.",
      start:["Stress.","Property.","Model.","Jepsen.","Fuzz.","CI."],
      exercises:[
        {t:"Teste de stress.",tip:"N threads."},
        {t:"Property-based.",tip:"invariantes."},
        {t:"Model checking.",tip:"tla+."},
        {t:"Jepsen-style.",tip:"distribuído."},
        {t:"Rodar no CI.",tip:"porta."},
        {t:"Explicar teste.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"stress."},{wk:"Sem 2",go:"property."},{wk:"Sem 3",go:"ci."}],
      deep:[{label:"Jepsen",url:"https://jepsen.io/"},{label:"TLA+",url:"https://lamport.azurewebsites.net/tla/tla.html"}]
    },
    { id:"s10", title:"Caso race",
      blurb:"Reproduza e corrija.",
      start:["Reproduzir.","Analisar.","Lock.","Testar.","Medir.","Demo."],
      exercises:[
        {t:"Reproduzir race.",tip:"stress."},
        {t:"Analisar janela.",tip:"código."},
        {t:"Aplicar lock ou atômico.",tip:"corrigir."},
        {t:"Teste de regressão.",tip:"ci."},
        {t:"Medir contention.",tip:"métrica."},
        {t:"Apresentar.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"reproduzir."},{wk:"Sem 2",go:"corrigir."},{wk:"Sem 3",go:"testar."}],
      deep:[{label:"TSan",url:"https://github.com/google/sanitizers/wiki/ThreadSanitizer"},{label:"Go Race",url:"https://go.dev/doc/articles/race_detector"}]
    }
  ]
});

window.RMAP.push({
  id:"dlq", icon:"📥", color:"#aeb2ba", title:"DLQ (Dead Letter Queue)",
  desc:"Fila de mensagens que falharam e não puderam ser processadas. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"O que é DLQ",
      blurb:"Lixo que não processa.",
      start:["DLQ.","Poison.","Falha.","Isolar.","Porquê.","Exemplo."],
      exercises:[
        {t:"Definir DLQ.",tip:"dead letter."},
        {t:"Por que isolar.",tip:"não travar fila."},
        {t:"Exemplo de msg ruim.",tip:"schema errado."},
        {t:"Diferença de retry.",tip:"esgotou tentativas."},
        {t:"Impacto em prod.",tip:"banca."},
        {t:"Explicar DLQ.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"def."},{wk:"Sem 2",go:"isolar."},{wk:"Sem 3",go:"exemplo."}],
      deep:[{label:"AWS DLQ",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},{label:"Kafka DLQ",url:"https://kafka.apache.org/documentation/"}]
    },
    { id:"s2", title:"Quando mover para DLQ",
      blurb:"Regras de falha.",
      start:["Max retries.","Erro.","Timeout.","Poison.","Threshold.","Config."],
      exercises:[
        {t:"Máx de retries.",tip:"ex: 5."},
        {t:"Erro não recuperável.",tip:"schema."},
        {t:"Timeout de processamento.",tip:"muito lento."},
        {t:"Poison message.",tip:"sempre falha."},
        {t:"Configurar threshold.",tip:"broker."},
        {t:"Explicar regra.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"retries."},{wk:"Sem 2",go:"erro."},{wk:"Sem 3",go:"threshold."}],
      deep:[{label:"SQS DLQ",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},{label:"Rabbit DLX",url:"https://www.rabbitmq.com/docs/dlx"}]
    },
    { id:"s3", title:"Configuração (SQS ou Rabbit)",
      blurb:"Setup na prática.",
      start:["Redrive.","Policy.","Exchange.","Routing.","TTL.","Alarm."],
      exercises:[
        {t:"Redrive policy SQS.",tip:"maxReceiveCount."},
        {t:"Dead letter exchange.",tip:"rabbit DLX."},
        {t:"Roteamento para DLQ.",tip:"bind."},
        {t:"TTL da DLQ.",tip:"reter."},
        {t:"Alarm de DLQ.",tip:"cloudwatch."},
        {t:"Explicar config.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"redrive."},{wk:"Sem 2",go:"dlx."},{wk:"Sem 3",go:"alarm."}],
      deep:[{label:"SQS",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},{label:"Rabbit DLX",url:"https://www.rabbitmq.com/docs/dlx"}]
    },
    { id:"s4", title:"Inspeção e reprocessamento",
      blurb:"O que fazer com o lixo.",
      start:["Ler.","Causa.","Corrigir.","Reprocessar.","Drop.","Automatizar."],
      exercises:[
        {t:"Ler msg da DLQ.",tip:"inspecionar."},
        {t:"Achar causa raiz.",tip:"log."},
        {t:"Corrigir payload.",tip:"schema."},
        {t:"Reprocessar na fila.",tip:"reenvia."},
        {t:"Descartar se inválido.",tip:"drop."},
        {t:"Explicar fluxo.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ler."},{wk:"Sem 2",go:"causa."},{wk:"Sem 3",go:"reprocessar."}],
      deep:[{label:"SQS DLQ",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},{label:"Replay",url:"https://kafka.apache.org/documentation/"}]
    },
    { id:"s5", title:"Poison vs transient",
      blurb:"Qual vale retry.",
      start:["Transient.","Poison.","Retry.","DLQ.","Jittered.","Circuit."],
      exercises:[
        {t:"Erro transitório.",tip:"rede cai."},
        {t:"Poison message.",tip:"sempre falha."},
        {t:"Retry com backoff.",tip:"transient."},
        {t:"Mover poison para DLQ.",tip:"não retry."},
        {t:"Jittered backoff.",tip:"evita storm."},
        {t:"Explicar distinção.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"transient."},{wk:"Sem 2",go:"poison."},{wk:"Sem 3",go:"backoff."}],
      deep:[{label:"Retry",url:"https://en.wikipedia.org/wiki/Exponential_backoff"},{label:"Poison",url:"https://en.wikipedia.org/wiki/Poison_message"}]
    },
    { id:"s6", title:"DLQ em Kafka",
      blurb:"Sem DLQ nativo, como fazer.",
      start:["Retry topic.","Error topic.","Consumer.","Partition.","Offset.","Replay."],
      exercises:[
        {t:"Retry topic.",tip:"tenta de novo."},
        {t:"Error topic.",tip:"DLQ equivalente."},
        {t:"Consumer de erro.",tip:"analisa."},
        {t:"Não pausar partição.",tip:"isolado."},
        {t:"Replay manual.",tip:"reproduz."},
        {t:"Explicar Kafka DLQ.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"retry topic."},{wk:"Sem 2",go:"error topic."},{wk:"Sem 3",go:"replay."}],
      deep:[{label:"Kafka",url:"https://kafka.apache.org/documentation/"},{label:"Retry Topics",url:"https://www.confluent.io/blog/"}]
    },
    { id:"s7", title:"Monitoramento",
      blurb:"Não deixe a DLQ crescer.",
      start:["Métrica.","Alarm.","Dashboard.","Tamanho.","Tendência.","Alerta."],
      exercises:[
        {t:"Métrica de DLQ.",tip:"msgs."},
        {t:"Alarm de volume.",tip:"sobe alerta."},
        {t:"Dashboard visível.",tip:"grafana."},
        {t:"Tendência de crescimento.",tip:"observar."},
        {t:"Alerta para oncall.",tip:"pager."},
        {t:"Explicar monitor.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"métrica."},{wk:"Sem 2",go:"alarm."},{wk:"Sem 3",go:"dashboard."}],
      deep:[{label:"CloudWatch",url:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"},{label:"Grafana",url:"https://grafana.com/docs/"}]
    },
    { id:"s8", title:"DLQ e compliance",
      blurb:"Dados falhados têm dono.",
      start:["Retenção.","Auditoria.","LGPD.","Cripto.","Acesso.","Drop seguro."],
      exercises:[
        {t:"Retenção da DLQ.",tip:"política."},
        {t:"Auditoria de msg.",tip:"quem leu."},
        {t:"LGPD na DLQ.",tip:"dado pessoal."},
        {t:"Criptografar em repouso.",tip:"security."},
        {t:"Drop com log.",tip:"rastreável."},
        {t:"Explicar compliance.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"retenção."},{wk:"Sem 2",go:"auditoria."},{wk:"Sem 3",go:"lgpd."}],
      deep:[{label:"LGPD",url:"https://www.gov.br/anpd/pt-br"},{label:"OWASP",url:"https://owasp.org/"}]
    },
    { id:"s9", title:"Testes de DLQ",
      blurb:"Garantir que falha vai parar lá.",
      start:["Injetar.","Falhar.","Assert.","Reprocessar.","CI.","Caos."],
      exercises:[
        {t:"Msg que sempre falha.",tip:"poison."},
        {t:"Ver cair na DLQ.",tip:"assert."},
        {t:"Testar reprocessamento.",tip:"corrige e reenvia."},
        {t:"CI de DLQ.",tip:"porta."},
        {t:"Caos de consumer.",tip:"mata."},
        {t:"Explicar teste.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"injetar."},{wk:"Sem 2",go:"assert."},{wk:"Sem 3",go:"ci."}],
      deep:[{label:"Testing",url:"https://martinfowler.com/articles/practical-test-pyramid.html"},{label:"Chaos",url:"https://en.wikipedia.org/wiki/Chaos_engineering"}]
    },
    { id:"s10", title:"Caso DLQ",
      blurb:"Projete o tratamento.",
      start:["Identificar.","Configurar.","Monitorar.","Reprocessar.","Documentar.","Demo."],
      exercises:[
        {t:"Onde DLQ faz sentido.",tip:"código."},
        {t:"Configurar broker.",tip:"redrive."},
        {t:"Pipeline de reprocessamento.",tip:"script."},
        {t:"Monitorar volume.",tip:"alarm."},
        {t:"Runbook de DLQ.",tip:"passos."},
        {t:"Apresentar.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"identificar."},{wk:"Sem 2",go:"configurar."},{wk:"Sem 3",go:"monitorar."}],
      deep:[{label:"SQS DLQ",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},{label:"Rabbit DLX",url:"https://www.rabbitmq.com/docs/dlx"}]
    }
  ]
});

window.RMAP.push({
  id:"dual-write", icon:"✍", color:"#b9bdc6", title:"Dual-Write",
  desc:"Escrever em duas fontes ao mesmo tempo e o perigo de inconsistência. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"O problema dual-write",
      blurb:"DB mais cache ou fila ao mesmo tempo.",
      start:["Dois stores.","Ordem.","Falha.","Inconsistência.","Por quê.","Exemplo."],
      exercises:[
        {t:"Cenário DB mais Cache.",tip:"escreve nos dois."},
        {t:"Falha no segundo.",tip:"inconsistente."},
        {t:"Ordem importa.",tip:"qual primeiro."},
        {t:"Leitura vê lixo.",tip:"cache velho."},
        {t:"Por que é anti-pattern.",tip:"banca."},
        {t:"Explicar dual-write.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"cenário."},{wk:"Sem 2",go:"cenário."},{wk:"Sem 3",go:"cenário."}],
      deep:[{label:"Dual Write",url:"https://www.confluent.io/blog/"},{label:"Outbox",url:"https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html"}]
    },
    { id:"s2", title:"Inconsistência",
      blurb:"Estados divergentes entre as fontes.",
      start:["Divergência.","Leitura.","Stale.","Corrupção.","Detectar.","Medir."],
      exercises:[
        {t:"Estado A diferente de B.",tip:"divergiu."},
        {t:"Leitura inconsistente.",tip:"lado errado."},
        {t:"Detectar diferença.",tip:"reconcile."},
        {t:"Medir drift.",tip:"métrica."},
        {t:"Alertar divergência.",tip:"monitor."},
        {t:"Explicar inconsist.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"divergência."},{wk:"Sem 2",go:"divergência."},{wk:"Sem 3",go:"divergência."}],
      deep:[{label:"Consistency",url:"https://en.wikipedia.org/wiki/Eventual_consistency"},{label:"Reconciliation",url:"https://en.wikipedia.org/wiki/Data_reconciliation"}]
    },
    { id:"s3", title:"Transação distribuída",
      blurb:"Tentar fazer os dois juntos com segurança.",
      start:["2PC.","Saga.","Coordinator.","Abort.","Lento.","Falha."],
      exercises:[
        {t:"Two-phase commit.",tip:"prepare e commit."},
        {t:"Coordinator falha.",tip:"bloqueia."},
        {t:"Saga pattern.",tip:"compensação."},
        {t:"Custo de 2PC.",tip:"lock."},
        {t:"Quando usar.",tip:"raro."},
        {t:"Explicar 2PC.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"2pc."},{wk:"Sem 2",go:"2pc."},{wk:"Sem 3",go:"2pc."}],
      deep:[{label:"2PC",url:"https://en.wikipedia.org/wiki/Two-phase_commit_protocol"},{label:"Saga",url:"https://microservices.io/patterns/data/saga.html"}]
    },
    { id:"s4", title:"Outbox pattern",
      blurb:"A solução correta para dual-write.",
      start:["Outbox.","Tabela.","Evento.","Polling.","CDC.","Atômico."],
      exercises:[
        {t:"Tabela outbox na transação.",tip:"1 transação."},
        {t:"Evento na mesma tx.",tip:"atômico."},
        {t:"Relay lê outbox.",tip:"envia fila."},
        {t:"CDC (Debezium).",tip:"captura log."},
        {t:"Marcar enviado.",tip:"dedupe."},
        {t:"Explicar outbox.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"outbox."},{wk:"Sem 2",go:"outbox."},{wk:"Sem 3",go:"outbox."}],
      deep:[{label:"Outbox",url:"https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html"},{label:"CDC",url:"https://en.wikipedia.org/wiki/Change_data_capture"}]
    },
    { id:"s5", title:"CDC (Change Data Capture)",
      blurb:"Derivar tudo do log do banco.",
      start:["WAL.","Log.","Debezium.","Stream.","Cache.","Fila."],
      exercises:[
        {t:"Ler WAL.",tip:"log de mudanças."},
        {t:"Debezium connector.",tip:"kafka."},
        {t:"Atualizar cache por CDC.",tip:"sem dual-write."},
        {t:"Stream para fila.",tip:"evento."},
        {t:"Sem inconsistência.",tip:"1 fonte."},
        {t:"Explicar CDC.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"wal."},{wk:"Sem 2",go:"wal."},{wk:"Sem 3",go:"wal."}],
      deep:[{label:"Debezium",url:"https://debezium.io/"},{label:"CDC",url:"https://en.wikipedia.org/wiki/Change_data_capture"}]
    },
    { id:"s6", title:"Cache mais DB",
      blurb:"O caso mais comum de dual-write.",
      start:["Write-through.","Write-behind.","Invalidar.","TTL.","Stale.","Padrão."],
      exercises:[
        {t:"Write-through.",tip:"grava cache e db."},
        {t:"Invalidar em vez de atualizar.",tip:"simples."},
        {t:"TTL de fallback.",tip:"auto expira."},
        {t:"Read-through.",tip:"carrega sob miss."},
        {t:"Stale window.",tip:"cuidado."},
        {t:"Explicar cache mais db.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"write-through."},{wk:"Sem 2",go:"write-through."},{wk:"Sem 3",go:"write-through."}],
      deep:[{label:"Cache Patterns",url:"https://en.wikipedia.org/wiki/Cache_(computing)"},{label:"Redis",url:"https://redis.io/docs/latest/"}]
    },
    { id:"s7", title:"Idempotência ajuda",
      blurb:"Mitigar efeitos do dual-write.",
      start:["Idempotente.","Dedupe.","Retry.","Ordem.","Compensar.","Erro."],
      exercises:[
        {t:"Consumer idempotente.",tip:"dedupe."},
        {t:"Retry seguro.",tip:"não duplica."},
        {t:"Ordem de eventos.",tip:"sequência."},
        {t:"Compensação.",tip:"desfazer."},
        {t:"Log de cada write.",tip:"auditoria."},
        {t:"Explicar mitigação.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"idempotente."},{wk:"Sem 2",go:"idempotente."},{wk:"Sem 3",go:"idempotente."}],
      deep:[{label:"Idempotency",url:"https://restfulapi.net/idempotent-rest-apis/"},{label:"Saga",url:"https://microservices.io/patterns/data/saga.html"}]
    },
    { id:"s8", title:"Reconciliação",
      blurb:"Consertar divergência depois.",
      start:["Comparator.","Batch.","Diff.","Reparar.","Reportar.","Automático."],
      exercises:[
        {t:"Job de comparação.",tip:"A vs B."},
        {t:"Diff de registros.",tip:"chave."},
        {t:"Reparar o mais novo.",tip:"fonte verdade."},
        {t:"Reportar divergências.",tip:"log."},
        {t:"Reconcile automático.",tip:"periódico."},
        {t:"Explicar reconcile.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"comparator."},{wk:"Sem 2",go:"comparator."},{wk:"Sem 3",go:"comparator."}],
      deep:[{label:"Reconciliation",url:"https://en.wikipedia.org/wiki/Data_reconciliation"},{label:"Outbox",url:"https://debezium.io/"}]
    },
    { id:"s9", title:"Testes de dual-write",
      blurb:"Provar a falha e a cura.",
      start:["Falhar 2º.","Inconsist.","Outbox.","CDC.","Assert.","CI."],
      exercises:[
        {t:"Injetar falha no 2º write.",tip:"caos."},
        {t:"Assert inconsistência.",tip:"dual-write."},
        {t:"Mesmo com outbox.",tip:"consistente."},
        {t:"Teste de CDC.",tip:"evento sai."},
        {t:"Rodar no CI.",tip:"porta."},
        {t:"Explicar teste.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"falhar."},{wk:"Sem 2",go:"falhar."},{wk:"Sem 3",go:"falhar."}],
      deep:[{label:"Chaos",url:"https://en.wikipedia.org/wiki/Chaos_engineering"},{label:"Testing",url:"https://martinfowler.com/articles/practical-test-pyramid.html"}]
    },
    { id:"s10", title:"Caso dual-write",
      blurb:"Refatore para outbox.",
      start:["Identificar.","Modelar.","Outbox.","CDC.","Testar.","Demo."],
      exercises:[
        {t:"Achar dual-write.",tip:"código."},
        {t:"Adicionar tabela outbox.",tip:"transação."},
        {t:"Relay para fila.",tip:"envia."},
        {t:"Atualizar cache por evento.",tip:"sem 2 writes."},
        {t:"Teste de consistência.",tip:"pytest."},
        {t:"Apresentar.",tip:"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"identificar."},{wk:"Sem 2",go:"identificar."},{wk:"Sem 3",go:"identificar."}],
      deep:[{label:"Outbox",url:"https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html"},{label:"Saga",url:"https://microservices.io/patterns/data/saga.html"}]
    }
  ]
});
window.RMAP.push({
  id:"rate-limit", icon:"🚦", color:"#b4b8c0", title:"Rate Limit",
  desc:"Controlar quantidade de requisições por cliente/tempo. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Por que rate limit",
      blurb:"Proteger e garantir uso justo.",
      start:["Abuso.","Overload.","Justiça.","Custo.","DoS.","Quota."],
      exercises:[
        {t:"Evitar overload.","tip":"protege servidor."},
        {t:"Uso justo entre clientes.","tip":"quota."},
        {t:"Mitigar DoS simples.","tip":"limite."},
        {t:"Controlar custo.","tip":"API paga."},
        {t:"Exemplo de abuso.","tip":"scraper."},
        {t:"Explicar motivo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"overload."},{wk:"Sem 2",go:"justiça."},{wk:"Sem 3",go:"custo."}],
      deep:[{label:"Rate Limiting",url:"https://en.wikipedia.org/wiki/Rate_limiting"},{label:"OWASP",url:"https://owasp.org/"}]
    },
    { id:"s2", title:"Algoritmos",
      blurb:"Token bucket, leaky bucket, fixed window.",
      start:["Token bucket.","Leaky.","Fixed.","Sliding.","Diferenças.","Escolha."],
      exercises:[
        {t:"Token bucket.","tip":"tokens recarregam."},
        {t:"Leaky bucket.","tip":"vaza constante."},
        {t:"Fixed window.","tip":"conta por janela."},
        {t:"Sliding window.","tip":"suaviza."},
        {t:"Comparar algoritmos.","tip":"tradeoff."},
        {t:"Explicar buckets.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"token."},{wk:"Sem 2",go:"leaky."},{wk:"Sem 3",go:"windows."}],
      deep:[{label:"Algorithms",url:"https://en.wikipedia.org/wiki/Rate_limiting"},{label:"Token Bucket",url:"https://en.wikipedia.org/wiki/Token_bucket"}]
    },
    { id:"s3", title:"Implementação (Redis)",
      blurb:"Contador atômico distribuído.",
      start:["INCR.","EXPIRE.","Lua.","Atomic.","TTL.","Cluster."],
      exercises:[
        {t:"INCR + EXPIRE.","tip":"janela fixa."},
        {t:"Script Lua atômico.","tip":"sem race."},
        {t:"Sliding com sorted set.","tip":"zadd/zrem."},
        {t:"TTL da janela.","tip":"expira."},
        {t:"Funciona em cluster.","tip":"redis."},
        {t:"Explicar impl.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"incr."},{wk:"Sem 2",go:"lua."},{wk:"Sem 3",go:"ttl."}],
      deep:[{label:"Redis Rate Limit",url:"https://redis.io/docs/latest/develop/use/patterns/rate-limiter/"},{label:"Lua",url:"https://www.lua.org/"}]
    },
    { id:"s4", title:"Respostas e headers",
      blurb:"Como o cliente sabe.",
      start:["429.","Retry-After.","Headers.","Remaining.","Reset.","Cliente."],
      exercises:[
        {t:"HTTP 429.","tip":"too many."},
        {t:"Header Retry-After.","tip":"espera."},
        {t:"X-RateLimit-Remaining.","tip":"cliente vê."},
        {t:"X-RateLimit-Reset.","tip":"quando zera."},
        {t:"Cliente respeita.","tip":"backoff."},
        {t:"Explicar headers.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"429."},{wk:"Sem 2",go:"retry-after."},{wk:"Sem 3",go:"headers."}],
      deep:[{label:"429",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429"},{label:"Headers",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"}]
    },
    { id:"s5", title:"Limites por cliente",
      blurb:"Chave de rate limit.",
      start:["IP.","User.","API key.","Tier.","Escopo.","Burst."],
      exercises:[
        {t:"Limitar por IP.","tip":"simples."},
        {t:"Limitar por usuário.","tip":"justo."},
        {t:"Tier de plano.","tip":"free vs pro."},
        {t:"Burst permitido.","tip":"pico."},
        {t:"Escopo (endpoint).","tip":"por rota."},
        {t:"Explicar chave.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ip."},{wk:"Sem 2",go:"user."},{wk:"Sem 3",go:"tier."}],
      deep:[{label:"Rate Limiting",url:"https://en.wikipedia.org/wiki/Rate_limiting"},{label:"API Keys",url:"https://en.wikipedia.org/wiki/Application_programming_interface_key"}]
    },
    { id:"s6", title:"Rate limit distribuído",
      blurb:"Vários nós, um limite.",
      start:["Central.","Redis.","Quorum.","Local.","Sync.","Tradeoff."],
      exercises:[
        {t:"Store central (Redis).","tip":"compartilhado."},
        {t:"Rate local por nó.","tip":"mais permissivo."},
        {t:"Sync entre nós.","tip":"custo."},
        {t:"Tradeoff precisão.","tip":"aproximado."},
        {t:"Gateway único.","tip":"centraliza."},
        {t:"Explicar dist.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"central."},{wk:"Sem 2",go:"local."},{wk:"Sem 3",go:"tradeoff."}],
      deep:[{label:"Redis",url:"https://redis.io/docs/latest/"},{label:"Gateway",url:"https://en.wikipedia.org/wiki/API_gateway"}]
    },
    { id:"s7", title:"Throttling vs limiting",
      blurb:"Devasar vs bloquear.",
      start:["Block.","Throttle.","Degrade.","Queue.","Prioridade.","UX."],
      exercises:[
        {t:"Bloquear (429).","tip":"rejeita."},
        {t:"Throttle (devagar).","tip":"degrada."},
        {t:"Enfileirar excesso.","tip":"fila."},
        {t:"Priorizar clientes.","tip":"tier."},
        {t:"UX do limite.","tip":"mensagem."},
        {t:"Explicar diferença.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"block."},{wk:"Sem 2",go:"throttle."},{wk:"Sem 3",go:"ux."}],
      deep:[{label:"Throttling",url:"https://en.wikipedia.org/wiki/Throttling_process"},{label:"Rate Limiting",url:"https://en.wikipedia.org/wiki/Rate_limiting"}]
    },
    { id:"s8", title:"Bypass e abuso",
      blurb:"Como o limite é furado.",
      start:["Spoof IP.","Rotate key.","Distribuir.","Detectar.","Harden.","Monitor."],
      exercises:[
        {t:"Trocar de IP.","tip":"spoof."},
        {t:"Rotacionar API key.","tip":"foge limite."},
        {t:"Distribuir requisições.","tip":"baixo volume."},
        {t:"Detectar padrão.","tip":"comportamento."},
        {t:"Harden limite.","tip":"multi-camada."},
        {t:"Explicar abuso.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"spoof."},{wk:"Sem 2",go:"rotate."},{wk:"Sem 3",go:"detectar."}],
      deep:[{label:"Abuse",url:"https://owasp.org/"},{label:"Security",url:"https://cheatsheetseries.owasp.org/"}]
    },
    { id:"s9", title:"Testes de rate limit",
      blurb:"Provar que limita.",
      start:["Burst.","Assert 429.","Reset.","Lua.","CI.","Carga."],
      exercises:[
        {t:"Enviar burst.","tip":"acima do limite."},
        {t:"Assert 429.","tip":"bloqueou."},
        {t:"Esperar reset.","tip":"volta."},
        {t:"Testar script Lua.","tip":"atômico."},
        {t:"Teste de carga.","tip":"k6."},
        {t:"Explicar teste.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"burst."},{wk:"Sem 2",go:"assert."},{wk:"Sem 3",go:"carga."}],
      deep:[{label:"k6",url:"https://k6.io/docs/"},{label:"Testing",url:"https://martinfowler.com/articles/practical-test-pyramid.html"}]
    },
    { id:"s10", title:"Caso rate limit",
      blurb:"Implemente um limiter.",
      start:["Escolher.","Redis.","Middleware.","Headers.","Testar.","Demo."],
      exercises:[
        {t:"Algoritmo (token bucket).","tip":"escolha."},
        {t:"Middleware de limite.","tip":"request."},
        {t:"Headers de resposta.","tip":"429+retry."},
        {t:"Limite por tier.","tip":"config."},
        {t:"Teste de burst.","tip":"pytest/k6."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"escolher."},{wk:"Sem 2",go:"middleware."},{wk:"Sem 3",go:"testar."}],
      deep:[{label:"Redis Limiter",url:"https://redis.io/docs/latest/develop/use/patterns/rate-limiter/"},{label:"Token Bucket",url:"https://en.wikipedia.org/wiki/Token_bucket"}]
    }
  ]
});
window.RMAP.push({
  id:"time-attack", icon:"⏱", color:"#b9bdc6", title:"Time Attack",
  desc:"Ataque que infere segredos pela diferença de tempo de execução. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"O que é timing attack",
      blurb:"O tempo conta o segredo.",
      start:["Timing.","Canal.","Segredo.","Comparação.","Exemplo.","Porquê."],
      exercises:[
        {t:"Definir timing attack.","tip":"side channel."},
        {t:"Comparação não-constante.","tip":"== em string."},
        {t:"Exemplo de senha.","tip":"char a char."},
        {t:"Por que vaza.","tip":"tempo rever~."},
        {t:"Diferença de canais.","tip":"side channel."},
        {t:"Explicar ataque.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"def."},{wk:"Sem 2",go:"comparação."},{wk:"Sem 3",go:"exemplo."}],
      deep:[{label:"Timing Attack",url:"https://en.wikipedia.org/wiki/Timing_attack"},{label:"Side Channel",url:"https://en.wikipedia.org/wiki/Side-channel_attack"}]
    },
    { id:"s2", title:"Comparação insegura",
      blurb:"Onde o tempo vaza.",
      start:["== string.","Short-circuit.","Loop.","Early return.","Length.","Leak."],
      exercises:[
        {t:"== em senha.","tip":"não use."},
        {t:"Short-circuit OR.","tip":"para cedo."},
        {t:"Loop que retorna no 1º diff.","tip":"vaza posição."},
        {t:"Vazar tamanho.","tip":"len diferente."},
        {t:"Por que demora mais.","tip":"compara mais chars."},
        {t:"Explicar vazamento.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"==."},{wk:"Sem 2",go:"short-circuit."},{wk:"Sem 3",go:"loop."}],
      deep:[{label:"Timing",url:"https://en.wikipedia.org/wiki/Timing_attack"},{label:"Crypto Fails",url:"https://www.schneier.com/"}]
    },
    { id:"s3", title:"Comparação constante",
      blurb:"A defesa básica.",
      start:["Constant-time.","XOR.","Hash.","hmac.","Early-exit.","Lib."],
      exercises:[
        {t:"compare constante.","tip":"sempre percorre."},
        {t:"XOR acumulado.","tip":"ou lógico."},
        {t:"hash antes de comparar.","tip":"igual tamanho."},
        {t:"hmac.compare.","tip":"lib segura."},
        {t:"Nunca early-exit.","tip":"mesmo tempo."},
        {t:"Explicar defesa.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"constante."},{wk:"Sem 2",go:"xor."},{wk:"Sem 3",go:"hmac."}],
      deep:[{label:"Constant Time",url:"https://en.wikipedia.org/wiki/Constant-time_algorithm"},{label:"HKDF/HMAC",url:"https://en.wikipedia.org/wiki/HMAC"}]
    },
    { id:"s4", title:"Ataque em strings de token",
      blurb:"Recuperar token byte a byte.",
      start:["Token.","Byte.","Medir.","Estatística.","Many runs.","Recuperar."],
      exercises:[
        {t:"Token secreto.","tip":"exemplo lab."},
        {t:"Medir tempo por prefixo.","tip":"estatística."},
        {t:"Muitas amostras.","tip":"ruído."},
        {t:"Recuperar 1 byte.","tip":"loop externo."},
        {t:"Repetir para todos.","tip":"até completar."},
        {t:"Explicar recuperação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"token."},{wk:"Sem 2",go:"medir."},{wk:"Sem 3",go:"recuperar."}],
      deep:[{label:"Remote Timing",url:"https://en.wikipedia.org/wiki/Timing_attack"},{label:"Paper",url:"https://crypto.stanford.edu/~dabo/papers/webtiming.pdf"}]
    },
    { id:"s5", title:"Timing em cripto",
      blurb:"RSA, AES e o perigo.",
      start:["RSA.","AES.","Cache.","Branch.","Constant.","Lib."],
      exercises:[
        {t:"RSA dependente de dados.","tip":"vulnerável."},
        {t:"AES cache timing.","tip":"acesso memo."},
        {t:"Branch baseado em segredo.","tip":"vaza."},
        {t:"Usar lib constante.","tip":"boringcrypto."},
        {t:"Nunca implementar cripto.","tip":"use lib."},
        {t:"Explicar cripto timing.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"rsa."},{wk:"Sem 2",go:"aes."},{wk:"Sem 3",go:"lib."}],
      deep:[{label:"Cache Timing",url:"https://en.wikipedia.org/wiki/Cache_side-channel_attack"},{label:"Constant Time",url:"https://en.wikipedia.org/wiki/Constant-time_algorithm"}]
    },
    { id:"s6", title:"Mitigações gerais",
      blurb:"Como não vazar tempo.",
      start:["Constant.","Hash.","Dummy.","Noise.","Blinding.","Review."],
      exercises:[
        {t:"Operações constantes.","tip":"sem branch."},
        {t:"Comparar hashes.","tip":"mesmo tamanho."},
        {t:"Dummy operations.","tip":"equaliza."},
        {t:"Adicionar ruído.","tip":"dificulta."},
        {t:"Blinding (RSA).","tip":"randomiza."},
        {t:"Explicar mitigação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"constant."},{wk:"Sem 2",go:"hash."},{wk:"Sem 3",go:"blinding."}],
      deep:[{label:"Constant Time",url:"https://en.wikipedia.org/wiki/Constant-time_algorithm"},{label:"Blinding",url:"https://en.wikipedia.org/wiki/Blinding_(cryptography)"}]
    },
    { id:"s7", title:"Laboratório (ético)",
      blurb:"Só em ambiente seu.",
      start:["Lab.","Servidor.","Token.","Medir.","Comparar.","Reportar."],
      exercises:[
        {t:"Servidor seu vulnerável.","tip":"intencional."},
        {t:"Endpoint de comparação.","tip":"inseguro."},
        {t:"Script de medição.","tip":"requests."},
        {t:"Comparar constante x não.","tip":"diff."},
        {t:"Relatório de achado.","tip":"estudo."},
        {t:"Explicar lab.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"lab."},{wk:"Sem 2",go:"medir."},{wk:"Sem 3",go:"relatório."}],
      deep:[{label:"Side Channel",url:"https://en.wikipedia.org/wiki/Side-channel_attack"},{label:"OWASP",url:"https://owasp.org/"}]
    },
    { id:"s8", title:"Detecção",
      blurb:"Como o blue percebe.",
      start:["Padrão.","Muitas req.","Similaridade.","Anomalia.","Log.","Alerta."],
      exercises:[
        {t:"Muitas req iguais.","tip":"sondagem."},
        {t:"Prefixos sistemáticos.","tip":"bruteforce."},
        {t:"Anomalia de tráfego.","tip":"detectar."},
        {t:"Log de timing.","tip":"observar."},
        {t:"Alerta de sondagem.","tip":"waf."},
        {t:"Explicar detecção.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"padrão."},{wk:"Sem 2",go:"anomalia."},{wk:"Sem 3",go:"alerta."}],
      deep:[{label:"WAF",url:"https://en.wikipedia.org/wiki/Web_application_firewall"},{label:"Anomaly",url:"https://en.wikipedia.org/wiki/Anomaly_detection"}]
    },
    { id:"s9", title:"Testes de defesa",
      blurb:"Provar que é constante.",
      start:["Medir.","Variância.","Assert.","Fuzz.","Chaos.","CI."],
      exercises:[
        {t:"Medir tempo de comparação.","tip":"estatística."},
        {t:"Variância baixa.","tip":"constante."},
        {t:"Assert independente do input.","tip":"mesmo tempo."},
        {t:"Fuzz de tamanhos.","tip":"robusto."},
        {t:"CI de timing.","tip":"porta."},
        {t:"Explicar teste.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"medir."},{wk:"Sem 2",go:"variância."},{wk:"Sem 3",go:"ci."}],
      deep:[{label:"Constant Time",url:"https://en.wikipedia.org/wiki/Constant-time_algorithm"},{label:"Testing",url:"https://martinfowler.com/articles/practical-test-pyramid.html"}]
    },
    { id:"s10", title:"Caso time attack",
      blurb:"Quebre e conserte.",
      start:["Servidor.","Quebrar.","Medir.","Consertar.","Testar.","Demo."],
      exercises:[
        {t:"Servidor lab vulnerável.","tip":"seu."},
        {t:"Script de ataque.","tip":"recupera token."},
        {t:"Medir com estatística.","tip":"many runs."},
        {t:"Consertar com hash.","tip":"constante."},
        {t:"Teste de defesa.","tip":"timing."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"quebrar."},{wk:"Sem 2",go:"consertar."},{wk:"Sem 3",go:"testar."}],
      deep:[{label:"Timing",url:"https://en.wikipedia.org/wiki/Timing_attack"},{label:"Constant Time",url:"https://en.wikipedia.org/wiki/Constant-time_algorithm"}]
    }
  ]
});
window.RMAP.push({
  id:"poison-message", icon:"☣", color:"#aeb2ba", title:"Poison Message",
  desc:"Mensagem que sempre falha ao processar e trava o consumidor. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"O que é poison message",
      blurb:"A mensagem que não processa nunca.",
      start:["Poison.","Falha.","Loop.","Trava.","Exemplo.","Porquê."],
      exercises:[
        {t:"Definir poison.","tip":"sempre falha."},
        {t:"Loop de retry.","tip":"trava consumidor."},
        {t:"Exemplo schema ruim.","tip":"campo ausente."},
        {t:"Diferença de transient.","tip":"não é rede."},
        {t:"Impacto em prod.","tip":"banca."},
        {t:"Explicar poison.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"def."},{wk:"Sem 2",go:"loop."},{wk:"Sem 3",go:"exemplo."}],
      deep:[{label:"Poison",url:"https://en.wikipedia.org/wiki/Poison_message"},{label:"DLQ",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"}]
    },
    { id:"s2", title:"Causas comuns",
      blurb:"Por que uma msg envenena.",
      start:["Schema.","Null.","Tipo.","Encoding.","Tamanho.","Versão."],
      exercises:[
        {t:"Schema incompatível.","tip":"campo errado."},
        {t:"Null inesperado.","tip":"NPE."},
        {t:"Tipo errado.","tip":"string vs int."},
        {t:"Encoding quebrado.","tip":"UTF-8."},
        {t:"Msg muito grande.","tip":"estouro."},
        {t:"Explicar causas.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"schema."},{wk:"Sem 2",go:"null."},{wk:"Sem 3",go:"tipo."}],
      deep:[{label:"Poison",url:"https://en.wikipedia.org/wiki/Poison_message"},{label:"Schema",url:"https://en.wikipedia.org/wiki/XML_schema"}]
    },
    { id:"s3", title:"Efeito em fila",
      blurb:"Uma msg trava tudo.",
      start:["Single thread.","Bloqueio.","Atraso.","Backlog.","Saúde.","DLQ."],
      exercises:[
        {t:"Consumidor single-thread.","tip":"trava."},
        {t:"Backlog de mensagens.","tip":"acumula."},
        {t:"Saúde do consumer.","tip":"unhealthy."},
        {t:"Mover para DLQ alivia.","tip":"isolamento."},
        {t:"Por que não ficar retry.","tip":"loop."},
        {t:"Explicar efeito.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"single."},{wk:"Sem 2",go:"backlog."},{wk:"Sem 3",go:"dlq."}],
      deep:[{label:"DLQ",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},{label:"Poison",url:"https://en.wikipedia.org/wiki/Poison_message"}]
    },
    { id:"s4", title:"Detecção",
      blurb:"Achar a msg venom.",
      start:["Log.","Stack.","Contador.","Padrão.","Isolar.","Alerta."],
      exercises:[
        {t:"Log de erro repetido.","tip":"mesma msg."},
        {t:"Stack trace.","tip":"causa."},
        {t:"Contador de falhas.","tip":"mesma id."},
        {t:"Isolar mensagem.","tip":"replay."},
        {t:"Alerta de poison.","tip":"monitor."},
        {t:"Explicar detecção.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"log."},{wk:"Sem 2",go:"stack."},{wk:"Sem 3",go:"contador."}],
      deep:[{label:"Observability",url:"https://en.wikipedia.org/wiki/Observability"},{label:"Logging",url:"https://en.wikipedia.org/wiki/Logfile"}]
    },
    { id:"s5", title:"Prevenção (validação)",
      blurb:"Não processe lixo.",
      start:["Validação.","Schema.","Rejeitar.","Dead.","Quarentena.","Fail fast."],
      exercises:[
        {t:"Validar antes de processar.","tip":"schema check."},
        {t:"Rejeitar msg inválida.","tip":"early."},
        {t:"Quarentena suspeita.","tip":"fila à parte."},
        {t:"Fail fast.","tip":"não tenta."},
        {t:"Schema versionado.","tip":"compatível."},
        {t:"Explicar prevenção.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"validar."},{wk:"Sem 2",go:"rejeitar."},{wk:"Sem 3",go:"quarentena."}],
      deep:[{label:"Schema Validation",url:"https://json-schema.org/"},{label:"Fail Fast",url:"https://en.wikipedia.org/wiki/Fail-fast"}]
    },
    { id:"s6", title:"Tratamento (DLQ)",
      blurb:"Isolar e consertar.",
      start:["Mover.","DLQ.","Analisar.","Corrigir.","Reprocessar.","Drop."],
      exercises:[
        {t:"Mover poison p/ DLQ.","tip":"após N tentativas."},
        {t:"Analisar payload.","tip":"causa."},
        {t:"Corrigir consumer.","tip":"tratar null."},
        {t:"Reprocessar da DLQ.","tip":"reenvia."},
        {t:"Descartar se inválido.","tip":"drop."},
        {t:"Explicar tratamento.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"mover."},{wk:"Sem 2",go:"analisar."},{wk:"Sem 3",go:"reprocessar."}],
      deep:[{label:"DLQ",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"},{label:"SQS",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"}]
    },
    { id:"s7", title:"Idempotência e poison",
      blurb:"Relação com dedupe.",
      start:["Dedupe.","Retry.","Poison.","DLQ.","Ordem.","Safe."],
      exercises:[
        {t:"Poison não é dedupe.","tip":"diferente."},
        {t:"Retry de poison.","tip":"sempre falha."},
        {t:"DLQ para poison.","tip":"isola."},
        {t:"Idempotente para transient.","tip":"ajuda outro."},
        {t:"Distinguir os dois.","tip":"classe de erro."},
        {t:"Explicar relação.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"dedupe."},{wk:"Sem 2",go:"retry."},{wk:"Sem 3",go:"dlq."}],
      deep:[{label:"Idempotency",url:"https://restfulapi.net/idempotent-rest-apis/"},{label:"Poison",url:"https://en.wikipedia.org/wiki/Poison_message"}]
    },
    { id:"s8", title:"Testes de poison",
      blurb:"Garantir isolamento.",
      start:["Injetar.","Assert.","DLQ.","Reprocessar.","CI.","Caos."],
      exercises:[
        {t:"Msg que falha sempre.","tip":"poison."},
        {t:"Ver ir para DLQ.","tip":"assert."},
        {t:"Outras msgs seguem.","tip":"não travou."},
        {t:"Reprocessar após fix.","tip":"corrige."},
        {t:"CI de poison.","tip":"porta."},
        {t:"Explicar teste.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"injetar."},{wk:"Sem 2",go:"assert."},{wk:"Sem 3",go:"ci."}],
      deep:[{label:"Testing",url:"https://martinfowler.com/articles/practical-test-pyramid.html"},{label:"Chaos",url:"https://en.wikipedia.org/wiki/Chaos_engineering"}]
    },
    { id:"s9", title:"Monitoramento",
      blurb:"Não deixe envenenar em silêncio.",
      start:["Métrica.","DLQ rate.","Alerta.","Dashboard.","Tendência.","Oncall."],
      exercises:[
        {t:"Métrica de poison.","tip":"contador."},
        {t:"Taxa de DLQ.","tip":"proporção."},
        {t:"Alerta de pico.","tip":"sobe."},
        {t:"Dashboard de fila.","tip":"grafana."},
        {t:"Tendência.","tip":"observar."},
        {t:"Explicar monitor.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"métrica."},{wk:"Sem 2",go:"alerta."},{wk:"Sem 3",go:"dashboard."}],
      deep:[{label:"Grafana",url:"https://grafana.com/docs/"},{label:"CloudWatch",url:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"}]
    },
    { id:"s10", title:"Caso poison",
      blurb:"Projete defesa completa.",
      start:["Identificar.","Validar.","DLQ.","Monitorar.","Documentar.","Demo."],
      exercises:[
        {t:"Onde poison aparece.","tip":"código."},
        {t:"Validação na entrada.","tip":"schema."},
        {t:"DLQ + reprocessamento.","tip":"fluxo."},
        {t:"Monitorar DLQ.","tip":"alarm."},
        {t:"Runbook de poison.","tip":"passos."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"identificar."},{wk:"Sem 2",go:"validar."},{wk:"Sem 3",go:"monitorar."}],
      deep:[{label:"Poison",url:"https://en.wikipedia.org/wiki/Poison_message"},{label:"DLQ",url:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"}]
    }
  ]
});
window.RMAP.push({
  id:"cache-stampede", icon:"🌊", color:"#b4b8c0", title:"Cache Stampede",
  desc:"Muitos pedem a mesma chave expirada ao mesmo tempo e derrubam o DB. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"O que é cache stampede",
      blurb:"Avalanche de cache miss.",
      start:["Stampede.","Miss.","Expira.","Avalanche.","DB.","Porquê."],
      exercises:[
        {t:"Definir stampede.","tip":"vários miss juntos."},
        {t:"Chave expira.","tip":"todos pedem."},
        {t:"Avalanche de miss.","tip":"muitos ao mesmo tempo."},
        {t:"DB sofre.","tip":"consulta pesada."},
        {t:"Exemplo de pico.","tip":"hot key."},
        {t:"Explicar stampede.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"def."},{wk:"Sem 2",go:"expira."},{wk:"Sem 3",go:"db."}],
      deep:[{label:"Cache Stampede",url:"https://en.wikipedia.org/wiki/Cache_stampede"},{label:"Thundering Herd",url:"https://en.wikipedia.org/wiki/Thundering_herd_problem"}]
    },
    { id:"s2", title:"Por que acontece",
      blurb:"TTL compartilhado e hot key.",
      start:["TTL igual.","Hot key.","Miss.","Concorrência.","Lock ausente.","Exemplo."],
      exercises:[
        {t:"TTL idêntico.","tip":"expira junto."},
        {t:"Hot key.","tip":"muito acessada."},
        {t:"Sem lock de rebuild.","tip":"todos recalculam."},
        {t:"Concorrência de miss.","tip":"N threads."},
        {t:"Consulta custosa.","tip":"db pesada."},
        {t:"Explicar causa.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ttl."},{wk:"Sem 2",go:"hot."},{wk:"Sem 3",go:"lock ausente."}],
      deep:[{label:"Stampede",url:"https://en.wikipedia.org/wiki/Cache_stampede"},{label:"Hot Key",url:"https://en.wikipedia.org/wiki/Cache_(computing)"}]
    },
    { id:"s3", title:"Solução: jittered TTL",
      blurb:"Expirar em momentos diferentes.",
      start:["Jitter.","Random.","Janela.","Distribuir.","TTL base.","Evitar."],
      exercises:[
        {t:"TTL com jitter.","tip":"base + random."},
        {t:"Espalhar expiração.","tip":"não junta."},
        {t:"Janela de variação.","tip":"ex: ±10%."},
        {t:"Reduzir stampede.","tip":"menos simultâneo."},
        {t:"Implementar no set.","tip":"código."},
        {t:"Explicar jitter.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"jitter."},{wk:"Sem 2",go:"janela."},{wk:"Sem 3",go:"distribuir."}],
      deep:[{label:"Jitter",url:"https://en.wikipedia.org/wiki/Cache_stampede"},{label:"AWS",url:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/"}]
    },
    { id:"s4", title:"Solução: lock de rebuild",
      blurb:"Só um reconstrói, outros esperam.",
      start:["Lock.","Single.","Rebuild.","Others wait.","Timeout.","Redis."],
      exercises:[
        {t:"Lock de rebuild.","tip":"quem reconstrói."},
        {t:"Outros aguardam.","tip":"pega valor pronto."},
        {t:"Timeout do lock.","tip":"não trava."},
        {t:"Lock em Redis.","tip":"setnx."},
        {t:"Evitar N rebuilds.","tip":"1 só."},
        {t:"Explicar lock.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"lock."},{wk:"Sem 2",go:"wait."},{wk:"Sem 3",go:"redis."}],
      deep:[{label:"Lock",url:"https://redis.io/docs/latest/develop/use/patterns/distributed-locks/"},{label:"Stampede",url:"https://en.wikipedia.org/wiki/Cache_stampede"}]
    },
    { id:"s5", title:"Solução: request coalescing",
      blurb:"Juntar pedidos iguais.",
      start:["Coalesce.","Single fetch.","Promise.","Dedupe.","Batch.","Lib."],
      exercises:[
        {t:"Coalesce de requests.","tip":"mesma chave."},
        {t:"1 fetch para N.","tip":"compartilha."},
        {t:"Promise compartilhada.","tip":"await junto."},
        {t:"Dedupe em voo.","tip":"in-flight."},
        {t:"Lib de coalesce.","tip":"ex: data loader."},
        {t:"Explicar coalesce.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"coalesce."},{wk:"Sem 2",go:"single."},{wk:"Sem 3",go:"promise."}],
      deep:[{label:"DataLoader",url:"https://github.com/graphql/dataloader"},{label:"Coalescing",url:"https://en.wikipedia.org/wiki/Cache_stampede"}]
    },
    { id:"s6", title:"Solução: stale-while-revalidate",
      blurb:"Serve velho enquanto atualiza.",
      start:["Stale.","Revalidate.","Serve.","Atualiza.","BG.","UX."],
      exercises:[
        {t:"Servir valor stale.","tip":"ainda válido p/ uso."},
        {t:"Revalidar em background.","tip":"async."},
        {t:"Atualizar sem bloquear.","tip":"non-blocking."},
        {t:"UX suave.","tip":"não espera."},
        {t:"Implementar SWR.","tip":"código."},
        {t:"Explicar SWR.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"stale."},{wk:"Sem 2",go:"revalidate."},{wk:"Sem 3",go:"ux."}],
      deep:[{label:"SWR",url:"https://en.wikipedia.org/wiki/Web_cache"},{label:"HTTP Cache",url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"}]
    },
    { id:"s7", title:"Solução: precompute / warm",
      blurb:"Nunca deixe expirar de fato.",
      start:["Warm.","Refresh.","Cron.","Proactive.","TTL longo.","Job."],
      exercises:[
        {t:"Aquecer cache.","tip":"popula antes."},
        {t:"Refresh por job.","tip":"cron."},
        {t:"Proativo antes de expirar.","tip":"antecipa."},
        {t:"TTL longo + refresh.","tip":"quase nunca miss."},
        {t:"Job de warm.","tip":"script."},
        {t:"Explicar warm.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"warm."},{wk:"Sem 2",go:"refresh."},{wk:"Sem 3",go:"job."}],
      deep:[{label:"Warming",url:"https://en.wikipedia.org/wiki/Cache_(computing)"},{label:"Cron",url:"https://man7.org/linux/man-pages/man5/crontab.5.html"}]
    },
    { id:"s8", title:"Detecção",
      blurb:"Como ver o stampede.",
      start:["Métrica.","Miss spike.","DB load.","Latência.","Correlação.","Alerta."],
      exercises:[
        {t:"Pico de cache miss.","tip":"métrica."},
        {t:"Carga no DB sobe.","tip":"consulta repetida."},
        {t:"Latência de pico.","tip":"lenta."},
        {t:"Correlacionar miss x db.","tip":"causa."},
        {t:"Alerta de stampede.","tip":"monitor."},
        {t:"Explicar detecção.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"miss."},{wk:"Sem 2",go:"db."},{wk:"Sem 3",go:"alerta."}],
      deep:[{label:"Observability",url:"https://en.wikipedia.org/wiki/Observability"},{label:"Grafana",url:"https://grafana.com/docs/"}]
    },
    { id:"s9", title:"Testes de stampede",
      blurb:"Simular a avalanche.",
      start:["Simultâneo.","Expirar.","Assert.","Lock.","CI.","Carga."],
      exercises:[
        {t:"N requisições juntas.","tip":"mesma chave expirada."},
        {t:"Apenas 1 rebuild.","tip":"lock funciona."},
        {t:"DB não sobrecarrega.","tip":"assert queries."},
        {t:"Teste de lock.","tip":"concorrência."},
        {t:"CI de stampede.","tip":"porta."},
        {t:"Explicar teste.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"simultâneo."},{wk:"Sem 2",go:"assert."},{wk:"Sem 3",go:"ci."}],
      deep:[{label:"Testing",url:"https://martinfowler.com/articles/practical-test-pyramid.html"},{label:"k6",url:"https://k6.io/docs/"}]
    },
    { id:"s10", title:"Caso stampede",
      blurb:"Implemente defesa.",
      start:["Identificar.","Jitter.","Lock.","SWR.","Testar.","Demo."],
      exercises:[
        {t:"Hot key no sistema.","tip":"código."},
        {t:"Aplicar jittered TTL.","tip":"set."},
        {t:"Lock de rebuild.","tip":"redis."},
        {t:"SWR onde fizer sentido.","tip":"ux."},
        {t:"Teste de avalanche.","tip":"k6."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"identificar."},{wk:"Sem 2",go:"jitter."},{wk:"Sem 3",go:"testar."}],
      deep:[{label:"Stampede",url:"https://en.wikipedia.org/wiki/Cache_stampede"},{label:"Redis Lock",url:"https://redis.io/docs/latest/develop/use/patterns/distributed-locks/"}]
    }
  ]
});