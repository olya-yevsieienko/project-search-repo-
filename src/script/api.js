'use strict';

const URL = 'https://api.github.com';
const REPOS_PER_PAGE = 10;

export async function getRepos(searchValue) {
  return await fetch(`${URL}/search/repositories?q=${searchValue}&per_page=${REPOS_PER_PAGE}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}
