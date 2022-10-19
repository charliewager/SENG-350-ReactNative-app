import React, {Component} from 'react';
import { StyleSheet, Touchable, View, TouchableOpacity} from 'react-native';
import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';


export default class UserProfile extends Component {

    //const [name, nChange] = React.useState("Joe Guy");
    //const [quantity, qChange] = React.useState("4");

    state = {
        name: '',
        quantity: '',
        avaliability: ''

    }

    handleName = (text) => {
        this.setState({name: text})
    }
    handleQuantity = (text) => {
        this.setState({quantity: text})
    }
    handleAvaliability = (text) => {
        this.setState({avaliability: text})
    }
    saveInfo = (name, quantity, avaliablity) => {
        alert('name: ' + name + 'quantity: ' + quantity + 'avaliability: ' + avaliablity)
    }

    render() {
        return (
            <PaperProvider>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textbox1}
                        placeholder = 'Joe Guy'
                        onChangeText={this.handleName}
                    />
                    <TextInput
                        style={styles.textbox2}
                        placeholder = '4'
                        onChangeText={this.handleQuantity}
                    />
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress = {
                            () => this.saveInfo(this.state.name, this.state.quantity, this.state.avaliability)
                        }
                    >
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
            </PaperProvider>
        )
    }
    
}

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