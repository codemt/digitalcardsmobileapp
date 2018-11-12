import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View , Image} from 'react-native';
import { Header , Container, Body , Content } from 'native-base';
import { Toolbar } from 'react-native-material-ui';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import SideBar from '../drawer/index';
import Home from '../drawer/home/index';
import AboutUs from '../drawer/aboutus/index';
import Terms from '../drawer/termsofuse/index';
import SMSCards from '../drawer/cardsms/index';
 class HomePage extends Component {
     
  render() {


    return (

        <Drawer />

    )
  }
}

const CustomDrawerContentComponent = (props) => (


            <Container>
                    <Header style={styles.drawerHeader}>
                        <Body>
                            <Image 
                            
                                    style={styles.drawerImage}
                                    source={require('../../assets/images/batlogo.png')}
                            
                            />
                        </Body>

                    </Header>
                    <Content style={styles.drawerItems}>
                                    
                            <DrawerItems {...props} 
                            style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                            }} 
                            
                            />
                        
                    </Content>


            </Container>





)

const Drawer = DrawerNavigator({


        Home : {

               screen : Home 

        },
        Aboutus : { 

                screen : AboutUs


        },
        TermsofUse : {


               screen : Terms 

        },
        SMSCards : {


            screen : SMSCards

        },
        

},{


            initialRouteName:'Home',
            drawerPosition:'left',
            contentComponent :CustomDrawerContentComponent,
            drawerOpenRoute : 'DrawerOpen',
            drawerCloseRoute : 'DrawerClose',
            drawerToggleRoute:'DrawerToggle',
            drawerBackgroundColor: 'black',
            contentOptions: {
                labelStyle: {
                  fontFamily: 'SomeFont',
                  color: 'red',
                 
                },
              },
              borderBottomColor: 'white',
              borderBottomWidth: 1,


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


  },
  drawerHeader : {


            height:200,
            backgroundColor:'black'

  },
  drawerItems : {


    backgroundColor:'black',
    color : 'white'

},
  drawerImage:{


        paddingLeft : 0,
        color : 'white'

  }

});