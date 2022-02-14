import template from './LoginPage.html?raw';

class Login {
  constructor($state, AuthService) {
    this.$state = $state;
    this.authService = AuthService;
    this.username = '';
    this.authService.logout();
  }

  submit() {
    const { username, authService, $state } = this;
    if (username) {
      authService
        .login(username)
        .then((res) => $state.go('posts'))
        .catch((err) => alert("Invalid login! Try 'user' instead."));
    }
  }
}

Login.$inject = ['$state', 'AuthService'];

export default {
  template,
  controller: Login,
  bindings: {
    $transition$: '<',
    returnTo: '<',
  },
};
