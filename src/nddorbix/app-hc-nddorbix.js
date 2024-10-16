import * as styles from '../css/theme/_nddorbix.css';

import { getCurrentLanguage } from '../js/utils/getLanguage'
import { getCurrentProduct } from '../js/utils/getProduct';
import { redirectLinks } from '../js/utils/redirect';
import { runFunctionByRoute } from '../js/utils/route'

import { translateTiles } from '../components/translation/tiles';
import { translateCategories } from '../components/translation/categories';
import { translateHeaderLinks } from '../components/translation/headerLinks';
import { translatePlaceholderSearchBar } from '../components/translation/placeholder';

import { formatBreadcrumbs } from '../js/utils/breadcrumbs';
import { createTimeToReadComponent } from '../components/header-bar/time-to-read';

const languagePicked = getCurrentLanguage();
const product = getCurrentProduct();

runFunctionByRoute(() => redirectLinks(product, languagePicked), '/');

runFunctionByRoute(() => translateTiles(product, languagePicked), '/');

runFunctionByRoute(() => translateCategories(product, languagePicked), '/');

runFunctionByRoute(() => translateHeaderLinks(product, languagePicked));

runFunctionByRoute(() => translatePlaceholderSearchBar(languagePicked));

runFunctionByRoute(() => formatBreadcrumbs());

runFunctionByRoute(() => createTimeToReadComponent(languagePicked))




