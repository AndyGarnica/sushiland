// se selecciona el elemento del documento
const sushiForm = document.querySelector('#sushi-form');
const numero = document.querySelector('#numero');
const sushi = document.querySelector('#sushi');
// const sushiRoll = document.getElementById('ingrediente');
const lista = document.querySelector('#lista');

sushiForm.addEventListener('submit', function(event){
    event.preventDefault();
    const cantidad = numero.value;
    const saborSushi = sushi.value;
    // const sushiValor = sushiRoll.value;


// Agregando imagen al pedido
    let sushiImg
    if(saborSushi == 'salmon') {
        sushiImg = 'sushi-salmon.jpg';
    } else if(saborSushi == 'camaron'){
        sushiImg = 'camaron.jpg';
    } else if(saborSushi == 'atun'){
        sushiImg = 'atun.jpg';
    }

// Agregando los detalles del pedido al html
lista.innerHTML += `
    <div class="seleccion-sushi">
        <h3>${cantidad} Sushi Roll de ${saborSushi}</h3>
        <img class="img-sushiland" src="assets/img/${sushiImg}">
        <input id="confirm-button" type="button" value="confirmar">
    </div>
`
});

        // <p>Con ingrediente extra ${sushiValor}</p>
