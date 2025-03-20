import { StyleSheet, BackHandler, Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackScreenProps } from './types';
import * as React from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { Appbar } from 'react-native-paper';
import { Button } from 'react-native-paper';
import {View, Text} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

export default function TabThreeScreen({ navigation }: RootStackScreenProps<'TabThree'>) {

  return (
   // <IconButton onPress={goBack} icon="chevron-left" size={30} style={{position: 'absolute', top: 20, left: 20, zIndex: 10, backgroundColor: 'white'}} />
    <View style={styles.container}>
      {/* <MyComponent/> */}
      <Text style={styles.title}>Friend List</Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Button onPress={ () => 
        navigation.navigate('Profile', {username: 'Cindy' ,isUser: false})
        }>
        <Text style={styles.text}>Cindy</Text>
      </Button>
      <Button onPress={ () => 
        navigation.navigate('Profile', {username: 'Felix' ,isUser: false})
        }>
        <Text style={styles.text}>Felix</Text>
      </Button>
      <Button onPress={ () => 
        navigation.navigate('Profile', {username: 'Christina' ,isUser: false})
        }>
        <Text style={styles.text}>Christina</Text>
      </Button>
      <Button onPress={ () => 
        navigation.navigate('Profile', {username: 'Eloy' ,isUser: false})
        }>
        <Text style={styles.text}>Eloy</Text>
      </Button>
      <Button onPress={ () => 
        navigation.navigate('Profile', {username: 'Ustav' ,isUser: false})
        }>
        <Text style={styles.text}>Ustav</Text>
      </Button>
      <Button onPress={ () => 
        navigation.navigate('Profile', {username: 'Darren' ,isUser: false})
        }>
        <Text style={styles.text}>Darren</Text>
      </Button>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 16,
  },
});

