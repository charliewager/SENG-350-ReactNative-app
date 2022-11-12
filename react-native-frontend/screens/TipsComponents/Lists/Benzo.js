import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Text, List } from 'react-native-paper';

export default function Benzo(){

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
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Keep the patient awake and talking if they are concious"
                        titleNumberOfLines={4}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Ensure the patient does not choke on their own vomit"
                        description="If the patient is unconscious do this by turning them onto their side"
                        titleNumberOfLines={4}
                        descriptionNumberOfLines={4}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{fontSize:20, fontWeight: 'bold'}}>DO NOT</List.Subheader>
                    <List.Item
                        title="Let the patient injest additional drugs or alcohol of any sort"
                        titleNumberOfLines={4}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                </List.Section>
            </View>
        </PaperProvider>
    );
}