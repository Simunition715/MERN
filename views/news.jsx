var React = require('react');
var createReactClass = require('create-react-class')
var DefaultLayout = require('./index');

var NewsCompoent = createReactClass({
    render: function() {
        return (
            <DefaultLayout name={this.props.name} header={this.props.header}>
            <div>
                <h1>News</h1>
                <form method="get" action="/">
                    <button type="submit">Dashboard</button>
                </form>
            </div>
            <hr></hr>
            <div>
                <ul>
                    <li>Step 1</li>
                    <li>Step 2</li>
                    <li>Step 3</li>
                    <li>Step 4</li>
                </ul>
            </div>
            </DefaultLayout>
        )
    }
});

module.exports = NewsCompoent;
