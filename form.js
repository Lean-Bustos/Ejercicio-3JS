const pizzas = [

    {
        id: 1,
        nombre: 'Muzzarella',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'olivas'],
        precio: 600,
        img: ['./img/muzzarella.jpg'],
    },

    {
        id: 2,
        nombre: 'Fugazzeta',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'cebolla caramelizada', 'aceite de oliva'],
        precio: 800,
        img: ['./img/fugazzeta.jpg'],
    },

    {
        id: 3,
        nombre: 'Rúcula',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'rúcula', 'jamon crudo', 'parmesano', 'aceite de oliva', 'aceto'],
        precio: 900,
        img: ['./img/rucula.jpg'],
    },

    {
        id: 4,
        nombre: 'Calabresa',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'calabreza', 'olivas'],
        precio: 900,
        img: ['./img/calabresa.jpg'],
    },

    {
        id: 5,
        nombre: 'Especial',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'jamon cocido', 'morron', 'aceitunas'],
        precio: 600,
        img: ['./img/especial.jpg'],
    },

    {
        id: 6,
        nombre: 'Napolitana',
        ingredientes: ['salsa de tomate', 'queso muzzarella', 'tomates en rodajas', 'albahaca', 'aceitunas'],
        precio: 800,
        img: ['./img/napolitana.jpg']
    }
]

const form = document.getElementById('form');
const input = document.getElementById('input');
const comanda = document.getElementById('section-pedido')

const objetoPizza = JSON.parse(localStorage.getItem("Producto"));

if (objetoPizza){ 
    const renderProducto =  
                `<div class="card-container">
                <h2 class="titulo-card">${objetoPizza.nombre}</h2>
                <img class="img-card" src="${objetoPizza.img}" alt"img" >
                <h3 class="precio-card">$${objetoPizza.precio}</h3>
                <p class="p-card"> ${objetoPizza.ingredientes} </p>
                </div>`

    comanda.innerHTML = renderProducto;
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const ingresoId = Number(input.value);
   
    const encargo = pizzas.filter(pizza => ingresoId === pizza.id);

    if( input.value === ''){
        const ingresarAlgo = 
        `<div class="card-container">
        <h2 class="error-ingreso">
        Debes ingresar un valor
        para hacer tu Pedido 
        </h2>
        </div>`
        comanda.innerHTML = ingresarAlgo
        localStorage.clear();

    } else if(!encargo[0]){
        const ingresoInvalido =
         `<div class="card-container">
        <h2 class="error-ingreso">
        Los Sentimos!!
        Ese Producto No esta en nuestra Lista
         </h2>
         </div>`
        comanda.innerHTML = ingresoInvalido
        localStorage.clear();

    } else{        
            const renderPizzaYPrecio =  
            `<div class="card-container">
            <h2 class="titulo-card">${encargo[0].nombre}</h2>
            <img class="img-card" src="${encargo[0].img}" alt"img" >
            <h3 class="precio-card">$${encargo[0].precio}</h3>
            <p class="p-card"> ${encargo[0].ingredientes} </p>
            </div>`
        comanda.innerHTML = renderPizzaYPrecio;
        }

        form.reset();

        localStorage.setItem("Producto", JSON.stringify(encargo[0]));
})


// 👉 Crear un archivo HTML que contenga un contenedor en el cual se renderice una card en la que deberán renderizar el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). Además, deberán renderizar el mismo input de tipo number y botón de la entrega anterior.

// Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input.

// los errores no se guardan en el LS).

// ¿Cuál es el desafío final?
// Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página.


// 🆙 Entregar el link de Github , en el cual debe estar linkeado el deploy del Vercel de su aplicación (mediante Github nosotros deberíamos poder ver el Vercel vinculado a su repositorio). 