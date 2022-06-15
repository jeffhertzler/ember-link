import Helper from '@ember/component/helper';
import Link, { LinkParams, UILinkParams, RouteArgs, RouteModel } from '../link';
export declare type LinkHelperPositionalParams = [] | RouteArgs;
export interface LinkHelperNamedParams extends Partial<LinkParams>, Partial<UILinkParams> {
    /**
     * Optional shortcut for `models={{array model}}`.
     */
    model?: RouteModel;
    /**
     * Instead of any of the other `LinkParams` used to construct a
     * `LinkInstance`, you can also provide a serialized URL instead.
     *
     * This is mutually exclusive with any other `LinkParams`.
     */
    fromURL?: string;
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
export default class LinkHelper extends Helper {
    private linkManager;
    /**
     * Normalizes the positional and named parameters passed to this helper.
     *
     * @param positional [route?, ...models?, query?]
     * @param named { route?, models?, model?, query? }
     */
    private normalizeLinkParams;
    /**
     * Normalizes and extracts the `UILinkParams` from the named params.
     *
     * @param named { preventDefault? }
     */
    private normalizeUIParams;
    compute(positional: LinkHelperPositionalParams, named: LinkHelperNamedParams): Link;
}
