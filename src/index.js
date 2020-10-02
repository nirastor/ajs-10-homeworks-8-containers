/* eslint-disable no-console */
import './css/style.css';

import Settings from './js/settings';

const S = new Settings();

console.log(S);
console.log(S.setting);
console.log(S.setting.get('theme'));
