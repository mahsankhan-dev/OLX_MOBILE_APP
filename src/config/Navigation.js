import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import Register from "../screens/Register";
import Email from "../screens/EmailVerify";
import Home from "../screens/Home";
import ImageLibrary from "../components/ImageLibrary";
import SellerScreen from "../components/SellerScreen";
import PostAdd from "../components/PostAdd";
import DetailScreen from "../components/DetailScreen";
import MyAdds from "../components/MyAdds";
import Chats from "../components/Chats";
import UserAccount from "../components/UserAccount";
import Notification from "../components/Notification";
import UserProfile from "../components/UserProfile";
import ImageGallery from "../components/ImageGallery";

export default function Navigation({ user }) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Email" component={user ? Home : Email} />
        <Stack.Screen name="ImageLibrary" component={ImageLibrary} />
        <Stack.Screen name="Home" component={user ? Home : LoginScreen} />
        <Stack.Screen name="SellerScreen" component={SellerScreen} />
        <Stack.Screen name="PostAdd" component={user ? PostAdd : LoginScreen} />
        <Stack.Screen
          name="DetailScreen"
          component={user ? DetailScreen : LoginScreen}
        />
        <Stack.Screen name="MyAdds" component={user ? MyAdds : LoginScreen} />
        <Stack.Screen name="Chats" component={user ? Chats : LoginScreen} />
        <Stack.Screen
          name="UserAccount"
          component={user ? UserAccount : LoginScreen}
        />
        <Stack.Screen
          name="Notification"
          component={user ? Notification : LoginScreen}
        />
        <Stack.Screen
          name="UserProfile"
          component={user ? UserProfile : LoginScreen}
        />
        <Stack.Screen
          name="ImageGallery"
          component={user ? ImageGallery : LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
