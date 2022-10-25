import { StyleSheet, Text, View } from 'react-native';
import {Input,Button } from 'react-native-elements';

export default function Login({navigation}) {
    return (
        <View style={Styles.container}>
        <Input label={"Email"}/>
        <Input label={"Senha"} secureTextEntry={true}/>
        <Button title={"Login"} onPress={() => navigation.navigate('Inicio')}/>
        <Button title={"Cadastre-se"} containerStyle={{color:red}} onPress={() => navigation.navigate('Cadastro')}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1

    }
})