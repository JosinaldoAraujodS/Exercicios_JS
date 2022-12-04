function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    // hora = 14
    if(hora>=0 && hora <12){
        // dia
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora <18){
        //tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        // noite
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }
}