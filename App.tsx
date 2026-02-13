import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {

  const increaseOrDecrease = ( valor: number) => {
    setCounter( counter + valor )
  }

  const [counter, setCounter ] =useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text} >
        { counter }
      </Text>

      <FAB
        title='-1' 
        onPress= { () => increaseOrDecrease(-1) }
        onLongPress={ () => setCounter(0) }
        position='left'
      />

      <FAB
        title='+1' 
        onPress= { () => increaseOrDecrease(1) }
        onLongPress={ () => setCounter(0) }
        position='right'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 120,
    fontWeight: 'bold'
  }
});
