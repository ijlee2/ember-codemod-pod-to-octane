import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
  this.route('products', function () {
    this.route('product' , { path: '/:id' });
  });
});
