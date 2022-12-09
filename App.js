import { LogBox, StyleSheet, View } from "react-native";
import Navigation from "./src/config/Navigation";
import React, { useEffect, useState } from "react";
import UserProvider from "./src/context/UserProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const App = () => {
  const [user, setUser] = useState();
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
        console.log("user found");
      } else {
        console.log("user not found");
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <UserProvider>
        <Navigation user={user} />
      </UserProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
