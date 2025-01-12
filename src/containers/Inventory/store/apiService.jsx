const mockInventoryData = [
  { id: '1', name: 'Product A', stock: 100, category: 'Electronics' },
  { id: '2', name: 'Product B', stock: 0, category: 'Clothing' },
  { id: '3', name: 'Product C', stock: 75, category: 'Home & Garden' },
  { id: '4', name: 'Product D', stock: 25, category: 'Electronics' },
  { id: '5', name: 'Product E', stock: 200, category: 'Clothing' },
];

export async function fetchInventoryData() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { data: mockInventoryData };
}