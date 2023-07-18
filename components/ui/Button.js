import Link from 'next/link';

import classes from './Button.module.css';

function Button (props) {
    const { link, onClick } = props

    if(link) return (
        <Link
            href={link}
            className={classes.btn}
        >
            {props.children}
        </Link>
    )

    return (
        <button
            className={classes.btn}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;
