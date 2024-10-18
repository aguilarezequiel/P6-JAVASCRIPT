let libro = {
    titulo: "1984",
    autor: "George Orwell",
    año: 1949,
    
    esAntiguo: function() {
      let añoActual = new Date().getFullYear();
      return (añoActual - this.año) > 10;
    }
  };
  
  // Determinar si el libro es antiguo o reciente
  if (libro.esAntiguo()) {
    console.log("El libro es antiguo.");
  } else {
    console.log("El libro es reciente.");
  }
  