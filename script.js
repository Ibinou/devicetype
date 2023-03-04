// Récupérer le user agent
var userAgent = navigator.userAgent;

// Vérifier si l'agent utilisateur contient "iPad"
if (userAgent.indexOf("iPad") > -1) {
  // Si c'est un iPad, afficher l'image de l'iPad
  document.write("<img src='chemin/vers/image-ipad.png'>");
} 
// Vérifier si l'agent utilisateur contient "iPhone"
else if (userAgent.indexOf("iPhone") > -1) {
  // Si c'est un iPhone, afficher l'image de l'iPhone
  document.write("<img src='chemin/vers/image-iphone.png'>");
}
