let persona = {
    nombre: "Cris",
    edad: 25,
    ciudad: "Buenos Aires",
    
    cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };
  
  // Usar el método para actualizar la ciudad
  persona.cambiarCiudad("Córdoba");
  
  // Mostrar las propiedades actualizadas en la consola
  console.log(persona);
  