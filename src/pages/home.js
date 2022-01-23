import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'


const App = () => {
  const navigation = useNavigation();
  return (
        <View style={styles.container}>

          <View > 
            <Text style={styles.texto}>Escolha um artista:</Text>
          </View>
          <View style={styles.agrupamento}>
                <Icon name="smileo" size={30} color='#886796' />
                <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                navigation.navigate('Leonardo');
                }}
                >
                <View  />
                <Text style={styles.buttonTextStyle}>
                  Lenardo da Vinci
                </Text>
              </TouchableOpacity>
          </View> 

          <View style={styles.agrupamento}>
                <Icon name="smileo" size={30} color='#886796'/>
                <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                navigation.navigate('Tarsila');
                }}
                >
                <View  />
                <Text style={styles.buttonTextStyle}>
                  Tarsila do Amaral
                </Text>
              </TouchableOpacity>
          </View> 
          
          <View style={styles.agrupamento}>
                <Icon name="smileo" size={30} color='#886796'/>
                <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                navigation.navigate('Vicent');
                }}
                >
                <View  />
                <Text style={styles.buttonTextStyle}>
                  Vicent Van Gogh
                </Text>
              </TouchableOpacity>
          </View> 
          
          <View style={styles.agrupamento}>
                <Icon name="smileo" size={30} color='#886796'/>
                <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                navigation.navigate('Maria');
                }}
                >
                <View  />
                <Text style={styles.buttonTextStyle}>
                  Maria Auxiliadora
                </Text>
              </TouchableOpacity>
          </View> 
          
          
          


        </View> 

      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c6bef2',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#55585b',
    borderWidth: 0.5,
    borderColor: '#55585b',
    height: 50,
    borderRadius: 60,
    margin: 5,
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 15,
    padding: 20,
  },
  agrupamento:{
    alignItems: 'center',
    flexDirection: 'row',
    margin: 2,
    

  },
  testando: {
    backgroundColor: '#c6bef2',

  },
  texto: {
    margin: 10,
    marginBottom: 80,
    marginTop: 100,
    fontSize: 20,
  },

});

export default App;