import React from 'react';

export const rara = () =>{
       return(
 <div>
        <h1>Formularios</h1>
        
        <h2>¿Autorizas a LibroWeb para utilizar tu cuenta?</h2>
        <form action="enviar.php"  method="post">
        <label for="usuario o correo">usuario o correo</label><br/>
        <input type="text" name="usuario_correo"/>
        contraseña
        <input type="password" name="contrasenia"/>
        </form>

 </div>
       );
}

