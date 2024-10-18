import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const Header = ({ setDisplayMyQR }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.header, { backgroundColor: theme.primary }]}>
      <Text style={[styles.title, { color: theme.text }]}>Mi Portfolio App</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setDisplayMyQR(true)}>
          <Text style={[styles.buttonText, { color: theme.text }]}>Mi info</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setDisplayMyQR(false)}>
          <Text style={[styles.buttonText, { color: theme.text }]}>Mi Repo</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={toggleTheme}>
          <Text style={[styles.buttonText, { color: theme.text }]}>Cambiar Tema</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default Header;