
function teste(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/airedale/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste();

function teste1(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/akita/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem1").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste1();

function teste2(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/appenzeller/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem2").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste2();

function teste3(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/beagle/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem3").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste3();

function teste6(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/chow/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem6").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste6();

function teste7(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/cockapoo/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem7").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste7();

function teste10(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/husky/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem10").src = animais;
            console.log(animias);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste10();

function teste11(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/pembroke/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem11").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste11();

function teste12(){
    var animais= null;
    fetch("https://dog.ceo/api/breed/maltese/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem12").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste12();

function teste13(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/papillon/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem13").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste13();

function teste15(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/pug/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem15").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste15();

function teste16(){
    var animais = null;
    fetch("https://dog.ceo/api/breed/shihtzu/images/random") .then(function(response){
        response.json().then(function(data){
            console.log("vou aparecer depois");
            console.log(data);
            animais= data.message;
            document.getElementById("imagem16").src = animais;
            console.log(animais);
        })
    })
    .catch(function(err){
        console.error(err);
    });
    console.log("Vou aparecer primeiro");
}
teste16();

