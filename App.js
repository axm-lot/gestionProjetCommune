import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const id = 10;
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{textAlign:'center'}}>AXM here !</Text>
      <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>Header 1</Text>
        <Text style={styles.cell}>Header 2</Text>
        <Text style={styles.cell}>Header 3</Text>
        <Text style={styles.cell}>Header 4</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Row 1, Cell 1</Text>
        <Text style={styles.cell}>Row 1, Cell 2</Text>
        <Text style={styles.cell}>Row 1, Cell 3</Text>
        <Text style={styles.cell}>Row 1, Cell 4</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{id}</Text>
        <Text style={styles.cell}>{id+2}</Text>
        <Text style={styles.cell}>Row 2, Cell 3</Text>
        <Text style={styles.cell}>Row 2, Cell 4</Text>
      </View>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    margin: 10,
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
   },
  table: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    textAlign: 'center',
  },
});
