function onClick (event) {
  event.preventDefault();
 

  const mensaje = {
    comercio: document.getElementById('comercio').value,
    titular: document.getElementById('titular').value,
    celular: document.getElementById('celular').value
  }
  console.log(mensaje);


  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => { 
        console.log(json);
        Swal.fire(
            'Enviado',
            'Gracias por tu comentario',
            'success'
        );
        cleanForm();
        /* redirectUrl(); */
    })
    .catch((err) => console.log(err));

}
function cleanForm() {
  let formulario = document.getElementById('formulario');    
  formulario.reset();    
}
function redirectUrl(){
  window.location.href = "https://google.com";    
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);