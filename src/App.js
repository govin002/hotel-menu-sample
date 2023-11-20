import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Create a set of unique categories
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  // State for menu items and categories
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories); // No need to set categories dynamically

  // Function to filter items based on category
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  // Render the component
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* Render the Categories component */}
        <Categories categories={categories} filterItems={filterItems} />
        {/* Render the Menu component with filtered items */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

// Export the App component
export default App;
