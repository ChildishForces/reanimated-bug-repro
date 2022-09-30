import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Animated, {useAnimatedKeyboard, useAnimatedStyle} from "react-native-reanimated";

export default function App() {
  // UNCOMMENT THIS AND THE STYLE TO SEE THE PROBLEM
  // const keyboard = useAnimatedKeyboard();
  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{ translateY: -(keyboard?.height?.value ?? 0) / 2 }]
  // }), [keyboard]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" translucent />
      <Animated.View style={[styles.innerContainer, /*animatedStyle*/]}>
        <Text style={styles.text}>To test issue please uncomment useAnimatedKeyboard and uncomment style from innerContainer!</Text>
        <TextInput placeholder="Some great placeholder..." />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0080ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  }
});
