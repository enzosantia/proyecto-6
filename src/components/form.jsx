import React from 'react';
import { Link } from 'react-router-dom';

export const Form = () => {
      const datos_usuario = ({
            usuario: '',
            correo: '',
            contrasena: '',
            DNI: '',
            recordar: false ,
      })
      return (
            <div>
                  <h1>Ingresar</h1>
                  <form action="" method="post">
                        <label for="usuario">Usuario</label><br />
                        <input type="text" name="usuario" id="usuario" /><br />
                        <label for="usuario">Correo</label><br />
                        <input type="text" name="correo" id="correo" /><br />
                        <label for="contrasena"> Contraseña </label><br />
                        <input type="password" name="contrasenia" id="contrasena" /><br />
                        <label for="contrasena"> DNI </label><br />
                        <input type="password" name="DNI" id="DNI" /><br />
                        <input type="checkbox" name="recordar_datos" value="si" id="recordar" />
                        <label for="recordar"> Recordar mis datos </label><br />

                        <input type="submit" name="sesion" id="sesion" value="Iniciar Sesion" />
                        <input type="reset" name="cancelar" id="cancelar" value="Cancelar" /> <br />

                  </form>

                  <Link to='/'  className='App-link'>
                  pant 2
                  </Link>
            </div>
      );
}

