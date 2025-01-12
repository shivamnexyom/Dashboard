const mockCustomersData = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    totalOrders: 5,
    totalSpent: 500,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    totalOrders: 3,
    totalSpent: 300,
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    totalOrders: 7,
    totalSpent: 700,
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    totalOrders: 2,
    totalSpent: 200,
  },
  {
    id: "5",
    name: "Charlie Davis",
    email: "charlie@example.com",
    totalOrders: 4,
    totalSpent: 400,
  },
  {
    id: "6",
    name: "Alice Cron",
    email: "alice@example.com",
    totalOrders: 5,
    totalSpent: 200,
  },
];

export async function fetchCustomersData() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { data: mockCustomersData };
}
