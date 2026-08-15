/* explain-git.js — explicacoes didaticas densas para a trilha Git/GitHub.
   EXPLAIN[area/stage] = [{topic,text}]. Fontes: git-scm.com/docs, docs.github.com. */
(function () {
  const EXPLAIN = {
    "git/s1": [
      { topic: "init.", text: "git init cria o repositorio local (.git com objetos, refs e config). A documentacao do Git (git-scm.com/docs/git-init) define que ele apenas inicializa metadados; o versionamento comeca quando voce faz o primeiro commit. Diferente de SVN, o Git e distribuido: nao precisa de servidor para versionar localmente." },
      { topic: "add.", text: "git add move mudancas do working directory para a staging area (index), escolhendo o que entra no proximo commit. O modelo de 3 areas (working/index/HEAD) e central: voce decide atomicamente o que commitar, nao 'tudo que mudou'. add -p permite escolher hunks especificos." },
      { topic: "commit.", text: "git commit grava o estado do index como um snapshot imutavel apontado por um hash SHA-1. A doc (git-commit) enfatiza commits atômicos (uma mudanca logica). Cada commit guarda autor, data, mensagem e o parent, formando o grafo do historico." },
      { topic: "status.", text: "git status mostra onde voce esta: arquivos modificados (working), staged (index) e untracked. E o comando de 'orientacao' que todo iniciante deve rodar a cada passo. Sem status, voce comete o erro de commitar lixo ou esquecer arquivo." },
      { topic: "log.", text: "git log lista o historico de commits (autor, data, hash, mensagem). Opcoes como --oneline, --graph e --all sao o que tornam o log legivel em projetos com branches. A doc (git-log) detalha filtros por autor/data/arquivo." },
      { topic: "diff.", text: "git diff mostra a diferenca entre areas: sem args (working vs index), --cached (index vs HEAD). Entender diff e entender 'o que vai entrar no commit'. E a checagem de sanidade antes do commit." }
    ],
    "git/s2": [
      { topic: "branch.", text: "branch e um ponteiro movel para um commit; criar branch e barato (so um arquivo com hash). A doc (git-branch) explica que branches sao a forma de isolar trabalho sem afetar o main. No Git, branch nao e copia de pasta e sim referencia." },
      { topic: "switch.", text: "git switch (e checkout) troca o HEAD para outro branch, atualizando o working directory. switch foi separado de checkout (git 2.23) para ser claro. Trocar de branch e como 'mudar de linha do tempo' do projeto." },
      { topic: "merge.", text: "git merge junta dois historias: fast-forward (quando da pra avancar) ou cria um merge commit (quando diverge). A doc (git-merge) explica o conflito: quando o mesmo trecho mudou nos dois lados, o Git para e pede resolucao. Merge preserva o historico real das bifurcacoes." },
      { topic: "rebase.", text: "git rebase reaplica seus commits sobre outro base, reescrevendo o historico para ficar linear. A doc (git-rebase) alerta: nunca rebaseie commits ja compartilhados (quebra o historico de outros). Rebase deixa o log limpo; merge preserva contexto." },
      { topic: "conflito.", text: "Conflito acontece quando o Git nao consegue juntar automaticamente (mesmo trecho mudou). Ele marca com <<<<<<< / ======= / >>>>>>> nos arquivos. Resolver e editar manualmente e rodar add+commit (ou merge --continue). Conflito nao e erro, e decisao humana." },
      { topic: "resolve.", text: "Resolver conflito = editar os marcadores, manter a versao correta (ou misturar), remover as marcas e git add. Ferramentas como mergetool ajudam. A pratica (git book) recomenda commits pequenos para reduzir conflitos." }
    ],
    "git/s3": [
      { topic: "remote.", text: "remote e um apelido para um repositorio externo (ex: origin -> github). git remote -v lista; git remote add cria. A doc (git-remote) explica que o Git local pode ter varios remotes (origin, upstream). E a ponte entre seu disco e a nuvem." },
      { topic: "push.", text: "git push envia seus commits para o remote. -u (--set-upstream) vincula o branch local ao remoto, tornando futuros push/pull diretos. A doc (git-push) alerta: push de branch compartilhado que foi reescrito exige --force-with-lease, nunca --force cego." },
      { topic: "pull.", text: "git pull = fetch (baixa) + merge (junta) das mudancas do remote no seu branch. A doc (git-pull) recomenda entender que pull pode gerar merge commit ou conflito. pull --rebase aplica suas mudancas por cima do remoto (historico limpo)." },
      { topic: "clone.", text: "git clone baixa um repositorio inteiro (historico + working) de uma URL. Diferente de fork, clone e a copia local para trabalhar; fork e a copia no seu GitHub para propor mudancas. A doc (git-clone) explica os protocolos (https/ssh)." },
      { topic: "fork.", text: "Fork (GitHub) cria uma copia do repo na SUA conta para contribuir em projetos de terceiros. Fluxograma padrao: fork -> clone -> branch -> push -> Pull Request para o upstream. Sem fork, voce nao propoe mudanca a repo alheio." },
      { topic: "PR.", text: "Pull Request (GitHub) e a proposta de merge com revisao, discussoa e CI. A doc do GitHub (pull-requests) explica que PR e o centro da colaboracao: mostra o diff, permite comentar linha a linha e so mergeia apos aprovar. 'PR e onde o codigo melhora'." }
    ],
    "git/s4": [
      { topic: "log.", text: "git log --oneline --graph --all visualiza o grafo de branches. --author e --since filtram. A doc (git-log) lista dezenas de opcoes; dominar log e dominar 'o que aconteceu e quando'. pickaxe (-S'texto') acha qual commit mudou uma string." },
      { topic: "blame.", text: "git blame mostra, linha a linha, qual commit e autor introduziu cada trecho. A doc (git-blame) serve para investigar 'quem quebrou isso'. blame -L restringe a um trecho. E a auditoria de culpa/contexto." },
      { topic: "reflog.", text: "reflog registra TODA movimentacao do HEAD (mesmo commits 'perdidos' por reset). A doc (git-reflog) e o 'salvador': se voce apagou algo, o reflog ainda aponta o hash. Commits orphan sem reflog somem no garbage collection." },
      { topic: "bisect.", text: "git bisect faz busca binaria no historico para achar o commit que introduziu um bug (entre um bom e um ruim). A doc (git-bisect) explica o modo automatico (bisect run com script de teste). Economiza horas de procura manual em historico grande." },
      { topic: "show.", text: "git show exibe o detalhe de um commit (diff + metadados). vs git log que lista. A doc (git-show) tambem mostra tags/objetos. E o 'olhe esse commit especifico'." },
      { topic: "tag.", text: "tag marca um ponto do historico (release) como imutavel. A doc (git-tag) diferencia tag leve (ref) de anotada (objeto com autor/mensagem, recomendada). Tags sao como 'versao 1.0' fixada no tempo para referencia." }
    ],
    "git/s5": [
      { topic: "reset.", text: "git reset move o HEAD (e o index) para um commit. --soft mantem working; --mixed (padrao) limpa index; --hard apaga working tambem. A doc (git-reset) e perigosa: --hard destroi trabalho nao commitado. Para desfazer com seguranca, prefira revert." },
      { topic: "restore.", text: "git restore (git 2.23) desfaz mudancas no working (--source/--staged). Substitui usos confusos de checkout. A doc (git-restore) separa 'descartar arquivo' de 'tirar do stage'. E a forma moderna e clara de voltar atras." },
      { topic: "revert.", text: "git revert cria um NOVO commit que desfaz outro (inverso). A doc (git-revert) e a forma segura de desfazer em historico compartilhado: nao reescreve, apenas adiciona. Em time, revert > reset sempre." },
      { topic: "clean.", text: "git clean remove arquivos nao rastreados (build artifacts). -n (dry-run) mostra o que vai apagar; -f confirma. A doc (git-clean) alerta que apaga sem recuperacao (sem reflog). Use com cuidado em repos com output de build." },
      { topic: "reflog rescue.", text: "Perdeu um commit por reset --hard? O reflog ainda tem o hash por dias. A doc (git-reflog) ensina: git reflog -> achar o hash -> git reset --hard <hash>. E o 'undo do undo'. Sem reflog, o garbage collector apagaria." },
      { topic: "amend.", text: "git commit --amend corrige o ULTIMO commit (mensagem ou conteudo). A doc (git-commit) avisa: amend reescreve o commit, entao nunca use em commit ja pushado (quebra os outros). Para commit nao enviado, e o 'conserto rapido'." }
    ],
    "git/s6": [
      { topic: "branch protection.", text: "Branch protection (GitHub) impede push direto no main, exige PR + reviews + status checks. A doc do GitHub (protected-branches) e a barreira que evita 'alguem quebra a main'. Rulesets (novo modelo) substituem as regras antigas com mais granularidade." },
      { topic: "CODEOWNERS.", text: "CODEOWNERS (arquivo na raiz) define quem revisa cada pasta/arquivo. A doc do GitHub explica que o PR pede revisao automatica aos donos. Evita 'merge de codigo que ninguem dono viu'. Ex: /api/ @time-backend." },
      { topic: "reviews.", text: "Code review (GitHub) e comentar, aprovar ou pedir mudanca linha a linha. A cultura (Google) mostra que review pega bugs e espalha conhecimento. 'Aprovar' e responsabilidade, nao formalidade. PR com 0 reviews e risco." },
      { topic: "draft PR.", text: "Draft PR sinaliza 'em andamento, nao revisem ainda'. A doc do GitHub usa para mostrar trabalho cedo sem disparar merge. Bom para feedback inicial. Tirar do draft = pronto para revisao." },
      { topic: "squash/merge.", text: "Squash merge junta todos os commits do PR em um so commit limpo no main. A doc do GitHub oferece merge/squash/rebase. Squash mantem o main legivel (um commit = uma feature). Escolha depende da política do time." },
      { topic: "issues.", text: "Issues (GitHub) sao o rastreamento de tarefas/bugs. PR pode fechar issue automaticamente (closes #123). A doc explica templates de issue. Issue vira o 'por que' do codigo; PR o 'o que mudou'." }
    ],
    "git/s7": [
      { topic: "rebase -i.", text: "git rebase -i <base> abre um editor para reordenar/squash/reword/drop commits antes de aplicar. A doc (git-rebase) e a ferramenta de 'limpar o historico antes de compartilhar'. So use em branches locais ou nao-pushados." },
      { topic: "commit --amend.", text: "Em rebase -i, 'reword' troca a mensagem e 'edit' pausa para --amend. A doc (git-commit --amend) reforca: reescreve o commit. Combine com rebase para corrigir varios commits de um branch." },
      { topic: "reword.", text: "reword (rebase -i) edita so a mensagem de um commit sem mudar o conteudo. Mensagens boas (imperativo, 'conserta X') sao o que faz o log ser legivel. A doc de contributing do Git ensina o estilo." },
      { topic: "drop/squash.", text: "drop remove um commit; squash funde o commit no anterior. A doc (git-rebase) usa isso para 'juntar WIPs em um commit atômico'. Squash de commits de 'fix' no feat principal deixa o historico coerente." },
      { topic: "cherry-pick.", text: "git cherry-pick aplica o patch de um commit especifico em outro branch (sem merge). A doc (git-cherry-pick) serve para portar uma correção urgente para release sem trazer todo o desenvolvimento. E o 'pega so esse commit'." },
      { topic: "abort.", text: "git rebase --abort cancela um rebase em andamento e volta ao estado anterior. A doc (git-rebase) salva quando voce se perdeu em conflitos. Sempre existe saida: --abort, --skip, --continue. 'Nunca fique preso'." }
    ],
    "git/s8": [
      { topic: "gh cli.", text: "gh (GitHub CLI) faz tudo da web no terminal: gh auth login, gh pr create, gh issue list, gh repo clone. A doc (cli.github.com) e a forma de um usuario de Arch/terminal trabalhar sem abrir o site. Autentica via token/device flow." },
      { topic: "hooks.", text: "Git hooks (em .git/hooks) disparan scripts em eventos (pre-commit, pre-push, commit-msg). A doc (git-hooks) permite automatizar lint/test antes de commit. pre-commit framework gerencia hooks em time. 'Hooks evitam push de lixo'." },
      { topic: "actions básico.", text: "GitHub Actions roda workflows em eventos (push/PR) com YAML. A doc (docs.github.com/actions) ensina job/steps/runner. Um CI basico roda pytest no push. 'CI verde e a porta de qualidade'." },
      { topic: ".gitignore.", text: ".gitignore lista o que NUNCA vai para o repo (node_modules, .env, builds). A doc (gitignore) usa globos. Sem ele, voce versiona lixo ou segredos. Ignorar cedo evita commit de arquivo grande/obsoleto." },
      { topic: "aliases.", text: "git config alias.st 'status -s' cria atalhos. A doc (git-config) lista aliases comuns (co=commit, br=branch, lg=log --graph). Reduz digitacao e erro. 'alias e produtividade de todo dia'." },
      { topic: "submodules.", text: "submodule inclui outro repo como dependencia versionada dentro do seu. A doc (git-submodule) serve para vendorizar libs. Cuidado: submodule e chato de atualizar (git submodule update). Use quando realmente precisa de repo dentro de repo." }
    ],
    "git/s9": [
      { topic: "worktree.", text: "git worktree cria diretorios de trabalho para branches diferentes SEM clonar de novo. A doc (git-worktree) permite trabalhar em 2 branches ao mesmo tempo (ex: conserta bug enquanto dev no feature). 'Worktree evita stash/checkout constante'." },
      { topic: "stash.", text: "git stash guarda mudancas nao commitadas temporariamente (pilha). A doc (git-stash) serve para 'pausar' e trocar de branch sem commitar lixo. stash pop restaura; stash list mostra a pilha. 'Stash e o ctrl+z do working'." },
      { topic: "submodule.", text: "submodule add <url> <path> injeta um repo externo versionado. A doc (git-submodule) alerta: ao clonar repo com submodule, precisa de --recursive. submodule comite o hash do subrepo, nao o conteudo. Atualizar e manual." },
      { topic: "rerere.", text: "rerere (reuse recorded resolution) grava resolucoes de conflito para reaplica-las automaticamente. A doc (git-rerere) ajuda em rebases longos/branches de manutencao. git config rerere.enabled true. 'Conflito resolvido uma vez, nao de novo'." },
      { topic: "filter-branch alt.", text: "git filter-branch (deprecated) reescrevia historico em massa; hoje usa git filter-repo (mais rapido/seguro). A doc recomenda filter-repo para remover arquivo grande ou segredo do historico. 'Remover segredo vazado exige rewrite + force'." },
      { topic: "archive.", text: "git archive gera um tar/zip do codigo sem a pasta .git (snapshot limpo). A doc (git-archive) serve para distribuir release sem metadados. Diferente de clone, nao e repositorio, e so o conteudo." }
    ],
    "git/s10": [
      { topic: "atômico.", text: "Commit atômico = uma mudanca logica coesa (nao 'varios fixes juntos'). A doc de contributing do Git e livros de engenharia defendem isso: facilita revert, bisect e revisao. 'Cada commit explica um por que'." },
      { topic: "mensagem.", text: "Boa mensagem: titulo imperativo (<50 chars) + corpo explicando o por que (nao o que, o diff ja mostra). A doc (git book, contributing) cita o estilo do kernel. Ex: 'conserta vazamento em parse()' em vez de 'consertos varios'." },
      { topic: "assinar GPG/SSH.", text: "git commit -S (ou -S com SSH) assina o commit com sua chave, provando autoria. A doc do GitHub (signature verification) explica configurar GPG/SSH e o selo 'Verified'. Importante para integridade e para tu (commits assinados como Diogo_Damasceno)." },
      { topic: "segreto nunca no repo.", text: "Nunca comite .env/token: uma vez no historico, vazou pra sempre (mesmo apagando). Use git-secrets/gitguardian ou scanning do GitHub. A doc (GitHub) e a boa pratica geral: segredos em env/secret manager, nunca no git. 'Commit de token e incidente'." },
      { topic: "force push seguro.", text: "git push --force-with-lease so sobrescreve se ninguem empurrou depois de voce (checa o remote). A doc (git-push) recomenda --force-with-lease em vez de --force (que cegamente destroi). Em branch compartilhado, prefira revert." },
      { topic: "convenção.", text: "Convencao de commits (Conventional Commits: feat/fix/docs/refactor) padroniza mensagens para gerar changelog e semantica. A doc (conventionalcommits.org) e adotada por muitos projetos. 'Padrao de mensagem e comunicacao de time'." }
    ]
  };
  module.exports = { EXPLAIN: EXPLAIN };
})();
