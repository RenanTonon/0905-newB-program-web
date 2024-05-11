const armarzem = localStorage;
const vTitulo = [];
const vCorpo = [];
function Enviara(e){
    e.preventDefault();
    
    const formData = new FormData(formes);

    const titulo = formData.get("tituloAtividade");
    const corpo = formData.get("corpoAtividade");

    vTitulo.push(titulo);
    vCorpo.push(corpo);
    // guardando dados em json no localStorege
    armarzem.setItem("titulo", JSON.stringify(vTitulo));
    armarzem.setItem("corpo", JSON.stringify(vCorpo));
    //recuperando dados do local storege
    
   
    armarzemTitulo = JSON.parse(armarzem.getItem("titulo"));
    armarzemCorpo =   JSON.parse(armarzem.getItem("corpo"));

    const ul = document.querySelector("#tarefas");

    const ultimo = armarzemTitulo.length 
    const li = document.createElement("li");
    li.textContent =  armarzemTitulo[ultimo-1] + "\n\n" + armarzemCorpo[ultimo-1];
    ul.appendChild(li);
    
}

function printValor(){
    document.addEventListener("DOMContentLoaded", function () {
        armarzemTitulo = JSON.parse(armarzem.getItem("titulo"));
        armarzemCorpo =   JSON.parse(armarzem.getItem("corpo"));

        const ul = document.querySelector("#tarefas");
        ul.innerHTML = "";
        for(i=0;i < armarzemTitulo.length;i++){
            const li = document.createElement("li");
            li.textContent = armarzemTitulo[i] + "\n\n" + armarzemCorpo[i];
            ul.appendChild(li);
        }
    })
}
printValor()