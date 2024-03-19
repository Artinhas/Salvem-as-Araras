var motivos = [
  " Elas são perfeitos",
  "Gostam de Brincar",
  "Bonitas",
  "As araras são fofinhas",
    "Praticam voos"
];

var imagens = [ "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/arara-azul.jpg",
  "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/gettyimages-200401137-001.jpg?w=1600&h=900",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrYxunbrbhHEsLoSaOSl147dmfpYylHJRbQ&usqp=CAU","https://cdn.lugares.eco.br/upload/dn_noticia/2019/01/arara-caninde.jpg",
  "https://lh3.googleusercontent.com/proxy/KcwbaLTKvOH2H76bUi0a4_oI8_-N-IAgjrMB93mWwakCq36L9qo1FouVxakgEjD1Suk21416F2mUDK7eJXFdqxQniE4M5oG7G0xUrDTXWsPAo-yokJkroaK-dt58qBri0IIMp9z-5wVOY5oerIAFf8ZaaQ"
               
];

var i = 0;
function proximo() {  document.getElementById("album").src = imagens[i];
    document.getElementById("texto").innerHTML = motivos[i];
    
    i++;  
   if(i>4){
     i=0;
   }
}