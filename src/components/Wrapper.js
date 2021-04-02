import React, { Component } from "react";
import QuoteBox from "./QuoteBox";
import "./Wrapper.scss";
import axios from "axios";

export default class Wrapper extends Component {
  state = {
    quote: "",
    author: "",
  };

  componentDidMount() {
    this.getQuoutes();
  }

  getQuoutes = async () => {
    const response = await axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );

    const quotesData = await response.data;

    const randomQuote =
      quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];

    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
    });
  };

  render() {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let color = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[color]}; color: ${colors[color]} `;
    return (
      <div id="wrapper">
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          getNewQuote={this.getQuoutes}
        />
        <footer className="footer">
          <a>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            excepturi voluptatibus officia.
          </a>
        </footer>
      </div>
    );
  }
}
