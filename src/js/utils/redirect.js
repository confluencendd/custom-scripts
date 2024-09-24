import linksDocumentsMapResources from '../resources/linksDocumentsMapResources.json'

export function redirectLinks(lang) {

    const links = document.querySelectorAll('.tile__headline a');

    links.forEach(link => {

        const originalLink = link.href;

        if (!linksDocumentsMapResources[lang][originalLink]) {
            //console.warn(`WARNING: This link: ${link} does not have redirects. \n Check the linksDocumentsMapResources Object`);
            return;
        }

        link.href = linksDocumentsMapResources[lang][originalLink];
        link.setAttribute('target', '_blank');

    })
}