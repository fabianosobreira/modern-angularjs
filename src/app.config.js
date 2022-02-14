import { Visualizer } from '@uirouter/visualizer';

import states from './app.states';

export function config($logProvider, $stateProvider, $urlServiceProvider) {
  $logProvider.debugEnabled(true);

  states.forEach((state) => $stateProvider.state(state));

  $urlServiceProvider.rules.otherwise({ state: 'index' });
}

config.$inject = ['$logProvider', '$stateProvider', '$urlServiceProvider'];

export function bootstrap($uiRouter, $transitions) {
  import.meta.env.DEV && $uiRouter.plugin(Visualizer);
  $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {
    priority: 10,
  });
}

bootstrap.$inject = ['$uiRouter', '$transitions'];

const requiresAuthCriteria = {
  to: (state) => state.data && state.data.requiresAuth,
};

const redirectToLogin = (transition) => {
  let AuthService = transition.injector().get('AuthService');
  let $state = transition.router.stateService;
  if (!AuthService.isAuthenticated()) {
    return $state.target('login', undefined, { location: false });
  }
};
