import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';

const store = createStore(friendReducer);

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Allie',
        'Gator',
        'Lizzie',
      ],
      currentFriends: [],
    }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state

    // Pull frie1nd out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1)

    // And put friend in currentFriends
    currentFriends.push(addedFriend)

    // Finally, update our app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
  }

  render() {
    return (
      <Provider store={ store }>
      <AppNavigator

      />
      </Provider>
    );
  }
}