import React, { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View, Image, Switch } from 'react-native';
import QRCodeComponent from './components/QRCodeComponent';

const lightTheme = {
  backgroundColor: '#f0f0f0',
  textColor: '#333333',
  accentColor: '#4a90e2',
  secondaryColor: '#e0e0e0',
};

const darkTheme = {
  backgroundColor: '#333333',
  textColor: '#f0f0f0',
  accentColor: '#61dafb',
  secondaryColor: '#555555',
};

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.topContainer}>
        <Text style={[styles.firsttoprowContainer, { color: theme.textColor, backgroundColor: theme.accentColor }]}>Mi Portfolio</Text>
        <View style={[styles.rowTopSecondContainer, { backgroundColor: theme.secondaryColor }]}>
          <Pressable style={styles.buttonruta} onPress={() => setDisplayMyQR(true)}>
            <Text style={{...styles.buttonText, color: theme.textColor}}>Mi info</Text>
          </Pressable>
          <Pressable style={styles.buttonruta} onPress={() => setDisplayMyQR(false)}>
            <Text style={{...styles.buttonText, color: theme.textColor}}>Mi Repo</Text>
          </Pressable>
        </View>
      </View>
      {
        displayMyQR ?
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
              <Image style={styles.avatar} source={require('./assets/94848171.gif')}></Image>
              <View style={[styles.descriptionBox, { backgroundColor: theme.secondaryColor }]}>
                <Text style={[styles.descriptionTitle, { color: theme.textColor }]}>
                  Sobre mí
                </Text>
                <Text style={{ color: theme.textColor }}>
                  Soy un alumno que desea algun día ser desarrollador, con muy buenas ideas innovadoras para un futuro mejor.
                </Text>
              </View>
            </View>
            <Text style={[styles.sectionTitle, { color: theme.textColor }]}>
              Mis pasiones:
            </Text>
            <View style={styles.passionContainer}>
              {['Programación', 'Diseño UX/UI', 'Competir a tenis', 'Senderismo', 'Jugar a videojuegos', 'Desarrollo de ideas'].map((passion, index) => (
                <View key={index} style={[styles.passionItem, { backgroundColor: theme.accentColor }]}>
                  <Text style={[styles.passionText, { color: theme.backgroundColor }]}>{passion}</Text>
                </View>
              ))}
            </View>
            <Text style={[styles.sectionTitle, { color: theme.textColor }]}>
              Proyectos destacados:
            </Text>
            <View style={styles.projectContainer}>
              {['App para organizar tareas', 'Plataforma de gestión de una veterinaria', 'Réplica de una calculadorar'].map((project, index) => (
                <View key={index} style={[styles.projectItem , { backgroundColor : theme.accentColor }]}>
                  <Text style={[styles.projectText, { color: theme.backgroundColor }]}>{project}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
          :
          <View style={styles.bodystails}>
            <View style={styles.CentrarcodigoQR}>
              <QRCode value="https://github.com/adhernea" />
            </View>
          </View>
      }
      <View style={styles.themeToggleContainer}>
        <Text style={{ color: theme.textColor }}>Modo oscuro:</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    height: '15%',
    paddingTop: 50,
    width: '100%',
  },
  firsttoprowContainer: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
  },
  rowTopSecondContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonruta: {
    width: '50%',
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bodystails: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%',
    padding: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descriptionBox: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '70%',
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  passionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  passionItem: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '40%',
  },
  passionText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  projectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  projectItem: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '40%',
  },
  projectText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  CentrarcodigoQR: {
    justifyContent: 'center',
    borderWidth: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  themeToggleContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});