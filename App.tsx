// In App.js in a new project

import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as React from "react";
import { Text, View } from "react-native";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {Array.from({ length: 100 }).map((index) => (
        <FontAwesome5 key={index} name="check" />
      ))}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [isReady, setIsReady] = React.useState(false);
  async function _loadAssetsAsync() {
    // const imageAssets = cacheImages([
    //   "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    //   require("./assets/images/circle.jpg"),
    // ]);

    const fontAssets = cacheFonts([
      FontAwesome.font,
      FontAwesome5.font,
      Ionicons.font,
    ]);

    await Promise.all([...fontAssets]);
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default App;
