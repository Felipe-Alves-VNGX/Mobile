import React, { useEffect,useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,View } from "react-native";
import {Input,Button,Card,Header} from 'react-native-elements';
import { useNavigation,useNavigationState } from '@react-navigation/native';
import axios from 'axios';

export default function ListaScreen({navigation}){

  const [getData, setData] = useState([]);

  useEffect(()=>{
      
      async function resgatarDados(){
          const result = await axios(
              'http://professornilson.com/testeservico/clientes',
            );
            setData(result.data);
      }
      resgatarDados();
  },[])

  return(
<View style={{flex:1}}>
  <Header
          leftComponent={
            <Button  
            title="<"
            onPress={()=>navigation.goBack()}
            ></Button>}
          centerComponent={{ text: 'Lista', style: { color: '#fff', fontSize:20 } }}
          rightComponent={
              <Button  
              title="+"
              onPress={()=>navigation.navigate('NovoContato')}
              ></Button>}
 />
 
    {/*onPress={()=>navigation.navigate('AlterarContato',{
            nome:u.nome,
            telefone:u.telefone,
            cpf:u.cpf,
            id:u.id,})} */}
    {
      getData.map((u, i) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('AlterarContato', {
            nome: u.nome,
            telefone: u.telefone,
            cpf: u.cpf,
            id: u.id,
          })}>
          <Card >
        <View key={i}>
            
              <Text>{u.nome}</Text>
              <Text>{u.telefone}</Text>
            
          </View></Card>
          </TouchableOpacity>
          
        );
      })
    
 
  
}

</View>

  )
}
const Styles = StyleSheet.create({
  container:{
      flex:1,
  },
  box:{
  marginHorizontal:10,
  marginVertical:20,
  }
})