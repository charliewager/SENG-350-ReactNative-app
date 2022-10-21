import React, {Component, useEffect} from 'react';
import { StyleSheet, Touchable, View, TouchableOpacity} from 'react-native';
import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class UserProfile extends Component {
    

    //const [name, nChange] = React.useState("Joe Guy");
    //const [quantity, qChange] = React.useState("4");

    state = {
        name: 'johnny',
        quantity: '1blade',
        weekdayA: 'today',
        weekendA: 'tomorrow',
        editDisabled: 1
    }

    handleName = (text) => {
        this.setState({name: text})
    }
    handleQuantity = (text) => {
        this.setState({quantity: text})
    }
    handleweekdayA = (text) => {
        this.setState({weekdayA: text})
    }
    handleweekendA = (text) => {
        this.setState({weekendA: text})
    }
    handleEnabled = () => {
        this.setState({editDisabled: 0})
    }
    handleDisabled = () => {
        this.setState({editDisabled: 1})
    }
    saveInfo = (name, quantity, weekdayA, weekendA) => {
        storeData(name, quantity, weekdayA, weekendA)
        alert('name: ' + name + ', quantity: ' + quantity + ', weekday avaliability: ' + weekdayA + ', weekend avaliability' + weekendA)
    }


    render() {

        return (
            <PaperProvider>
                <View style={styles.container}>
                    <Text style={styles.text1}>User Name</Text>
                    <TextInput
                        style={styles.textbox1}
                        defaultValue={'Johnny'}
                        disabled={this.state.editDisabled}
                        onChangeText={this.handleName}
                    />
                    <Text style={styles.text2}>Naloxone Quantity</Text>
                    <TextInput
                        style={styles.textbox2}
                        defaultValue={'1blade'}
                        disabled={this.state.editDisabled}
                        onChangeText={this.handleQuantity}
                    />

                    <View style={styles.availContainer}>

                        <View style={styles.inputContainer}>
                            
                            <View style={{width: '50%'}}>
                                <Text style={styles.text1}>Weekday Availability</Text>
                                <TextInput style={styles.textbox1} defaultValue={'allday'} disabled={this.state.editDisabled} onChangeText={this.handleweekdayA}>

                                </TextInput>
                            </View>
                            <View style={{width: '50%'}}>
                                <Text style={styles.text1}>Weekend Availability</Text>
                                <TextInput style={styles.textbox1} defaultValue={'everyday'} disabled={this.state.editDisabled} onChangeText={this.handleweekendA}>
                                    
                                </TextInput>
                            </View>

                        </View>
                    </View>

                    <Button
                        style={styles.saveButton} contentStyle={styles.saveButtonSize} labelStyle={{fontSize:22}}
                        onPress = {
                            () => {
                                storeData(this.state.name, this.state.quantity, this.state.weekdayA, this.state.weekendA)
                                //this.saveInfo(this.state.name, this.state.quantity, this.state.avaliability)
                                this.handleDisabled()
                            }

                        }
                    >
                        Save
                    </Button>
                    <Button
                        style={styles.editButton} contentStyle={styles.saveButtonSize} labelStyle={{fontSize:22}}
                        onPress = {
                            () => {
                                this.handleEnabled()
                                getData()
                                //this.saveInfo(this.state.name, this.state.quantity, this.state.avaliability)
                            }
                        }
                    >
                        Edit
                    </Button>
                </View>
            </PaperProvider>
        )
    }
    
    
}

const storeData = async (value1, value2, value3, value4) => {
    try{
        await AsyncStorage.setItem('name', JSON.stringify(value1))
        await AsyncStorage.setItem('quantity', JSON.stringify(value2))
        await AsyncStorage.setItem('weekdayA', JSON.stringify(value3))
        await AsyncStorage.setItem('weekendA', JSON.stringify(value4))
    } catch (e) {
        alert('error: data could not be read')
    }
};

const getData = async () => {
    try {
        const value1 = await AsyncStorage.getItem('name');
        const value2 = await AsyncStorage.getItem('quantity');
        const value3 = await AsyncStorage.getItem('weekdayA');
        const value4 = await AsyncStorage.getItem('weekendA');
        if (value1 !== null){
            handleName(value1)
        }
        if (value2 !== null){
            handleQuantity(value2)
        }
        if (value3 !== null){
            handleweekdayA(value3)
        }
        if (value4 !== null){
            handleweekendA(value4)
        }
    } catch (e) {
        alert('failed to read input from storage')
    }
    
};


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