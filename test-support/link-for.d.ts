import { RouteModel, QueryParams } from 'ember-link/link';
import TestLink from './test-link';
interface LinkForParameters {
    route: string;
    model?: RouteModel;
    models?: RouteModel[];
    query?: QueryParams;
}
export declare function linkFor(route: string, models?: RouteModel[], queryParams?: QueryParams): TestLink;
export declare function linkFor({ route, model, models, query }: LinkForParameters): TestLink;
export default function linkFor(routeOrParameters: string | LinkForParameters, models?: RouteModel[], queryParams?: QueryParams): TestLink;
export {};
