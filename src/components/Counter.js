import React, { createElement } from 'react';

class Counter extends React.Component {
    state = {count: 0}
    increase = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    decrease = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }

    render () {
        return createElement(
            'div',
            { className: 'counter'},
            createElement(
                'button',
                { className: 'counter-increase', onClick: this.increase},
                '+'
            ),
            createElement(
                'div',
                {className: 'counter-count'},
                createElement(
                    'h1',
                    {},
                    this.state.count
                )
            ),
            createElement(
                'button',
                { className: 'counter-decrease', onClick: this.decrease},
                '-'
            )
        )
    }
}

export default Counter;
