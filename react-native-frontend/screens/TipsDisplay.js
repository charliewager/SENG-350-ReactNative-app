import { React, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { Provider as PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import TipsSelector from './TipsComponents/TipsSelector';

export default function TipsDisplay({navigation, route}){

    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#393939',
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            
        },
        
        updateContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginRight: 7.5,
            marginLeft: 7.5,
            backgroundColor: '#a5a192',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
        },

        textInput: {
            marginTop: 10,
            marginBottom: 10,
            marginRight: 10,
            backgroundColor: '#faf4dd',
        },
        
        button: {
            marginTop: 10,
            marginBottom: 12.5,
        },

        tipsContainer: {
            display: 'flex',
        }
    });

    const [drugType, setDrugType] = useState(route.params.drugType)
    const [input, setInput] = useState('');

    let placeholder = drugType
    if(drugType === '') {placeholder = 'Unknown'};

    let toDisplay = TipsSelector(drugType);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <View style={styles.updateContainer}>
                    <TextInput style={styles.textInput}
                    UnderlineColor = '#333332'
                    activeUnderlineColor = '#000000'
                    theme={{ colors: { onSurfaceVariant: "black"}}}
                    onChangeText = {text => setInput(text)}
                    placeholder = {placeholder}
                    />
                    <Button mode = 'outlined' style = {styles.button}
                    buttonColor = '#41403a' textColor='#fff'
                    onPress = {
                        () => {
                            setDrugType(input);
                        }
                    }>
                        Update
                    </Button>
                </View>
                <View>
                    {toDisplay}
                </View>
            </View>
        </PaperProvider>
    );
}