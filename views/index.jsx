var React = require('react');
var createReactClass = require('create-react-class')

const style = {
    width: '100%',
    height:'60px',
    background: '#cdcdcd',
    textAlign: 'center',
    lineHeight: '60px'
}

const header = {
    
}
var MasterLayout = createReactClass({
    render: function() {
        return (
            <html lang='en'>
                <head>
                    <meta httpEquiv='Content-Type' charSet='utf-8'></meta>
                    <title style={header}>{this.props.name}</title>
                </head>
                <body>
                    <div style={style}>
                        <h1>{this.props.header}</h1>
                    </div>
                    {this.props.children}
                </body>

            </html>
        )
    }
});

module.exports = MasterLayout;
