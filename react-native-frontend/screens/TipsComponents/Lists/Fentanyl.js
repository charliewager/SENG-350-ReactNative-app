import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Text, List } from 'react-native-paper';

export default function Fentanyl(){

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
                        title="Keep the patient awake"
                        titleNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Administer naloxone if possible"
                        titleNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Turn the patient onto their side to prevent them apirating or choking on vomit"
                        titleNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Help the patient breath if they not currently breathing"
                        titleNumberOfLines={4}
                        description="Do this by ensuring their is nothing in the patients mouth, then tilting their
                                    head back and blowing air into their mouth every 5 seconds"
                        descriptionNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{fontSize:20, fontWeight: 'bold'}}>DO NOT</List.Subheader>
                    <List.Item
                        title="Try to wake the patient up by slapping them"
                        titleNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Put the patient in a cold shower or bath"
                        titleNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Make the patient vomit as they could aspirate or choke on it"
                        titleNumberOfLines={4}
                        titleStyle={{color: 'white'}}
                        descriptionStyle={{color: 'white'}}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Inject thd patient with anything other than naloxone"
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