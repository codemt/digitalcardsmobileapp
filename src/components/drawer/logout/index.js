import React, { Component } from 'react'
import { View , Text } from 'react-native';
 class Logout extends Component {


    navigate() {
        this.props.navigation.openDrawer();
    }
  render() {
    return (
      <View>
        
      </View>
    )
  }
}
export default Logout;