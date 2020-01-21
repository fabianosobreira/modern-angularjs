require('./assets/main.scss');

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import { config, bootstrap } from './app.config';

import AuthService from './AuthService';
import Header from './components/Header';

import LoginPage from './components/login/LoginPage';

import PostsPage from './components/posts/PostsPage';
import UserList from './components/posts/UserList';
import UserPosts from './components/posts/UserPosts';
import Comments from './components/posts/Comments';

angular
  .module('app', [uirouter])
  .config(config)
  .run(bootstrap)
  .service('AuthService', AuthService)
  .component('cHeader', Header)
  .component('loginPage', LoginPage)
  .component('postsPage', PostsPage)
  .component('cUserList', UserList)
  .component('cUserPosts', UserPosts)
  .component('cComments', Comments);
