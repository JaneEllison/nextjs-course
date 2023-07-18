import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';

import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';

function FilteredPage () {
    const router = useRouter();

    const filterData = router.query.slug;

    if(!filterData) {
        return <p className='center'>Loading...</p>
    }

    const [year, month] = filterData;
    const numYear = Number(year);
    const numMonth = Number(month);

    if(
        isNaN(numYear)||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth > 12 ||
        numMonth < 1
    ) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values.</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show all events</Button>
                </div>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    })

    if(!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>There are no events found.</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show all events</Button>
                </div>
            </>
        )
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents}/>
        </>
    )
}

export default FilteredPage;
