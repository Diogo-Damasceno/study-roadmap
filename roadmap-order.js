/* roadmap-order.js — ordem de jornada por nivel de precedencia.
   level: 1 = fundacao (faça primeiro), sobe ate 4 (especializado).
   requires: prerequisitos diretos (ids de trilhas) para guiar o usuario.
   O server aplica estes campos por cima dos dados e ordena por level.
   ATENCAO: ids devem bater EXATAMENTE com os ids em data-*.js (com hifen). */
module.exports = {
  level: {
    // Nivel 1 - fundacao
    linux: 1, terminal: 1, bash: 1, python: 1, precalculo: 1, dados: 1, ingles: 1,
    // Nivel 2 - consolidar bases
    calculo1: 2, calculo2: 2, "calc-diff-int": 2, "mat-ti": 2, "mat-dados": 2, net: 2,
    eng: 2, blue: 2, crypto: 2, "ferramentas-proprias": 2,
    // Nivel 3 - pratica aplicada
    red: 3, devops: 3, "eng-dados": 3, forense: 3, rev: 3, "rev-hacking": 3,
    // Nivel 4 - avancado/especializado
    cqrs: 4, idempotencia: 4, "race-condition": 4, dlq: 4, "dual-write": 4, "rate-limit": 4,
    "time-attack": 4, "poison-message": 4, "cache-stampede": 4, "fisica-ti": 4, ai: 4
  },
  requires: {
    bash: ["linux"], terminal: [], python: ["terminal"],
    precalculo: [], calculo1: ["precalculo"], calculo2: ["calculo1"],
    "calc-diff-int": ["precalculo"], "mat-ti": ["precalculo"], "mat-dados": ["precalculo", "dados"],
    net: ["linux"], eng: ["python"], blue: ["linux", "net"], crypto: ["python", "mat-ti"],
    "ferramentas-proprias": ["python", "bash"], dados: [], ingles: [],
    red: ["linux", "net", "python"], devops: ["linux", "eng"], "eng-dados": ["dados", "eng"],
    forense: ["linux", "net", "blue"], rev: ["linux"], "rev-hacking": ["rev", "red"],
    cqrs: ["devops", "eng"], idempotencia: ["eng"], "race-condition": ["eng"],
    dlq: ["devops"], "dual-write": ["devops", "eng"], "rate-limit": ["devops"],
    "time-attack": ["crypto"], "poison-message": ["devops"], "cache-stampede": ["devops"],
    "fisica-ti": ["calculo1"], ai: ["mat-dados", "calculo1"]
  }
};
