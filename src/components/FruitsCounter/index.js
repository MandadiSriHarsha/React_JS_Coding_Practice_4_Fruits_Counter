import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
      bananasCount: prevState.bananasCount,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount,
      bananasCount: prevState.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">
            Bob ate <span className="span-style"> {mangoesCount} </span>mangoes
            <span className="span-style"> {bananasCount} </span>bananas
          </h1>
          <div className="fruits-card">
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="card-image"
                alt="mango"
              />
              <br />
              <button
                type="button"
                className="card-button"
                onClick={this.eatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="card-image"
                alt="banana"
              />
              <br />
              <button
                type="button"
                className="card-button"
                onClick={this.eatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
