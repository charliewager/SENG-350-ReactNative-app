import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper';
import {View} from 'react-native'

export default function Share({navigation}){

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#393939',
        display: 'flex',
        height: '100%',
        flexDirection: 'column'
    },

    

})



    return (
        <PaperProvider>
           
           
           <View style={styles.container}>
            <Text>  </Text>
           <Text variant="displaySmall">           Share Via</Text>
           <br></br>
  <br></br>
           <View style={{ flexDirection:"row" }}>

            
           <IconButton
    icon="instagram"
    iconColor={MD3Colors.error50}
    size={70}
    onPress={() => console.log('Pressed')}
  />
   <IconButton
    icon="email"
    iconColor={MD3Colors.error50}
    size={70}
    onPress={() => console.log('Pressed')}
  />
   <IconButton
    icon="whatsapp"
    iconColor={MD3Colors.error50}
    size={70}
    onPress={() => console.log('Pressed')}
  />
  <IconButton
    icon="message"
    iconColor={MD3Colors.error50}
    size={70}
    onPress={() => console.log('Pressed')}
  />
  </View>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <Text variant="displaySmall">         Share Via Link:</Text>
  <br></br>
  <Text style={[styles.setFontSizeThirty]}>                         http://localhost:19006/</Text>
  <br></br>
  <br></br>
  <Button buttonColor='#726D65' mode="contained" onPress={() => console.log('Pressed')}>
    Copy
  </Button>

 

  </View>



        </PaperProvider>
    );
}