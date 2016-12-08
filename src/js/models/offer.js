angular.module('finalProject')
  .factory('Offer', Offer);

Offer.$inject = ['$resource', 'API_URL'];
function Offer($resource, API_URL) {
  return new $resource(`${API_URL}/offers/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
