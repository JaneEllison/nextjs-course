import Link from 'next/link';

import classes from './Button.module.css';

function Button (props) {
    const { link } = props

    return (
        <Link
            href={link}
            className={classes.btn}
        >
            {props.children}
        </Link>
    )
}

export default Button;
