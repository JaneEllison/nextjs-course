import { Fragment } from 'react';

import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage(props) {
    const {
        hasError,
        events,
        date,
    } = props;

    if (hasError) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>
        );
    }

    if (!events || events.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
              </>
        );
    }

    const fullDate = new Date(date.numYear, date.numMonth - 1);

    return (
        <Fragment>
            <ResultsTitle date={fullDate} />
            <EventList items={events} />
        </Fragment>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const filteredData = params.slug;

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return {
            //can redirect to error page
            //notFound: true
            props: { hasError: true }
        };
    }

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth,
            }
        }
    }
}

export default FilteredEventsPage;
