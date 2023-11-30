import React from "react";
import "./QuoteBox.css"

const apiKey = "igYPiQQEhjTU44SXCHOidg==O1dIjZTmOobhWgff"
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=humor";


class QuoteBox extends React.Component{
    generateQuote(){
        fetch(apiUrl, {
            headers: {
              "X-Api-Key": apiKey
            }
          })
            .then(res => res.json())
            .then(data => {
              this.setState({
                text: data[0].quote, 
                author: data[0].author
              })
          })
    }

    constructor(props){
        super(props)
        this.generateQuote = this.generateQuote.bind(this)
        this.state = {
            text: "",
            author: ""
        }

        this.generateQuote(); 
    }
    
    render(){
        return (
            <div id = "quote-box" className="quote-box">
                <div className="quote-text-div">
                    <p id = "text" className="quote">
                        {/*this will be the quote state*/}
                        {'" ' + this.state.text}
                    </p>
                </div>
                <div className="author-div">
                    <p id = "author" className="author"> 
                        {"- " + this.state.author}
                    </p>
                </div>
                <div className="buttons-div">
                    <a href="twitter.com/intent/tweet" id = "tweet-quote" className="tweet" target="_blank">Tweet!</a>
                    <button id = "new-quote" className="new-quote" onClick={this.generateQuote}>
                        New Quote
                    </button>
                </div>
            </div>
        )
    }
}

export default QuoteBox;