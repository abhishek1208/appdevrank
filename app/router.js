import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses', function() {
    this.route('id', {path: '/:id'});
    this.route('index', {path: '/'});
  });
});

export default Router;
