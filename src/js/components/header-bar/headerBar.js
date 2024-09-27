export function createTimeToReadComponent() {

    const divTimeToRead = document.createElement('div');
    const spanTimeToRead = document.createElement('span');

    divTimeToRead.classList.add('wrap-header-bar');
    spanTimeToRead.classList.add('time-to-read');



    const estimatedTime = readTime('main-content');
    spanTimeToRead.textContent = `${estimatedTime} minuto(s) estimado(s) para leitura`;
    divTimeToRead.appendChild(spanTimeToRead);

    const headerContent = document.querySelector('header.article-header')

    headerContent.appendChild(divTimeToRead);
}

function readTime(elementoId, wpm = 200) {

    // Seleciona o elemento pelo ID
    const elemento = document.getElementById(elementoId);

    if (!elemento) {
        console.error('Elemento não encontrado!');
        return;
    }

    // Extrai o texto do elemento
    const texto = elemento.innerText || elemento.textContent;

    // Remove espaços extras e quebra de linhas
    const palavras = texto.trim().split(/\s+/).length;

    // Calcula o tempo de leitura em minutos
    const tempoMinutos = palavras / wpm;

    // Arredonda para cima para evitar frações de minuto
    const minutos = Math.ceil(tempoMinutos);

    return minutos;
}