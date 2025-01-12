import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/common/Card";
import { useSelector } from 'react-redux';

export default function InventoryStatus() {
  const inventory = useSelector((state) => state.inventory.data);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {inventory.map((item) => (
            <li 
              key={item.id} 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px'
              }}
            >
              <span>{item.name}</span>
              <span 
                style={{
                  fontWeight: 'bold',
                  color: item.stock < 10 ? '#EF4444' : '#10B981'
                }}
              >
                {item.stock}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
