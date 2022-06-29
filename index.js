const listaCarrito=[];
let capacidad=4;
do{
    let ingreso= prompt("Ingrese un articulo para agregar a su carrito. Por ej:manteca");
    listaCarrito.push (ingreso.toUpperCase());
    console.log(listaCarrito.length);

}while (listaCarrito.length <=capacidad);

console.log("Los articulos ingresados al carrito son" +listaCarrito);

if (listaCarrito.lenght!=capacidad){
    alert("No se pueden ingresar más articulos al carrito, superó la capacidad");
}
