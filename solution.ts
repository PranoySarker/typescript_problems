function formatValue(
  value: number | string | boolean
): number | string | boolean {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age:${this.age}`;
  }
}

type item = {
  title: string;
  rating: number;
};

function filterByRating(items: item[]): item[] {
  const result: item[] = items.filter((item) => item.rating >= 4);
  return result;
}

type user = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: user[]): user[] {
  const activeUser = users.filter((user) => user.isActive === true);
  return activeUser;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  if (book.isAvailable === true) {
    console.log(
      `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: Yes`
    );
  }
}

function getUniqueValues<T>(arr1: T[], arr2: T[]): T[] {
  let newArr: T[] = [...arr1];
  let exist = false;
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (arr2[i] === newArr[j]) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      newArr.push(arr2[i]);
    }
    exist = false;
  }
  return newArr;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  const totalPrice: number = products.reduce((total, product) => {
    const discountedPrice = product.discount
      ? product.price * (1 - product.discount / 100)
      : product.price;
    return total + product.quantity * discountedPrice;
  }, 0);
  return totalPrice;
}
