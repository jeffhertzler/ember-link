import Transition from "@ember/routing/-private/transition";
import RouterService from "@ember/routing/router-service";
import LinkManagerService from "./services/link-manager";
export declare type QueryParams = Record<string, unknown>;
export declare function isQueryParams(maybeQueryParam: any): maybeQueryParam is {
    values: QueryParams;
};
export declare type RouteModel = object | string | number;
export declare type RouteArgs = Parameters<RouterService["urlFor"]>;
export interface LinkParams {
    /**
     * The target route name.
     */
    route: string;
    /**
     * Optional array of models / dynamic segments.
     */
    models?: RouteModel[];
    /**
     * Optional query params object.
     */
    query?: QueryParams;
    /**
     * An optional callback that will be fired when the Link is transitioned to.
     *
     * The callback is only fired if the Link is explicitly invoked, not if the
     * app transitions to the Link through other means.
     */
    onTransitionTo?: () => void;
    /**
     * An optional callback that will be fired when the current route is replaced
     * with the Link.
     *
     * The callback is only fired if the Link is explicitly invoked, not if the
     * app transitions to the Link through other means.
     */
    onReplaceWith?: () => void;
}
export default class Link {
    protected _params: LinkParams;
    protected _linkManager: LinkManagerService;
    constructor(linkManager: LinkManagerService, params: LinkParams);
    private get _routeArgs();
    /**
     * Whether this route is currently active, including potentially supplied
     * models and query params.
     */
    get isActive(): boolean;
    /**
     * Whether this route is currently active, including potentially supplied
     * models, but ignoring query params.
     */
    get isActiveWithoutQueryParams(): boolean;
    /**
     * Whether this route is currently active, but ignoring models and query
     * params.
     */
    get isActiveWithoutModels(): boolean;
    /**
     * Whether this route is currently being transitioned into / entered.
     */
    get isEntering(): boolean;
    /**
     * Whether this route is currently being transitioned out of / exited.
     */
    get isExiting(): boolean;
    /**
     * The URL for this link that you can pass to an `<a>` tag as the `href`
     * attribute.
     */
    get url(): string;
    /**
     * Deprecated alias for `url`.
     */
    get href(): string;
    /**
     * Alias for `url`.
     *
     * Allows for more ergonomic composition as query parameters.
     *
     * ```hbs
     * {{link "foo" query=(hash bar=(link "bar"))}}
     * ```
     */
    toString(): string;
    /**
     * The `RouteInfo` object for the target route.
     */
    /**
     * The target route name of this link.
     */
    get routeName(): string;
    /**
     * The fully qualified target route name of this link.
     */
    get qualifiedRouteName(): string;
    /**
     * The route models passed in this link.
     */
    get models(): RouteModel[];
    /**
     * The query params for this link, if specified.
     */
    get queryParams(): QueryParams | undefined;
    private _isTransitioning;
    /**
     * Transition into the target route.
     */
    transitionTo(): Transition | undefined;
    /**
     * Transition into the target route while replacing the current URL, if
     * possible.
     */
    replaceWith(): Transition | undefined;
}
export interface UILinkParams {
    /**
     * Whether or not to call `event.preventDefault()`, if the first parameter to
     * the `transitionTo` or `replaceWith` action is an `Event`. This is useful to
     * prevent links from accidentally triggering real browser navigation or
     * buttons from submitting a form.
     *
     * Defaults to `true`.
     */
    preventDefault?: boolean;
}
export declare class UILink extends Link {
    protected _params: LinkParams & UILinkParams;
    private preventDefault;
    /**
     * Transition into the target route.
     *
     * Optionally call `preventDefault()`, if an `Event` is passed in.
     */
    transitionTo(event?: Event | unknown): Transition | undefined;
    /**
     * Transition into the target route while replacing the current URL, if
     * possible.
     *
     * Optionally call `preventDefault()`, if an `Event` is passed in.
     */
    replaceWith(event?: Event | unknown): Transition | undefined;
}
