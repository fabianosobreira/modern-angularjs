class Login {
  constructor($state, AuthService) {
    'ngInject';
    this.$state = $state;
    this.authService = AuthService;
    this.username = '';
  }

  submit() {
    const { username, authService, $state } = this;
    if (username) {
      authService
        .login(username)
        .then(res => $state.go('posts'))
        .catch(err => alert("Invalid login! Try 'user' instead."));
    }
  }
}

export default {
  template: require('./LoginPage.html'),
  controller: Login,
  bindings: {
    $transition$: '<',
    returnTo: '<'
  }
};
