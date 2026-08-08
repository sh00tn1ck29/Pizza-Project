
export type Pizza = {
  id: number;
  name: string;
  price: number;
};

export type OrderStatus = 'ordered' | 'completed';

export type Order = {
  id: number;
  pizza: Pizza;
  status: OrderStatus;
};



let cash = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

export const menu: Pizza[] = [
  { id: nextPizzaId++, name: 'Margherita', price: 8 },
  { id: nextPizzaId++, name: 'Pepperoni', price: 10 },
  { id: nextPizzaId++, name: 'Hawaiian', price: 10 },
  { id: nextPizzaId++, name: 'BBQ Chicken', price: 12 },
];

export const orderQueue: Order[] = [];


export function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}

export function addNewPizza(pizza: Pizza): Pizza {
  menu.push(pizza);
  return pizza;
}

export function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find(
    p => p.name.toLowerCase() === pizzaName.toLowerCase()
  );

  if (!selectedPizza) {
    console.error(`Pizza "${pizzaName}" not found on the menu.`);
    return undefined;
  }

  cash += selectedPizza.price;

  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: 'ordered',
  };

  addToArray<Order>(orderQueue, newOrder);
  return newOrder;
}

export function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find(o => o.id === orderId);

  if (!order) {
    console.error(`Order with ID ${orderId} is not found.`);
    return undefined;
  }

  order.status = 'completed';
  return order;
}


export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === 'number') {
    return menu.find(pizza => pizza.id === identifier);
  } 
  
  if (typeof identifier === 'string') {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
  }

  return undefined;
}