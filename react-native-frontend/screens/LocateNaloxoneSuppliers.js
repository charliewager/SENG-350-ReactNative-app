import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, Modal, Alert, Pressable, Linking, ActivityIndicator} from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import MapView, {Marker, Callout} from 'react-native-maps'

import * as Location from 'expo-location';

export default function LocateNaloxoneSuppliers({navigation}){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [markerList, setMarkerList] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    const determineLocationsFound = () => {
      if(markerList){
        if(markerList.length > 0){
          return (
            markerList.map((marker, index) => (
                <Marker
                  coordinate ={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  key={index}>
                  <Callout onPress={async () => await Linking.openURL('https://www.google.ca')}>
                    <View>
                      <View style={styles.bubble}>
                        <Text style={styles.titleText}>{marker.title}</Text>
                        <Text style={styles.baseText}>{marker.desc}</Text>
                        <Text style={styles.baseText}>{marker.phone}</Text>
                        <Text style={{color: 'blue'}}>
                          {marker.url}
                        </Text>
                      </View>
                    </View>
                  </Callout>
                </Marker>
            ))
          );
        }
      }
    }

    const createNoLocationsAlert =  () =>{
        return new Promise((resolve) =>{
            Alert.alert(
              "No Nearby Locations Found",
              "No locations nearby that provide Naloxone or Naloxone training",
              [
                {text: "Online Reasources",
                  onPress: async () => await Linking.openURL('https://www.google.ca'),
                },
                {text: "Cancel",
                  onPress: () => resolve("cancel"),
                  style: "cancel"
                }
              ],
              { cancelable: false }
            );
        })
    }

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

    useEffect(() => {
      (async () => {
        if(location){
          setLat(Number(location['coords']['latitude']));
          setLong(Number(location['coords']['longitude']));

          // quick conditional in order to demonstraight both behaviours of the usecase
          const response = await fetch("https://segn350-backend.azurewebsites.net/findsuppliers").catch((err) => {console.log(err)});
          const markerListCand = await response.json()

          if(markerListCand.length < 1){
            let text = await createNoLocationsAlert();
          }
          setMarkerList(markerListCand);
        }
      })();
    }, [location])

    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
      return (
        <View>
          <Text> {text} </Text>
        </View>
      );
    }
    else if(location){
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
           {determineLocationsFound()}
          </MapView>
        </View>
      );
    }
    else{
      return (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color="#00ff00" />
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
