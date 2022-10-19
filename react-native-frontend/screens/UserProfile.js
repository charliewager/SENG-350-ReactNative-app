import React, {Component} from 'react';
import { StyleSheet, Touchable, View, TouchableOpacity} from 'react-native';
import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';


export default class UserProfile extends Component {

    //const [name, nChange] = React.useState("Joe Guy");
    //const [quantity, qChange] = React.useState("4");

    state = {
        name: '',
        quantity: '',
        avaliability: '',
        editDisabled: 1
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
                    <Text style={styles.text1}>User Name</Text>
                    <TextInput
                        style={styles.textbox1}
                        placeholder = 'Joe Guy'
                        disabled={this.state.editDisabled}
                        onChangeText={this.handleName}
                    />
                    <Text style={styles.text2}>Naloxone Quantity</Text>
                    <TextInput
                        style={styles.textbox2}
                        placeholder = '4'
                        disabled={this.state.editDisabled}
                        onChangeText={this.handleQuantity}
                    />

                    <View style={styles.availContainer}>

                        <View style={styles.inputContainer}>
                            
                            <View style={{width: '50%'}}>
                                <Text style={styles.text1}>Weekday Availability</Text>
                                <TextInput style={styles.textbox1} disabled={this.state.editDisabled}>

                                </TextInput>
                            </View>
                            <View style={{width: '50%'}}>
                                <Text style={styles.text1}>Weekend Availability</Text>
                                <TextInput style={styles.textbox1} disabled={this.state.editDisabled}>
                                    
                                </TextInput>
                            </View>

                        </View>
                    </View>

                    <Button
                        style={styles.saveButton} contentStyle={styles.saveButtonSize} labelStyle={{fontSize:22}}
                        onPress = {
                            () => this.saveInfo(this.state.name, this.state.quantity, this.state.avaliability)
                        }
                    >
                        Save
                    </Button>
                    <Button
                        style={styles.editButton} contentStyle={styles.saveButtonSize} labelStyle={{fontSize:22}}
                        onPress = {
                            () => this.saveInfo(this.state.name, this.state.quantity, this.state.avaliability)
                        }
                    >
                        Edit
                    </Button>
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
            marginTop: 5,
            marginLeft: 15,
            marginRight: 15,
            borderWidth: 1,
            padding: 10
        },

        textbox2: {
            height: 40,
            marginTop: 5,
            marginLeft: 15,
            marginRight: 15,
            borderWidth: 1,
            padding: 10
        },

        text1:{
            marginTop: 12,
            marginLeft: 17,
            marginRight: 17,
            fontSize:15
        },

        text2:{
            marginTop: 60,
            marginLeft: 17,
            marginRight: 17,
            fontSize:15
        },

        saveButton: {
            backgroundColor: '#7a42f4',
            alignItems: "center",
            marginTop: 80,
            marginBottom: 80,
            marginRight: 50,
            marginLeft: 50
        },

        saveButtonSize: {
            height: 60,
        },

        editButton: {
            backgroundColor: '#0d7cd6',
            alignItems: "center",
            marginBottom: 80,
            marginRight: 50,
            marginLeft: 50
        },

        availContainer: {display: "flex", flexDirection: "column", marginTop: 60,},
        inputContainer: {display: "flex", flexDirection: "row"}

    })