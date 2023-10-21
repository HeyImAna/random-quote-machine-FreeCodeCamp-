import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import quotes from "./assets/quotes.json";
import colors from "./assets/colors.json";
import {
  faSquareTumblr,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface Quote {
  author: string;
  text: string;
}

function App() {
  const [quote, setQuote] = React.useState<Quote>({
    author: "Alexander Woollcott",
    text: "Everything I like is either illegal, immoral or fattening.",
  });
  const [color, setColor] = React.useState<string>("#33415c");

  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote((prevQuote) => ({
      ...prevQuote,
      author: randomQuote.author,
      text: randomQuote.text,
    }));
  };

  const getRandomColor = () => {
    const randomColor = colors[Math.floor(Math.random() * quotes.length)];
    setColor(randomColor);
  };

  return (
    <main style={{ backgroundColor: color, transition: "ease-out 1s" }}>
      <div id="quote-box" className="quote-box">
        <div className="text-content">
          <h2
            id="text"
            className="text"
            style={{ color: color, transition: "ease-out 1s" }}
          >
            <FontAwesomeIcon
              className="quote-icon"
              icon={faQuoteLeft}
              style={{ color: color, transition: "ease-out 1s" }}
            />{" "}
            {quote.text}
          </h2>
          <p
            id="author"
            className="author"
            style={{ color: color, transition: "ease-out 1s" }}
          >
            - {quote.author}
          </p>
        </div>
        <div className="button-content">
          <div className="social-media">
            <a
              id="tweet-quote"
              className="sm-quote fa-3x"
              style={{ color: color, transition: "ease-out 1s" }}
              target="_blank"
              href="twitter.com/intent/tweet"
            >
              <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
            <a
              id="tumblr-quote"
              className="sm-quote fa-3x"
              style={{ color: color, transition: "ease-out 1s" }}
              target="_blank"
              href="tumblr.com"
            >
              <FontAwesomeIcon icon={faSquareTumblr} />
            </a>
          </div>
          <button
            onClick={() => {
              getRandomQuote();
              getRandomColor();
            }}
            id="new-quote"
            className="new-quote"
            style={{ backgroundColor: color, transition: "ease-out 1s" }}
          >
            New quote
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
