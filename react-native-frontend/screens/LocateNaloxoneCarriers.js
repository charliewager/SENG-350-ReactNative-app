import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, Modal, Alert, Pressable, Linking, ActivityIndicator} from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import MapView, {Marker, Callout} from 'react-native-maps'

import * as Location from 'expo-location';

export default function LocateNaloxoneCarriers({navigation}){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [carrierMarker, setMarker] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    const createNoCarriersAlert =  () =>{
        return new Promise((resolve) =>{
            Alert.alert(
              "No Nearby Naloxone Carriers Found",
              "Please Contact Emergency Services and See Information Below",
              [
                //add RequestAmbulance page
              ],
              { cancelable: false } //needed?
            );
        })
    }

    const determineCarrierLocation = () => {
        if(carrierMarker){
            return (
                  <Marker
                    coordinate ={{
                      latitude: carrierMarker.latitude,
                      longitude: carrierMarker.longitude,
                    }}
                    key={1}>
                        {/* line below needed?? */}
                    <Callout onPress={async () => await Linking.openURL('https://www.google.ca')}>
                      <View>
                        <View style={styles.bubble}>
                          <Text style={styles.titleText}>{carrierMarker.title}</Text>
                          <Text style={styles.baseText}>{carrierMarker.desc}</Text>
                        </View>
                      </View>
                    </Callout>
                  </Marker>
            );
        }
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
            // temp hard coded carrier location
            setLat(Number(location['coords']['latitude']));
            setLong(Number(location['coords']['longitude']));
            let markerCand = {latitude: Number(location['coords']['latitude'])-0.0005, longitude: Number(location['coords']['longitude'])-0.0005, title: "Joe Guy", desc: "Carrying: 3 Naloxone Doses"};

            if(markerCand == null){
              let text = await createNoCarriersAlert();
            }
            setMarker(markerCand);
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
               pinColor='aqua'
             />
             {determineCarrierLocation()}
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