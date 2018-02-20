var React = require('react');
var createReactClass = require('create-react-class')
var DefaultLayout = require('./index');

var IndexCompoent = createReactClass({
    render: function() {
        return (
            <DefaultLayout name={this.props.name} header={this.props.header}>
            <div>
                <h1>Dashboard</h1>
                <form method="get" action="/news">
                    <button type="submit">News</button>
                </form>
            </div>
            </DefaultLayout>
        )
    }
});

module.exports = IndexCompoent;
