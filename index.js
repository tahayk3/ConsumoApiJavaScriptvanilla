const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      
      const data = JSON.parse(this.response);
      const contenedor  = document.getElementById('contenedor');
      contenedor.setAttribute('class', 'card-columns');

      data.forEach((users) => {

      const tarjeta = document.createElement('div');
      tarjeta.setAttribute('class', 'card');

      const cabeceraTarjeta = document.createElement('div');
      cabeceraTarjeta.setAttribute('class', 'card-header');

      const cuerpoTarjeta = document.createElement('div');
      cuerpoTarjeta.setAttribute('class', 'card-body');

      const titulo = document.createElement('h5');
      titulo.setAttribute('class', 'card-title');
      titulo.textContent = users.username;

      users.email = users.email.substring(0, 250);

      const descripcion = document.createElement('p');
      descripcion.setAttribute('class', 'card-text');
      descripcion.textContent = `${ users.email }...`;

      contenedor.appendChild(tarjeta);

      tarjeta.appendChild(cabeceraTarjeta);
      tarjeta.appendChild(cuerpoTarjeta);

      cabeceraTarjeta.appendChild(titulo);
      
      cuerpoTarjeta.appendChild(descripcion);
      });
    } else {
      
        const contenedor = document.getElementById('contenedor');
        const mensajeError = document.createElement('div');

        mensajeError.setAttribute('class', 'alert alert-danger');
        mensajeError.textContent = `Ha ocurrido un error con código ${request.status}`;

        contenedor.appendChild(mensajeError);
    }
  }

request.send();



    






