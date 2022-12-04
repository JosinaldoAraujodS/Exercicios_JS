function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var frmano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (frmano.value.length == 0 || frmano.value > ano) {
        alert('Errou')
    } else {
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(frmano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''

        //ERRO EM ALGUM LUGAR
        // if(fsex[0].checked == true){
        //     genero = 'ômi'
        // }else if(fsex[1].checked == true){
        //     genero = 'mulé'
        // }

        if(document.getElementById('masc').checked){
            genero = 'ômi'
        }else if(document.getElementById('fem').checked){
            genero = 'mulé'
        }

        var faixa = ''
        if (idade <= 10){
            faixa = 'criança'
        }else if(idade <= 21){
            faixa = 'jovem'
        }else if(idade <= 50){
            faixa = 'adulto'
        }else{
            faixa = 'idoso'
        }

        res.innerHTML = `Idade igual a ${idade}, ${genero} e é ${faixa}.`
        //adicionar tag/elemento
        // res.appendChild(img)
    }
}