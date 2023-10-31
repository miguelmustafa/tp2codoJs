   // Obtengo la cantidad
    
   const cantidad = definirCantidad();

   function definirCantidad(){
    const cantidadInput = document.getElementById('cantidad');
    const cantidad= cantidadInput.value;
    return cantidad;
}

     // Obtengo la categoría seleccionada
   const categoria = definirCategoria();

   function definirCategoria() {
    const categoria = (getValueById('categoria'));
    return categoria;
  }

    //obtengo el precio de la entrada general desde el h3 donde está ingresado

    const valorElement = document.getElementById('valor');

    // Obtengo el valor numérico del atributo "value" del h3 id="valor"
    const valor = parseFloat(valorElement.getAttribute('value'));
    console.log(valor);


    // Calculo el precio promocional por cada categoría por su porcentaje de descuento

    function calculoPrecio(categoria, valor) {
        let precio = '';
        if (categoria === 'estudiante') {
          precio = valor * 0.2;
        } else if (categoria === 'trainee') {
          precio = valor * 0.5;
        } else if (categoria === 'junior') {
          precio = valor * 0.85;
        }
        return precio;
      }







