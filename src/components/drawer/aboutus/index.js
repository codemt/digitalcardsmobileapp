import React, { Component } from 'react'
import { View , Text , StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { Container, Header , Content, Left, Icon , CardItem } from 'native-base';
import NavigationBar from 'react-native-navbar-color'

 class AboutUs extends Component {

    componentDidMount() {
        NavigationBar.setColor('black');
        NavigationBar.setStatusBarColor('black',true);
    }


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
                            centerElement="About Us"
                            
                        
                        
                             /> 
                             <CardItem header style={{backgroundColor:"black"}}>
                             <Text style={{color:'red',fontSize:20}}>About DigiCardx</Text>
                           </CardItem>
                             <Text style={{ color:"white",margin:10,textAlign:'left'}}>
                             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                              laboris nisi ut aliquip ex ea commodo consequat. 
                              Duis aute irure dolor in reprehenderit in voluptate velit esse 
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                              cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                              anim id est laborum.""On the other hand, we denounce with righteous 
                              indignation and dislike men who are so beguiled and demoralized by the charms 
                              of pleasure of the moment, so blinded by desire, that they cannot foresee 
                              the pain and trouble that are bound to ensue; and equal blame belongs to 
                              those who fail in their duty through weakness of will, which is the same 
                              as saying through shrinking from toil and pain. These cases are perfectly 
                              simple and easy to distinguish. In a free hour, when our power of choice 
                              is untrammelled and when nothing prevents our being able to do what we 
                              like best, every pleasure is to be welcomed and every pain avoided. 
                              But in certain circumstances and owing to the claims of duty or 
                              the obligations of business it will frequently occur that pleasures 
                              have to be repudiated and annoyances accepted. The wise man therefore 
                              always holds in these matters to this principle of selection: 
                              he rejects pleasures to secure other greater pleasures, or 
                              else he endures pains to avoid worse pains."                           
                            </Text>
                    </Container>

        )
  }
}
export default AboutUs
const styles = StyleSheet.create({


    form : { 


        backgroundColor: 'black',
        marginTop : 60,
        

    },
    container : {



        backgroundColor : 'black'

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