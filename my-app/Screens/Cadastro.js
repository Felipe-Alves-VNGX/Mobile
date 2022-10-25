import { StyleSheet, Text, View } from 'react-native';
import {Input,Button } from 'react-native-elements';

export default function Cadastro({navigation}) {
    return (
        <View style={Styles.container}>
           <Input label={"nome"}/>    
        <Input label={"CPF"}/>   
        <Input label={"Email"}/>
        <Input label={"Senha"} secureTextEntry={true}/>
        <Button title={"Salvar"} containerStyle={{color:red}} onPress={() => navigation.navigate('Login')}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1

    }
})