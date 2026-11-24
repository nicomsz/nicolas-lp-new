# nicomsz.com

Meu site pessoal: quem sou, a stack com que trabalho, minha trajetória e como falar comigo.

**No ar:** [nicomsz.com](https://nicomsz.com)

## Como é feito

O site inteiro é um arquivo, o `index.html`. Não tem framework nem etapa de build.

- **3D:** um único canvas WebGL com [Three.js](https://threejs.org), carregado de uma CDN. O aparelho é montado com geometria no próprio código, sem modelo 3D nem imagem.
- **Animação presa ao scroll:** no celular, a descida do aparelho do topo até a seção da stack usa `animation-timeline: scroll()`. O navegador calcula a animação junto com a rolagem, sem JavaScript a cada quadro. Onde o recurso não existe, o mesmo trajeto roda em JavaScript.
- **Sem WebGL:** se o navegador não tiver WebGL, a página mostra o aparelho desenhado em CSS no lugar do canvas.
- **Movimento reduzido:** com `prefers-reduced-motion`, as transições e o balanço automático do aparelho são desligados; o 3D só se move junto com o scroll.
- **Fonte:** [Mona Sans](https://github.com/github/mona-sans), variável, embutida no próprio HTML.

## Páginas de projetos

- [`/llm-gateway/`](https://nicomsz.com/llm-gateway/): guia de system design do [llm-gateway](https://github.com/nicomsz/llm-gateway), em 9 lições.
- [`/volta/`](https://nicomsz.com/volta/): landing page do Volta, lembrete de vacina pelo WhatsApp para clínicas veterinárias.

Cada uma é um `index.html` independente, na própria pasta.

## Rodar localmente

Qualquer servidor de arquivos estáticos serve:

```bash
npx serve .
```

## Publicação

GitHub Pages, a partir da branch `master`. O arquivo `CNAME` aponta o domínio `nicomsz.com`, e `og.png` é a imagem que aparece quando o link é compartilhado.
