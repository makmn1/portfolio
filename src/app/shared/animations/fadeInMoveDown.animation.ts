import {trigger, state, style, animate, transition, query, animateChild, group} from '@angular/animations';

export const fadeInMoveDownAnimation = trigger('fadeInMoveDown', [
  state('void', style({ opacity: 0, transform: 'translateY(-50px)' })),
  state('*', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('void => *', [
    group([  // Group the parent and child animations to run them in parallel
      animate('500ms ease-out'),
      query('@*', animateChild(), { optional: true })  // Run child animations in parallel
    ])
  ])
]);
