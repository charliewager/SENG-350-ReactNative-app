import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Provider as PaperProvider, Text, Button } from 'react-native-paper';

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
            justifyContent: 'space-between'
        },

        shareANDprofile: {
            marginLeft: 15,
            marginRight: 15
        },

        helpButtons: {
            marginBottom: 50,
            marginTop: 50,
            marginLeft: 25,
            marginRight: 25,
            alignItems: 'center',
            hight: 100
        },

        findNaloxone: {

        }

    })

    return (
        <PaperProvider>
            <View style={styles.container}>
                <View style={styles.shareProfileContainer}>
                    <Button mode = 'contained' buttonColor='#726D65' style={styles.shareANDprofile}>
                        Share
                    </Button>
                    <Button mode = 'text' icon = 'account-circle' textColor='#fff' style={styles.shareANDprofile}
                        onPress={() =>
                            navigation.navigate('UserProfile')
                        }>
                        Profile
                    </Button>
                </View>
                <Button mode = 'contained' buttonColor='#D90000' style={styles.helpButtons}>
                    Request Ambulance
                </Button>
                <Button mode = 'contained' buttonColor='#D98200' style={styles.helpButtons}>
                    Request Nearby Help
                </Button>
                <Button mode = 'contained' buttonColor='#726D65' style={styles.findNaloxone}>
                    Find Naloxone and Training
                </Button>
                
            </View>
        </PaperProvider>
    );
}