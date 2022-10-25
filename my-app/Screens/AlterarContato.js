import { StyleSheet, Text, View } from 'react-native';
import {Input,Button } from 'react-native-elements';

export default function AlterarContato({navigation}) {
    return (
        <View style={Styles.container}>
           <Input label={"nome"} value={"Marco Andrade"}/>    
        <Input label={"Email"} value={"mand@gmail.com"}/>
        <Input label={"Telefone"} secureTextEntry={true} value={"81 988553424"}/>
        <Button title={"Salvar"} containerStyle={{color:red}} onPress={() => navigation.navigate('Inicio')}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1

    }
})