const nombre = document.getElementById("name");
const contrasena = document.getElementById("password");

console.log(nombre);
console.log(contrasena);

  const btn = document.getElementById('btn');
  const texto = document.getElementById('texto');
  btn.addEventListener('click', () => {
     texto.innerText = "Adios"; // Cambio directo
     texto.style.color = "red";
  });
