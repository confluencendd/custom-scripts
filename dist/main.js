
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $75d7376a7fc1001f$export$604ba5624273df44() {
    const buttonChangeLanguage = document.querySelector('[data-vp-id="language-picker-footer-button"]');
    return buttonChangeLanguage?.getAttribute("lang") || "pt"; // Default to Portuguese if language was not found
}


function $73dd53774cf84dc1$export$d01408ed6f850a64() {
    const productUrl = document.URL.split("-");
    const productName = productUrl[1].split(".");
    const currentProduct = productName[0].toLowerCase().trim();
    return currentProduct;
}


function $0338f0fd1d201d30$export$ee302119ce9aa13b(callback, route = window.location.pathname) {
    const currentPath = window.location.pathname;
    if (route !== currentPath) {
        console.warn(`WARNING: This function ${callback} was not able to translate on this route: ${route} \n Check the route parameter`);
        return;
    }
    callback();
}


var $51b38b5cefbe55e4$exports = {};
$51b38b5cefbe55e4$exports = JSON.parse('{"testes":{"pt":{"https://helpcenter-testes.ndd.tech/queremos-escutar-voc/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/parceiros-e-canais/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/blog-e-mais-conte-dos/Working-version/":"https://ndd.tech/blog/category/provedores-de-outsourcing/","https://helpcenter-testes.ndd.tech/falar-com-suporte/Working-version/":"https://suporte.ndd.tech/"},"en":{"https://helpcenter-testes.ndd.tech/queremos-escutar-voc/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/parceiros-e-canais/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/blog-e-mais-conte-dos/Working-version/":"https://ndd.tech/blog/category/provedores-de-outsourcing/","https://helpcenter-testes.ndd.tech/falar-com-suporte/Working-version/":"https://suporte.ndd.tech/"},"es":{"https://helpcenter-testes.ndd.tech/queremos-escutar-voc/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/parceiros-e-canais/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/blog-e-mais-conte-dos/Working-version/":"https://ndd.tech/blog/category/provedores-de-outsourcing/","https://helpcenter-testes.ndd.tech/falar-com-suporte/Working-version/":"https://suporte.ndd.tech/"}},"ndd orbix":{"pt":{"https://helpcenter-testes.ndd.tech/queremos-escutar-voc/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/parceiros-e-canais/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/blog-e-mais-conte-dos/Working-version/":"https://ndd.tech/blog/category/provedores-de-outsourcing/","https://helpcenter-testes.ndd.tech/falar-com-suporte/Working-version/":"https://suporte.ndd.tech/"},"en":{"https://helpcenter-testes.ndd.tech/queremos-escutar-voc/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/parceiros-e-canais/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/blog-e-mais-conte-dos/Working-version/":"https://ndd.tech/blog/category/provedores-de-outsourcing/","https://helpcenter-testes.ndd.tech/falar-com-suporte/Working-version/":"https://suporte.ndd.tech/"},"es":{"https://helpcenter-testes.ndd.tech/queremos-escutar-voc/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/parceiros-e-canais/Working-version/":"https://portal.nddorbix.com/","https://helpcenter-testes.ndd.tech/blog-e-mais-conte-dos/Working-version/":"https://ndd.tech/blog/category/provedores-de-outsourcing/","https://helpcenter-testes.ndd.tech/falar-com-suporte/Working-version/":"https://suporte.ndd.tech/"}}}');


function $a8557712adc6aeba$export$2d4a6191d4d5b892(product, lang) {
    const links = document.querySelectorAll(".tile__headline a");
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($51b38b5cefbe55e4$exports)))[product]) {
        console.warn(`WARNING: There are not redirects for this product ${product} \n Check the linksDocumentsMapResources Object`);
        return;
    }
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($51b38b5cefbe55e4$exports)))[product][lang]) {
        console.warn(`WARNING: There are not redirects for this language ${lang} \n Check the linksDocumentsMapResources Object`);
        return;
    }
    links.forEach((link)=>{
        const originalLink = link.href;
        if (!(0, (/*@__PURE__*/$parcel$interopDefault($51b38b5cefbe55e4$exports)))[product][lang][originalLink]) //console.warn(`WARNING: This link: ${link} does not have redirects. \n Check the linksDocumentsMapResources Object`);
        return;
        link.href = (0, (/*@__PURE__*/$parcel$interopDefault($51b38b5cefbe55e4$exports)))[product][lang][originalLink];
        link.setAttribute("target", "_blank");
    });
}


