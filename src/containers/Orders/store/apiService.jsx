export async function fetchOrdersData() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { data: mockOrdersData };
}

export async function updateOrderStatusData(orderId, status) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const order = mockOrdersData.find((o) => o.id === orderId);
    if (order) {
        order.status = status;
        return { data: { ...order } };
    }
    throw new Error('Order not found');
}

const mockOrdersData = [
    { id: '1', customerName: 'John Doe', orderDate: '2023-01-05', total: 150, count: '50', status: 'Shipped' },
    { id: '2', customerName: 'Jane Smith', orderDate: '2023-01-06', total: 200, count: '100', status: 'Processing' },
    { id: '3', customerName: 'Bob Johnson', orderDate: '2023-01-07', total: 100, count: '80', status: 'Delivered' },
    { id: '4', customerName: 'Alice Brown', orderDate: '2023-01-08', total: 300, count: '220', status: 'Pending' },
    { id: '5', customerName: 'Charlie Davis', orderDate: '2023-01-09', total: 250, count: '150', status: 'Shipped' },
];
