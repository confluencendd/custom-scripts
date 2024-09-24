import { headerLinksResources } from '../resources/resources'

export function translateHeaderLinks(lang) {
    const links = document.querySelectorAll("li.render-links--link a");

    links.forEach(link => {
        const linkName = link.textContent;

        // Remove espaços em branco no início e no final
        let linkSanitized = linkName.trim();

        // Remove quebras de linha (enters)
        linkSanitized = linkSanitized.replace(/\n/g, '');

        const linkText = headerLinksResources[lang]?.[linkSanitized]?.text;

        if (!linkText) {
            console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for this link: ${linkSanitized} \n Check the headerLinksResources Object`);
        }

        link.textContent = linkText;
        link.setAttribute('target', '_blank')
    });
}