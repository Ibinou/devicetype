// Récupérer le user agent
var userAgent = navigator.userAgent;

// Vérifier si l'agent utilisateur contient "iPad"
if (userAgent.indexOf("iPad") > -1) {
  // Si c'est un iPad, afficher l'image de l'iPad
  document.write("<img src='https://github.com/Ibinou/devicetype/blob/main/C1A5F957-0120-4782-B752-FB51A6F3C065.png?raw=true'>");
} 
// Vérifier si l'agent utilisateur contient "iPhone"
else if (userAgent.indexOf("iPhone") > -1) {
  // Si c'est un iPhone, afficher l'image de l'iPhone
  document.write("<img src='https://github.com/Ibinou/devicetype/blob/main/829F9C80-4D38-4873-9E34-648F158C6058.png?raw=true'>");
}
