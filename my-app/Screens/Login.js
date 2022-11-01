import { useEffect,useState } from 'react';
import { StyleSheet, Text, View ,} from 'react-native';
import {Input,Button ,Header} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation()
    return (
        <View style={Styles.container}>
            <Header centerComponent={{ text: 'Login', style: { color: '#fff', fontSize:20 } }}/>
            <Input label={"Email"} containerStyle={Styles.box}/>
            <Input label={"Senha"} secureTextEntry={true} containerStyle={Styles.box}/>
            <Button title={"Login"} onPress={() => navigation.navigate('Inicio')} containerStyle={Styles.box}/>
            <Button title={"Cadastre-se"} onPress={() => navigation.navigate('Cadastro')} containerStyle={Styles.box}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
    marginHorizontal:10,
    marginVertical:20,
    }
})