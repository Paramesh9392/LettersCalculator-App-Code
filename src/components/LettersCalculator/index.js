// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="container">
        <div className="items-container">
          <div className="details-container">
            <h1 className="heading">Calculate the Letters you enter </h1>
            <label className="label-text" htmlFor="label-text">
              Enter the Phrase
            </label>
            <input
              className="input"
              id="label-text"
              onChange={this.onChangeInputPhrase}
              type="text"
              placeholder="Enter the Phrase"
            />
            <p className="phrase-count-text">
              No.of Letters: {inputPhrase.length()}
            </p>
          </div>

          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
