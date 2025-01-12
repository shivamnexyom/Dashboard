const mockSalesData = [
  { date: "2023-01-01", amount: 1000 },
  { date: "2023-01-02", amount: 1500 },
  { date: "2023-01-03", amount: 1200 },
  { date: "2023-01-04", amount: 1800 },
  { date: "2023-01-05", amount: 2000 },
  { date: "2023-01-06", amount: 1600 },
  { date: "2023-01-07", amount: 1400 },
];

export async function fetchSalesData() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { data: mockSalesData };
}
