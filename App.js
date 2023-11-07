import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { PublicRoute } from "./src/routes/routes";
import LoginScreen from "./src/pages/Login";
import MenuBeta from "./src/pages/MenuBeta";
import { Provider } from "react-redux";
import store from "./src/redux";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store()}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName={PublicRoute.login}>
           
          <Stack.Screen name={PublicRoute.login} component={LoginScreen} />

          <Stack.Screen name={PublicRoute.menuOptions} component={MenuBeta} />
        </Stack.Navigator>
      </NavigationContainer>
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
