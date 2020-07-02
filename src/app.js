import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';

import { Home } from './views';
import theme from './utils/theme';

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Home" component={Home} />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
