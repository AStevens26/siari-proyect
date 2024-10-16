import { AiFillDashboard } from 'react-icons/ai';
import { BsPcDisplay } from 'react-icons/bs';
import { FaHome, FaHSquare, FaUsers } from 'react-icons/fa';

const Sidebar = ({ sidebarToggle }) => {  // Destructurar el prop
  return (
    // Cambiar el ancho dinámicamente en base al estado del sidebarToggle
    <div className={`fixed h-full bg-slate-700 ${sidebarToggle ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className='mt-3 flex text-white font-bold mb-2 py-3 justify-center'>
            <img src=".png" alt="logo" />
            {sidebarToggle && <h1 className='text-2xl'>SIARI</h1>}
      </div>
      <hr />
        <div className=' mt-3 flex text-white font-bold mb-2 hover:shadow py-2 justify-center '>
            <img src=".png" alt="user" srcset="" />
            {sidebarToggle && <span>Andersson Casas</span>}
            
        </div>
        <div className={`bg-slate-100 text-gray-400 flex justify-center items-center ${sidebarToggle ? 'block' : 'hidden'}`}>
            <span className='text-center'>Administrador</span>
        </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 hover:shadow hover:bg-blue-500 py-2">
          <a href="/" className="px-3 flex items-center">
            <AiFillDashboard className="inline-block w-6 h-6 mr-2" />
            {sidebarToggle && <span>Dashboard</span>} {/* Mostrar texto solo si sidebarToggle es true */}
          </a>
        </li>

        <li className="mb-2 hover:shadow hover:bg-blue-500 py-2">
          <a href="/" className="px-3 flex items-center">
            <FaUsers className="inline-block w-6 h-6 mr-2" />
            {sidebarToggle && <span>Usuarios</span>}
          </a>
        </li>

        <li className="mb-2 hover:shadow hover:bg-blue-500 py-2">
          <a href="/" className="px-3 flex items-center">
            <BsPcDisplay className="inline-block w-6 h-6 mr-2" />
            {sidebarToggle && <span>Equipos</span>}
          </a>
        </li>

        <li className="mb-2 hover:shadow hover:bg-blue-500 py-2">
          <a href="/" className="px-3 flex items-center">
            <FaHome className="inline-block w-6 h-6 mr-2" />
            {sidebarToggle && <span>Asignaciones</span>}
          </a>
        </li>

        <li className="mb-2 hover:shadow hover:bg-blue-500 py-2">
          <a href="/" className="px-3 flex items-center">
            <FaHSquare className="inline-block w-6 h-6 mr-2" />
            {sidebarToggle && <span>Configuraciones</span>}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
