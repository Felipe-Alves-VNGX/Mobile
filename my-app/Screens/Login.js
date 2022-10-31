import { useEffect,useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Input,Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation()
    return (
        <View style={Styles.container}>
        <Input label={"Email"}/>
        <Input label={"Senha"} secureTextEntry={true}/>
        <Button title={"Login"} onPress={() => navigation.navigate('Inicio')}/>
        <Button title={"Cadastre-se"} containerStyle={{color:"red"}} onPress={() => navigation.navigate('Cadastro')}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1

    }
})