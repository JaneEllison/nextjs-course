import { buildFeedbackPath, extractFeedback } from '../pages/api/feedback';

function FeedbackPage (props) {
    const { feedbackItems } = props;

    return (
        <ul>
            {feedbackItems.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
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
