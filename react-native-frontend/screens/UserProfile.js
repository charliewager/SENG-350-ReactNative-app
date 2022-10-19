import React from 'react';
import { StyleSheet, Touchable, View, TouchableOpacity} from 'react-native';
import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';


export default function UserProfile({navigation}){

    const [name, nChange] = React.useState("Joe Guy");
    const [quantity, qChange] = React.useState("4");

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#393939',
            display: 'flex',
            height: '100%',
            flexDirection: 'column'
        },

        textbox1: {
            height: 40,
            marginTop: 12,
            marginLeft: 15,
            marginRight: 15,
            borderWidth: 1,
            padding: 10
        },
        textbox2: {
            height: 40,
            marginTop: 60,
            marginLeft: 15,
            marginRight: 15,
            borderWidth: 1,
            padding: 10
        },
        saveButton: {
            backgroundColor: '#7a42f4',
            alignItems: "center",
            fontSize: 25,
            padding: 10,
            margin: 80,
            height: 60
        }

    })
    return (
        <PaperProvider>
            <View style={styles.container}>
                <TextInput
                    style={styles.textbox1}
                    onChangeText={nChange}
                    value={name}
                />
                <TextInput
                    style={styles.textbox2}
                    onChangeText={qChange}
                    value={quantity}
                />
                <TouchableOpacity
                    style={styles.saveButton}
                >
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        </PaperProvider>
    );
}