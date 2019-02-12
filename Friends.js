import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addFriend} from './FriendActions';

class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        {
          this.props.friends.possible.map((friend, index) => (
            <TouchableOpacity
              key={ friend }
              // title={ `Add ${ friend }` }
              onPress={() =>
                this.props.addFriend(index)
              }
            >
            <Text style={{margin:10, fontSize:24, backgroundColor:'#DDDDDD'}}> Add {friend} </Text>
            </TouchableOpacity>

          )
        )
        }
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
  },
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

const mapDispatchToProps=dispatch=>(
  bindActionCreators({
    addFriend,
  }, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(Friends);
