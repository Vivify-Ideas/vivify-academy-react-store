class ProductService {
  constructor() {
    this.products = [{
      id: 1,
      name: 'banana',
      count: 10
    },{
      id: 2,
      name: 'tresnje',
      count:5
    },{
      id: 3,
      name: 'mlijeko',
      count: 6
    },
    {
      id: 4,
      name: 'meso',
      count: 10
    }];
  }

  getAll() {
    return [...this.products];
  }

  increment(id) {
      const index = this.products.findIndex(prod => prod.id === id)

      if (index !== -1) {
        this.products[index].count++;
      }

      return this.products[index].count
  }
  decrement(id) {
    const index = this.products.findIndex(prod => prod.id === Number(id))

    if (index !== -1 && this.products[index].count > 0) {
      this.products[index].count--;
    }

    return this.products[index].count
  }

  get(id) {
    const product = this.products.find((prod) => prod.id === Number(id));

    return product ? {...product} : null
  }


}

export default new ProductService()