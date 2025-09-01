import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [screen, setScreen] = useState('inicio');
  const [tipo, setTipo] = useState('Galinha');
  const [valor, setValor] = useState('');

  const salvar = () => {
    console.log(`Salvando compra: ${tipo} - ${valor}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Button title="Inicio" onPress={() => setScreen('inicio')} />
        <Button title="Compra" onPress={() => setScreen('compra')} />
      </View>
      {screen === 'inicio' ? (
        <Text>Bem-vindo</Text>
      ) : (
        <View style={styles.form}>
          <Text>Tipo de compra</Text>
          <Picker selectedValue={tipo} onValueChange={(itemValue) => setTipo(itemValue)} style={styles.picker}>
            <Picker.Item label="Galinha" value="Galinha" />
            <Picker.Item label="Galo" value="Galo" />
            <Picker.Item label="Pato" value="Pato" />
            <Picker.Item label="Pata" value="Pata" />
            <Picker.Item label="Ração" value="Ração" />
          </Picker>
          <TextInput
            style={styles.input}
            value={valor}
            onChangeText={setValor}
            placeholder="Valor"
            keyboardType="numeric"
          />
          <Button title="Salvar" onPress={salvar} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 50 },
  menu: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 20 },
  form: { width: '80%' },
  picker: { width: '100%', height: 50 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 10, marginBottom: 10 },
});
