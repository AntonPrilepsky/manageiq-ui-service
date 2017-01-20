import { AuthenticationApiFactory } from './authentication-api.factory.js';
import { CollectionsApiFactory } from './collections-api.factory.js';

export default angular
  .module('app.resources', [
    'ngResource',
  ])
  .factory('AuthenticationApi', AuthenticationApiFactory)
  .factory('CollectionsApi', CollectionsApiFactory)
  .name;
