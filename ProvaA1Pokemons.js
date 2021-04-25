
const botao = document.querySelector('#btnAddPokemon');
const campoInput = document.querySelector('#item');


botao.addEventListener("click", function() {
    let pokemon = document.getElementById("item").value;
    document.getElementById("item").value = "";

    if (pokemon) {
        const lista = document.querySelector('#listaPokemon');        
        const item = document.createElement('li');
        const botaoLista = document.createElement('button');
        const spanItem = document.createElement('span');
        const quebraLinha = document.createElement('br');   
        
        
        quebraLinha.innerHTML = '<br>';
              

        lista.appendChild(item);        
        lista.appendChild(spanItem);  
        lista.appendChild (quebraLinha);
        lista.appendChild(botaoLista);

        lista.classList.add("animate__animated", "animate__bounceIn");
        spanItem.classList.add("fs-5","text-danger");
        spanItem.innerHTML = pokemon + " " + "<img src=" + "img/pokebola.png" + "></img>";
        item.innerHTML = "Capturado!" + " " + "<img src=" + "img/peguei-voces.png" + "></img>";
        item.classList.add("fs-5", "text-primary");
        botaoLista.classList.add("btn", "btn-outline-danger");
        botaoLista.innerHTML = "Excluir" + " " + "<img src=" + "img/pokebola-aberta.png" + "></img>";
        
                                             
        botaoLista.addEventListener("click", function() {
            lista.removeChild(item);
            lista.removeChild(spanItem);
            lista.removeChild(quebraLinha);                     
            lista.removeChild(botaoLista);
            lista.classList.remove("animate__animated", "animate__bounceIn");
            
        })        
        campoInput.focus();
        
    }
    else {
        alert("Adicione o nome de um pokemon");
    }
   
});
