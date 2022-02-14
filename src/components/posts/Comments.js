import template from './Comments.html?raw';

class Comments {
  constructor($http) {
    this.$http = $http;
    this.comments = [];
  }

  $onInit() {
    this.getComments();
  }

  getComments() {
    return this.$http
      .get(`https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`)
      .then((res) => (this.comments = res.data));
  }
}

Comments.$inject = ['$http'];

export default {
  template,
  controller: Comments,
  bindings: {
    $transition$: '<',
    postId: '<',
  },
};
