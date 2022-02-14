import template from './UserList.html?raw';

class UserList {
  constructor($http) {
    this.$http = $http;
    this.users = [];
  }

  $onInit() {
    this.getPosts();
  }

  getPosts() {
    return this.$http
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => (this.users = res.data));
  }
}

UserList.$inject = ['$http'];

export default {
  template,
  controller: UserList,
  bindings: {
    $transition$: '<',
  },
};
