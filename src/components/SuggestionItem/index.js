// Write your code here

import './index.css'
const SuggestionItem = props => {
  const {suggestion, arrowButton} = props
  const arrowbutton = () => {
    arrowButton(suggestion.id, suggestion.suggestion)
  }
  return (
    <li className="list-container">
      <p>{suggestion.suggestion}</p>
      <img
        type="button"
        onClick={arrowbutton}
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
