import RouteInfo from '@ember/routing/-private/route-info';
import Transition from '@ember/routing/-private/transition';
import RouterService from '@ember/routing/router-service';
import Service from '@ember/service';
import Link, { LinkParams, UILinkParams } from '../link';
interface RouterServiceWithRecognize extends RouterService {
    recognize(url: string): RouteInfo;
}
export default class LinkManagerService extends Service {
    private _currentTransitionStack?;
    /**
     * The `RouterService` instance to be used by the generated `Link` instances.
     */
    readonly router: RouterServiceWithRecognize;
    /**
     * Whether the router has been initialized.
     * This will be `false` in render tests.
     *
     * @see https://github.com/buschtoens/ember-link/issues/126
     */
    get isRouterInitialized(): boolean;
    /**
     * The currently active `Transition` objects.
     */
    get currentTransitionStack(): Transition<unknown>[] | undefined;
    /**
     * Creates a `Link` instance.
     */
    createLink(linkParams: LinkParams): Link;
    /**
     * Creates a `UILink` instance.
     */
    createUILink(linkParams: LinkParams, uiParams?: UILinkParams): Link;
    /**
     * Deserializes the `LinkParams` to be passed to `createLink` / `createUILink`
     * from a URL.
     *
     * If the URL cannot be recognized by the router, an error is thrown.
     */
    getLinkParamsFromURL(url: string): LinkParams;
    /**
     * Converts a `RouteInfo` object into `LinkParams`.
     */
    static getLinkParamsFromRouteInfo(routeInfo: RouteInfo): LinkParams;
    constructor(properties?: object);
    willDestroy(): void;
    handleRouteWillChange(transition: Transition): void;
    handleRouteDidChange(): void;
}
declare module '@ember/service' {
    interface Registry {
        'link-manager': LinkManagerService;
    }
}
export {};
