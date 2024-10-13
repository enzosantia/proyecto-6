import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const AdministratorsScreen = () => {
  const [administrators, setAdministrators] = useState([]);
  const [selectedAdministrator, setSelectedAdministrator] = useState(null);

  useEffect(() => {
    // Llamar a la API para obtener la lista de administradores
    fetch('https://api.example.com/administrators')
      .then(response => response.json())
      .then(data => setAdministrators(data));
  }, []);

  const handleSelectAdministrator = (administrator) => {
    setSelectedAdministrator(administrator);
  };

  const handleDeleteAdministrator = () => {
    // Llamar a la API para eliminar el administrador seleccionado
    fetch(`https://api.example.com/administrators/${selectedAdministrator.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        // Actualizar la lista de administradores
        setAdministrators(administrators.filter((admin) => admin.id !== selectedAdministrator.id));
        setSelectedAdministrator(null);
      });
  };

  return (
    <View>
      <FlatList
        data={administrators}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectAdministrator(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedAdministrator && (
        <TouchableOpacity onPress={handleDeleteAdministrator}>
          <Text>Eliminar {selectedAdministrator.name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AdministratorsScreen;