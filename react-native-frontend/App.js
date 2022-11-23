import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, IconButton } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import UserProfile from './screens/UserProfile';
import RequestAmbulance from './screens/RequestAmbulance';
import LocateNaloxoneCarriers from './screens/LocateNaloxoneCarriers';
import LocateNaloxoneSuppliers from './screens/LocateNaloxoneSuppliers';
import Share from './screens/Share';
import TipsDisplay from './screens/TipsDisplay';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor:'#393939'}}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="User Profile" component={UserProfile}/>
          <Stack.Screen name="Request Ambulance" component={RequestAmbulance}/>
          <Stack.Screen name="Locate Naloxone Carriers" component={LocateNaloxoneCarriers}/>
          <Stack.Screen name="Locate Naloxone Suppliers" component={LocateNaloxoneSuppliers}/>
          <Stack.Screen name="Share" component={Share}/>
          <Stack.Screen name="Tips Display" component={TipsDisplay} 
          options={{
          headerLeft: () => (
            <IconButton icon = 'arrow-left' iconColor = '#1b1b1b'onPress={()=>{navigation.navigate('Home')}}/>
          ),
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

