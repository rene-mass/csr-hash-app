function calculateHash() {
    // Obtiene el valor del input del usuario
    const input = document.getElementById('inputString').value;
    
    // Envía una solicitudo al servidor con el string ingresado por el usuario
    fetch(`/calculate-hash?input=${encodeURIComponent(input)}`)
        .then(response => response.text()) // Convierte la respuesta en texto
        .then(hash => {
            // Muestra el hash RIPEMD-160
            document.getElementById('salidaHash').textContent = `Hash RIPEMD-160: ${hash}`;
        })
        .catch(error => {
            // En caso de error, imprime el error en la consola y muestra un mensaje
            console.error('Error:', error);
            document.getElementById('salidaHash').textContent = 'Error al calcular el hash.';
        });
}