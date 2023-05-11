function ocultarimagenes(){
    var css= document.getElementById("img-muneco");
    css.style.cssText = 'visibility: hidden;';
    var css2=document.getElementById("img-noencontrado");
    css2.style.cssText= 'visibility: hidden;';
}
    
    var btnencriptar= document.getElementById("boton-encriptar");
    btnencriptar.addEventListener('click', function(){
        ocultarimagenes();
        let textoEntrada= document.getElementById("texto-entrada").value;
        textoEntrada= textoEntrada.toLowerCase();
        let arreglo = textoEntrada.split("");
        let textoSalida="";
        let nuevoTexto="";
        arreglo.forEach(letra => {
            switch (letra) {
                case "a":
                    nuevoTexto+="ai";
                    break;
                case "e":
                    nuevoTexto+="enter";
                    break;
                case "i":
                    nuevoTexto+="imes";
                    break;
                case "o":
                    nuevoTexto+="ober";
                    break;
                case "u":
                    nuevoTexto+="ufat";
                    break;

                default:
                    nuevoTexto+=letra;
                    break;
            }

        });
       textoSalida=document.getElementById("texto-mostrado");
       textoSalida.innerHTML = " ";
       textoSalida.innerHTML = nuevoTexto;
    });
    
    

    
    var btndesencriptar = document.getElementById("boton-desencriptar");
    btndesencriptar.addEventListener("click", function(){
        ocultarimagenes();
        let texto2= document.getElementById("texto-entrada").value;
        let nuevoTexto="";
        for (let i = 0; i < texto2.length; i++) {
            if (texto2.startsWith("ai",i)) {
                
                nuevoTexto+="a";
                i+=1;
            }
            else if (texto2.startsWith("enter",i)) {
                
                nuevoTexto+="e";
                i+=4;
            } else if(texto2.startsWith("imes",i)) {
                
                nuevoTexto+="i";
                i+=3;
            } else if(texto2.startsWith("ober",i)) {
                
                nuevoTexto+="o";
                i+= 3;
            } else if(texto2.startsWith("ufat",i)) {
                
                nuevoTexto+="u";
                i+=3;
            } else{
                
               nuevoTexto+=texto2[i];
            }
            
        }
        let txt= document.getElementById("texto-mostrado");
        txt.innerHTML="";
        txt.innerHTML=nuevoTexto;
    });
    
var btncopiar= document.getElementById("boton-copiar");
btncopiar.addEventListener("click", function(){
    navigator.clipboard.writeText(document.getElementById("texto-mostrado").textContent)
});