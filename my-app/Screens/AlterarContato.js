import React,{ useEffect,useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {Button,Header ,Input} from 'react-native-elements';
import axios from 'axios';
export default function AlterarContato({navigation,route}) {
    [getNome,setNome] = useState();
    [getTelefone,setTelefone] = useState();
    [getId,setId] = useState();
    [getCpf,setCpf] = useState();
    [getEmail,setEmail] = useState();

    useEffect(()=>{
      if(route.params){
            const { nome } =  route.params 
            const { telefone } =  route.params 
            const { id } =  route.params
            const { email } = route.params
            const { cpf } = route.params
            setNome(nome)
            setTelefone(telefone)
            setId(id)
            setCpf(cpf)
            setEmail(email)
      }
    },[]) 

    function excluirDados(){
      axios.delete('http://professornilson.com/testeservico/clientes/'+getId
     )
     .then(function (response) {
         setNome('')
         setTelefone('')
         setCpf('')
         setEmail('')
       console.log(response);
     })
     .catch(function (error) {
         console.log(error);
     });
 }

 async function alterarDados(){
  await axios.put('http://professornilson.com/testeservico/clientes/'+getId,{
   nome:getNome,
   cpf:getCpf,
   telefone:getTelefone,
   email:getEmail  
  }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
}

    return (
        <View style={Styles.container}>
            <Header
          leftComponent={
            <Button  
            title="<"
            onPress={()=>navigation.goBack()}
            ></Button>}
          centerComponent={{ text: 'Alterar Contato', style: { color: '#fff', fontSize:20 } }}
          />  
        <Input label={"Nome"} onChangeText={text => setNome(text)} value={getNome}/>
        <Input label={"Nome"} onChangeText={text => setCpf(text)} value={getCpf}/>
        <Input onChangeText={text => setEmail(text)} value={getEmail}/>
        <Input onChangeText={text => setTelefone(text)} value={getTelefone}/>
        <Button title={"salvar"} buttonStyle={{backgroundColor:"green"}} onPress={()=>alterarDados()}/>
        <Button title={"deletar"} buttonStyle={{backgroundColor:"red"}} onPress={()=>excluirDados()}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1

    }
})