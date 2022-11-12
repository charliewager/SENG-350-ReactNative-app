import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider as PaperProvider, Text, List } from 'react-native-paper';

export default function Opioid(){

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
                <List.Item
                        title="Stay with the patient until help arrives"
                        titleNumberOfLines={4}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                />
                <List.Item
                    title="Lightly shake, tap, and shout at the patient to get a response"
                    titleNumberOfLines={4}
                    left={props => <List.Icon {...props} icon="chevron-double-right" />}
                />
                <List.Section>
                    <List.Subheader style={{fontSize:20, fontWeight: 'bold'}}>IF RESPONSIVE</List.Subheader>
                    <List.Item
                        title="Keep the patient awake and talking"
                        titleNumberOfLines={4}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{fontSize:20, fontWeight: 'bold'}}>IF UNRESPONSIVE</List.Subheader>
                    <List.Item
                        title="Help the patient breath if they not currently breathing"
                        titleNumberOfLines={4}
                        description="Do this by ensuring their is nothing in the patients mouth, then tilting their
                                    head back and blowing air into their mouth every 5 seconds"
                        descriptionNumberOfLines={4}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                    <List.Item
                        title="Preform CPR if the patients pulse disappears"
                        titleNumberOfLines={4}
                        description="Do this by pushing down hard on the chest bone at a rate of 100 beats per minute"
                        descriptionNumberOfLines={4}
                        left={props => <List.Icon {...props} icon="chevron-double-right" />}
                    />
                </List.Section>
            </View>
        </PaperProvider>
    );
}