import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';

export const Encab = () => {

  // constates de opcions del menu
  const [menuUser, setmenuUser] = useState(false);
  const [menuOption, setmenuOption] = useState(false);

  // variables de axion al precionar una imagen
  const presUser = () => setmenuUser(!menuUser);
  const presSeting = () => setmenuOption(!menuOption);

  return (
    <View style={styles.container}>
      {/* menu de usuario */}
      <TouchableOpacity onPress={presUser} style={[styles.menubutton, { top: 20, left: 20 }]}>
        <Image
          source={require('../../assets/user.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      {menuUser && (
        <View style={[styles.despliege, { top: 70, left: 50 }]}>
          <Text style={styles.menuitem}>Cerrar secion</Text>
        </View>
      )}

      {/* menu opciones */}
      <TouchableOpacity onPress={presSeting} style={[styles.menubutton, { top: 20, right: 20 }]}>
        <Image
          source={require('../../assets/settings.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      {menuOption && (
        <View style={[styles.despliege, { top: 70, right: 50 }]}>
          <Text style={styles.menuitem}>Modo oscuro</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  menubutton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  despliege: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
  },
  menuitem: {
    paddingVertical: 5,
  },
});