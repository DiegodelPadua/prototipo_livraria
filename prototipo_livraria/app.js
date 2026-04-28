const livros = [
  { titulo: 'Clean Code', autor: 'Diego de Pádua', isbn: '9780132350884' },
  { titulo: 'Engenharia de Software', autor: 'Lucas Alves', isbn: '9788543024974' },
  { titulo: 'Use a Cabeça Java', autor: 'Ana Beatriz', isbn: '9788576081739' },
  { titulo: 'Entendendo Algoritmos', autor: 'Rafaella Paiva', isbn: '9788575225639' },
  { titulo: 'Código Limpo em JavaScript', autor: 'Yuri Kimono', isbn: '9786555200001' }
]

const campoBusca = document.getElementById('campoBusca')
const btnLimpar = document.getElementById('btnLimpar')
const listaLivros = document.getElementById('listaLivros')
const resumoResultado = document.getElementById('resumoResultado')

function criarCardLivro(livro) {
  const article = document.createElement('article')
  article.className = 'card-livro'

  article.innerHTML = `
    <h3>${livro.titulo}</h3>
    <p><strong>Autor:</strong> ${livro.autor}</p>
    <span class="isbn">ISBN: ${livro.isbn}</span>
  `

  return article
}

function filtrarLivros(texto) {
  const termo = texto.toLowerCase().trim()

  if (termo === '') {
    return livros
  }

  return livros.filter((livro) => {
    return livro.titulo.toLowerCase().includes(termo) ||
           livro.autor.toLowerCase().includes(termo) ||
           livro.isbn.includes(termo)
  })
}

function renderizarLivros() {
  const livrosFiltrados = filtrarLivros(campoBusca.value)
  const cards = livrosFiltrados.map(criarCardLivro)

  listaLivros.replaceChildren(...cards)
  resumoResultado.textContent = `${livrosFiltrados.length} livro(s) encontrado(s).`
}

campoBusca.addEventListener('input', renderizarLivros)

btnLimpar.addEventListener('click', () => {
  campoBusca.value = ''
  renderizarLivros()
  campoBusca.focus()
})

renderizarLivros()
