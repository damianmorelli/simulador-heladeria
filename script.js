const heladoPalito = 100;
const heladoBocha = 180;
const heladoCuarto = 250;

alert ("Bienvenido a la heladería. Podes comprar un helado de palito, uno de bocha o un cuarto.");

let dineroUsuario = parseInt (prompt ("¿Cuanta plata tenes?"));

if (dineroUsuario < 100) {
    alert ("Lola, no te alcanza para comprar nada");
}
else if (dineroUsuario >= 100 && dineroUsuario < 180) {
    alert ("El palito sale $100. Te llevas un palito y te sobra " + (dineroUsuario - 100));
}
else if (dineroUsuario >= 180 && dineroUsuario < 250) {
    alert ("La bocha sale $180. Te llevas una bocha y te sobra " + (dineroUsuario - 180));
}
else if (dineroUsuario >= 250) {
    alert ("El cuarto sale $250. Te llevas un cuarto y te sobra " + (dineroUsuario - 250));
}
