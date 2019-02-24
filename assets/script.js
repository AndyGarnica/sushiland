// se selecciona el elemento del documento
const sushiForm = document.querySelector('#sushi-form');
const numero = document.querySelector('#numero');
const sushi = document.querySelector('#sushi');
const sushiRoll = document.getElementById('ingrediente')
const lista = document.querySelector('#lista');

sushiForm.addEventListener('submit', function(event){
    event.preventDefault();
    const cantidad = numero.value;
    const saborSushi = sushi.value;
    const sushiValor = sushiRoll.value;

    let sushiImg
    if(saborSushi == 'salmon') {
        sushiImg = 'sushi-salmon.jpg';
    } else {
        sushiImg = 'lentes.png';
    }

lista.innerHTML += `
    <div class="seleccion-sushi">
        <h3>Pidieron ${cantidad} Sushi Roll de ${saborSushi}</h3>
        <p>Con ingrediente extra ${sushiValor}</p>
        <img src="assets/img/${sushiImg}">
        <input id="confirm-button" type="button" value="confirmar">
    </div>
`
});

// console.log(lentesForm);
// console.log(lentes.value);  // se manda llamar el valor del input lentes
// lentesForm.addEventListener('submit', function(event){
//     event.preventDefault();        // callback agregamos el evento y detiene el submit
//     console.log('hemos detenido el submit');
//     const estiloLentes = lentes.value;     // guarda el estilo de lentes que se desea pedir
//     console.log(estiloLentes);             // lista.innerHTML = 'Tus hermosos lentes son' + estiloLentes;
//     lista.innerHTML += `<p> Tus hermosos lentes son: ${estiloLentes}</p>`;
