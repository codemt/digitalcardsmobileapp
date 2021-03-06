import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container } from 'native-base';
import { Toolbar } from 'react-native-material-ui';
 class Home extends Component {

    
    navigate() {
        this.props.navigation.openDrawer();
    }
  render() {
    return (



        <Container style={styles.container}>
                        <Toolbar
                        onLeftElementPress={ () => this.navigate()}
                        style={{ container: { backgroundColor: 'black' },centerElementContainer: {alignContent:'center'}}}
                        leftElement="menu"
                        centerElement="My Cards"
                        searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                        }}
                        
                    
                    
                    /> 
        </Container>
    )
  }
}


export default Home
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