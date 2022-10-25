import { StyleSheet, Text, View } from 'react-native';
import {Input,Button } from 'react-native-elements';

export default function NovoContato({navigation}) {
    return (
        <View style={Styles.container}>
           <Input label={"nome"}/>    
        <Input label={"Email"}/>
        <Input label={"Telefone"} secureTextEntry={true}/>
        <Button title={"Salvar"} containerStyle={{color:red}} onPress={() => navigation.navigate('Inicio')}/>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1

    }
})