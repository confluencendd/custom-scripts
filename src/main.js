import * as styles from '../src/css/main.css';

import { getCurrentLanguage } from './js/utils/getLanguage'
import { getCurrentProduct } from './js/utils/getProduct';
import { runFunctionByRoute } from './js/utils/route'
import { redirectLinks } from './js/utils/redirect'

import { translateTiles } from './components/translation/tiles';
import { translateCategories } from './components/translation/categories';
import { translateHeaderLinks } from './components/translation/headerLinks';
import { translatePlaceholderSearchBar } from './components/translation/placeholder';

import { formatBreadcrumbs } from './js/utils/breadcrumbs';
import { createTimeToReadComponent } from './components/header-bar/header-bar';

const languagePicked = getCurrentLanguage();
const product = getCurrentProduct();


runFunctionByRoute(() => translateTiles(product, languagePicked), '/');

runFunctionByRoute(() => translateCategories(product, languagePicked), '/');

runFunctionByRoute(() => translateHeaderLinks(product, languagePicked));

runFunctionByRoute(() => redirectLinks(product, languagePicked), '/');

runFunctionByRoute(() => translatePlaceholderSearchBar(languagePicked));

runFunctionByRoute(() => formatBreadcrumbs());

runFunctionByRoute(() => createTimeToReadComponent(languagePicked))

//window.scrollHelpCenter.collection.members[0].name = "teste";
console.log(window.scrollHelpCenter.collection.members[0])




