var entrada= document.getElementById("ingreso-texto")

function encriptar(){
    let textEncriptar=entrada.value.toLowerCase();
    entrada.value='';
    let encriptado=textEncriptar.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    entrada.value='';
    document.getElementById("mensajevacio").style.display="none";
    document.getElementById("resultado").style.display="block";
    document.getElementById("texto-resultado").style.display="block";
    document.getElementById("texto-resultado").value=encriptado   
}

function desencriptar(){
    let textDesencriptar=entrada.value.toLowerCase();
    entrada.value='';
    let desencriptado=textDesencriptar.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    console.log(desencriptado)
    document.getElementById("mensajevacio").style.display="none";
    document.getElementById("resultado").style.display="block";
    document.getElementById("texto-resultado").style.display="block";
    document.getElementById("texto-resultado").value=desencriptado   
}

function copiar(){
    let copiarTexto=document.getElementById("texto-resultado");
    let texto=copiarTexto.value
    navigator.clipboard.writeText(texto).then(()=>{
        alert("Texto Copiado")
    }).catch(err=>{
        console.log("ALGO MALO PASO")
    })

}
