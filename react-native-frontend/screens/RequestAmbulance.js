import { React, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { Provider as PaperProvider, TextInput, Text, Button } from 'react-native-paper';

export default function RequestAmbulance({navigation}){

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#393939',
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
        },

        textInput: {
            marginBottom: 50,
            marginLeft: 30,
            marginRight: 30,
            backgroundColor: '#ebe6d1',
            autoComplete: 'street-address',
            textContentType: 'streetAddressLine1'
        },

        textInput2: {
            marginBottom: 50,
            marginLeft: 30,
            marginRight: 30,
            backgroundColor: '#ebe6d1',
        },

        text: {
            marginLeft: 32,
            fontSize: 17.5,
            marginBottom: 5
        },

        button: {
            marginLeft: 100,
            marginRight: 100,
        }
    });

    const [location, setLocation] = useState("");
    const [drugType, setDrugType] = useState("");

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text style={styles.text}>Location</Text>
                <TextInput style={styles.textInput}
                UnderlineColor = '#333332'
                activeUnderlineColor = '#000000'
                theme={{ colors: { onSurfaceVariant: "black"}}}
                onChangeText = {text => setLocation(text)}
                />

                <Text style={styles.text}>Drug Used</Text>
                <TextInput style={styles.textInput2}
                UnderlineColor = '#333332'
                activeUnderlineColor = '#000000'
                theme={{ colors: { onSurfaceVariant: "black"}}}
                onChangeText = {text => setDrugType(text)}
                placeholder = 'Unknown'
                />

                <Button mode = 'contained' style = {styles.button}
                buttonColor='#D90000' textColor='#fff' labelStyle={{fontSize: 17.5}}
                onPress = {
                     () => {
                        let requestBody = {"location": location, "recipient": "John", "drugType": drugType};
                        fetch("https://segn350-backend.azurewebsites.net/sendhelpnotification", {
                            method:'POST',
                            body: JSON.stringify(requestBody),
                            headers:{
                              "Content-Type": "application/json",
                            }
                        }).catch((err) => {console.log(err)});
                        navigation.navigate('Tips Display', {drugType})
                    }
                }>
                    Submit
                </Button>

            </View>
        </PaperProvider>
    );
}
