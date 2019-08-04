import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: friends,
      score: 0,
      topScore: 0
    }

  }


  handleClick = id => {
    // const randNum = Math.floor(Math.random() * this.state.friends.length)
    // const randomImg = this.state.friends[randNum].id
    // if (this.state.friends.id !== id) {
    //   this.setState({ friends: randomImg });
    // }
    let correctGuess = false
    const newData = this.state.friends.map(friend => {
      const newFriend = { ...friend }
      if (newFriend.id === id) {
        if (!newFriend.clicked) {
          newFriend.clicked = true
          correctGuess = true
        }
      }
      return newFriend
    })
    correctGuess ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData)
  };

  handleIncorrectGuess = data => {
    this.setState({
      friends: this.resetFriends(data),
      score: 0
    })
  }

  handleCorrectGuess = data => {
    const { score, topScore } = this.state
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore)
    this.setState({
      friends: this.shuffleData(data),
      score: newScore,
      topScore: newTopScore
    })
  }

  shuffleData = data => {
    // let i = data.length - 1

    for (let i = 0; i < data.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = data[i];
      data[i] = data[j];
      data[j] = temp
    }
    // while (i > 0) {
    //   let j = Math.floor(Math.random() * (i + 1));
    //   [data[i], data[j]] = [data[j], data[i]];
    //   i--
    // }
    return data
  }

  resetFriends = data => {
    const resetdata = data.map(friend => ({ ...friend, clicked: false }))
    return this.shuffleData(resetdata)
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div> <Navbar
        score={this.state.score}
        topScore={this.state.topScore} />
        <Header />
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
