import React, { useState } from 'react';
import './App.css';

const menuData = [
    {
        category: 'НОВИНКИ',
        items: [
            {
                name: 'Буррата с томатами',
                price: 750,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/5f8/5f834b96220b22221e83c7095b4c8e53.jpg',
            },
            {
                name: 'Зеленая паста с песто и пармезаном',
                price: 1100,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/3f1/3f19f602a1d3e06c7f1c793e909f0c49.jpg',
            },
            {
                name: 'Салат пять зеленых овощей',
                price: 690,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/191/19195bb822a9624f14dea6c077a87e75.jpg',
            },
            {
                name: 'Брускетта с креветками, авокадо и сальсой',
                price: 520,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/704/704d1375b82748e2d903ae21248baf3c.jpg',
            },
            {
                name: 'Крем-брюле с соленой карамелью',
                price: 860,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/3fb/3fb89af9e0dc16f6fb7538d639ea7adf.jpg',
            }
        ],
    },
    {
        category: 'ЗАВТРАКИ',
        items: [
            {
                name: 'Большой завтрак с лососем, яйцом пашот и авокадо',
                price: 990,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/336/33688967f062aff60c2451df97582cb3.jpg',
            },
            {
                name: 'Омлет с томатами, оливками и фетой',
                price: 510,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/6be/6bec5435ad2621fa16f313a00aefb88b.jpg',
            },
            {
                name: 'Кетозавтрак',
                price: 880,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/f50/f506094f594e822d5cf3fadba00df9b0.jpg',
            },
            {
                name: 'Английский завтрак',
                price: 700,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/c13/c1373f10ac1a7a0fab8598572a27a55a.jpg',
            },
            {
                name: 'Сытный завтрак с мортаделлой',
                price: 1200,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/4a3/4a3aa76fc86313e7f91753cf8a54d929.jpg',
            },
            {
                name: 'Сырники из рикотты',
                price: 450,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/cfa/cfad4a04501c080bab9ab68e3ea45a15.jpg',
            }
        ],
    },
    {
        category: 'ДЕСЕРТЫ',
        items: [
            {
                name: 'Пирожное "Клубника-базилик"',
                price: 850,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/251/2516d23b2b4f61c70b3dd5c9c3c13f7c.jpg',
            },
            {
                name: 'Пирожное "Черничная лаванда"',
                price: 990,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/d02/d020a8fe30037dcc44519b71bbb9f7a0.jpg',
            },
            {
                name: 'Тирамису',
                price: 690,
                image: 'https://regions.shoko.ru/upload/resize_cache/s1/fit_70_700x700/iblock/230/230a752707881d89f1d3228d2f6f3cf7.jpg',
            }
        ],
    },
];


function App() {

    const [selectedCategory, setSelectedCategory] = useState(menuData[0]);
    const [expandedItems, setExpandedItems] = useState({});

    const toggleItemExpansion = (index) => {
        setExpandedItems((prevExpandedItems) => ({
            ...prevExpandedItems,
            [index]: !prevExpandedItems[index],
        }));
    };

    return (
        <div className="App">
            <header className="header">
                <nav className="top-nav">
                    <img src="https://regions.shoko.ru/local/templates/chocolate/images/logo.png" alt="Логотип" className="logo" />
                        <a href="">АКЦИИ</a>
                        <a href="">МЕНЮ</a>
                        <a href="">ЗАКАЗАТЬ КОФЕ</a>
                        <a href="">АДРЕСА</a>
                        <a href="">ДОСТАВКА</a>
                        <a href="">О КОМПАНИИ</a>
                        <a href="">ФРАНЧАЙЗИНГ</a>
                </nav>
            </header>
            <div className="menu">
                <div className="menu-categories">
                    {menuData.map((category, index) => (
                        <div
                            key={index}
                            className={`menu-category ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category.category}
                        </div>
                    ))}
                </div>
                <div className="menu-items">
                    {selectedCategory.items.map((item, index) => (
                        <div
                            key={index}
                            className="menu-item"
                            onClick={() => toggleItemExpansion(index)}
                        >
                            <img src={item.image} alt={item.name} className="item-image" />
                            <h2>{item.name}</h2>
                            {expandedItems[index] && (
                                <div>
                                    <p>{item.price} рублей</p>
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default App;
