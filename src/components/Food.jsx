import React from 'react';
import './Food.css';

const vegMenu = [
  { name: "Paneer Butter Masala", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" },
  { name: "Veg Biryani", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b" },
  { name: "Pulihora", img: "https://images.unsplash.com/photo-1625944525903-bb6b0f5a8a8b" },
  { name: "Sambar", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950" },
  { name: "Rasam", img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3973" },
  { name: "Dal Tadka", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { name: "Aloo Fry", img: "https://images.unsplash.com/photo-1628294896516-3a6c6e97ed8c" },
  { name: "Gutti Vankaya", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7" },
  { name: "Curd Rice", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047e2" },
  { name: "Chapati", img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd3" },
  { name: "Poori", img: "https://images.unsplash.com/photo-1625943555414-1b5c5f8a3a9e" },
  { name: "Papad", img: "https://images.unsplash.com/photo-1617196035154-1e4f9c8e60a7" },
  { name: "Pickles", img: "https://images.unsplash.com/photo-1625944524994-4a3f4c2e7c7b" },
  { name: "Gulab Jamun", img: "https://images.unsplash.com/photo-1604908554020-1d1f87c9e5a4" },
  { name: "Payasam", img: "https://images.unsplash.com/photo-1625944526033-df3dfe6e9c6a" }
];

const nonVegMenu = [
  { name: "Chicken Biryani", img: "https://images.unsplash.com/photo-1604908177225-6b3cce61b5e1" },
  { name: "Mutton Curry", img: "https://images.unsplash.com/photo-1604908812023-5d4c7e2b7f0d" },
  { name: "Chicken Fry", img: "https://images.unsplash.com/photo-1604908177247-4b2d6c3a6b4e" },
  { name: "Fish Fry", img: "https://images.unsplash.com/photo-1604908177291-3b7c7b4a2c5a" },
  { name: "Egg Curry", img: "https://images.unsplash.com/photo-1604908177302-2b7c7b4a2c6b" }
];

const tiffinMenu = [
  { name: "Idli", img: "https://images.unsplash.com/photo-1625944526042-bc5b2c4e6a5a" },
  { name: "Dosa", img: "https://images.unsplash.com/photo-1625944526055-bd5c2c4e6a6b" },
  { name: "Vada", img: "https://images.unsplash.com/photo-1625944526066-bf5c2c4e6a7c" },
  { name: "Upma", img: "https://images.unsplash.com/photo-1625944526077-c05c2c4e6a8d" },
  { name: "Pongal", img: "https://images.unsplash.com/photo-1625944526088-c25c2c4e6a9e" },
  { name: "Tea & Coffee", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" }
];

const Food = () => {
  return (
    <section id="food" className="food-section container">
      <h2 className="section-title">Wedding Feast 🍽️</h2>
      
      <div className="menu-group">
        <h3 className="menu-subtitle">🌿 Vegetarian Delights</h3>
        <div className="food-grid">
          {vegMenu.map((item, index) => (
            <div key={index} className="food-card">
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="food-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-group">
        <h3 className="menu-subtitle">🍗 Royal Non-Vegetarian</h3>
        <div className="food-grid">
          {nonVegMenu.map((item, index) => (
            <div key={index} className="food-card">
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="food-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-group">
        <h3 className="menu-subtitle">☕ Traditional Tiffin</h3>
        <div className="food-grid">
          {tiffinMenu.map((item, index) => (
            <div key={index} className="food-card">
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="food-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;
