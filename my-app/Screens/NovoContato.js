import { StyleSheet, Text, View } from 'react-native';
import {Input,Button,Header } from 'react-native-elements';

export default function NovoContato({navigation}) {
    return (
        <View style={Styles.container}>
 <Header
          leftComponent={
            <Button  
            title="<"
            onPress={()=>navigation.goBack()}
            ></Button>}
          centerComponent={{ text: 'Novo Contato', style: { color: '#fff', fontSize:20 } }}
          
 />

           <Input label={"nome"} containerStyle={Styles.box}/>    
        <Input label={"Email"} containerStyle={Styles.box}/>
        <Input label={"Telefone"} containerStyle={Styles.box}/>
        <Button title={"Salvar"} buttonStyle={{backgroundColor:"green"}} onPress={() => navigation.navigate('Inicio')} containerStyle={Styles.box}/>
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