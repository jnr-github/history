import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const itemDelete = id => {
    deleteItem(id)
  }

  return (
    <li className="row-items">
      <p className="para">{timeAccessed}</p>
      <img className="logo-image" src={logoUrl} alt="logoUrl" />
      <p className="title-name">{title}</p>
      <div className="spaceInBetween">
        <p className="title-name">{domainUrl}</p>
        <button>
          <img
            onClick={itemDelete}
            className="delete-image"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
