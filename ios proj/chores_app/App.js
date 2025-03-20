import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import { rootStore, StoreProvider } from './RootStore';

//implementation from 
import { store } from './src/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    //merge implementation from Cindy (Bad idea?)
    <Provider store={store}>
      <StoreProvider value={rootStore}>
        <Navigation />
      </StoreProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
