import { useRef, useState } from 'react';

function HomePage() {
    const emailInput = useRef();
    const feedbackInput = useRef();

    const [feedbackItems, setFeedbackItems] = useState([]);

    const submitFormHandler = async (event) => {
        event.preventDefault();

        const email = emailInput.current.value;
        const feedback = feedbackInput.current.value;
        const reqBody = {
            email,
            text: feedback,
        };

        const response = await fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.json();
        console.log(data);
    }

    const loadFeedbackHandler = async () => {
        const response = await fetch('/api/feedback');
        const data = await response.json();

        setFeedbackItems(data.feedback);
    };

  return (
    <div>
      <h1>The Home Page</h1>
        <form onSubmit={submitFormHandler}>
            <div>
                <label htmlFor='email'>Your email address</label>
                <input type='email' id='email' ref={emailInput} />
            </div>
            <div>
                <label htmlFor='feedback'>Your feedback</label>
                <textarea rows='5' id='feedback' ref={feedbackInput} />
            </div>
            <button>Send feedback</button>
            <br/>
            <button onClick={loadFeedbackHandler}>Load feedback</button>
            <ul>
                {feedbackItems.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </form>
    </div>
  );
}

export default HomePage;
