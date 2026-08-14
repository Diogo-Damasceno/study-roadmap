/* data-sys.js — Linux + Terminal + Bash (10x6 cada) */
window.RMAP = window.RMAP || [];
window.RMAP.push({
  id:"linux", icon:"🐧", color:"#b9bdc6", title:"Linux (Sistema)",
  desc:"O sistema operacional por dentro: kernel, processos, permissões, boot. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Arquitetura do Linux",
      blurb:"Kernel, shell e o resto.",
      start:["Kernel.","Shell.","Espaço usuário.","Distros.","Arch.","Boot."],
      exercises:[
        {t:"Ver versão do kernel.","tip":"uname -a."},
        {t:"Diferença kernel/shell.","tip":"conceito."},
        {t:"Por que Arch.","tip":"minimal."},
        {t:"Processos init.","tip":"systemd."},
        {t:"Espaço kernel vs user.","tip":"anéis."},
        {t:"Explicar boot.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"kernel."},{wk:"Sem 2",go:"shell."},{wk:"Sem 3",go:"boot."}],
      deep:[{label:"Arch Wiki",url:"https://wiki.archlinux.org/"},{label:"Kernel",url:"https://www.kernel.org/"}]
    },
    { id:"s2", title:"Sistema de arquivos",
      blurb:"Ext4, inodes e montagem.",
      start:["Ext4.","Inode.","Mount.","/dev.","Fstab.","Partições."],
      exercises:[
        {t:"Listar partições.","tip":"lsblk."},
        {t:"Montar dispositivo.","tip":"mount."},
        {t:"Inode de arquivo.","tip":"stat."},
        {t:"fstab persistente.","tip":"/etc/fstab."},
        {t:"Diferente de Windows.","tip":"hierarquia."},
        {t:"Explicar inode.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"partições."},{wk:"Sem 2",go:"mount."},{wk:"Sem 3",go:"inode."}],
      deep:[{label:"Arch FS",url:"https://wiki.archlinux.org/title/File_systems"},{label:"ext4",url:"https://ext4.wiki.kernel.org/"}]
    },
    { id:"s3", title:"Processos & jobs",
      blurb:"O que roda e como controlar.",
      start:["PID.","ps.","top.","Foreground.","Background.","Signals."],
      exercises:[
        {t:"Listar processos.","tip":"ps aux."},
        {t:"Matar processo.","tip":"kill PID."},
        {t:"Job em background.","tip":"& / fg."},
        {t:"Sinal SIGTERM.","tip":"kill -15."},
        {t:"Prioridade nice.","tip":"renice."},
        {t:"Explicar PID.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ps."},{wk:"Sem 2",go:"jobs."},{wk:"Sem 3",go:"signals."}],
      deep:[{label:"Arch Proc",url:"https://wiki.archlinux.org/title/Process"},{label:"man kill",url:"https://man7.org/linux/man-pages/man2/kill.2.html"}]
    },
    { id:"s4", title:"Permissões & usuários",
      blurb:"Dono, grupo e bits.",
      start:["chmod.","chown.","Umask.","SUID.","Sudo.","Grupos."],
      exercises:[
        {t:"Permissão 755.","tip":"rwxr-xr-x."},
        {t:"Dono do arquivo.","tip":"chown."},
        {t:"SUID explicado.","tip":"bit 4."},
        {t:"sudoers seguro.","tip":"visudo."},
        {t:"Grupo de usuário.","tip":"usermod."},
        {t:"Explicar bits.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"chmod."},{wk:"Sem 2",go:"chown."},{wk:"Sem 3",go:"suid."}],
      deep:[{label:"Arch Perms",url:"https://wiki.archlinux.org/title/File_permissions_and_attributes"},{label:"sudo",url:"https://www.sudo.ws/"}]
    },
    { id:"s5", title:"Gerenciamento de pacotes",
      blurb:"pacman, yay e o AUR.",
      start:["pacman.","yay.","AUR.","Repositórios.","Atualizar.","Remover."],
      exercises:[
        {t:"Instalar com pacman.","tip":"-S."},
        {t:"AUR com yay.","tip":"build."},
        {t:"Atualizar sistema.","tip":"-Syu."},
        {t:"Buscar pacote.","tip":"-Ss."},
        {t:"Remover orphan.","tip":"-Rns."},
        {t:"Explicar AUR.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"pacman."},{wk:"Sem 2",go:"yay."},{wk:"Sem 3",go:"aur."}],
      deep:[{label:"pacman",url:"https://wiki.archlinux.org/title/Pacman"},{label:"AUR",url:"https://aur.archlinux.org/"}]
    },
    { id:"s6", title:"systemd & serviços",
      blurb:"Como serviços sobem.",
      start:["Unit.","Service.","Timer.","Enable.","Status.","Journal."],
      exercises:[
        {t:"Status de serviço.","tip":"systemctl."},
        {t:"Habilitar boot.","tip":"enable."},
        {t:"Criar unit.","tip":"/etc/systemd."},
        {t:"Timer diário.","tip":"OnCalendar."},
        {t:"Ver logs.","tip":"journalctl."},
        {t:"Explicar systemd.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"unit."},{wk:"Sem 2",go:"enable."},{wk:"Sem 3",go:"timer."}],
      deep:[{label:"systemd",url:"https://www.freedesktop.org/wiki/Software/systemd/"},{label:"Arch systemd",url:"https://wiki.archlinux.org/title/Systemd"}]
    },
    { id:"s7", title:"Rede no Linux",
      blurb:"Interfaces e roteamento.",
      start:["ip.","ifconfig(legado).","Rotas.","DNS.","Firewall.","Resolução."],
      exercises:[
        {t:"IP das interfaces.","tip":"ip a."},
        {t:"Rota padrão.","tip":"ip r."},
        {t:"Resolver DNS.","tip":"resolvectl."},
        {t:"Regra nftables.","tip":"drop."},
        {t:"Subir interface.","tip":"ip link up."},
        {t:"Explicar ip.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ip."},{wk:"Sem 2",go:"rotas."},{wk:"Sem 3",go:"firewall."}],
      deep:[{label:"Arch Network",url:"https://wiki.archlinux.org/title/Network_configuration"},{label:"nftables",url:"https://wiki.nftables.org/"}]
    },
    { id:"s8", title:"Boot & recovery",
      blurb:"Quando não sobe.",
      start:["GRUB.","Initramfs.","Shell emerg.","Chroot.","Log de boot.","Reparar."],
      exercises:[
        {t:"Entrar em shell emerg.","tip":"init=/bin/sh."},
        {t:"Chroot para reparar.","tip":"mount + chroot."},
        {t:"Regerar initramfs.","tip":"mkinitcpio."},
        {t:"Ver log de boot.","tip":"journalctl -b -1."},
        {t:"Corrigir fstab.","tip":"modo emerg."},
        {t:"Explicar boot.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"grub."},{wk:"Sem 2",go:"chroot."},{wk:"Sem 3",go:"repair."}],
      deep:[{label:"Arch Recovery",url:"https://wiki.archlinux.org/title/General_troubleshooting"},{label:"GRUB",url:"https://www.gnu.org/software/grub/"}]
    },
    { id:"s9", title:"Kernel & módulos",
      blurb:"Carregar drivers e tunning.",
      start:["Módulos.","lsmod.","Parâmetros.","sysctl.","Compilar (intro).","Carregar."],
      exercises:[
        {t:"Listar módulos.","tip":"lsmod."},
        {t:"Carregar módulo.","tip":"modprobe."},
        {t:"Parâmetro sysctl.","tip":"sysctl -w."},
        {t:"Persistir sysctl.","tip":"/etc/sysctl.d."},
        {t:"Blacklist módulo.","tip":"conf."},
        {t:"Explicar módulo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"módulos."},{wk:"Sem 2",go:"sysctl."},{wk:"Sem 3",go:"blacklist."}],
      deep:[{label:"Arch Kernel",url:"https://wiki.archlinux.org/title/Kernel_module"},{label:"sysctl",url:"https://man7.org/linux/man-pages/man8/sysctl.8.html"}]
    },
    { id:"s10", title:"Linux integrado",
      blurb:"Sistema de ponta a ponta.",
      start:["Revisar.","Serviço.","Rede.","Segurança.","Automatizar.","Prova."],
      exercises:[
        {t:"Subir serviço.","tip":"systemd."},
        {t:"Configurar rede.","tip":"ip/nft."},
        {t:"Hardening básico.","tip":"ssh/firewall."},
        {t:"Script de setup.","tip":"reprodutível."},
        {t:"Documentar box.","tip":"runbook."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"serviço."},{wk:"Sem 3",go:"prova."}],
      deep:[{label:"Arch Wiki",url:"https://wiki.archlinux.org/"},{label:"Linux Journey",url:"https://linuxjourney.com/"}]
    }
  ]
});

window.RMAP.push({
  id:"terminal", icon:"▣", color:"#aeb2ba", title:"Terminal",
  desc:"Só a linha de comando: navegação, pipes e produtividade. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Primeiros passos",
      blurb:"Mover-se no shell.",
      start:["pwd.","ls.","cd.","clear.","history.","whoami."],
      exercises:[
        {t:"Navegar pastas.","tip":"cd/ls."},
        {t:"Voltar ao home.","tip":"cd ~."},
        {t:"Limpar tela.","tip":"clear."},
        {t:"Ver histórico.","tip":"history."},
        {t:"Usuário atual.","tip":"whoami."},
        {t:"Explicar prompt.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"pwd/ls."},{wk:"Sem 2",go:"cd."},{wk:"Sem 3",go:"history."}],
      deep:[{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"},{label:"Arch",url:"https://wiki.archlinux.org/"}]
    },
    { id:"s2", title:"Manipular arquivos",
      blurb:"Criar, copiar, mover.",
      start:["touch.","cp.","mv.","rm.","mkdir.","ln."],
      exercises:[
        {t:"Criar arquivo.","tip":"touch."},
        {t:"Copiar recursivo.","tip":"cp -r."},
        {t:"Mover/renomear.","tip":"mv."},
        {t:"Remover com cuidado.","tip":"rm -i."},
        {t:"Link simbólico.","tip":"ln -s."},
        {t:"Explicar rm.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"touch/cp."},{wk:"Sem 2",go:"mv/rm."},{wk:"Sem 3",go:"ln."}],
      deep:[{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"},{label:"Arch",url:"https://wiki.archlinux.org/"}]
    },
    { id:"s3", title:"Pipes & redirecionamento",
      blurb:"A superpotência do shell.",
      start:["|.",">.",">>.","<.","tee.","xargs."],
      exercises:[
        {t:"Filtrar com pipe.","tip":"ls | grep."},
        {t:"Salvar saída.","tip":"> arq."},
        {t:"Acrescentar.","tip":">>."},
        {t:"Ler de arquivo.","tip":"<."},
        {t:"xargs aplicar.","tip":"linha a linha."},
        {t:"Explicar pipe.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"pipe."},{wk:"Sem 2",go:">."},{wk:"Sem 3",go:"xargs."}],
      deep:[{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"},{label:"pipes",url:"https://en.wikipedia.org/wiki/Pipeline_(Unix)"}]
    },
    { id:"s4", title:"Busca & texto",
      blurb:"Achar qualquer coisa.",
      start:["grep.","find.","locate.","less.","head/tail.","wc."],
      exercises:[
        {t:"Buscar palavra.","tip":"grep -r."},
        {t:"Achar arquivo.","tip":"find -name."},
        {t:"Ver fim de log.","tip":"tail -f."},
        {t:"Contar linhas.","tip":"wc -l."},
        {t:"Paginador less.","tip":"/ busca."},
        {t:"Explicar grep.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"grep."},{wk:"Sem 2",go:"find."},{wk:"Sem 3",go:"tail."}],
      deep:[{label:"grep",url:"https://www.gnu.org/software/grep/"},{label:"find",url:"https://man7.org/linux/man-pages/man1/find.1.html"}]
    },
    { id:"s5", title:"Processamento de texto",
      blurb:"sed, awk e companhia.",
      start:["cat.","cut.","sort.","uniq.","sed.","awk."],
      exercises:[
        {t:"Ordenar e contar.","tip":"sort | uniq -c."},
        {t:"Cortar coluna.","tip":"cut -d."},
        {t:"Substituir com sed.","tip":"s///."},
        {t:"Somar coluna awk.","tip":"{s+=$1}."},
        {t:"Filtrar linhas.","tip":"awk '$1>10'."},
        {t:"Explicar awk.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"sort/uniq."},{wk:"Sem 2",go:"sed."},{wk:"Sem 3",go:"awk."}],
      deep:[{label:"sed",url:"https://www.gnu.org/software/sed/manual/"},{label:"awk",url:"https://man7.org/linux/man-pages/man1/awk.1p.html"}]
    },
    { id:"s6", title:"Ambiente & variáveis",
      blurb:"Configurar sua shell.",
      start:["export.","PATH.","alias.","env.","profile.","prompt."],
      exercises:[
        {t:"Criar variável.","tip":"export."},
        {t:"Adicionar ao PATH.","tip":"export PATH."},
        {t:"Alias útil.","tip":"~/.bashrc."},
        {t:"Ver ambiente.","tip":"env."},
        {t:"Persistir config.","tip":"profile."},
        {t:"Explicar PATH.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"export."},{wk:"Sem 2",go:"alias."},{wk:"Sem 3",go:"profile."}],
      deep:[{label:"Bash Manual",url:"https://www.gnu.org/software/bash/manual/"},{label:"Arch",url:"https://wiki.archlinux.org/"}]
    },
    { id:"s7", title:"Permissões no terminal",
      blurb:"chmod na prática.",
      start:["ls -l.","chmod num.","chmod simb.","chown.","umask.","executável."],
      exercises:[
        {t:"Ler ls -l.","tip":"bits."},
        {t:"Modo 644.","tip":"rw-r--r--."},
        {t:"Tornar executável.","tip":"chmod +x."},
        {t:"Dono com chown.","tip":"usuário."},
        {t:"umask padrão.","tip":"022."},
        {t:"Explicar bits.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ls -l."},{wk:"Sem 2",go:"chmod."},{wk:"Sem 3",go:"chown."}],
      deep:[{label:"Arch Perms",url:"https://wiki.archlinux.org/title/File_permissions_and_attributes"},{label:"Bash",url:"https://www.gnu.org/software/bash/manual/"}]
    },
    { id:"s8", title:"Jobs & processos",
      blurb:"Controlar execução.",
      start:["&.","jobs.","fg/bg.","Ctrl+Z.","nohup.","kill."],
      exercises:[
        {t:"Rodar em background.","tip":"&."},
        {t:"Pausar com Ctrl+Z.","tip":"stop."},
        {t:"Voltar foreground.","tip":"fg."},
        {t:"nohup desatachar.","tip":"sair."},
        {t:"Matar job.","tip":"kill %1."},
        {t:"Explicar jobs.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"&."},{wk:"Sem 2",go:"Ctrl+Z."},{wk:"Sem 3",go:"nohup."}],
      deep:[{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"},{label:"Bash Job",url:"https://www.gnu.org/software/bash/manual/"}]
    },
    { id:"s9", title:"Produtividade",
      blurb:"Atalhos e fluxo.",
      start:["Tab.","Ctrl+R.","Ctrl+A/E.","Ctrl+L.","!!.","histexpand."],
      exercises:[
        {t:"Autocompletar Tab.","tip":"caminhos."},
        {t:"Buscar histórico Ctrl+R.","tip":"reverse-i-search."},
        {t:"Início/fim linha.","tip":"Ctrl+A/E."},
        {t:"Repetir último.","tip":"!!."},
        {t:"Limpar Ctrl+L.","tip":"clear."},
        {t:"Explicar fluxo.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"Tab."},{wk:"Sem 2",go:"Ctrl+R."},{wk:"Sem 3",go:"atalhos."}],
      deep:[{label:"Bash Shortcuts",url:"https://www.gnu.org/software/bash/manual/"},{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"}]
    },
    { id:"s10", title:"Terminal integrado",
      blurb:"Fluxo completo no shell.",
      start:["Revisar.","Pipeline.","Script.","Automatizar.","Erros.","Prova."],
      exercises:[
        {t:"Pipeline de log.","tip":"grep|awk|sort."},
        {t:"Resumo de arquivos.","tip":"wc/find."},
        {t:"Alias de 1 palavra.","tip":"launcher."},
        {t:"Comando encadeado.","tip":"; e &&."},
        {t:"Lista de comandos.","tip":"cheatsheet."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"revisar."},{wk:"Sem 2",go:"pipeline."},{wk:"Sem 3",go:"prova."}],
      deep:[{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"},{label:"Bash",url:"https://www.gnu.org/software/bash/manual/"}]
    }
  ]
});

window.RMAP.push({
  id:"bash", icon:"💻", color:"#b4b8c0", title:"Bash Scripting",
  desc:"Automação real com scripts shell. 10 módulos com 6 atividades.",
  stages:[
    { id:"s1", title:"Olá shell",
      blurb:"Primeiro script.",
      start:["shebang.","echo.","chmod +x.","variável.","comentário.","rodar."],
      exercises:[
        {t:"Script hello.","tip":"#!/bin/bash."},
        {t:"Variável e echo.","tip":"$var."},
        {t:"Tornar executável.","tip":"chmod +x."},
        {t:"Comentar código.","tip":"#."},
        {t:"Rodar ./script.","tip":"path."},
        {t:"Explicar shebang.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"shebang."},{wk:"Sem 2",go:"var."},{wk:"Sem 3",go:"rodar."}],
      deep:[{label:"Bash Manual",url:"https://www.gnu.org/software/bash/manual/"},{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"}]
    },
    { id:"s2", title:"Argumentos & entrada",
      blurb:"Parametrizar scripts.",
      start:["$1 $2.","$@.","$#.","read.","shift.","validar."],
      exercises:[
        {t:"Usar $1.","tip":"primeiro arg."},
        {t:"Loop sobre $@.","tip":"todos args."},
        {t:"Ler do teclado.","tip":"read."},
        {t:"Contar args.","tip":"$#."},
        {t:"Validar entrada.","tip":"if vazio."},
        {t:"Explicar args.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"$1."},{wk:"Sem 2",go:"$@."},{wk:"Sem 3",go:"read."}],
      deep:[{label:"Bash Manual",url:"https://www.gnu.org/software/bash/manual/"},{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"}]
    },
    { id:"s3", title:"Condicionais",
      blurb:"if/test na prática.",
      start:["if.","[ ].","-f -d.","elif.","case.","comparar."],
      exercises:[
        {t:"if arquivo existe.","tip":"[ -f ]."},
        {t:"if diretório.","tip":"[ -d ]."},
        {t:"Comparar números.","tip":"-gt."},
        {t:"case de opção.","tip":"menu."},
        {t:"else mensagem.","tip":"erro."},
        {t:"Explicar test.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"if."},{wk:"Sem 2",go:"[ ]."},{wk:"Sem 3",go:"case."}],
      deep:[{label:"test",url:"https://man7.org/linux/man-pages/man1/test.1.html"},{label:"Bash",url:"https://www.gnu.org/software/bash/manual/"}]
    },
    { id:"s4", title:"Laços",
      blurb:"for/while para repetir.",
      start:["for.","while.","until.","break.","continue.","sequência."],
      exercises:[
        {t:"for em lista.","tip":"for x in."},
        {t:"while condição.","tip":"lê linha."},
        {t:"Loop 1..10.","tip":"seq ou {1..10}."},
        {t:"break/continue.","tip":"controle."},
        {t:"Processar arquivos.","tip":"for f in *."},
        {t:"Explicar loop.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"for."},{wk:"Sem 2",go:"while."},{wk:"Sem 3",go:"controle."}],
      deep:[{label:"Bash Loops",url:"https://www.gnu.org/software/bash/manual/"},{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"}]
    },
    { id:"s5", title:"Funções",
      blurb:"Modularizar o script.",
      start:["function.","parâmetro.","return.","escopo.","local.","reuso."],
      exercises:[
        {t:"Definir função.","tip":"nome(){ }."},
        {t:"Passar argumento.","tip":"$1 dentro."},
        {t:"Retornar status.","tip":"return 0."},
        {t:"Variável local.","tip":"local x."},
        {t:"Chamar função.","tip":"nome."},
        {t:"Explicar função.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"function."},{wk:"Sem 2",go:"param."},{wk:"Sem 3",go:"local."}],
      deep:[{label:"Bash Functions",url:"https://www.gnu.org/software/bash/manual/"},{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"}]
    },
    { id:"s6", title:"Redirecionamento em script",
      blurb:"Logs e pipes no código.",
      start:[">/>>.","2>.","&>.","pipe.","tee.","exit code."],
      exercises:[
        {t:"Log de saída.","tip":">> log."},
        {t:"Redirecionar erro.","tip":"2> err."},
        {t:"stdout+stderr.","tip":"&>."},
        {t:"Pipe entre funções.","tip":"comando|comando."},
        {t:"exit code útil.","tip":"return."},
        {t:"Explicar redir.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:">."},{wk:"Sem 2",go:"2>."},{wk:"Sem 3",go:"&>."}],
      deep:[{label:"Bash Redir",url:"https://www.gnu.org/software/bash/manual/"},{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"}]
    },
    { id:"s7", title:"Tratamento de erros",
      blurb:"Scripts robustos.",
      start:["set -e.","set -u.","trap.","validar.","mensagem.","rollback."],
      exercises:[
        {t:"set -e parar erro.","tip":"aborta."},
        {t:"set -u var indef.","tip":"protege."},
        {t:"trap limpar.","tip":"EXIT."},
        {t:"Validar antes.","tip":"if."},
        {t:"Mensagem clara.","tip":"stderr."},
        {t:"Explicar robustez.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"set -e."},{wk:"Sem 2",go:"trap."},{wk:"Sem 3",go:"validar."}],
      deep:[{label:"Bash set",url:"https://www.gnu.org/software/bash/manual/"},{label:"unix.stackexchange",url:"https://unix.stackexchange.com/"}]
    },
    { id:"s8", title:"Automação de tarefas",
      blurb:"Agendar e disparar.",
      start:["cron.","systemd timer.","at.","watch.","lock.","idempotente."],
      exercises:[
        {t:"cron diário.","tip":"crontab -e."},
        {t:"systemd timer.","tip":"OnCalendar."},
        {t:"watch repetir.","tip":"-n."},
        {t:"Lockfile.","tip":"evitar duplo."},
        {t:"Idempotente.","tip":"repetir ok."},
        {t:"Explicar agendamento.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"cron."},{wk:"Sem 2",go:"timer."},{wk:"Sem 3",go:"lock."}],
      deep:[{label:"cron",url:"https://man7.org/linux/man-pages/man5/crontab.5.html"},{label:"systemd timer",url:"https://www.freedesktop.org/wiki/Software/systemd/"}]
    },
    { id:"s9", title:"Interagindo com o sistema",
      blurb:"Shell + ferramentas.",
      start:["chamadas.","parsear.","notificar.","arquivos.","rede.","relatar."],
      exercises:[
        {t:"Chamar comando e usar saída.","tip":"$()."},
        {t:"Parsear saída.","tip":"grep/awk."},
        {t:"Notificar desktop.","tip":"notify-send."},
        {t:"Backup script.","tip":"rsync."},
        {t:"Relatar por log.","tip":"arquivo."},
        {t:"Explicar integração.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"chamar."},{wk:"Sem 2",go:"parsear."},{wk:"Sem 3",go:"relatar."}],
      deep:[{label:"Bash",url:"https://www.gnu.org/software/bash/manual/"},{label:"TLCL",url:"https://linuxcommand.org/tlcl.php"}]
    },
    { id:"s10", title:"Projeto bash",
      blurb:"Um utilitário de verdade.",
      start:["Ideia.","Esqueleto.","Funções.","Erros.","Docs.","Demo."],
      exercises:[
        {t:"Script de manutenção.","tip":"seu uso."},
        {t:"Funções modulares.","tip":"reuso."},
        {t:"Tratamento de erro.","tip":"set -e/trap."},
        {t:"README do script.","tip":"uso."},
        {t:"Demo gravada.","tip":"banca."},
        {t:"Apresentar.","tip":"banca."}
      ],
      schedule:[{wk:"Sem 1",go:"ideia."},{wk:"Sem 2",go:"esqueleto."},{wk:"Sem 3",go:"demo."}],
      deep:[{label:"Bash Manual",url:"https://www.gnu.org/software/bash/manual/"},{label:"ShellCheck",url:"https://www.shellcheck.net/"}]
    }
  ]
});
