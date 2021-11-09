//Declarar variables
const nuevaTareaInput = document.getElementById("nuevaTareaInput");
const agregarBtn = document.getElementById("agregarBtn"); //boton agregar
const lista = document.getElementById("lista"); //listas de tareas
//const checkbox = document.getElementById("checkbox");
var tareas = [];
agregarBtn.addEventListener("click", function(e){
    e.preventDefault();
    const textoDeLaTarea = nuevaTareaInput.value;

    id = new Date ().getTime();

    agregarTarea(textoDeLaTarea, id); //se lee el texto de tarea y el id que es el tiempo
    
    
    var nt = {
        texto:textoDeLaTarea,
        idTarea:id
    }
    tareas.push(nt);
    tareastxt = JSON.stringify(tareas);
    localStorage.setItem("tareas", tareastxt );

} );

function agregarTarea(texto, id){ 

    const nuevoli =  document.createElement("li");

    nuevoli.setAttribute ("cakita", id);

    nuevoli.innerHTML = 
    `
    <input type="checkbox" id="checkbox">
    <label for="Tarea">${texto} </label>
    <button onclick="eliminarTarea(this)">Eliminar</button>
    `;
    lista.prepend(nuevoli);

}
function eliminarTarea(e){
    recupId = e.parentElement.getAttribute ("cakita"); //en la variable recupera el evento e
    console.log("RID",recupId)
    e.parentElement.remove();
    tareas = tareas.filter(
        t => parseInt(t.idTarea) != parseInt(recupId)
    ); //esto hace que el conjunto de tareas y si el idTarea y el recupId son distintos que se quede
    
    tareastxt = JSON.stringify(tareas);
    localStorage.setItem("tareas", tareastxt );

}
function checkbox(e){
   e.parentElement.strike();
}
//text-decoration-line: line-through;
window.onload = function(){
    t = window.localStorage.getItem("tareas");
    t = JSON.parse(t); 
    for (i=0; i<= t.length; i++){
       agregarTarea(t[i].texto, t[i].idTarea);
    }
}
