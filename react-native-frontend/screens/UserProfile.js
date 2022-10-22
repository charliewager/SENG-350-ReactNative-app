import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, Touchable, View, TouchableOpacity} from 'react-native';
import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserProfile({navigation}){
    const [name, setName] =  useState("johnny");
    const [quantity, setQuantity] = useState('1');
    const [weekdayA, setWeekDay] = useState("sometimes");
    const [weekendA, setWeekEnd] = useState("never");
    const [editDisabled, setEditDisabled] = useState(1);

    const storeData = async () => {
        try{
            //recieves the values to store and turns them into strings, storing them in the file
            await AsyncStorage.setItem('name', name)
            await AsyncStorage.setItem('quantity', quantity)
            await AsyncStorage.setItem('weekdayA', weekdayA)
            await AsyncStorage.setItem('weekendA', weekendA)
        } catch (e) {
            alert('error: data could not be stored')
        }
    };

    const readData = async () => {
      try {
          const name = await AsyncStorage.getItem('name');
          const quantity = await AsyncStorage.getItem('quantity');
          const weekdayA = await AsyncStorage.getItem('weekdayA');
          const weekendA = await AsyncStorage.getItem('weekendA');

        if (name !== null) {
          setName(name);
        }
        if (quantity !== null) {
          setQuantity(quantity);
        }
        if (weekdayA !== null) {
          setWeekDay(weekdayA);
        }
        if (weekendA !== null) {
          setWeekEnd(weekendA);
        }
      } catch (e) {
          alert('Failed to fetch the input from storage');
      }
  };

    useEffect(() => {
      readData();
    }, []);

    return(
        <PaperProvider>
            <View style={styles.container}>
                <Text style={styles.text1}>User Name</Text>
                <TextInput
                    style={styles.textbox1}
                    value={name}
                    disabled={editDisabled}
                    onChangeText={text => setName(text)}
                />
                <Text style={styles.text2}>Naloxone Quantity</Text>
                <TextInput
                    style={styles.textbox2}
                    value={quantity}
                    disabled={editDisabled}
                    onChangeText={text => setQuantity(text)}
                />

                <View style={styles.availContainer}>

                    <View style={styles.inputContainer}>

                        <View style={{width: '50%'}}>
                            <Text style={styles.text1}>Weekday Availability</Text>
                            <TextInput style={styles.textbox1} value={weekdayA} disabled={editDisabled} onChangeText={text => setWeekDay(text)}>

                            </TextInput>
                        </View>
                        <View style={{width: '50%'}}>
                            <Text style={styles.text1}>Weekend Availability</Text>
                            <TextInput style={styles.textbox1} value={weekendA} disabled={editDisabled} onChangeText={text => setWeekEnd(text)}>

                            </TextInput>
                        </View>

                    </View>
                </View>

                <Button
                    style={styles.saveButton} contentStyle={styles.saveButtonSize} labelStyle={{fontSize:22}}
                    onPress = {
                        () => {
                            console.log(name);
                            storeData();
                            setEditDisabled(1);
                        }
                    }
                >
                    Save
                </Button>
                <Button
                    style={styles.editButton} contentStyle={styles.saveButtonSize} labelStyle={{fontSize:22}}
                    onPress = {
                        () => {
                            setEditDisabled(0);
                        }
                    }
                >
                    Edit
                </Button>
            </View>
        </PaperProvider>
    );
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
