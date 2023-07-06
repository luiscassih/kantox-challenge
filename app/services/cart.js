import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Promotions {
  promotions = []

  addPromotion(code, label, condition, action) {
    this.promotions.push({code, label, condition, action});
    return this;
  }

  getDiscount(product) {
    let promotion = this.promotions.find(promotion => promotion.code === product.code && promotion.condition(product));
    if (promotion) {
      return promotion.action(product);
    }
    return 0;
  }

  getLabel(product) {
    let promotion = this.promotions.find(promotion => promotion.code === product.code);
    if (promotion) {
      return promotion.label;
    }
  }
}

export default class CartService extends Service {
  products = A([]);
  @tracked quantity = 0;
  @tracked totalPrice = 0;
  @tracked subtotal = 0;
  @tracked shipping = 0.5; // example
  @tracked discount = 0;

  promotions = new Promotions()
    .addPromotion(
      'GR1',
      '2 for 1',
      product => product.quantity > 1,
      product => {
        // green tea -> add 1 -> 1 more
        // discount half prices when adding in pairs
        return Math.floor(product.quantity / 2) * product.price
    })
    .addPromotion(
      'SR1',
      '3 for £13.50',
      product => product.quantity > 2,
      product => {
        // strawberries -> add 3 -> each drop to fixed 4.50
        // as we charge 4.50 we discount the difference
        return (product.price - 4.50) * product.quantity;
    })
    .addPromotion(
      'CF1',
      'Multi-buy discount',
      product => product.quantity > 2,
      product => {
        // coffee -> add 3 -> each goes 2/3 of price
        return ((product.price * product.quantity) * 1/3);
    });

  add(product) {
    const existingProduct = this.products.find((p) => p.code === product.code);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      product.quantity = 1;
      this.products.pushObject(product);
    }
    this.updateTotal();
  }

  remove(product) {
    product.quantity--;
    if (product.quantity === 0) {
      this.products.removeObject(product);
    }
    this.updateTotal();
  }

  updateTotal() {
    if (this.products.length === 0) {
      this.quantity = 0;
      this.price = 0;
    }
    let quantity = 0;
    let totalPrice = 0;
    let subtotal = 0;
    let discount = 0;
    this.products.forEach((product) => {
      quantity += product.quantity;
      let price = (product.price * product.quantity);
      totalPrice += price;
      discount += this.promotions.getDiscount(product);
      subtotal += price;
    });
    this.quantity = quantity;
    this.discount = discount;
    this.subtotal = subtotal.toFixed(2);
    this.totalPrice = (totalPrice + this.shipping - discount).toFixed(2);
  }

  empty() {
    this.products.clear();
    this.updateTotal();
  }
}
