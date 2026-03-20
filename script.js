//Variaveis

const botoes = document.querySelectorAll('.btn-cor');
const botaoRandom = document.getElementById('btn-random');
const botaoHexa = document.getElementById('btn-hexa');

const hexaInput = document.getElementById('hexaInput');
const colorInput = document.getElementById('colorInput');



//Eventos

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        trocarCor( botao.dataset.color );
    } )
});

botaoRandom.addEventListener('click', corAleatoria);
hexaInput.addEventListener('input', (e) => {

    //Elimina o # do input caso o usuario o digite/cole.
    let valorLimpo = e.target.value.replace('#', '');
    hexaInput.value = valorLimpo.toUpperCase();
});

botaoHexa.addEventListener('click', corHexa);
colorInput.addEventListener('input', mudarColorInput)


//Funções

function trocarCor(cor){
    document.body.style.backgroundColor = cor;
    
    //Salva a cor selecionada no local storage
    localStorage.setItem('corFundo', cor);
    
}

function corAleatoria(){
    //Gera códigos rgb aleatórios entre 0 e 255
    
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    
    const corAleatoria = `rgb(${red}, ${green}, ${blue})`
    
    trocarCor(corAleatoria)
}

function corHexa(){
    const corHexa = '#' + hexaInput.value;
    trocarCor(corHexa);
}

function mudarColorInput() {
    const corInputColor = colorInput.value;
    trocarCor(corInputColor);
}

function carregarCor(){
    const corLocalStorage = localStorage.getItem('corFundo');
    
    if(corLocalStorage) {
        document.body.style.backgroundColor = corLocalStorage;
    }
    
}

carregarCor(); //Carrega a cor salva no local storage

