import headerLinksResources from '../../js/resources/headerLinksResources.json'

export function translateHeaderLinks(product, lang) {
    const links = document.querySelectorAll("li.render-links--link a");

    if (!headerLinksResources[product]) {
        console.warn(`WARNING: This product ${product} does not exist on headerLinksResources`);
        return;
    }

    if (!headerLinksResources[product][lang]) {
        console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for Header links at Product: ${product}. \n Check the headerLinksResources Object`);
        return;
    }

    links.forEach(link => {
        const linkName = link.textContent;

        let linkSanitized = linkName.trim();
        linkSanitized = linkSanitized.replace(/\n/g, '');

        const linkText = headerLinksResources[product]?.[lang]?.[linkSanitized]?.text;

        if (!linkText) {
            console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for this link: ${linkSanitized}. \n Check the headerLinksResources Object`);
            return;
        }
        link.textContent = linkText;
        link.setAttribute('target', '_blank')
    });
}