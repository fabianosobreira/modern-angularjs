class UserListCtrl {
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

export const UserList = {
  template: require('./UserList.html'),
  controller: UserListCtrl,
  bindings: {
    $transition$: '<'
  }
};
