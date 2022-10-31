import { useEffect,useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {Input,Button } from 'react-native-elements';

export default function AlterarContato({navigation,route}) {
    const [getItem,setItem] = useState();
    useEffect(()=>{
        if(route.params){
            const {item} = route.params
            setItem(item)
            console.log(getItem)
        }
    })
    return (
        <View style={Styles.container}>
        <Text>{getItem}</Text>
        <Input label={"nome"} />    
        <Input label={"Telefone"} secureTextEntry={true} />
        <Button title={"Salvar"} containerStyle={{color:"red"}} onPress={() => navigation.navigate('Inicio')}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1

    }
})