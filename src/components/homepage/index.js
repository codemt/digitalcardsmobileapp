import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container } from 'native-base';
import { Toolbar } from 'react-native-material-ui';
import { createDrawerNavigator } from 'react-navigation';
import SideBar from '../drawer/index';
import Home from '../drawer/home/index';
import AboutUs from '../drawer/aboutus/index';
 class HomePage extends Component {
     
  render() {


    return (

        <Drawer />

    )
  }
}

const Drawer = createDrawerNavigator({


        Home : {

               screen : Home 

        },
        Aboutus : { 

                screen : AboutUs


        }


})
export default HomePage
const styles = StyleSheet.create({


    form : { 


        backgroundColor: 'black',
        marginTop : 60,
        

    },
    container : {



        backgroundColor : 'grey'

    },
    title: {

      // resizeMode : 'contain',
      //  paddingTop : 100,
        alignSelf: 'center',
        height:100,
        //width:400

  },
  button : {

      marginTop : 15,
      width:400,
      alignSelf: 'center',
      backgroundColor : 'black'


  },
  social : {

      flex:  1 ,
      flexDirection: 'row',
      padding: 15,
      alignSelf: 'center',
      paddingBottom: 10,
     // justifyContent:'space-between'


  }

});