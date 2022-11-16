import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Text, List } from 'react-native-paper';

export default function Cocaine(){

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
                    <List.Item
                        title="Try to gather info about the patient"
                        description="This includes the amount of cocaine taken, the amount of other drugs or alcohol used,
                        pre-existing conditions, drug allergires, and age"
                        titleNumberOfLines={4}
                        descriptionNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Lay the patient on their side"
                        titleNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Cool the patient down if they are overheated"
                        description="This could be done with a cold compress"
                        titleNumberOfLines={4}
                        descriptionNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Keep the patient in a safe environment"
                        description="This is to keep the patient safe in case of a seizure, creating a safe environment
                                     means keeping them away from objects with sharp edges (such as knives) and other hazards"
                        titleNumberOfLines={4}
                        descriptionNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                </List.Section>
            </View>
        </PaperProvider>
    );
}