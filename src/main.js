import { getCurrentLanguage } from './js/utils/language'
import { runFunctionByRoute } from './js/utils/route'
import { redirectLinks } from './js/utils/redirect'

import { translateTiles } from './js/translation/tiles.js';
import { translateCategories } from './js/translation/categories.js';
import { translateHeaderLinks } from './js/translation/headerLinks.js';
import { translatePlaceholderSearchBar } from './js/translation/placeholder.js';

const languagePicked = getCurrentLanguage();

runFunctionByRoute(() => translateTiles(languagePicked), '/');

runFunctionByRoute(() => translateCategories(languagePicked), '/');

runFunctionByRoute(() => translateHeaderLinks(languagePicked));

runFunctionByRoute(() => redirectLinks(languagePicked));

runFunctionByRoute(() => translatePlaceholderSearchBar(languagePicked));