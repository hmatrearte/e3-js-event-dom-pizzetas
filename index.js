const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const buscadorForm = document.getElementById("buscadorForm");
const resultadoDiv = document.getElementById("resultado");

buscadorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const idInput = document.getElementById("idInput");
  const id = parseInt(idInput.value);

  if (!isNaN(id)) {
    const pizzaEncontrada = pizzas.find((pizza) => pizza.id === id);
    resultadoDiv.innerHTML = "";

    if (pizzaEncontrada) {
      const pizzaElement = document.createElement("div");
      pizzaElement.innerHTML = 
        `<h2>${pizzaEncontrada.nombre}</h2>
        <p>Precio: $${pizzaEncontrada.precio}</p>
        <img src="${pizzaEncontrada.imagen}" alt="${pizzaEncontrada.nombre}" width="150">`;
      resultadoDiv.appendChild(pizzaElement);
    } 
    else {
      resultadoDiv.textContent = "No se encontró ninguna pizza, proba ingresando otro número";
    }
  } 
});


