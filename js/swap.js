// Swap no salgado

var caminho_salgados = "fotos/salgados/*";
var caminho_salgados = "fotos/salgados/Sanduíche-Natural-1024x680.jpg"
var caminho_em_branco = "";



var salgados = [];
salgados.push('/Users/rodrigobaltazar/Dropbox/projetos_git/2017/DoceEsquina/fotos/salgados/Sanduíche-Natural-1024x680.jpg')

function carregaFotos(){
    for (var i = 0; i < salgados.length; i++) {
      setTimeout(1000)
    document.getElementById("salgado_swap").src = salgados[i];
    return
    }

}
    window.onload = function(){
      // <img id="salgado_swap" src="" + caminho_salgados>
        carregaFotos();
    };
// Fim do Swap no salgado

// Inicio Swap no confeitaria

var confeitaria = [];
confeitaria.push('/Users/rodrigobaltazar/Dropbox/projetos_git/2017/DoceEsquina/fotos/confeitaria/Torta-Delicia-de-Morango-1024x680.jpg')
function carregaConfeitaria(){
    document.getElementById("confeitaria_swap").src = confeitaria[0];
}


// Fim do Swap no confeitaria


window.onload = function(){
  // <img id="salgado_swap" src="" + caminho_salgados>
    carregaFotos();
    carregaConfeitaria();

};
