import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcom from "./screens/Welcom";
import Home from "./screens/Home";
import NFTDetails from "./screens/NFTDetails";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  const Stack = createNativeStackNavigator();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcom"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Welcom" component={Welcom} />
          <Stack.Screen name="NFT-details" component={NFTDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
