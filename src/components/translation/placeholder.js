import placeholderResources from '../../resources/placeholderResources.json'

export function translatePlaceholderSearchBar(lang) {
    const searchInput = document.querySelector('input.vp-search-input__input');

    switch (lang) {
        case "pt":
            searchInput.setAttribute("placeholder", placeholderResources[lang]);
            break;
        case "en":
            searchInput.setAttribute("placeholder", placeholderResources[lang]);
            break;
        case "es":
            searchInput.setAttribute("placeholder", placeholderResources[lang]);
            break;
        default:
            searchInput.setAttribute("placeholder", placeholderResources.pt);
            console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for search-box placeholder. \n Check the placeholderResources Object`);
            break;
    }
}