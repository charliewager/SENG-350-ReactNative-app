import React, {useState, useEffect, Linking} from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import MapView, {Marker, Callout} from 'react-native-maps'

import * as Location from 'expo-location';

export default function LocateNaloxoneSuppliers({navigation}){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () =>{
        let {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    }
    else if (location) {
     //text = JSON.stringify(location);
     text = location;

     let lat = Number(text['coords']['latitude']);
     let long = Number(text['coords']['longitude']);

     return (
       <View style ={styles.container}>
         <MapView style={styles.map}
           region={{
             latitude: Number(lat),
             longitude: Number(long),
             latitudeDelta: Number(0.005),
             longitudeDelta: Number(0.006),
           }}>
          <Marker
            coordinate ={{
              latitude: Number(lat),
              longitude: Number(long),
            }}
            title="Your location"
          />
          <Marker
            coordinate ={{
              latitude: Number(lat)+0.0005,
              longitude: Number(long)+0.0005,
            }}>
            <Callout>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.titleText}>Dave Pharmacy</Text>
                  <Text style={styles.baseText}>Pharmacist</Text>
                  <Text style={styles.baseText}>250-556-1345</Text>
                  <Text style={{color: 'blue'}} onPressed={() => Linking.openURL('www.google.ca')}>
                    www.davespharmacy.ca
                  </Text>
                </View>
              </View>
            </Callout>
          </Marker>
         </MapView>
       </View>
     );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height- Dimensions.get('window').height*0.05,
  },
  nodeView: {
    width: Dimensions.get('window').width - Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').height - Dimensions.get('window').height*0.8,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: 'center',
  },
  baseText: {
    fontSize: 15,
    alignItems: 'center',
  },
  bubble: {
  flex: 1,
  backgroundColor: 'rgba(255,255,255,0.7)',
  paddingHorizontal: 18,
  paddingVertical: 12,
  borderRadius: 20,
},
});
