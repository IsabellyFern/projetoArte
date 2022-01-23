import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default function Conf() {
  return (
    <View style={styles.container}>
      
      <View style={styles.testando}> 

          <Icon name="smileo" size={37} color='#886796'/>

          <View style={styles.nomes}> 
            <Text style={styles.texto}>Emily Rocha</Text>
            <Text style={styles.texto}>Isabelly Leandro</Text>
            <Text style={styles.texto}>Carina Santos</Text>
            <Text> </Text>
          </View>
          
         

      </View>
        


  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6bef2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testando: {
    backgroundColor: '#c6bef2',
    alignItems: 'center',

  },
  nomes: {
      marginTop: 40,
      alignItems: 'center',
  },
  texto:{
    fontSize: 16,
  },
});
