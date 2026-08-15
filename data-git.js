/* data-git.js — Trilha Git & GitHub (10x6). */
window.RMAP = window.RMAP || [];
window.RMAP.push({
  id: "git", icon: "🔧", color: "#e0844c", title: "Git & GitHub",
  desc: "Do commit local ao fluxo de Pull Request, automação com gh CLI e práticas seguras. 10 módulos com 6 atividades.",
  stages: [
    { id: "s1", title: "Fundamentos",
      blurb: "O ciclo básico de versão.",
      start: ["init.", "add.", "commit.", "status.", "log.", "diff."],
      exercises: [
        {t: "git init num projeto.", "tip": "init."},
        {t: "add + commit atômico.", "tip": "stage."},
        {t: "git status.", "tip": "estado."},
        {t: "git log --oneline.", "tip": "historico."},
        {t: "git diff.", "tip": "mudança."},
        {t: "Explicar working/index.", "tip": "3 áreas."}
      ],
      schedule: [{wk: "Sem 1", go: "init."}, {wk: "Sem 2", go: "commit."}, {wk: "Sem 3", go: "log."}],
      deep: [{label: "git book", url: "https://git-scm.com/book/pt-br/v2"}, {label: "git ref", url: "https://git-scm.com/docs"}]
    },
    { id: "s2", title: "Branches",
      blurb: "Trabalhe em paralelo sem quebrar o main.",
      start: ["branch.", "switch.", "merge.", "rebase.", "conflito.", "resolve."],
      exercises: [
        {t: "criar branch.", "tip": "branch."},
        {t: "git switch.", "tip": "checkout."},
        {t: "merge dois branches.", "tip": "junta."},
        {t: "rebase line.", "tip": "rebase."},
        {t: "resolver conflito.", "tip": "<<<<<<<."},
        {t: "Explicar merge vs rebase.", "tip": "historico."}
      ],
      schedule: [{wk: "Sem 1", go: "branch."}, {wk: "Sem 2", go: "merge."}, {wk: "Sem 3", go: "conflito."}],
      deep: [{label: "branching", url: "https://git-scm.com/book/pt-br/v2/Git-Branching-Branches-in-a-Nutshell"}, {label: "merge", url: "https://git-scm.com/docs/git-merge"}]
    },
    { id: "s3", title: "Remotes & GitHub",
      blurb: "Leve o código pra nuvem e colabore.",
      start: ["remote.", "push.", "pull.", "clone.", "fork.", "PR."],
      exercises: [
        {t: "add remote.", "tip": "origin."},
        {t: "git push -u.", "tip": "upstream."},
        {t: "git pull.", "tip": "fetch+merge."},
        {t: "clone repo.", "tip": "copia."},
        {t: "fork + PR.", "tip": "colabora."},
        {t: "Explicar fork vs clone.", "tip": "copia vs link."}
      ],
      schedule: [{wk: "Sem 1", go: "remote."}, {wk: "Sem 2", go: "push."}, {wk: "Sem 3", go: "PR."}],
      deep: [{label: "github docs", url: "https://docs.github.com/pt"}, {label: "remotes", url: "https://git-scm.com/docs/git-remote"}]
    },
    { id: "s4", title: "Histórico & inspeção",
      blurb: "Entenda o que aconteceu.",
      start: ["log.", "blame.", "reflog.", "bisect.", "show.", "tag."],
      exercises: [
        {t: "git log -p.", "tip": "diff no log."},
        {t: "git blame arquivo.", "tip": "quem."},
        {t: "git reflog.", "tip": "salvador."},
        {t: "git bisect.", "tip": "acha bug."},
        {t: "git show.", "tip": "detalhe."},
        {t: "tag de release.", "tip": "versão."}
      ],
      schedule: [{wk: "Sem 1", go: "log."}, {wk: "Sem 2", go: "blame."}, {wk: "Sem 3", go: "bisect."}],
      deep: [{label: "reflog", url: "https://git-scm.com/docs/git-reflog"}, {label: "bisect", url: "https://git-scm.com/docs/git-bisect"}]
    },
    { id: "s5", title: "Desfazer & recuperar",
      blurb: "Errar é normal; saber voltar é obrigatório.",
      start: ["reset.", "restore.", "revert.", "clean.", "reflog rescue.", "amend."],
      exercises: [
        {t: "git reset --soft.", "tip": "mantem."},
        {t: "git restore.", "tip": "descarta."},
        {t: "git revert.", "tip": "seguro."},
        {t: "git clean -n.", "tip": "nao rastreado."},
        {t: "recuperar via reflog.", "tip": "salvou."},
        {t: "commit --amend.", "tip": "corrige."}
      ],
      schedule: [{wk: "Sem 1", go: "reset."}, {wk: "Sem 2", go: "revert."}, {wk: "Sem 3", go: "reflog."}],
      deep: [{label: "reset", url: "https://git-scm.com/docs/git-reset"}, {label: "restore", url: "https://git-scm.com/docs/git-restore"}]
    },
    { id: "s6", title: "Colaboração & PR flow",
      blurb: "O fluxo real de time.",
      start: ["branch protection.", "CODEOWNERS.", "reviews.", "draft PR.", "squash/merge.", "issues."],
      exercises: [
        {t: "proteger main.", "tip": "ruleset."},
        {t: "CODEOWNERS.", "tip": "donos."},
        {t: "review de PR.", "tip": "comentar."},
        {t: "draft PR.", "tip": "WIP."},
        {t: "squash merge.", "tip": "limpo."},
        {t: "fechar issue com PR.", "tip": "closes #."}
      ],
      schedule: [{wk: "Sem 1", go: "protection."}, {wk: "Sem 2", go: "review."}, {wk: "Sem 3", go: "squash."}],
      deep: [{label: "PR", url: "https://docs.github.com/pt/pull-requests"}, {label: "branch protection", url: "https://docs.github.com/pt/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches"}]
    },
    { id: "s7", title: "Rebase & histórico limpo",
      blurb: "Histórico legível é presente pro futuro.",
      start: ["rebase -i.", "commit --amend.", "reword.", "drop/squash.", "cherry-pick.", "abort."],
      exercises: [
        {t: "rebase interativo.", "tip": "reordena."},
        {t: "amend mensagem.", "tip": "corrige."},
        {t: "squash commits.", "tip": "junta."},
        {t: "reword.", "tip": "texto."},
        {t: "cherry-pick.", "tip": "pega 1."},
        {t: "git rebase --abort.", "tip": "aborta."},
      ],
      schedule: [{wk: "Sem 1", go: "rebase -i."}, {wk: "Sem 2", go: "squash."}, {wk: "Sem 3", go: "abort."}],
      deep: [{label: "rebase", url: "https://git-scm.com/docs/git-rebase"}, {label: "cherry-pick", url: "https://git-scm.com/docs/git-cherry-pick"}]
    },
    { id: "s8", title: "Automação & gh CLI",
      blurb: "Faça o Git trabalhar por você.",
      start: ["gh cli.", "hooks.", "actions básico.", ".gitignore.", "aliases.", "submodules."],
      exercises: [
        {t: "gh auth login.", "tip": "cli."},
        {t: "gh pr create.", "tip": "sem site."},
        {t: "pre-commit hook.", "tip": "automatiza."},
        {t: ".gitignore.", "tip": "ignora."},
        {t: "alias git st.", "tip": "atalho."},
        {t: "Explicar actions.", "tip": "CI."}
      ],
      schedule: [{wk: "Sem 1", go: "gh."}, {wk: "Sem 2", go: "hooks."}, {wk: "Sem 3", go: "actions."}],
      deep: [{label: "gh cli", url: "https://cli.github.com/manual/"}, {label: "gitignore", url: "https://git-scm.com/docs/gitignore"}]
    },
    { id: "s9", title: "Fluxos avançados",
      blurb: "Quando o básico não basta.",
      start: ["worktree.", "stash.", "submodule.", "rerere.", "filter-branch alt.", "archive."],
      exercises: [
        {t: "git worktree.", "tip": "varios dirs."},
        {t: "git stash.", "tip": "pausa."},
        {t: "submodule add.", "tip": "modulo."},
        {t: "rerere on.", "tip": "reusa resolucao."},
        {t: "git archive.", "tip": "zip sem .git."},
        {t: "Explicar worktree.", "tip": "paralelo."}
      ],
      schedule: [{wk: "Sem 1", go: "worktree."}, {wk: "Sem 2", go: "stash."}, {wk: "Sem 3", go: "submodule."}],
      deep: [{label: "worktree", url: "https://git-scm.com/docs/git-worktree"}, {label: "stash", url: "https://git-scm.com/docs/git-stash"}]
    },
    { id: "s10", title: "Boas práticas & segurança",
      blurb: "Commits que o futuro agradece.",
      start: ["atômico.", "mensagem.", "assinar GPG/SSH.", "segreto nunca no repo.", "force push seguro.", "convenção."],
      exercises: [
        {t: "commit atômico.", "tip": "1 mudança."},
        {t: "mensagem boa.", "tip": "imperativo."},
        {t: "git commit -S.", "tip": "assina."},
        {t: "git-secrets / scan.", "tip": "nao vaze."},
        {t: "force-with-lease.", "tip": "seguro."},
        {t: "Explicar convenção.", "tip": "padrao."}
      ],
      schedule: [{wk: "Sem 1", go: "atômico."}, {wk: "Sem 2", go: "assinar."}, {wk: "Sem 3", go: "segredo."}],
      deep: [{label: "commit guidelines", url: "https://git-scm.com/book/pt-br/v2/Git-Distribuido-Contribuindo-Para-um-Projeto"}, {label: "assinatura", url: "https://docs.github.com/pt/authentication/managing-commit-signature-verification"}]
    }
  ]
});