var $5baf55e49bc96444$exports = {};
$5baf55e49bc96444$exports = JSON.parse('{"testes":{"pt":{"Conhe\xe7a o NDD Orbix":{"headline":"Conhe\xe7a o NDD Orbix","description":"Explores m\xf3dulos e recursos e saiba como podemos ajudar na sustentabilidade do seu neg\xf3cio."},"Manuais":{"headline":"Manuais","description":"Guia completo de instala\xe7\xe3o e integra\xe7\xe3o com o NDD Orbix: pr\xe9-requisitos e manuais."},"O que h\xe1 de novo?":{"headline":"O que h\xe1 de novo?","description":"Hist\xf3rico de vers\xf5es, novas funcionalidades e corre\xe7\xf5es."},"FAQ":{"headline":"FAQ"}},"en":{"Conhe\xe7a o NDD Orbix":{"headline":"Discover NDD Orbix","description":"Explore modules and features and see how we can help with the sustainability of your business."},"Manuais":{"headline":"Manuals","description":"Complete guide to installation and integration with NDD Orbix: prerequisites and manuals."},"O que h\xe1 de novo?":{"headline":"What\'s new?","description":"Version history, new features and fixes."},"FAQ":{"headline":"FAQ - EN"}}},"ndd orbix":{"pt":{"Conhe\xe7a o NDD Orbix":{"headline":"Conhe\xe7a o NDD Orbix","description":"Explores m\xf3dulos e recursos e saiba como podemos ajudar na sustentabilidade do seu neg\xf3cio."},"Manuais":{"headline":"Manuais","description":"Guia completo de instala\xe7\xe3o e integra\xe7\xe3o com o NDD Orbix: pr\xe9-requisitos e manuais."},"O que h\xe1 de novo?":{"headline":"O que h\xe1 de novo?","description":"Hist\xf3rico de vers\xf5es, novas funcionalidades e corre\xe7\xf5es."},"FAQ":{"headline":"FAQ"}},"en":{"Conhe\xe7a o NDD Orbix":{"headline":"Discover NDD Orbix","description":"Explore modules and features and see how we can help with the sustainability of your business."},"Manuais":{"headline":"Manuals","description":"Complete guide to installation and integration with NDD Orbix: prerequisites and manuals."},"O que h\xe1 de novo?":{"headline":"What\'s new?","description":"Version history, new features and fixes."},"FAQ":{"headline":"FAQ - EN"}}}}');


