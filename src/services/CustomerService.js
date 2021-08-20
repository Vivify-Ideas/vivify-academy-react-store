class CustomerService {
  constructor() {
    this.nextId = 3;
    this.customers = [{
      id: 1,
      name: 'Marko',
      surname: 'Markovic',
      products: [{id: 1, name: 'banana'}]
    },{
      id: 2,
      name: 'Ana',
      surname: 'Markovic',
      products: [{id: 1, name: 'banana'}, {id: 2, name: 'tresnja'}]
    }];
  }

  getAll() {
    return [...this.customers];
  }

  delete(id) {
    const index = this.customers.findIndex((customer) => customer.id === id);

    if (index === -1) {
      return false;
    }

    this.customers.splice(index, 1);

    return true
  }

  create(newCustomer) {
      this.customers.push({id: this.nextId, ...newCustomer, products: []});

      this.nextId++;

      return this.customers[this.customers.length-1];
  }

  get(id) {
    return this.customers.find(cus => cus.id === Number(id))
  }

  addProduct(id, productName) {
    const index = this.customers.findIndex((cus) => cus.id === Number(id));
    const lastProductId = this.customers[index].products.reduce((lastId, prod) =>
      lastId > prod.id ? lastId : prod.id
    , -1)
    this.customers[index].products.push({id: lastProductId + 1, name: productName})
  }
}

export default new CustomerService()