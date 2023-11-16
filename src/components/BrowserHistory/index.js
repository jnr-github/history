import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  enteredText = event => {
    this.setState({searchInput: event.target.value})
  }

  delete = id => {
    const newList = searchedList.filter(each => each.id !== id)
    this.setState({searchInput: newList})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchedList = initialHistoryList.filter(each =>
      each.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-background">
        <div className="history-container">
          <img
            className="history-image"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <img
            className="search-image"
            alt="search"
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          />
          <input
            onChange={this.enteredText}
            type="search"
            placeholder="Search history"
          />
        </div>
        <div className="item-container">
          <ul>
            {searchedList.map(eachItem => (
              <HistoryItem
                deleteItem={this.delete}
                itemDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
