export default class AuthService {
  constructor($q, $timeout) {
    'nginject';
    this.$q = $q;
    this.$timeout = $timeout;
  }

  login(user) {
    const { $q, $timeout } = this;
    const checkCredentials = () => {
      if (user === 'user') {
        localStorage['user'] = JSON.stringify(user);
        return $q.resolve();
      }
      return $q.reject();
    };

    return $timeout(checkCredentials, 300);
  }

  logout() {
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return !!localStorage['user'];
  }
}
