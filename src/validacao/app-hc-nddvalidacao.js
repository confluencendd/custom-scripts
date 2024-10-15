import * as styles from '../css/theme/_validacao.css';

import { getCurrentLanguage } from '../js/utils/getLanguage'
import { getCurrentProduct } from '../js/utils/getProduct';
import { runFunctionByRoute } from '../js/utils/route'
import { redirectLinks } from '../js/utils/redirect'

import { translateTiles } from '../components/translation/tiles';
import { translateCategories } from '../components/translation/categories';
import { translateHeaderLinks } from '../components/translation/headerLinks';
import { translatePlaceholderSearchBar } from '../components/translation/placeholder';

import { formatBreadcrumbs } from '../js/utils/breadcrumbs';
import { createTimeToReadComponent } from '../components/header-bar/time-to-read';
import { createlanguagePicker } from '../components/header-bar/language-picker';

const languagePicked = getCurrentLanguage();
const product = getCurrentProduct();


runFunctionByRoute(() => translateTiles(product, languagePicked), '/');

runFunctionByRoute(() => translateCategories(product, languagePicked), '/');

runFunctionByRoute(() => translateHeaderLinks(product, languagePicked));

runFunctionByRoute(() => redirectLinks(product, languagePicked), '/');

runFunctionByRoute(() => translatePlaceholderSearchBar(languagePicked));

runFunctionByRoute(() => formatBreadcrumbs());

runFunctionByRoute(() => createTimeToReadComponent(languagePicked))

//runFunctionByRoute(() => createlanguagePicker())




