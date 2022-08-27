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

let url = 'https://api.openweathermap.org/data/2.5/weather?lat=-24.183241513577308&lon=-65.3312335299548&appid=a2a967f20fda739b027a2e0aa283722b&lang=es&units=metric';


//solicitud
fetch(url)
  .then(response => response.json())  //resuelve la promesa, entonces lo maneja con un json()
  .then(data => mostrarData(data))  //aqui maneja los datos, llama la funcion pasando como parametro data
  .catch(error => console.log(error))  //en caso de error dispara el catch


const mostrarData = (data)=>{
  console.log(data);
  
   let city = data['name'];
   let temp = data['main']['temp'];
   let time = data['weather'][0]['description'];

   let body = '';
  
    body+= `<tr><td> ${city} </td><td> ${temp} </td><td> ${time} </td></tr>`
  
  // document.getElementById('temperatura').innerHTML = temp;
  document.getElementById('data').innerHTML = body;
}