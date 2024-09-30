export function createTimeToReadComponent(lang) {

    if (document.querySelector('.time-to-read')) {
        console.warn('Time to read already exists on this page.');
        return;
    }

    const divTimeToRead = document.createElement('div');
    const spanTimeToRead = document.createElement('span');

    divTimeToRead.classList.add('wrap-header-bar');
    spanTimeToRead.classList.add('time-to-read');

    const estimatedTime = readTime('main-content');

    const translations = {
        pt: `${estimatedTime} minuto(s) estimado(s) para leitura`,
        en: `${estimatedTime} minute(s) estimated for reading`,
        es: `${estimatedTime} minuto(s) estimado(s) de lectura`
    };

    spanTimeToRead.textContent = translations[lang] || translations['pt'];
    if (!translations[lang]) {
        console.warn(`WARNING: Translation for ${lang.toUpperCase()} is not available.`);
    }

    divTimeToRead.appendChild(spanTimeToRead);

    showHeaderBarComponent(divTimeToRead);
}

function readTime(elementId, wordsPerMinute = 200) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.warn(`WARNING: No content found in the specified element ${elementId}.`);
        return;
    }

    const text = element.innerText || element.textContent;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return minutes;
}

function showHeaderBarComponent(component) {
    const headerContent = document.querySelector('header.article-header');

    if (!headerContent) {
        console.warn('WARNING: Header element not found.');
        return;
    }

    headerContent.appendChild(component);
}