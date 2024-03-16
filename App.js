import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from "src/StartScreen.js";
import GameScreen from "src/GameScreen.js";
import GameOverScreen from "src/GameOverScreen.js";

function createEnum(values) {
  const enumObject = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
}

gameState = createEnum(["StartScreen", "GameScreen", "GameOverScreen"]);

export default function App() {
  const [page, setPage] = useState(gameState.StartScreen)
  const [score, setScore] = useState(0);
  switch (state) {
    case gameState.StartScreen:
      return (
        <View style={styles.container}>
          <StartScreen />
        </View>
      )
    case gameState.GameScreen:
      return (
        <View style={styles.container}>
          <GameScreen />
        </View>
      )
    case gameState.GameOverScreen:
      return (
        <View style={styles.container}>
          <GameOverScreen />
        </View>
      )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#FF0000",
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
