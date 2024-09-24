import tilesResources from '../resources/tilesResources.json'

export function translateTiles(lang) {
    const tiles = document.querySelectorAll('[data-vp-id="portal-space-tile"]');

    tiles.forEach(tile => {
        const tileName = tile.getAttribute('data-vp-name');  

        const { headline, description } = tilesResources[lang][tileName] || {};

        //Text title of document
        const headlineElement = tile.querySelector('.tile__headline a');
        //Text description of document
        const descriptionElement = tile.querySelector('.tile__description span');

        if (headline) headlineElement.textContent = headline;
        if (description && descriptionElement) descriptionElement.textContent = description;
    });
}