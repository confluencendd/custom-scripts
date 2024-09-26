import * as styles from '../src/css/main.css';

import { getCurrentLanguage } from './js/utils/getLanguage'
import { getCurrentProduct } from './js/utils/getProduct';
import { runFunctionByRoute } from './js/utils/route'
import { redirectLinks } from './js/utils/redirect'

import { translateTiles } from './js/translation/tiles';
import { translateCategories } from './js/translation/categories';
import { translateHeaderLinks } from './js/translation/headerLinks';
import { translatePlaceholderSearchBar } from './js/translation/placeholder';

import { formatBreadcrumbs } from './js/utils/breadcrumbs';

const languagePicked = getCurrentLanguage();
const product = getCurrentProduct();


runFunctionByRoute(() => translateTiles(product, languagePicked), '/');

runFunctionByRoute(() => translateCategories(product, languagePicked), '/');

runFunctionByRoute(() => translateHeaderLinks(product, languagePicked));

runFunctionByRoute(() => redirectLinks(product, languagePicked), '/');

runFunctionByRoute(() => translatePlaceholderSearchBar(languagePicked));

runFunctionByRoute(() => formatBreadcrumbs());