function $ed17317835264a01$export$ac45879b58ed4b07(product, lang) {
    const tiles = document.querySelectorAll('[data-vp-id="portal-space-tile"]');
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($5baf55e49bc96444$exports)))[product]) {
        console.warn(`WARNING: This product ${product} does not exist on tilesResources`);
        return;
    }
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($5baf55e49bc96444$exports)))[product][lang]) {
        console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for Tiles at Product: ${product}. \n Check the tilesResources Object`);
        return;
    }
    tiles.forEach((tile)=>{
        const tileName = tile.getAttribute("data-vp-name");
        const { headline: headline, description: description } = (0, (/*@__PURE__*/$parcel$interopDefault($5baf55e49bc96444$exports)))[product][lang][tileName] || {};
        //Text title of document
        const headlineElement = tile.querySelector(".tile__headline a");
        //Text description of document
        const descriptionElement = tile.querySelector(".tile__description span");
        if (headline) headlineElement.textContent = headline;
        if (description && descriptionElement) descriptionElement.textContent = description;
    });
}


var $56669774ddba6fe6$exports = {};
$56669774ddba6fe6$exports = JSON.parse('{"testes":{"pt":{"Informa\xe7\xf5es complementares":{"text":"Informa\xe7\xf5es complementares"},"Preciso de ajuda":{"text":"Preciso de ajuda"},"Seguran\xe7a e compliance":{"text":"Seguran\xe7a e compliance"}},"en":{"Informa\xe7\xf5es complementares":{"text":"Further information"},"Preciso de ajuda":{"text":"I need some help"},"Seguran\xe7a e compliance":{"text":"Security & compliance"}}},"ndd orbix":{"pt":{"Informa\xe7\xf5es complementares":{"text":"Informa\xe7\xf5es complementares"},"Preciso de ajuda":{"text":"Preciso de ajuda"},"Seguran\xe7a e compliance":{"text":"Seguran\xe7a e compliance"}},"en":{"Informa\xe7\xf5es complementares":{"text":"Further information"},"Preciso de ajuda":{"text":"I need some help"},"Seguran\xe7a e compliance":{"text":"Security & compliance"}}}}');


function $5c24a9cd18c1eb33$export$1d968f626f4867a0(product, lang) {
    const categories = document.querySelectorAll(".portal__content__heading h2");
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($56669774ddba6fe6$exports)))[product]) {
        console.warn(`WARNING: This product ${product} does not exist on categoriesResources.`);
        return;
    }
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($56669774ddba6fe6$exports)))[product][lang]) {
        console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for Categories at Product: ${product}. \n Check the categoriesResources Object`);
        return;
    }
    categories.forEach((category)=>{
        const categoryName = category.textContent;
        const categoryText = (0, (/*@__PURE__*/$parcel$interopDefault($56669774ddba6fe6$exports)))[product]?.[lang]?.[categoryName]?.text;
        if (!categoryText) {
            console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for this category: ${categoryName}. \n Check the categoriesResources Object`);
            return;
        }
        category.textContent = categoryText;
    });
}


var $e373bb45b263ea70$exports = {};
$e373bb45b263ea70$exports = JSON.parse('{"testes":{"pt":{"Acesse o NDD Orbix":{"text":"Acesse o NDD Orbix"},"Vendas":{"text":"Vendas"}},"en":{"Acesse o NDD Orbix":{"text":"Try NDD Orbix"},"Vendas":{"text":"Sales"}},"es":{"Acesse o NDD Orbix":{"text":"Acceda a NDD Orbix"},"Vendas":{"text":"Ventas"}}},"ndd orbix":{"pt":{"Acesse o NDD Orbix":{"text":"Acesse o NDD Orbix"},"Vendas":{"text":"Vendas"}},"en":{"Acesse o NDD Orbix":{"text":"Try NDD Orbix"},"Vendas":{"text":"Sales"}},"es":{"Acesse o NDD Orbix":{"text":"Acceda a NDD Orbix"},"Vendas":{"text":"Ventas"}}}}');


function $0bef1161658a365b$export$1edb4355a6269a50(product, lang) {
    const links = document.querySelectorAll("li.render-links--link a");
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($e373bb45b263ea70$exports)))[product]) {
        console.warn(`WARNING: This product ${product} does not exist on headerLinksResources`);
        return;
    }
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($e373bb45b263ea70$exports)))[product][lang]) {
        console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for Header links at Product: ${product}. \n Check the headerLinksResources Object`);
        return;
    }
    links.forEach((link)=>{
        const linkName = link.textContent;
        let linkSanitized = linkName.trim();
        linkSanitized = linkSanitized.replace(/\n/g, "");
        const linkText = (0, (/*@__PURE__*/$parcel$interopDefault($e373bb45b263ea70$exports)))[product]?.[lang]?.[linkSanitized]?.text;
        if (!linkText) {
            console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for this link: ${linkSanitized}. \n Check the headerLinksResources Object`);
            return;
        }
        link.textContent = linkText;
        link.setAttribute("target", "_blank");
    });
}


var $afd293772b4529bb$exports = {};
$afd293772b4529bb$exports = JSON.parse('{"pt":"Como podemos ajudar?","en":"How can we help you?","es":"\xbfC\xf3mo podemos ayudar?"}');


function $0fc197b0b1892979$export$f39dfbe41373d15f(lang) {
    const searchInput = document.querySelector("input.vp-search-input__input");
    switch(lang){
        case "pt":
            searchInput.setAttribute("placeholder", (0, (/*@__PURE__*/$parcel$interopDefault($afd293772b4529bb$exports)))[lang]);
            break;
        case "en":
            searchInput.setAttribute("placeholder", (0, (/*@__PURE__*/$parcel$interopDefault($afd293772b4529bb$exports)))[lang]);
            break;
        case "es":
            searchInput.setAttribute("placeholder", (0, (/*@__PURE__*/$parcel$interopDefault($afd293772b4529bb$exports)))[lang]);
            break;
        default:
            searchInput.setAttribute("placeholder", (0, (/*@__PURE__*/$parcel$interopDefault($afd293772b4529bb$exports))).pt);
            console.warn(`WARNING: There are not translations ${lang.toUpperCase()} for search-box placeholder. \n Check the placeholderResources Object`);
            break;
    }
}


const $95930220612465e5$var$languagePicked = (0, $75d7376a7fc1001f$export$604ba5624273df44)();
const $95930220612465e5$var$product = (0, $73dd53774cf84dc1$export$d01408ed6f850a64)();
(0, $0338f0fd1d201d30$export$ee302119ce9aa13b)(()=>(0, $ed17317835264a01$export$ac45879b58ed4b07)($95930220612465e5$var$product, $95930220612465e5$var$languagePicked), "/");
(0, $0338f0fd1d201d30$export$ee302119ce9aa13b)(()=>(0, $5c24a9cd18c1eb33$export$1d968f626f4867a0)($95930220612465e5$var$product, $95930220612465e5$var$languagePicked), "/");
(0, $0338f0fd1d201d30$export$ee302119ce9aa13b)(()=>(0, $0bef1161658a365b$export$1edb4355a6269a50)($95930220612465e5$var$product, $95930220612465e5$var$languagePicked));
(0, $0338f0fd1d201d30$export$ee302119ce9aa13b)(()=>(0, $a8557712adc6aeba$export$2d4a6191d4d5b892)($95930220612465e5$var$product, $95930220612465e5$var$languagePicked), "/");
(0, $0338f0fd1d201d30$export$ee302119ce9aa13b)(()=>(0, $0fc197b0b1892979$export$f39dfbe41373d15f)($95930220612465e5$var$languagePicked));


//# sourceMappingURL=main.js.map
