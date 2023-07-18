import Button from '../ui/Button';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

import classes from './EventItem.module.css';

function EventItem (props) {
    const {
        title,
        image,
        date,
        location,
        id,
    } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }
    );

    const formattedAddress  = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <img src={`/${image}`} alt={title} />
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <adress>{formattedAddress}</adress>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;
