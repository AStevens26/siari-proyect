import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);  // Estado para controlar el colapso del sidebar

  return (
    <div className='flex'>
      {/* Sidebar recibe el estado de colapsado o expandido */}
      <Sidebar sidebarToggle={sidebarToggle} />
      
      {/* Contenedor principal que ajusta su margen dependiendo del estado del sidebar */}
      <div className={`flex-1 transition-all duration-300 ${sidebarToggle ? 'ml-64' : 'ml-20'}`}>
        {/* Navbar recibe el estado para controlar el toggle */}
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        {/* Aquí iría el contenido principal */}
      </div>
    </div>
  );
};

export default Layout;
