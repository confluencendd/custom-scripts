import headerLinksResources from '../resources/headerLinksResources.json'

export function translateHeaderLinks(lang) {
    const links = document.querySelectorAll("li.render-links--link a");

    links.forEach(link => {
        const linkName = link.textContent;

        let linkSanitized = linkName.trim();
        linkSanitized = linkSanitized.replace(/\n/g, '');

        const linkText = headerLinksResources[lang]?.[linkSanitized]?.text;

        if (!linkText) {
            console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for this link: ${linkSanitized} \n Check the headerLinksResources Object`);
            return
        }
        link.textContent = linkText;
        link.setAttribute('target', '_blank')
    });
}