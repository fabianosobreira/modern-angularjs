class Comments {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.comments = [];
  }

  $onInit() {
    this.getComments();
  }

  getComments() {
    return this.$http
      .get(`https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`)
      .then(res => (this.comments = res.data));
  }
}

export default {
  template: require('./Comments.html'),
  controller: Comments,
  bindings: {
    $transition$: '<',
    postId: '<'
  }
};
