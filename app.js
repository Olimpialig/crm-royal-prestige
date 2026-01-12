let datos = JSON.parse(localStorage.getItem("crm")) || [];
const tabla = document.getElementById("tabla");

function render() {
  tabla.innerHTML = "";
  datos.forEach(d => {
    tabla.innerHTML += `
      <tr>
        <td>${d.nombre}</td>
        <td>${d.telefono}</td>
        <td>${d.provincia}</td>
      </tr>
    `;
  });
}

document.getElementById("crmForm").addEventListener("submit", e => {
  e.preventDefault();

  const cliente = {
    nombre: nombre.value,
    telefono: telefono.value,
    provincia: provincia.value
  };

  datos.push(cliente);
  localStorage.setItem("crm", JSON.stringify(datos));
  render();
  e.target.reset();
});

render();

