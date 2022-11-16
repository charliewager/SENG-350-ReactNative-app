import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Text, List } from 'react-native-paper';

export default function Meth(){

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#393939',
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            
        }
    })

    return (
        <PaperProvider>
            <View style={styles.container}>
                <List.Section>
                    <List.Subheader style={{fontSize:20, fontWeight: 'bold'}}>DO</List.Subheader>
                    <List.Item
                        title="Stay with the patient until help arrives"
                        titleNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{fontSize:20, fontWeight: 'bold'}}>DO NOT</List.Subheader>
                    <List.Item
                        title="Do more meth"
                        titleNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                </List.Section>
            </View>
        </PaperProvider>
    );
}