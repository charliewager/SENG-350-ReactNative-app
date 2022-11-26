import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, Modal, Alert, Pressable, Linking, ActivityIndicator} from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import MapView, {Marker, Callout} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import {getDistance} from 'geolib';

import * as Location from 'expo-location';

export default function LocateNaloxoneCarriers({navigation}){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [carrierLocation, setCarrierLocation] = useState(null);
    const [carrierName, setcarrierName] = useState(null);
    const [carrierTitle, setcarrierTitle] = useState(null);
    const [clat, setcLat] = useState(null);
    const [clong, setcLong] = useState(null);
    const [Users, setUsers] = useState([]);

    let text = 'Waiting..';
    const GOOGLE_MAPS_APIKEY = 'AIzaSyANM4YHym1FVEdtDeihxSwRZmLE7VdzKn8';

    const createNoCarriersAlert =  () =>{
        return new Promise((resolve) =>{
            Alert.alert(
              "No Nearby Naloxone Carriers Found",
              "Please Contact Emergency Services and See Information On the Following Page",

              [
                {text: "Ok",
                  onPress: () => {
                    navigation.navigate('Request Ambulance'),
                    resolve("cancel")
                  },
                },
                {text: "Cancel",
                  onPress:  () => resolve("cancel"),
                  onPress: () => navigation.navigate('Home'),
                }
              ],
              { cancelable: true } //needed?
            );
        })
    }

    const createLocationErrorAlert =  () =>{
      return new Promise((resolve) =>{
          Alert.alert(
            "Your Location Could Not Be Retreived",
            "Please Contact Emergency Services and See Information On the Following Page",

            [
              {text: "Ok",
                onPress: () => {
                  navigation.navigate('Request Ambulance'),
                  resolve("cancel")
                },
              },
              {text: "Cancel",
                onPress:  () => resolve("cancel"),
                onPress: () => navigation.navigate('Home'),
              }
            ],
            { cancelable: true } //needed?
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
          let found = false;

          const response = await fetch("https://segn350-backend.azurewebsites.net/findcarriers").catch((err) => {console.log(err)});
          const userCands = await response.json();

          setUsers(userCands);
          console.log(userCands);
          if(location){
            // get latitude and longitude from location object
            setLat(Number(location['coords']['latitude']));
            setLong(Number(location['coords']['longitude']));


            //get user data from database and put into iterable object
            //use iterator to find user that is closest (right now just finds first user who meets criteria (not closest))
            if(carrierLocation == null){
              let coord = {latitude: Number(location['coords']['latitude']), longitude: Number(location['coords']['longitude'])}

              for(let user of userCands){
                console.log(user);
                let dist = getDistance(coord, user.location);
                if(user.naloxoneQuantity > 0 && dist/1000 <= 10){
                  setcarrierTitle(user.name);
                  setcarrierName("Carrying: " + user.naloxoneQuantity + " Naloxone Doses");
                  setcLat(Number(user.location.latitude));
                  setcLong(Number(user.location.longitude));
                  setCarrierLocation(user.location);
                  found = true;
                  fetch("https://segn350-backend.azurewebsites.net/sendhelpnotification", {
                          method:'POST',
                          body: JSON.stringify({"location": String(user.location.latitude) + " " + String(user.location.longitude), "recipient": user.name}),
                          headers:{
                            "Content-Type": "application/json",
                          }
                        }).catch((err) => {console.log(err)});
                  break;
                }
              }
              if(carrierLocation != null){
                console.log("here");
              }
            }

            (async () => {
              if(found == false){
                text = await createNoCarriersAlert();
              }
            })();

          } else {
            (async () => {
              if(carrierLocation == null){
                text = await createLocationErrorAlert();
              }
            })();
          }

        })();

    }, []);


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
             {/* {determineCarrierLocation()} */}
             <Marker
                coordinate ={{
                  latitude: Number(clat),
                  longitude: Number(clong),
                }}
                key={1}>
                  {/* line below needed?? */}
                  <Callout onPress={async () => await Linking.openURL('https://www.google.ca')}>
                    <View>
                      <View style={styles.bubble}>
                          <Text style={styles.titleText}>{carrierTitle}</Text>
                          <Text style={styles.baseText}>{carrierName}</Text>
                      </View>
                    </View>
                  </Callout>
              </Marker>
             <MapViewDirections
              origin={{
                latitude: Number(lat),
                longitude: Number(long)
              }}
              destination = {carrierLocation}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth = {3}
              strokeColor = 'blue'
             />

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
