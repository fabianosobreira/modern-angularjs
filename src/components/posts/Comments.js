class CommentsCtrl {
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

export const Comments = {
  template: require('./Comments.html'),
  controller: CommentsCtrl,
  bindings: {
    $transition$: '<',
    postId: '<'
  }
};
