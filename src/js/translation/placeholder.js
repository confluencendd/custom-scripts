import { placeholderResources } from '../resources/resources'

export function translatePlaceholderSearchBar(lang = "pt") {
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
            searchInput.setAttribute("placeholder", placeholderResources[lang]);
            break;
    }

    console.warn(`WARNING: There are not translations for this placeholder. \n Check the placeholderResources Object`);
}