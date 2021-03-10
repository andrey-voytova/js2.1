
class ProductList {
    _goods;
    _allProducts;
constructor(container = '.products'){
    console.log('constructor');
    this.container = container;
    this._goods = [];
    this._allProducts = [];
    this._fetchGoods();
    this._render();       
}
    totalSum(){
        return this._goods.reduce((sum , { price}) => sum + price, 0);
        
   }



    _fetchGoods() {
        this._goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }
    _render() {
        const block = document.querySelector(this.container);

        this._goods.forEach((product) => {
            const productObject = new ProductItem(product);
            console.log(productObject);
            this._allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());

        });
    }
}

class ProductItem {
    constructor(product, img ='https://placehold.it/200x150'){
        this.title = product.title;
        this.price = product.price ;
        this.id = product.id;
        this.img = img;
    }
    render(){
        return  `<div class="products__card">
        <img src="${this.img}" alt= "Some img">
        <div class="products__text">
            <h3>${this.title}</h3>
            <p>${this.price} \u20bd</p>
            <button class="buy-btn">Купить</button>
        </div>
    </div>`;
    }
}

const productList = new ProductList();
productList.totalSum();