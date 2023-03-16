'use strict';

import { displayRepos } from './displayRepos';

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  updateList();
});

const list = document.querySelector('.app__repos');
const input = document.querySelector('.form__search');
const error = document.querySelector('.form__error');

function updateList() {
  const search = document.querySelector('.form__search').value.trim();

  if (!search.length) {
    error.innerHTML = 'Введите название';
    input.style.borderColor = 'red';
  } else {
    const countRepos = list.childElementCount;
    input.style.borderColor = '';
    error.innerHTML = '';

    if (countRepos !== 0) {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }

      displayRepos(search);
      error.innerHTML = '';
    } else {
      error.innerHTML = '';
      displayRepos(search);
    }
  }
}
