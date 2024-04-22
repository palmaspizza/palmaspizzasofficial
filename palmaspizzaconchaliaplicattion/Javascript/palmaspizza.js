document.querySelector("#submit").addEventListener("click", e => {e.preventDefault();


  // TOTAL

const total = document.querySelector("#total").value;


// DATOS 
const nombre = document.querySelector("#nombre").value;
const telefono = document.querySelector("#telefono").value;
const formadepago = document.querySelector("#formadepago").value;
const cancelocon = document.querySelector("#cancelocon").value;
const pagacon = document.querySelector("#pagacon").value;
const direccionlugar = document.querySelector("#direccion-lugar").value;
const otro = document.querySelector("#input-otro").value;
const direccion = document.querySelector("#direccion").value;
const direccionnum = document.querySelector("#direccionnum").value;
const inputdepartamento = document.querySelector("#inputdepartamento").value;


// FORMATO
const formatopizzas = document.querySelector("#formato-pizzas").value;

// ARMA TU PIZZA
const pizzauno = document.querySelector("#input-pizza-uno").value;
const armatupizzacantidad = document.querySelector("#input-arma-tu-pizza-cantidad").value;
const armatupizzapizza = document.querySelector("#input-arma-tu-pizza-pizza").value;
const armatupizzasalsa = document.querySelector("#input-arma-tu-pizza-salsa").value;
const armatupizzaingredientes = document.querySelector("#input-ingredientes").value;
const pizzados = document.querySelector("#input-pizza-dos").value;
const armatupizzasalsados = document.querySelector("#input-arma-tu-pizza-salsa-dos").value;
const armatupizzaingredientesdos = document.querySelector("#input-ingredientes-dos").value;






// PIZZAS 
const pizzas = document.querySelector("#pizzas").value;
// ITALIANA 
const cantidaditaliana = document.querySelector("#cantidad-italiana-input").value;
const pizzaitaliana = document.querySelector("#pizza-italiana-input").value;


// HAWAIANA
const cantidadhawaiana = document.querySelector("#cantidad-hawaiana-input").value;
const pizzahawaiana = document.querySelector("#pizza-hawaiana-input").value;



// NAPOLITANA
const cantidadnapolitana = document.querySelector("#cantidad-napolitana-input").value;
const pizzanapolitana = document.querySelector("#pizza-napolitana-input").value;



// SUPER PEPPERONI
const cantidadsuperpepperoni = document.querySelector("#cantidad-superpepperoni-input").value;
const pizzasuperpepperoni = document.querySelector("#pizza-superpepperoni-input").value;


// LUCO PIZZA
const cantidadlucopizza = document.querySelector("#cantidad-lucopizza-input").value;
const pizzalucopizza = document.querySelector("#pizza-lucopizza-input").value;


// VEGETARIANA
const cantidadvegetariana = document.querySelector("#cantidad-vegetariana-input").value;
const pizzavegetariana = document.querySelector("#pizza-vegetariana-input").value;



// CHEESEBURGER
const cantidadcheeseburger = document.querySelector("#cantidad-cheeseburger-input").value;
const pizzacheeseburger = document.querySelector("#pizza-cheeseburger-input").value;



// POLLO BBQ
const cantidadpollobbq = document.querySelector("#cantidad-pollobbq-input").value;
const pizzapollobbq = document.querySelector("#pizza-pollobbq-input").value;



// CHILLIAN
const cantidadchillian = document.querySelector("#cantidad-chillian-input").value;
const pizzachillian = document.querySelector("#pizza-chillian-input").value;


const resp = document.querySelector("#respuesta");



resp.classList.remove("fail");
resp.classList.remove("send");

const url = `https://api.whatsapp.com/send?phone=56952323555&text=
*🍕=Palmas Pizza=🍕*%0A
👤 *${nombre}*%0A%0A
*☎️* +56${telefono}%0A%0A
*Forma de Pago:*%0A
*${formadepago}*%0A%0A
${cancelocon} $${pagacon}%0A
---------------------%0A
${direccionlugar}+${direccion}+${direccionnum}%0A
${inputdepartamento}+${otro}%0A
--------------------- %0A
🛎️== *PEDIDO* == 🛎️ %0A
${formatopizzas}
${pizzas}%0A
${cantidaditaliana}+${pizzaitaliana}
${cantidadhawaiana}+${pizzahawaiana}
${cantidadnapolitana}+${pizzanapolitana}
${cantidadsuperpepperoni}+${pizzasuperpepperoni}
${cantidadvegetariana}+${pizzavegetariana}
${cantidadlucopizza}+${pizzalucopizza}
${cantidadcheeseburger}+${pizzacheeseburger}
${cantidadpollobbq}+${pizzapollobbq}
${cantidadchillian}+${pizzachillian}
${armatupizzacantidad}+${armatupizzapizza}%0A%0A
${pizzauno}
${armatupizzasalsa}%0A
${armatupizzaingredientes}%0A%0A
${pizzados}%0A
${armatupizzasalsados}%0A
${armatupizzaingredientesdos}%0A
🛎️====FIN====🛎️%0A
💴 *Total:* _$${total}_%0A%0A
*Envía Este Mensaje ➡️*`


if (nombre === "" || formadepago === "" || telefono === "" || direccionlugar === "" ) {
resp.classList.add("fail");
resp.innerHTML = `Parece que faltan algunos datos; `;
return false;
}
resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = ` Pedido de ${nombre} ENVIADO`; 

window.open(url);
});


