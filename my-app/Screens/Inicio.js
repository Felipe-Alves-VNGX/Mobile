import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import {Input,Button ,ListItem,Header} from 'react-native-elements';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    nome:"Marcos Andrade",
    telefone:"(81) 988553424"
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.nome}</Text>
    <Text style={[styles.title, textColor]}>{item.telefone}</Text>
  </TouchableOpacity>
);

const Inicio = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item ,navigation}) => {
    const backgroundColor = item.id === selectedId ? "gray" : "lightgray";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
        //() => setSelectedId(item.id)
      <Item
        item={item}
        onPress={()=>navigation.navigate('NovoContato')}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <Header centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize:20 } }} rightComponent={
                <Button  
                title="+" titleStyle={{ color:'#fff', fontSize:30}} 
                onPress={()=>navigation.navigate('NovoContato')}
                
                ></Button>}/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default Inicio;
// import { StyleSheet, Text, View,FlatList } from 'react-native';
// import {Input,Button ,ListItem,Header} from 'react-native-elements';

// const listaContatos = [{
//     id:1,
//     nome:"Marcos Andrade",
//     telefone:"(81) 988553424"
// },]

// const Item = ({nome}) => (
//     <View style={{flex:1}}>
//       <Text>{nome}</Text>
//     </View>
//   );

// export default function Inicio({navigation,listaContatos}) {
//     const renderItem = ({ item }) => (
//         <Item nome={item.nome}/>);
//     return (
        
//         <View style={Styles.container}>
//            <Header centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize:20 } }} rightComponent={
//                 <Button  
//                 title="+"
//                 onPress={()=>navigation.navigate('NovoContato')}
//                 ></Button>}/>
//            <FlatList
//                 data={listaContatos}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//             />
//             {//listaContatos.map((linha,i)=>(
//                 // <ListItem key={i} title={linha.nome} subtitle={linha.telefone} bottomDivider chevron/>
//                 //))
//             }
//         </View>
//     );
// };

// const Styles = StyleSheet.create({
//     container:{
//         flex:1
//     }
// })