import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View , Image , Dimensions } from 'react-native';
var window = Dimensions.get('window');
export default class SpashScreen extends Component {
  render() {
    return (
                       <View style={styles.container}> 
                          <Image source={require('../../assets/images/splash.png')} style={[styles.title]} />
                          <Text> Welcome to our Official App. </Text>
                               
                        </View>
    )
  }
}
const styles = StyleSheet.create({

  container: {

          backgroundColor:'#fff',
          flex: 1,
          alignItems:'center',
          justifyContent:'center'
         



  },
  title: {

        // resizeMode : 'contain',
          alignSelf: 'center',
          height:window.height,
          width:window.width
         
          



  }




})