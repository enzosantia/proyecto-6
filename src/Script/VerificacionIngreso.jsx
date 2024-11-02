import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import appFirebase from '../../Credenciales';

const firestore = getFirestore(appFirebase);

//validacion de Usuario admin como funcion asyncrona
export const comprobacion = async (user, navigation) => {
    //se busca dentro del servidor la seccion Admins y se balida el user ID de la misma
    try {
    const docRef = doc(firestore, `Usuarios/${user.uid}`);
    //se realiza un get de la misma informacion como promesa
    const docSnap = await getDoc(docRef);

    //se valida si la informacion existe
    if (docSnap.exists()) {
      const userData = docSnap.data();
      const isAdmin = userData.admin;

      //si el usuario es admind true
      if (isAdmin) {
        navigation.navigate('Pantalla2');
      }
      //si el usuario no es admind true
    }else {
      navigation.navigate('Pantallaprincipal'); 
    }
    //caso de error
    }catch (error) {
      console.error('error de usuario')
      //setErrors({ general: "Error al comprobar el usuario." });
    }
}

