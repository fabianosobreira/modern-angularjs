class UserList {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.users = [];
  }

  $onInit() {
    this.getPosts();
  }

  getPosts() {
    return this.$http
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => (this.users = res.data));
  }
}

export default {
  template: require('./UserList.html'),
  controller: UserList,
  bindings: {
    $transition$: '<'
  }
};
