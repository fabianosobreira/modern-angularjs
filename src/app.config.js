import { Visualizer } from '@uirouter/visualizer';

import { root, posts, posts_details } from './app.states';

export function config($logProvider, $stateProvider, $urlServiceProvider) {
  'ngInject';

  $logProvider.debugEnabled(true);

  const states = [root, posts, posts_details];
  states.forEach(state => $stateProvider.state(state));

  $urlServiceProvider.rules.otherwise({ state: posts.name });
}

export function bootstrap($uiRouter) {
  'ngInject';
  $uiRouter.plugin(Visualizer);
}
