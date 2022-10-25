import { StyleSheet, Text, View } from 'react-native';
import {Input,Button } from 'react-native-elements';

export default function Inicio({navigation}) {
    return (
        <View style={Styles.container}>
           <View>
            <Text>
                Lista de contatos <Button title={"+"} onPress={() => navigation.navigate('NovoContato')}/>
            </Text>
           </View>
           <View>
            <Text onPress={() => navigation.navigate('AlterarContato')}>Marcos Andrade</Text>
            <Text>81 988553424</Text>
           </View>
           <View>
            <Text onPress={() => navigation.navigate('AlterarContato')}>Patrícia Tavares</Text>
            <Text>81 998765332</Text>
           </View>
           <View>
            <Text onPress={() => navigation.navigate('AlterarContato')}>Rodrigo Antunes</Text>
            <Text>81 987765525</Text>
           </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1

    }
})