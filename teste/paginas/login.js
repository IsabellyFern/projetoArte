import { StatusBar } from 'expo-status-bar';
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


export default function Login() { 
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.icone}>
        <Icon name="smileo" size={37} color='#886796'/>
     </View>
      <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => {
          navigation.navigate('Home');
          }}
          >
          <View />
          <Text style={styles.buttonTextStyle}>
            Vamos lá!
          </Text>
      </TouchableOpacity>




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
  icone: {
     marginBottom: 30,
   },
   buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#55585b',
    borderWidth: 0.5,
    borderColor: '#55585b',
    height: 35,
    borderRadius: 30,
    margin: 5,
  },
  buttonTextStyle: {
    color: '#c6bef2',
    fontSize: 12,
    margin: 10,
    padding: 10,
  },
});


