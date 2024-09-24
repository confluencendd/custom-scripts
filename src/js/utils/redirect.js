import { linksDocumentsMap } from '../resources/resources'


export function redirectLinks(lang) {

    const links = document.querySelectorAll('.tile__headline a');

    links.forEach(link => {

        const originalLink = link.href;

        if (!linksDocumentsMap[lang][originalLink]) {
            //console.warn(`WARNING: This link: ${link} does not have redirects. \n Check the linksDocumentsMap Object`);
            return;
        }

        link.href = linksDocumentsMap[lang][originalLink];
        link.setAttribute('target', '_blank');

    })
}