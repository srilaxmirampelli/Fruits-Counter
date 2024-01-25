// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, guava: 0, banana: 0, apple: 0}

  eatMango = () => {
    this.setState(prevCount => ({
      mango: prevCount.mango + 1,
    }))
  }

  eatGuava = () => {
    this.setState(prevCount => ({
      guava: prevCount.guava + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevCount => ({
      banana: prevCount.banana + 1,
    }))
  }

  eatApple = () => {
    this.setState(prevCount => ({
      apple: prevCount.apple + 1,
    }))
  }

  render() {
    const {mango, banana, guava, apple} = this.state
    return (
      <div className="fruits-counter-app">
        <p className="sub-heading">
          Bob&apos;s mom is out; please make sure he gets something to eat🍇
        </p>
        <div className="fruits-counter-container">
          <h1 className="heading">
            Bob ate <span className="fruit-count">{mango}</span> mangoes
            <span className="fruit-count"> {guava}</span> guavas
            <span className="fruit-count"> {banana}</span> bananas
            <span className="fruit-count"> {apple}</span> apples
          </h1>
          <div className="fruits-image-card">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="image"
              src="https://kumaribasket.com/wp-content/uploads/2020/08/guva.jpg"
              alt="guava"
            />
          </div>
          <div className="button-container">
            <button className="button" type="button" onClick={this.eatMango}>
              Eat Mango
            </button>
            <button className="button" type="button" onClick={this.eatGuava}>
              Eat Guava
            </button>
          </div>
          <div className="fruits-image-card">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <img
              className="image"
              src="https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg"
              alt="apple"
            />
          </div>
          <div className="button-container">
            <button className="button" type="button" onClick={this.eatBanana}>
              Eat Banana
            </button>
            <button className="button" type="button" onClick={this.eatApple}>
              Eat Apple
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
