# Roadmap de Estudos

Plataforma web de trilhas de aprendizado para estudantes de Engenharia de Software, Cibersegurança (Red e Blue Team), Inteligência Artificial e áreas afins. Conteúdo 100% gratuito e voltado para qualquer pessoa que queira estudar de forma estruturada, com progresso salvo por conta.

## O que tem aqui

- **34 trilhas** organizadas por **nível de precedência** (Nível 1 = fundação, até Nível 4 = avançado), com indicação de pré-requisitos.
- **Aula prática** em cada módulo: documentação dos assuntos da etapa + exercícios.
- **Explicações** do que é cada conceito (não só uma lista de tópicos).
- **Blocos de verificação** de exercícios: múltipla escolha, resposta livre e (opcionalmente) execução de código.
- **Livros gratuitos em PT-BR** indicados por trilha, extraídos da lista colaborativa [EbookFoundation/free-programming-books](https://github.com/EbookFoundation/free-programming-books).
- **Progresso por usuário**: cada conta tem seu próprio histórico, salvo em banco local SQLite.
- **Responsivo**: funciona no celular e no computador.

## Como rodar localmente

Requisitos: Node.js 18+ instalado.

```bash
npm install
SESSION_SECRET="troque-por-uma-string-longa" PORT=4010 node server.js
```

Abra http://localhost:4010 no navegador. Crie uma conta na tela de login.

### Executar código dos exercícios (opcional)

Por padrão a execução de código fica **desligada**. Para habilitar apenas em ambiente local/seguro:

```bash
ALLOW_CODE_EXEC=1 SESSION_SECRET="..." PORT=4010 node server.js
```

Isso roda Python e shell em um subprocesso isolado, com timeout e sem acesso à rede de saída. Não ligue em produção pública sem sandboxed adequado.

### Login com GitHub (opcional)

1. Crie um OAuth App em https://github.com/settings/developers
2. Defina o callback para `http://localhost:4010/auth/github/callback` (ou a URL pública em produção)
3. Exporte as variáveis antes de subir o servidor:

```bash
GITHUB_CLIENT_ID="..." GITHUB_CLIENT_SECRET="..." SESSION_SECRET="..." node server.js
```

Sem essas variáveis, o botão do GitHub aparece desabilitado e o login por senha continua funcionando.

## Segurança e privacidade dos usuários

- Senhas são armazenadas com **bcrypt** (hash + salt, nunca em texto puro).
- Sessões usam cookie `httpOnly` + `sameSite`, assinado com `SESSION_SECRET`.
- O banco é um arquivo **SQLite** local (`roadmap.db`) — nenhum dado sai da sua máquina/servidor.
- Cabeçalhos de segurança via `helmet` (CSP, etc.) e rate limit de login.
- O que é salvo: apenas seu progresso e favoritos. Nada de telemetria ou rastreadores.

## Estrutura

```
data-*.js            trilhas, módulos e exercícios (carregados pelo servidor)
explain.js           dicionário de explicações dos conceitos
lessons-gen.js       gera a "Aula prática" de cada módulo
roadmap-order.js     níveis de precedência e pré-requisitos
books-by-area.json   livros gratuitos PT-BR por trilha
lessons.js           aulas detalhadas de algumas trilhas (override)
server.js            backend Express + SQLite
public/              frontend (HTML/CSS/JS)
```

## Aviso ético

Este material é para **estudo e defesa**. Qualquer prática de segurança (Red Team, pentest, engenharia reversa) deve ser feita **apenas em ambientes próprios e autorizados por escrito**. Invadir sistemas alheiros sem permissão é crime (Lei 12.737/12 — Lei Carolina Dieckmann). Use o conhecimento para proteger, não para prejudicar.

## Créditos

Idealizado e mantido por [Diogo Damasceno](https://github.com/Diogo-Damasceno).
Livros gratuitos: comunidade [EbookFoundation](https://github.com/EbookFoundation/free-programming-books).
