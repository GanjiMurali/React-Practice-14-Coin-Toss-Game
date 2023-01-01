// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isCoin: true, heads: 0, tails: 0}

  getRandomNum = () => Math.floor(Math.random() * 2)

  onClickButton = () => {
    const randomNum = this.getRandomNum()

    if (randomNum === 0) {
      this.setState(preState => ({heads: preState.heads + 1}))
      this.setState({isCoin: true})
    } else {
      this.setState(preState => ({tails: preState.tails + 1}))
      this.setState({isCoin: false})
    }
  }

  render() {
    const {isCoin, heads, tails} = this.state

    const getHeadOrTail = isCoin
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="container">
        <div className="coin-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img className="coin-image" alt="toss result" src={getHeadOrTail} />
          <button onClick={this.onClickButton} type="button" className="button">
            Toss Coin
          </button>
          <div className="counter">
            <p className="para">Total: {heads + tails}</p>
            <p className="para">Heads: {heads}</p>
            <p className="para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
