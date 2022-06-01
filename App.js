import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data={[
        {key:'Arturo'},
        {key:'Omar'},
        {key:'Ricardo'},
        {key:'Roberto'},
        {key:'Saul'}
      ]} renderItem={({item})=><text>{item.key}</text>}>

      </FlatList>
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
});
