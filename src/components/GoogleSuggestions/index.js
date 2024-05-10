// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  userInput = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  arrowButton = (id, suggestion) => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchSuggestionsList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div>
          <img
            className="google-img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-cont">
              <img
                className="seach-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                onChange={this.userInput}
                value={searchInput}
              />
            </div>
            <ul>
              {searchSuggestionsList.map(eachsuggest => (
                <SuggestionItem
                  suggestion={eachsuggest}
                  key={eachsuggest.id}
                  arrowButton={this.arrowButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
