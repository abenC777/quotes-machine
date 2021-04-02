/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./QuoteBox.scss";

export default function QuoteBox({ quote, author, getNewQuote }) {
  return (
    <div id="quote-box">
      <div className="quote-text">
        <i className="fa fa-quote-left"> </i>
        <span id="text">{quote}</span>
      </div>
      <div className="quote-author">
        - <span id="author">{author}</span>
      </div>
      <div className="buttons">
        <a
          className="button"
          id="tweet-quote"
          title="Tweet this quote!"
          target="_top"
          href="twitter.com/intent/tweet"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          className="button"
          id="tumblr-quote"
          title="Post this quote on tumblr!"
          target="_blank"
        >
          <i className="fa fa-tumblr"></i>
        </a>
        <button className="button" id="new-quote" onClick={getNewQuote}>
          New quote
        </button>
      </div>
    </div>
  );
}
