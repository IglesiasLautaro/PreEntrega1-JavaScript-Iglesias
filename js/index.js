
//SIMULADOR INTERACTIVO

let comando;

while (comando != 'Salir') {
    comando = prompt('Por favor ingresar el comando que desea utilizar:\n\n- Salir\n- Sacar numero de turno\n- Solicitar el tipo producto deseado\n- Ingresar ubicacion a la que sera enviada el pedido');


switch (comando) {
    case 'Sacar numero de turno' :
        let nombre = prompt('Ingresar nombre del comprador:');
        let edad = prompt('Ingresar edad del comprador');
        if (edad < 18) {
            alert('No tienes la suficiente edad para solicitar un turno.');
        } else if  (edad > 18) {
            alert('Su turno ha sido agendado');
        }
        break;
    case 'Solicitar el tipo de producto deseado' :
        let producto = prompt('Ingresar producto que desea comprar:');
        let cantidad = prompt('Cuantos/as ' + producto + ' quiere?');
        if (cantidad >= 5) {
            alert('Te has excedido del limite de productos que se pueden solicitar.');
        } else if (cantidad <= 5) {
            alert('Tu pedido ha sido registrado en nuestro sistema con exito!')
        }
        break;
    case 'Ingresar ubicacion a la que sera enviada el pedido' :
        let pais = prompt('Dime cual es tu pais:');
        if (pais != 'Argentina') {
            alert('Nuestra entrega no llega hasta tu pais.')
        } else if (pais == 'Argentina') {
            let provincia = ('Cual es tu provincia:');
            alert('Hemos registrado tu pedido al 100%, te informaremos cuando el mismo se este enviando.')
        } 
        break;
    }
}