import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Provider as PaperProvider, Text, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native-stack';

export default function HomeScreen({navigation}){

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#393939',
            display: 'flex',
            height: '100%',
            flexDirection: 'column'
        },

        shareProfileContainer: {
            marginTop: 15,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: 65
        },

        shareANDprofile: {
            marginLeft: 25,
            marginRight: 25,
        },

        helpButtons: {
            marginTop: 40,
            marginLeft: 30,
            marginRight: 30,
            alignItems: 'center'
        },

        HelpButtonsSize: {
           height: 150
        },

        HelpButtonsText: {
            fontSize: 22
        },

        findNaloxone: {
            marginTop: 80,
            marginLeft: 75,
            marginRight: 75
        },

        findNaloxoneSize: {
            height: 60
        },

        findNaloxoneText: {
            fontSize: 15
        }

    })

    return (
        <PaperProvider>
            <View style={styles.container}>
                <View style={styles.shareProfileContainer}>
                    <Button mode = 'contained' buttonColor='#726D65' textColor='#fff'
                        style={styles.shareANDprofile}
                        onPress={() =>
                            navigation.navigate('Share')
                        }>
                        Share
                    </Button>
                    <Button mode = 'outlined' icon = 'account-circle' textColor='#fff' 
                        style={styles.shareANDprofile} contentStyle={{flexDirection: 'row-reverse'}}
                        onPress={() =>
                            navigation.navigate('User Profile')
                        }>
                        Profile
                    </Button>
                </View>
                <Button mode = 'contained' buttonColor='#D90000' textColor='#fff'
                    style={styles.helpButtons} contentStyle={styles.HelpButtonsSize}
                    labelStyle={styles.HelpButtonsText}
                    onPress={() =>
                        navigation.navigate('Request Ambulance')
                    }>
                    Request Ambulance
                </Button>
                <Button mode = 'contained' buttonColor='#D98200' textColor='#fff'
                    style={styles.helpButtons} contentStyle={styles.HelpButtonsSize}
                    labelStyle={styles.HelpButtonsText}
                    onPress={() =>
                        navigation.navigate('Locate Naloxone Carriers')
                    }>
                    Request Nearby Help
                </Button>
                <Button mode = 'contained' buttonColor='#726D65' textColor='#fff'
                    style={styles.findNaloxone} contentStyle={styles.findNaloxoneSize}
                    labelStyle={styles.findNaloxoneText}
                    onPress={() =>
                        navigation.navigate('Locate Naloxone Suppliers')
                    }>
                    Find Naloxone and Training
                </Button>
                
            </View>
        </PaperProvider>
    );
}