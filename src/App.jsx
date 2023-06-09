import './App.css'
import Card from './Card.jsx'
import { TwitterShareButton, TwitterIcon} from 'react-share'
import { useState, useEffect } from 'react'

export default function App() {
  const [quote, setQuote] = useState({
    author: '',
    quote: ''
  });

  function getQuote() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error.message));
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div id="quote-box" className="quote-box">
      <h1>Random Quote Generator</h1>
      <Card quote={quote} />
      <div id="new-quote">
        <button
          onClick={getQuote}
          className="btn btn-primary"
        >
          New Quote
        </button>
      </div>
      <div>
        <TwitterShareButton>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote.text}" by ${quote.author}`}
          target="_blank"
          rel="noreferrer"
          >
            <TwitterIcon size={32} round />
          </a>
        </TwitterShareButton>
      </div>
      </div>
  )
}
