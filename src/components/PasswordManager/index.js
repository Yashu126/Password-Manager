import './index.css'

import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import UserPasswordItem from '../UserPasswordItem'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    inputWeb: '',
    inputUser: '',
    inputPass: '',
    inputSearch: '',
    isActive: false,
  }

  webChange = event => {
    this.setState({inputWeb: event.target.value})
  }

  userChange = event => {
    this.setState({inputUser: event.target.value})
  }

  passWordChange = event => {
    this.setState({inputPass: event.target.value})
  }

  checkStauts = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  deleteuser = id => {
    const {passwordsList} = this.state
    const filterUser = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: filterUser})
  }

  addPassword = event => {
    event.preventDefault()
    const {inputWeb, inputUser, inputPass} = this.state
    const newUser = {
      id: uuidv4(),
      inputWeb,
      inputUser,
      inputPass,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newUser],
      inputWeb: '',
      inputUser: '',
      inputPass: '',
    }))
  }

  onSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {
      passwordsList,
      inputWeb,
      inputUser,
      inputPass,
      inputSearch,
      isActive,
    } = this.state

    const searchFilter = passwordsList.filter(each =>
      each.inputWeb.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="background-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="pm-logo"
        />
        <div className="upper-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="pm-sm-img"
          />
          <form className="input-card">
            <h1 className="heading">Add New Password</h1>
            <div className="input-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                value={inputWeb}
                onChange={this.webChange}
                placeholder="Enter Website"
                type="text"
              />
            </div>
            <div className="input-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                value={inputUser}
                onChange={this.userChange}
                placeholder="Enter Username"
                type="text"
              />
            </div>
            <div className="input-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <input
                value={inputPass}
                onChange={this.passWordChange}
                placeholder="Enter Password"
                type="password"
              />
            </div>
            <div className="add-btn-con">
              <button
                onClick={this.addPassword}
                type="submit"
                className="add-btn"
              >
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="pm-lg-img"
          />
        </div>
        <div className="bottom-con">
          <div className="search-con">
            <div className="count-con">
              <h1 className="heading">Your Passwords</h1>
              <p className="count">{passwordsList.length}</p>
            </div>
            <div className="search-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-logo"
              />
              <input
                onChange={this.onSearch}
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <hr />
          <div className="checkbox-con">
            <input
              onChange={this.checkStauts}
              className="check-box"
              id="check"
              type="checkbox"
            />
            <label htmlFor="check">Show Passwords</label>
          </div>
          {searchFilter.length === 0 ? (
            <div className="empty-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img"
              />
              <p className="heading">No Passwords</p>
            </div>
          ) : (
            <ul className="unorder-list">
              {searchFilter.map(eachPass => (
                <UserPasswordItem
                  deleteuser={this.deleteuser}
                  isActive={isActive}
                  eachPass={eachPass}
                  key={eachPass.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager

/*

 */
