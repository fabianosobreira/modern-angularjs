import { Visualizer } from '@uirouter/visualizer';

import states from './app.states';

export function config($logProvider, $stateProvider, $urlServiceProvider) {
  'ngInject';

  $logProvider.debugEnabled(true);

  states.forEach(state => $stateProvider.state(state));

  $urlServiceProvider.rules.otherwise({ state: 'index' });
}

export function bootstrap($uiRouter, $transitions) {
  'ngInject';
  $uiRouter.plugin(Visualizer);
  $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {
    priority: 10
  });
}

const requiresAuthCriteria = {
  to: state => state.data && state.data.requiresAuth
};

const redirectToLogin = transition => {
  let AuthService = transition.injector().get('AuthService');
  let $state = transition.router.stateService;
  if (!AuthService.isAuthenticated()) {
    return $state.target('login', undefined, { location: false });
  }
};
