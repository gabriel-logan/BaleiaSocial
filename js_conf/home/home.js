function criaUserName() {
    const abreEscolhedor = document.querySelector('#divisao_nome-pessoal');
    const anexadorNomePessoal = document.getElementById('nome_pessoal-perfil');

    abreEscolhedor.addEventListener('click', event => {
        const nomePadrao = 'Jesus Padrão Name'
        const nameChoose = String(prompt('Digite Seu Nome: '))

        if (nameChoose == 'null') {
            anexadorNomePessoal.innerText = nomePadrao;
        } else if (nameChoose == '') {
            anexadorNomePessoal.innerHTML = nomePadrao;
        } else {
            anexadorNomePessoal.innerHTML = (nameChoose);
        }
    })
}

function anexaFotoPerfil() {
    const inputFilePerfil = document.querySelector('#input_foto-perfil');
    const enviaFotoPerfil = document.querySelector('#foto_de-perfil-anexada');
    const iconeCameraPerfil = document.querySelector('#label_foto-perfil');

    inputFilePerfil.addEventListener('input', event => {
        const imagemArmazenada = inputFilePerfil.files[0].name;

        enviaFotoPerfil.setAttribute('src', imagemArmazenada);

        enviaFotoPerfil.style.width = '100%';
        enviaFotoPerfil.style.height = '100%';
        enviaFotoPerfil.style.border = '1px solid';
        enviaFotoPerfil.style.borderRadius = '100%';

        iconeCameraPerfil.style.top = '-2.5rem';
        iconeCameraPerfil.style.left = '4rem';

        console.log(imagemArmazenada);
    });
}

function anexaFotoCapa() {
    const inputFileCapa = document.querySelector('#input_foto-capa')
    const enviaFotoCapa = document.querySelector('#foto_de-capa-anexada')
    const iconeCameraCapa = document.querySelector('#label_foto-capa')

    inputFileCapa.addEventListener('input', event => {
        const imagemArmazenada = inputFileCapa.files[0].name;

        enviaFotoCapa.setAttribute('src', imagemArmazenada)

        enviaFotoCapa.style.width = '100%';
        enviaFotoCapa.style.height = '100%';
        enviaFotoCapa.style.border = '1px solid';
        enviaFotoCapa.style.borderRadius = '100%';
    })


}

function menuClickDropDown() {
    const btnClickDropDown = document.querySelector('#dropdown_menu');
    const opnMenu = document.querySelector('#ul_menu');

    opnMenu.style.display = 'none';

    document.addEventListener('click', event => {
        const elemento = event.target;
        if (elemento === btnClickDropDown) {
            if (opnMenu.style.display === 'none') {
                opnMenu.style.display = 'grid';
            } else if (opnMenu.style.display === 'grid') {
                opnMenu.style.display = 'none';
            } else {
                console.log('Alguma coisa errada aconteceu...');
            }
        } else if (elemento !== btnClickDropDown) {
            opnMenu.style.display = 'none';
        } else {
            console.log('Alguma coisa errada aconteceu...');
        }
    })
}

function botaoSeguidores() {
    const btnClick = document.querySelector('#botao_seguir');
    const numerosSeguidores = document.querySelector('#num_seguidor');
    const mensagemSpan = document.querySelector('#mensagem_rapida');
    const valorInicial = Number(numerosSeguidores.textContent);

    btnClick.addEventListener('click', e => {

        const valor = (Number(numerosSeguidores.textContent));

        if (valor < valor + 1) {
            numerosSeguidores.innerHTML = valor + 1
            mensagemSpan.innerHTML = 'Você seguiu este usuario'
            setTimeout(e => { mensagemSpan.innerHTML = '' }, 1000)
        }

        if (valor == valorInicial + 1) {
            numerosSeguidores.innerHTML = valor - 1
            mensagemSpan.innerHTML = 'Você deixou de seguir este usuario'

        }
    })
}

function descricaoUsuario() {
    const span = document.querySelector('#conf_descricao');

    const changePlace = document.querySelector('#area_de-mudança')

    const cancelar = document.querySelector('#cancelar')

    const enviar = document.querySelector('#enviar')

    const textoImbutido = document.querySelector('#area_texto')

    const textoDigitado = document.querySelector('#texto_descricao')

    changePlace.style.display = 'none'

    document.addEventListener('click', event => {
        const element = event.target;

        if (element == span || element == textoDigitado) {
            changePlace.style.display = 'block'
        } else if (element == cancelar) {
            changePlace.style.display = 'none'
        } else if (element == enviar) {
            if (textoDigitado.value == null || textoDigitado == '') {
                changePlace.style.display = 'none'
            } else {
                textoImbutido.innerText = textoDigitado.value
                changePlace.style.display = 'none'
            }
        } else if (element != cancelar) {
            changePlace.style.display = 'none'
        } else {
            console.log(`Alguma coisa aconteceu de errado ao tentar logar a mensagem, ${textoDigitado.value}`)
        }
    })

}

function publicaConteudo() {

}

function chamaFuncoes() {
    criaUserName();
    anexaFotoCapa();
    anexaFotoPerfil();
    menuClickDropDown();
    botaoSeguidores();
    descricaoUsuario();
    publicaConteudo();
}

chamaFuncoes();