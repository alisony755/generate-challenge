import React from 'react';
import card from "*.module.css"
import cardImage from "*.module.css"

interface CardProps {
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

export default function Card({
    id,
    item_name,
    item_price,
    item_photo_url,
    item_description,
    item_stock,
    seller_username,
    seller_country,
    seller_city
}: CardProps) {
    return (
        <div className={card}>
            <img src={item_photo_url} alt={item_name} className={cardImage}/>
            <h2>{item_name.toUpperCase()}</h2>
            <p>Seller: {seller_username}</p>
            <p>Location: {seller_city}, {seller_country}</p>

            <div className="priceStock">
                <p>Price: {item_price}</p>
                <p>Stock: {item_stock}</p>
            </div>
        </div>
    );
}