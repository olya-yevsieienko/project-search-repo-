'use strict';

import { getRepos } from './api';

const list = document.querySelector('.app__repos');

export async function displayRepos(searchValue) {
  await getRepos(searchValue).then(data => {
    const { items } = data;

    for (const item of items) {
      createRepo(item);
    }
  });
}

function createRepo(repo) {
  const li = document.createElement('li');
  li.className = 'repos__repo';

  const { name, owner, html_url } = repo;
  const { login, avatar_url } = owner;

  const liHeader = document.createElement('div');
  liHeader.className = 'repos__header';

  const repoName = document.createElement('a');
  repoName.innerHTML = name;
  repoName.className = 'repos__link';
  repoName.href = html_url;
  repoName.target = '_blank';

  const repoOwner = document.createElement('p');
  repoOwner.innerHTML = login;

  const repoOwnerAvatar = document.createElement('img');
  repoOwnerAvatar.className = 'repos__avatar';
  repoOwnerAvatar.src = avatar_url;

  liHeader.append(repoOwnerAvatar, repoOwner);
  li.append(liHeader, repoName);

  list.append(li);
}
