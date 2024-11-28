import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { collection, onSnapshot, getFirestore } from 'firebase/firestore';
import { database } from '../../Credenciales.jsx'; // Importa desde tu archivo Credenciales.jsx

// conexion a la base de datos
const firestore = getFirestore(database);

export default function ListarAdmis() {
    const [users, setusers] = useState([]);

    useEffect(() => {
        const usersCollection = collection(firestore, 'Usuarios'); //se guardan los datos de los usuarios 
        const unsubscribe = onSnapshot(usersCollection, (querySnapshot) => {// se usa para leer la coleccion de usarios
            const users = [];
            querySnapshot.forEach((doc) => {
                const { rol, email } = doc.data();//capturas los datos del rol y email
                console.log(rol, email);  // Verifica los datos recibidos porque no recibia datos de firebase
                if (rol === '1') {
                    users.push({
                        id: doc.id,
                        email,
                    });
                }
            });
            setusers(users);// se guardan los datos para despues devolverlos
        });
    
        return () => unsubscribe();
    }, []);
    

    const style = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#f0f8ff",
        },
        form: {
            margin: 20,
            padding: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 10, height: 10 },
            shadowOpacity: 0.5,
            shadowRadius: 6,
            elevation: 5,
        },
        scrollView: {
            height: 300,
            overflow: 'auto',
        },
        userContainer: {
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '12vh',
        },
    });

    return (
        <View style={style.container}>
            <View style={style.form}>
                <Text style={style.modificaruser}>Lista de Administradores</Text>
                <View style={style.scrollView}>
                    {users.map((user) => (
                        <View style={style.userContainer} key={user.id}>
                            <ListItem bottomDivider>
                                <ListItem.Chevron />
                                <ListItem.Content>
                                    <ListItem.Title>{user.email}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        </View>
                    ))} 
                </View>
            </View>
        </View>
    );
}