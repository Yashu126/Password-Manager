import './index.css'

const UserPasswordItem = props => {
  const {eachPass, isActive, deleteuser} = props
  const {inputWeb, inputUser, inputPass, id} = eachPass
  const onDelete = () => {
    deleteuser(id)
  }
  return (
    <li className="list-item-con">
      <h1 className="user-pro-pic">{inputUser[0]}</h1>
      <div className="user-details">
        <p className="website">{inputWeb}</p>
        <p className="website">{inputUser}</p>
        {isActive ? (
          <p className="website">{inputPass}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-img"
          />
        )}
      </div>
      <button
        data-testid="delete"
        onClick={onDelete}
        type="button"
        className="delete-btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          width="25px"
        />
      </button>
    </li>
  )
}

export default UserPasswordItem
