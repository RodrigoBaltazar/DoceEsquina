var salgados = [];

salgados.push(i + ".jpg");


//var caminho_salgados = "fotos/salgados/*";
var caminho_salgados = "fotos/salgados/Baguete-Recheada-1024x680.jpg"
var caminho_em_branco = "";

function carregaFotos(){
        document.getElementById("salgado_swap").src = caminho_salgados;
    }
    window.onload = function(){
      // <img id="salgado_swap" src="" + caminho_salgados>
        carregaFotos();
    };
