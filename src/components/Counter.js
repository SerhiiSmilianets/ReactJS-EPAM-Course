import { createElement, useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    return createElement(
        'div',
        { className: 'counter'},
        createElement(
            'button',
            { className: 'counter-increase', onClick: () => setCount(count+1)},
            '+'
        ),
        createElement(
            'div',
            {className: 'counter-count'},
            createElement(
                'h1',
                {},
                count
            )
        ),
        createElement(
            'button',
            { className: 'counter-decrease', onClick: () => setCount(count-1)},
            '-'
        )
    )
}

export default Counter