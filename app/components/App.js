var React = require('react');
var Message = require('./Message');

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Message />
            </div>
        )
    }
}

module.exports = App;