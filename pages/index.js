import { useRef } from 'react';

function HomePage() {
    const emailInput = useRef();
    const feedbackInput = useRef();

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
        </form>
    </div>
  );
}

export default HomePage;
