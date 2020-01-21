class UserPosts {
  constructor($http, $transitions) {
    'ngInject';
    this.$http = $http;
    this.$transitions = $transitions;
    this.posts = [];
  }

  $onInit() {
    this.deregisterHook = this.$transitions.onRetain(
      {
        retained: 'posts.userPosts'
      },
      tr => this.activate(tr)
    );

    this.activate(this.$transition$);
  }

  $onDestroy() {
    this.deregisterHook();
  }

  activate(transition) {
    this.params = Object.assign({}, transition.params());
    this.getPosts();
  }

  getPosts() {
    return this.$http
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId: this.params.userId
        }
      })
      .then(res => (this.posts = res.data));
  }
}

export default {
  template: require('./UserPosts.html'),
  controller: UserPosts,
  bindings: {
    $transition$: '<'
  }
};
