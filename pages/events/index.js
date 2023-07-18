import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';

import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

function AllEventsPage () {
    const router = useRouter();
    const allEvents = getAllEvents();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={allEvents} />
        </>
    )
}

export default AllEventsPage;
