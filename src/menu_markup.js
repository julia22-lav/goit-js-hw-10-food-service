import refs from './refs.js';
const { menuList } = refs;

import menu from './menu.json';

import template from './template.hbs';

const menuItems = template(menu);

menuList.insertAdjacentHTML('afterbegin', menuItems);
