/* lessons-git.js — aulas praticas densas para Git/GitHub.
   LESSONS[area/stage] = { intro, sections:[{h,doc,steps,cmd,code,note,risk}], exercises:[...] }. */
(function () {
  const LESSONS = {
    "git/s1": {
      intro: "Nesta aula voce monta o ciclo basico de versao local: init, add, commit, status, log, diff. Fonte: git-scm.com/book (Getting Started) e git-ref.",
      sections: [
        { h: "Ciclo básico", doc: "O modelo de 3 areas (working / index / HEAD) e o nucleo: voce edita no working, escolhe com add para o index, e grava com commit no HEAD. A doc (git-commit) defende commits atômicos.", steps: ["mkdir proj && cd proj && git init", "editar arquivo", "git add arquivo && git commit -m 'msg'"], note: "add -p seleciona hunks especificos para commits atômicos." },
        { h: "Inspecionar", doc: "git status orienta o estado; git diff mostra working-vs-index; git log --oneline o historico. A doc (git-log) lista filtros.", cmd: "git status\ngit diff\ngit log --oneline --graph --all" },
        { h: "Boa primeira mensagem", doc: "Titulo imperativo (<50 chars) + corpo explicando o por que. A doc de contributing do Git ensina o estilo do kernel.", code: "git commit -m \"conserta vazamento em parse()\n\nparse() nao liberava o buffer em erro de EOF.\"" }
      ],
      exercises: [
        { t: "Crie um repo, faca 2 commits atômicos e mostre o log --oneline.", check: { type: "contains", words: ["git init", "commit"] } },
        { t: "Explique a diferenca entre working, index e HEAD com suas palavras.", check: { type: "contains", words: ["index", "HEAD"] } }
      ]
    },
    "git/s2": {
      intro: "Branches isolam trabalho. Voce vai criar, trocar, mergear e resolver conflito. Fonte: git-scm.com/book (Branching) e git-merge.",
      sections: [
        { h: "Criar e trocar", doc: "branch e um ponteiro barato; switch (ou checkout) move o HEAD. A doc (git-branch) explica que branch nao e copia e sim referencia.", cmd: "git branch feature\n git switch feature   # ou git checkout feature" },
        { h: "Merge e conflito", doc: "git merge junta historias; conflito ocorre quando o mesmo trecho mudou nos dois lados. O Git marca <<<<<<< ======= >>>>>>>. Resolver e decisao humana.", code: "git switch main\ngit merge feature\n# se conflito: editar marcadores, git add, git commit" },
        { h: "Merge vs Rebase", doc: "merge preserva o bifurco; rebase reaplica por cima (historico linear, mas reescreve). A doc (git-rebase) alerta: nunca rebaseie commit ja pushado. Escolha: rebase local, merge compartilhado.", note: "rebase -i so em branch nao compartilhado." }
      ],
      exercises: [
        { t: "Crie 2 branches, mude o mesmo arquivo diferente e resolva o merge.", check: { type: "contains", words: ["branch", "merge"] } },
        { t: "Explique quando usar rebase e quando usar merge.", check: { type: "contains", words: ["rebase", "merge"] } }
      ]
    },
    "git/s3": {
      intro: "Remotes e GitHub: leve o codigo para a nuvem e colabore via PR. Fonte: docs.github.com (Repositories, Pull Requests) e git-remote.",
      sections: [
        { h: "Remote e push", doc: "git remote add origin <url>; git push -u vincula o branch. A doc (git-push) recomenda --force-with-lease, nunca --force cego em compartilhado.", cmd: "git remote add origin git@github.com:voce/repo.git\ngit push -u origin main" },
        { h: "Clone e pull", doc: "git clone baixa historico+working; git pull = fetch+merge. A doc (git-pull) avisa que pull pode gerar merge commit ou conflito; pull --rebase aplica por cima.", steps: ["git clone <url>", "git pull --rebase", "resolver conflito se houver"] },
        { h: "Fork e PR", doc: "Fork (GitHub) copia para sua conta; PR e a proposta de merge com revisao. Fluxo: fork -> clone -> branch -> push -> abrir PR no upstream. A doc (pull-requests) detalha.", code: "# no GitHub: fork do repo alheio\ngit remote add upstream <url-original>\ngit push origin minha-feature  # abrir PR" }
      ],
      exercises: [
        { t: "Adicione um remote, faca push -u e explique pull vs fetch.", check: { type: "contains", words: ["remote", "push"] } },
        { t: "Descreva o fluxo fork -> clone -> PR com suas palavras.", check: { type: "contains", words: ["fork", "PR"] } }
      ]
    },
    "git/s4": {
      intro: "Inspecao de historico: log, blame, reflog, bisect, show, tag. Fonte: git-log, git-blame, git-reflog, git-bisect docs.",
      sections: [
        { h: "Log e blame", doc: "git log --oneline --graph --all visualiza o grafo; git blame mostra autor por linha. A doc (git-blame) serve para auditoria.", cmd: "git log --oneline --graph --all\ngit blame arquivo.c -L 10,20" },
        { h: "Reflog e recuperacao", doc: "reflog registra toda movimentacao do HEAD, inclusive commits 'perdidos'. A doc (git-reflog) e o salvador: achar o hash e git reset --hard <hash>.", code: "git reflog\ngit reset --hard HEAD@{1}" },
        { h: "Bisect e tag", doc: "git bisect faz busca binaria para achar o commit do bug (git-bisect). git tag marca release (anotada recomendada). A doc (git-tag) diferencia leve de anotada.", note: "bisect run com script de teste automatiza a busca." }
      ],
      exercises: [
        { t: "Use git blame para achar quem modificou uma linha e explique reflog.", check: { type: "contains", words: ["blame", "reflog"] } },
        { t: "Crie uma tag anotada de release e explique bisect.", check: { type: "contains", words: ["tag", "bisect"] } }
      ]
    },
    "git/s5": {
      intro: "Desfazer com seguranca: reset, restore, revert, clean, reflog rescue, amend. Fonte: git-reset, git-restore, git-revert docs.",
      sections: [
        { h: "Reset vs restore vs revert", doc: "reset move HEAD (--hard destroi working); restore desfaz arquivo (moderno); revert cria commit inverso (seguro em compartilhado). A doc (git-revert) manda usar revert em historico publico.", cmd: "git restore arquivo.c        # descarta mudanca\ngit revert <hash>           # commit inverso" },
        { h: "Reflog rescue", doc: "Perdeu commit por reset --hard? O reflog ainda tem o hash por dias. A doc (git-reflog) ensina recuperar antes do garbage collection.", steps: ["git reflog", "copiar hash", "git reset --hard <hash>"] },
        { h: "Amend e clean", doc: "commit --amend corrige o ultimo commit (nao enviado). git clean -n (dry-run) mostra o que vai apagar. A doc (git-clean) alerta que apaga sem recuperacao.", note: "amend reescreve: nunca em commit pushado." }
      ],
      exercises: [
        { t: "Simule um reset --hard e recupere o commit via reflog.", check: { type: "contains", words: ["reflog", "reset"] } },
        { t: "Explique por que revert e mais seguro que reset em historico compartilhado.", check: { type: "contains", words: ["revert", "reset"] } }
      ]
    },
    "git/s6": {
      intro: "Colaboracao real: branch protection, CODEOWNERS, reviews, draft PR, squash, issues. Fonte: docs.github.com (Repositories, Pull Requests).",
      sections: [
        { h: "Proteger o main", doc: "Branch protection (GitHub) exige PR + reviews + status checks no main. Rulesets sao o modelo novo. A doc (protected-branches) e a barreira contra 'alguem quebra a main'.", steps: ["Settings > Branches > Add rule", "exigir PRs, 1 review, status checks", "salvar"] },
        { h: "CODEOWNERS e review", doc: "CODEOWNERS define quem revisa cada pasta; reviews sao comentar/aprovar linha a linha. A cultura (Google) mostra que review pega bugs e espalha conhecimento.", code: "# CODEOWNERS\n/api/  @time-backend\n*.yml  @time-devops" },
        { h: "Squash e issues", doc: "Squash merge junta o PR em 1 commit limpo no main. PR fecha issue com 'closes #123'. A doc (pull-requests) explica os modos de merge (merge/squash/rebase).", note: "Escolha do modo depende da politica do time." }
      ],
      exercises: [
        { t: "Escreva um CODEOWNERS e explique por que proteger o main.", check: { type: "contains", words: ["CODEOWNERS", "protection"] } },
        { t: "Explique squash merge e como um PR fecha uma issue.", check: { type: "contains", words: ["squash", "closes"] } }
      ]
    },
    "git/s7": {
      intro: "Historico limpo: rebase -i, amend, reword, squash, cherry-pick, abort. Fonte: git-rebase, git-cherry-pick docs.",
      sections: [
        { h: "Rebase interativo", doc: "git rebase -i <base> abre editor para reordenar/squash/reword/drop. A doc (git-rebase) e a ferramenta de limpar historico antes de compartilhar. So em branch local.", cmd: "git rebase -i main" },
        { h: "Squash e reword", doc: "squash funde no anterior; reword edita so mensagem. Combine para transformar 'fix typo' + 'wip' em um commit atômico. A doc (git-commit --amend) reforca reescrita.", code: "pick a1 feat: x\nsquash a2 fix typo\nreword a3 melhorar msg" },
        { h: "Cherry-pick e abort", doc: "git cherry-pick aplica um commit especifico em outro branch (portar correção urgente). git rebase --abort cancela rebase em conflito. A doc (git-cherry-pick) detalha.", note: "Sempre existe saida: --abort/--skip/--continue." }
      ],
      exercises: [
        { t: "Use rebase -i para squash 2 commits em um so e explique cherry-pick.", check: { type: "contains", words: ["rebase -i", "cherry-pick"] } },
        { t: "Quando usar --abort e por que nunca rebasear commit pushado?", check: { type: "contains", words: ["abort", "pushado"] } }
      ]
    },
    "git/s8": {
      intro: "Automatizacao: gh CLI, hooks, actions basico, .gitignore, aliases, submodules. Fonte: cli.github.com, git-hooks, docs.github.com/actions.",
      sections: [
        { h: "gh e hooks", doc: "gh auth login + gh pr create faz tudo no terminal. Git hooks (pre-commit) rodam lint/test antes do commit. A doc (git-hooks) evita push de lixo.", cmd: "gh auth login\ngh pr create --fill\n# .git/hooks/pre-commit: npm test" },
        { h: "Actions e .gitignore", doc: "GitHub Actions roda YAML em push/PR (CI). .gitignore lista o que nunca vai ao repo. A doc (gitignore) usa globos; ignora node_modules/.env antes de commitar.", code: "# .github/workflows/ci.yml\non: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps: [ { run: pytest } ]" },
        { h: "Aliases e submodules", doc: "git config alias.st 'status -s' cria atalho. submodule inclui repo externo versionado. A doc (git-submodule) alerta: clone com --recursive e update manual.", note: "submodule e chato; use so quando precisa de repo dentro de repo." }
      ],
      exercises: [
        { t: "Configure um alias e um pre-commit hook simples, e explique gh pr create.", check: { type: "contains", words: ["alias", "gh"] } },
        { t: "Escreva um .gitignore para um projeto Node e um workflow CI basico.", check: { type: "contains", words: [".gitignore", "actions"] } }
      ]
    },
    "git/s9": {
      intro: "Fluxos avancados: worktree, stash, submodule, rerere, archive. Fonte: git-worktree, git-stash, git-rerere, git-archive docs.",
      sections: [
        { h: "Worktree e stash", doc: "git worktree cria dir de trabalho para outro branch sem clonar. git stash guarda mudancas na pilha para trocar de branch. A doc (git-worktree) evita checkout constante.", cmd: "git worktree add ../hotfix main\ngit stash && git stash pop" },
        { h: "rerere e submodule", doc: "rerere (reuse recorded resolution) reaplica resolucoes de conflito. git config rerere.enabled true. submodule add injeta repo externo versionado; clone precisa de --recursive.", steps: ["git config --global rerere.enabled true", "git submodule add <url> vendor/", "git submodule update --init --recursive"] },
        { h: "Archive", doc: "git archive gera tar/zip sem .git (snapshot limpo). Diferente de clone, e so conteudo. A doc (git-archive) serve para distribuir release.", note: "Remover segredo do historico exige filter-repo (nao filter-branch deprecated)." }
      ],
      exercises: [
        { t: "Use worktree para trabalhar em 2 branches e stash para pausar mudancas.", check: { type: "contains", words: ["worktree", "stash"] } },
        { t: "Explique rerere e por que archive e diferente de clone.", check: { type: "contains", words: ["rerere", "archive"] } }
      ]
    },
    "git/s10": {
      intro: "Boas praticas e seguranca: atômico, mensagem, assinar, segredo nunca no repo, force-with-lease, convencao. Fonte: git book (Contributing), docs.github.com (assinatura).",
      sections: [
        { h: "Atômico e mensagem", doc: "Commit atômico = uma mudanca logica. Mensagem: titulo imperativo + corpo do por que. A doc de contributing do Git e o estilo do kernel. Facilita revert/bisect/revisao.", code: "git commit -m \"conserta vazamento em parse()\n\nparse() nao liberava buffer em EOF.\"" },
        { h: "Assinar commits", doc: "git commit -S assina com GPG/SSH, provando autoria (selo Verified no GitHub). Voce (Diogo_Damasceno) ja assina. A doc (signature verification) explica configurar chave.", cmd: "git config --global user.signingkey <key>\ngit config --global commit.gpgsign true\ngit commit -S" },
        { h: "Segredo e force seguro", doc: "Nunca comite .env/token (vazou pra sempre). Use git-secrets/scanning. push --force-with-lease sobrescreve so se ninguem empurrou depois. Conventional Commits (feat/fix) padroniza mensagens.", note: "Commit de token e incidente; force cego destroi historico alheio." }
      ],
      exercises: [
        { t: "Configure assinatura de commit e explique por que segredo nunca vai ao repo.", check: { type: "contains", words: ["commit -S", "segredo"] } },
        { t: "Explique --force-with-lease vs --force e a convencao de mensagens.", check: { type: "contains", words: ["force-with-lease", "convencao"] } }
      ]
    }
  };
  module.exports = { LESSONS: LESSONS };
})();
