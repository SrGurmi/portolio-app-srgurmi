import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const InterestsList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>Cosas que me gustan:</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={[styles.item, { color: theme.text }]}>Salir a pasear</Text>
        <Text style={[styles.item, { color: theme.text }]}>Senderismo</Text>
        <Text style={[styles.item, { color: theme.text }]}>Ir a la playita</Text>
        <Text style={[styles.item, { color: theme.text }]}>Domingos de misa</Text>
        <Text style={[styles.item, { color: theme.text }]}>La guitarrita</Text>
        <Text style={[styles.item, { color: theme.text }]}>El monte con lluvia</Text>
        <Text style={[styles.item, { color: theme.text }]}>Viajar</Text>
        <Text style={[styles.item, { color: theme.text }]}>Música variadita</Text>
        <Text style={[styles.item, { color: theme.text }]}>Anime</Text>
        <Text style={[styles.item, { color: theme.text }]}>Ducharme</Text>
        <Text style={[styles.item, { color: theme.text }]}>Videojuegos</Text>
        <Text style={[styles.item, { color: theme.text }]}>Ir de cenar romántica</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderColor: theme.text,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});

export default InterestsList;