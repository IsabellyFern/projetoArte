import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
 
 
export default function Index({ navigation }) {
 
  navigation.setOptions({
    headerTitle: 'Leonardo Da Vinci'
 })
 
  return (
 
    <ScrollView style={styles.container}>
      <Image
       source={require('../../imagens/cidade1.png')}
       style={styles.image}
       resizeMode="cover"
       />
      <View>
           <Text style={[styles.title, { fontSize: 30 } ]}>Leonardo Da Vinci</Text>
          </View>
          <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 24 } ]}>1452-1519</Text>
          </View>
      <View style={styles.textContent}>
          <Text style={styles.textContent}>
            Foi um pintor italiano e um dos maiores gênios de seu tempo. A tela "Mona Lisa", verdadeira obra-prima, o notabilizou como um dos principais pintores da Renascença.
          </Text>
          <Text style={styles.textContent}>
            Muitas de suas obras se perderam ou ficaram inacabadas. Conhecem-se apenas 12 telas de Leonardo de autenticidade reconhecida, sendo visível a importância que o artista concedeu aos contrastes entre luz e sombra e principalmente ao movimento.
          </Text>
          <Text style={styles.textContent}>
            Foi na pintura que da Vinci mais se destacou, porém foi genial em diversos campos, como engenharia, arquitetura, urbanismo, mecânica, cartografia, balística, hidráulica, anatomia etc.
          </Text>
          <Text style={styles.textContent}>
            - Obras mais famosas: Mona Lisa e A última ceia.
          </Text>
        </View>
        <Image
        source={require('../../imagens/cidade1.png')}
        style={styles.image}
        resizeMode="cover"
       />
       <Image
        source={require('../../imagens/cidade1.png')}
        style={styles.image}
        resizeMode="cover"
       />
     
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#c6bef2',
  },
  image:{
    width: '100%',
    resizeMode: 'contain',
    height: 325,
    marginTop: '5%'
  },
  title: {
    textAlign: 'center',
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '4%',
    paddingHorizontal: '1%',
  },
});
