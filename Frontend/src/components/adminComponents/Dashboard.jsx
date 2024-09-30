import React, { useState } from 'react';

import AddNewEvent from './AddNewEvent';
import AddNewCenter from './AddNewCenter';
import AddNewAdmin from './AddNewAdmin';
import Sidebar from './sidebar';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('Welcome');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'addEvent':
        return <AddNewEvent />;
      case 'addCenter':
        return <AddNewCenter />;
      case 'addNewAdmin':
        return <AddNewAdmin/>
      default:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-yellow  mb-4">Welcome to Admin Dashboard</h2>
            <p className="text-xl text-yellow-600">Select an option from the sidebar to get started.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-dark text-black">
      <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div 
          className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full"
         
        >
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;