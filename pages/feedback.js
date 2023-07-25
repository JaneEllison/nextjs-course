import { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from './api/feedback';

function FeedbackPage (props) {
    const { feedbackItems } = props;

    const [ feedbackData, setFeedbackData ] = useState([])

    const loadFeedbackHandler = async (id) => {
        const response = await fetch(`/api/${id}`);
        const data = await response.json();

        setFeedbackData(data.feedback);
    }

    return (
        <>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {feedbackItems.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => loadFeedbackHandler(item.id)} >Show details</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export async function getStaticProps() {
    //do not use fetch to own API
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    return {
        props: {
            feedbackItems: data
        },
    }
}

export default FeedbackPage;
