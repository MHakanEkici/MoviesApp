import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MovieDetail from '../pages/MovieDetail';
import Movies from '../pages/Movies';
import routes from './routes';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.MOVIES_PAGE}
          component={Movies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.MOVIE_DETAIL_PAGE}
          component={MovieDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
