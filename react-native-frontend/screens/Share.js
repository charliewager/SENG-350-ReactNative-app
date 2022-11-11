import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph,Dialog, Portal, } from 'react-native-paper';
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


const [visible, setVisible] = React.useState(false);
const showDialog1 = () => setVisible(true);
const showDialog2 = () => setVisible(true);

const hideDialog = () => setVisible(false);

 return (
        <PaperProvider>
           
           
           <View style={styles.container}>
            <Text>  </Text>
           <Text variant="displaySmall">           Share Via</Text>
           <br></br>
  <br></br>

  <View>
       
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Warning</Dialog.Title>
            <Dialog.Content>
              <Paragraph>You are about to leave this page!</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Open application</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>


       
      </View>

           <View style={{ flexDirection:"row" }}>

            
          

          

      <IconButton
    icon="instagram"
    iconColor={MD3Colors.error50}
    size={70}
    onPress={showDialog1}
    />




   <IconButton
    icon="email"
    iconColor={MD3Colors.error50}
    size={70}
    onPress={showDialog1}
  />
   <IconButton
    icon="whatsapp"
    iconColor={MD3Colors.error50}
    size={70}
    onPress={showDialog1}
  />
  <IconButton
    icon="message"
    iconColor={MD3Colors.error50}
    size={70}
    onPress={showDialog1}
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