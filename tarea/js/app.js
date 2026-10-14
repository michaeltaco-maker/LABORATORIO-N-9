import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];
console.log(`Curso: ${curso}`);
todos.forEach(estudiante => console.log(reporte(estudiante)));
document.querySelector("#curso").textContent = `Curso: ${curso}`;
const ulReportes = document.querySelector("#reportes");
todos.forEach(estudiante => {
  ulReportes.innerHTML += `<li>${reporte(estudiante)}</li>`;
});