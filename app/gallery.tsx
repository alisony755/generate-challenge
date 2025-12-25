import { useState, useEffect } from 'react';

type Item = {
    id: string;
    item_name: string;
    item_price: number;
    item_photo_url: string;
    item_description: string;
    item_stock: number;
    seller_username: string;
    seller_country: string;
    seller_city: string;
}

export default function Gallery() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await fetch('/api/v1/challenge/frontend/{8f8e4f5b-3b5d-40f9-bed8-87b4335ec138}');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const itemData = await response.json();
        setItems(itemData);
      } catch (error) {
        throw new Error("Error occurred");
      }
    };

    fetchItemData();
  }, []);

  // use card component later on, add card grid styling
  return (
    <div>
      <h1>Item Gallery</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.item_name}</h3>
            <p>{item.seller_username}</p>
            <p>{item.seller_city}, {item.seller_country}</p>
            <p>Price: {item.item_price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}