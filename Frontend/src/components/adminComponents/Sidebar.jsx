import React from 'react';

export default function Sidebar({ setActiveComponent, activeComponent }) {
  const menuItems = [
    { name: 'Dashboard', component: 'default' },
    { name: 'Add New Event', component: 'addEvent' },
    { name: 'Add New Education Center', component: 'addCenter' },
  ];

  return (
    <div className="w-full md:w-64 bg-blue-600 text-white">
      <h2 className="text-2xl font-bold p-6 text-yellow cursor-pointer transition-colors duration-200"
        onClick={() => setActiveComponent('default')}
      >
        Admin Dashboard
      </h2>
      <ul className="space-y-2 p-4">
        {menuItems.map((item) => (
          <li key={item.component}>
            <button
              onClick={() => setActiveComponent(item.component)}
              className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                activeComponent === item.component
                  ? 'bg-yellow text-white font-semibold'
                  : 'hover:bg-yellow'
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

