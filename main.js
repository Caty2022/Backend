class ProductManager {
  constructor() {
    this.products = [];
  }

  static ultId = 0;

  addProduct(title, description, price, image, code, stock) {
    if (!title || !description || !price || !image || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    // Validamos que el código sea único
    if (this.products.some((item) => item.code === code)) {
      console.log("El código debe ser único");
      return;
    }

    const newProduct = {
      id: ++ProductManager.ultId,
      title,
      description,
      price,
      image,
      code,
      stock,
    };

    // Lo agrego al array
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      console.error("¡Producto no encontrado!");
    } else {
      console.log(product);
    }
  }
}

// Testing
//1) Se creará una instancia de la clase “ProductManager”
const producto = new ProductManager();

//2) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
//console.log(producto.getProducts());

//3) Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

producto.addProduct("Producto prueba", "esto es un producto prueba", 200, "sin imagen", "abc123", 25);

//4)El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

//5)Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

console.log(producto.getProducts());

//6)Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

producto.addProduct("Producto prueba", "esto es un producto prueba", 200, "sin imagen", "abc123");

 producto.addProduct("pantalon", "algodón", 200, "sin imagen", "abc124", 25);
 producto.addProduct("remera", "algodón", 200, "sin imagen", "abc125", 25);

console.log(producto.getProducts());

//7) Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

console.log("Verificamos ");
 producto.getProductById(3);

