import 'react-native-gesture-handler';
import React from 'react';
import Login from './feature/login';
import PostList from './feature/postlist';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen name="PostList" component={PostList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
