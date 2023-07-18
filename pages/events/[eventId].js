import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';

import ErrorAlert from '../../components/ui/ErrorAlert';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';

function EventDetailPage () {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if(!event){
        return (
            <ErrorAlert>
                <p> No event found! </p>
            </ErrorAlert>
        )
    }

    return (
        <div>
            <>
                <EventSummary title={event.title}/>
                <EventLogistics
                    date={event.date}
                    address={event.location}
                    image={event.image}
                    imageAlt={event.title}
                />
                <EventContent>
                    <p>{event.description}</p>
                </EventContent>
            </>
        </div>
    )
}

export default EventDetailPage;
