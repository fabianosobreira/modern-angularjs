require('./assets/main.scss');

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import { config, bootstrap } from './app.config';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { Posts } from './components/posts/Posts';
import { UserList } from './components/posts/UserList';
import { UserPosts } from './components/posts/UserPosts';
import { Comments } from './components/posts/Comments';

angular
  .module('app', [uirouter])
  .config(config)
  .run(bootstrap)
  .component('cHeader', Header)
  .component('cContent', Content)
  .component('cPosts', Posts)
  .component('cUserList', UserList)
  .component('cUserPosts', UserPosts)
  .component('cComments', Comments);
