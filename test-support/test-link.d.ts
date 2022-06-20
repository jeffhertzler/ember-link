import Transition from '@ember/routing/-private/transition';
import { Link } from 'ember-link';
export default class TestLink extends Link {
    isActive: boolean;
    isActiveWithoutQueryParams: boolean;
    isActiveWithoutModels: boolean;
    isEntering: boolean;
    isExiting: boolean;
    url: string;
    onTransitionTo?(): void;
    onReplaceWith?(): void;
    get qualifiedRouteName(): string;
    transitionTo(event?: Event): Transition;
    replaceWith(event?: Event): Transition;
    private _preventTransitionOut;
    private _createDummyTransition;
}
