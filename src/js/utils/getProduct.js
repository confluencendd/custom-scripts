export function getCurrentProduct() {
    const titleTag = document.querySelector('title').textContent.split('|')
    const currentProduct = titleTag[1].toLowerCase().trim();
    
    return currentProduct;

}