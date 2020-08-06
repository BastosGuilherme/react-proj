import React from 'react';

function Buttonlink(props) {
// obs: props -> {className: "nome informado na tag", href:"link informado na tag"}
console.log(props);
    return (
        <a href={props.href} className={props.className}>
        {props.children}
        </a>

    );
}

export default Buttonlink;