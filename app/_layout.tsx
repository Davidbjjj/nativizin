import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [randomNumber, setRandomNumber] = useState<number | string | null>(null);

  const generateRandomNumber = () => {
    const minValue = parseInt(min, 10);
    const maxValue = parseInt(max, 10);
    if (!isNaN(minValue) && !isNaN(maxValue) && minValue < maxValue) {
      const random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      setRandomNumber(random);
    } else {
      setRandomNumber('Intervalo inválido');
    }
  };

  return (
    <View style={styles.container}>
     <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>🎲 Gerador de Números Aleatórios 🎲</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Valor mínimo"
        value={min}
        onChangeText={setMin}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Valor máximo"
        value={max}
        onChangeText={setMax}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
        <Text style={styles.buttonText}>Gerar Número</Text>
      </TouchableOpacity>
      {randomNumber !== null && <Text style={styles.result}>Número: {randomNumber}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFD700',
    backgroundColor: '#333',
    color: '#fff',
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
});
