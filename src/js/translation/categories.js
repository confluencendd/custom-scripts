import categoriesResources from '../resources/categoriesResources.json'

export function translateCategories(lang) {
    const categories = document.querySelectorAll(".portal__content__heading h2");

    categories.forEach(category => {
        const categoryName = category.textContent;
        const categoryText = categoriesResources[lang]?.[categoryName]?.text;

        if (!categoryText) {
            console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for this category: ${categoryName} \n Check the categoriesResources Object`);
            return;
        }
        category.textContent = categoryText;
    });
}