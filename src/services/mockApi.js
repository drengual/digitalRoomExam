export const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    image: "/images/headphone.jpg",
    description: "High-quality wireless headphones",
    quantity: 0,
  },
  {
    id: 2,
    name: "Gaming Laptop",
    price: 800,
    image: "/images/laptop.jpg",
    description: "Powerful gaming laptop",
    quantity: 0,
  },
  {
    id: 3,
    name: "Wireless Mouse",
    price: 50,
    image: "/images/mouse.jpg",
    description: "Ergonomic wireless mouse",
    quantity: 0,
  },
];

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 1000);
  });
};
