import React,{ useEffect,useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {Button,Header } from 'react-native-elements';

export default function AlterarContato({navigation,route}) {
    [getNome,setNome] = useState();
    [getTelefone,setTelefone] = useState();
    [getId,setId] = useState();


    useEffect(()=>{
      if(route.params){
            const { nome } =  route.params 
            const { telefone } =  route.params 
            const { id } =  route.params

            setNome(nome)
            setTelefone(telefone)
            setId(id)
      }
    },[]) 

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
        <TextInput
            style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setNome(text)}
            value={getNome}
            />    
       
        <Button title={"Salvar"} containerStyle={{color:"red"}} onPress={() => navigation.goBack()}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1

    }
})