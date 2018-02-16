var React = require('react'),
createReactClass = require('create-react-class'),
RouterMixin = require('react-mini-router').RouterMixin;

var App = createReactClass({

mixins: [RouterMixin],

routes: {
    '/': 'home',
    '/message/:text': 'message'
},

render: function() {
    return this.renderCurrentRoute();
},

home: function() {
    return <div>Hello World</div>;
},

message: function(text) {
    return <div>{text}</div>;
},

notFound: function(path) {
    return <div class="not-found">Page Not Found: {path}</div>;
}

});

module.exports = App;
