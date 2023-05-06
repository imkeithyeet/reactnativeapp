import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fuck bitches get ass!</Text>
      <Text>This is our first project</Text>
      <Text>- Code Palace</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63c5da',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
