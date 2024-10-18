import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const PersonalInfo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles. container}>
      <Image
        style={styles.avatar}
        source={require('../assets/SofyanAmrabat.jpg')}
      />
      <View style={[styles.infoContainer, { backgroundColor: theme.secondary }]}>
        <Text style={[styles.name, { color: theme.text }]}>Tu Nombre</Text>
        <Text style={[styles.description, { color: theme.text }]}>
          Breve descripción sobre ti y tus habilidades.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  infoContainer: {
    padding: 20,
    width: '80%',
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default PersonalInfo;