function activarBotones() {
  var botones = document.querySelectorAll(".boton-activo");
  for (var i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
      var total = document.getElementById("total");
      total.value = parseInt(total.value) + 1000;
    }
  }
}




function sumaring() {
  document.getElementById('cantidading').value++
  var cantidad = document.getElementById("cantidading").value;
  if (cantidad == 3) {
    document.getElementById("more-ing").hidden = false;
    agregarmasingredientes.play();
  }
}


function restaring2(){
  document.getElementById('2-cantidading').value--
}



function sumaring2() {
  document.getElementById('2-cantidading').value++
  var cantidad = document.getElementById("2-cantidading").value;
  if (cantidad == 3) {
    document.getElementById("2-more-ing").hidden = false;
    agregarmasingredientes.play();
  }
}


function restaring(){
  document.getElementById('cantidading').value--
}


function formatNumber(input) {
  input.value = input.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById('total').value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}



telefono.addEventListener("keyup",e=>{
  let string = e.target.value
  e.target.value = string.split("+").join("");
  e.target.value = string.split("56").join("");
  e.target.value = string.split("569").join("9");
})




direccion.addEventListener("keyup", e => {
  let string = e.target.value;
  e.target.value = string.replace(/\d/g, "");
});


inputdepartamento.addEventListener("keyup",e=>{
  let string = e.target.value
  e.target.value = string.split(" ").join("-");
})


     
function eliminarIngrediente(palabraAntigua, palabraNueva) {
var textarea = document.getElementById("input-ingredientes");
var contenido = textarea.value;
var nuevoContenido = contenido.replace(new RegExp(palabraAntigua, 'g'), palabraNueva);
textarea.value = nuevoContenido;



}


function agregarIngrediente(valor) {
var areaDeTexto = document.getElementById("input-ingredientes");
areaDeTexto.value += valor + "\n";
    }

    document.getElementById('2-cantidading').addEventListener('input', function() {
      if (this.value == 3) {
        document.getElementById('2-more-ing').hidden = false;
        
      }
    });
    function eliminarIngrediente2(palabraAntigua, palabraNueva) {
      var textarea = document.getElementById("input-ingredientes-dos");
      var contenido = textarea.value;
      var nuevoContenido = contenido.replace(new RegExp(palabraAntigua, 'g'), palabraNueva);
      textarea.value = nuevoContenido;
      
      
      
      }
    // Abre la ventana de carga automáticamente al cargar la página
    window.onload = function() {
      bienvenido.play();
      document.getElementById('carga').style.display = 'block';
      
      // Cierra la ventana de carga después de 4 segundos
      setTimeout(function() {
          document.getElementById('carga').style.display = 'none';
      }, 999999999);
  };

  function comenzarpedido() {
    document.getElementById('carga').style.display = 'none';
    seleccionaropcion.play();
  }
  function okpromocioncocacola() {
  document.getElementById("promocion-coca-cola").hidden = true;
  }

  function offpromocioncocacola() {
  document.getElementById("promocion-coca-cola").hidden = true;
  }


  function showpromocioncocacola(){
    document.getElementById("promocion-coca-cola").hidden = false;
 
  }


  let slideIndex = 1;
  showSlide(slideIndex);

  function changeSlide(n) {
    showSlide(slideIndex = n);
  }

  function showSlide(n) {
    let slides = document.querySelectorAll('.slider img');
    let dots = document.querySelectorAll('.slider-controls button');

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
  }

  setInterval(() => {
    changeSlide(slideIndex += 1);
  }, 3000);




  function eliminarFuncion() {
    var botones = document.getElementsByClassName("agregar-al-pedido-pizzas");
    for (var i = 0; i < botones.length; i++) {
      botones[i].removeAttribute("sumartodo");
    }
  }


  function unafamiliar(){
    document.getElementById("total").value = '10990';
    document.getElementById("todo").hidden = false;
    document.getElementById("pedido-vacio").hidden = true;
    document.getElementById('1-pizza-familiar').hidden= false;
    document.getElementById("pedido-vacio").hidden = true;
  }

  function unamediana(){
    document.getElementById("total").value = '8990';
    document.getElementById("todo").hidden = false;
    document.getElementById('1-pizza-mediana').hidden= false;
    document.getElementById("pedido-vacio").hidden = true;
  }





  function sumarpizzas() {
    const italianacantidad = parseInt(document.querySelector('#cantidad-italiana-input').value) || 0;
    const hawaianacantidad = parseInt(document.querySelector('#cantidad-hawaiana-input').value) || 0;
    const napolitanacantidad = parseInt(document.querySelector('#cantidad-napolitana-input').value) || 0;
    const superpepperonicantidad = parseInt(document.querySelector('#cantidad-superpepperoni-input').value) || 0;
    const vegetarianacantidad = parseInt(document.querySelector('#cantidad-vegetariana-input').value) || 0;
    const lucopizzacantidad = parseInt(document.querySelector('#cantidad-lucopizza-input').value) || 0;
    const cheeseburgercantidad = parseInt(document.querySelector('#cantidad-cheeseburger-input').value) || 0;
    const pollobbqcantidad = parseInt(document.querySelector('#cantidad-pollobbq-input').value) || 0;
    const chilliancantidad = parseInt(document.querySelector('#cantidad-chillian-input').value) || 0;
  
    const totalcantidadpizzas = italianacantidad + hawaianacantidad + napolitanacantidad + superpepperonicantidad + vegetarianacantidad + lucopizzacantidad + cheeseburgercantidad + pollobbqcantidad + chilliancantidad;
  
    document.querySelector('#cantidad-de-pizzas').value = totalcantidadpizzas;
  }


