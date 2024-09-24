import { categoriesResources } from '../resources/resources'

export function translateCategories(lang) {
    const categories = document.querySelectorAll(".portal__content__heading h2");

    categories.forEach(category => {
        const categoryName = category.textContent;
        const categoryText = categoriesResources[lang]?.[categoryName]?.text;

        if (categoryText) {
            category.textContent = categoryText;
        } else {
            console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for this category: ${categoryName} \n Check the categoriesResources Object`);
        }
    });
}