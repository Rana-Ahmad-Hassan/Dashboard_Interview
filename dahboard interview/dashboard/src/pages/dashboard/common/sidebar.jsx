import React, { useState } from 'react';
import { 
  FaTimes, 
  FaTv, 
  FaCalendarAlt, 
  FaCreditCard, 
  FaAppStore, 
  FaGlobe, 
  FaUser, 
  FaSignInAlt, 
  FaUserPlus 
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <aside
        className={`fixed inset-y-0 h-screen z-40  flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white border-0 shadow-2xl max-w-64 ease-nav-brand z-1000 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0`}
        aria-expanded={isSidebarOpen}
      >
        <div className="h-19">
          <FaTimes
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer text-red-400 xl:hidden"
            onClick={toggleSidebar}
          />
          <a
            className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-gray-700"
            href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
              Argon Dashboard 2
            </span>
          </a>
        </div>

        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        <div className="items-center h-[60%] block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
          <ul className="flex flex-col pl-0 mb-0 space-y-7 mt-5">
            <li className="mt-0.5 w-full">
              <a
                className="py-2.7 dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-gray-700 transition-colors"
                href="../pages/dashboard.html"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <FaTv className="text-blue-500" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Dashboard</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a
                className="dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="../pages/tables.html"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <FaCalendarAlt className="text-orange-500" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Tables</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a
                className="dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="../pages/billing.html"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                  <FaCreditCard className="text-emerald-500" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Billing</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a
                className="dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="../pages/virtual-reality.html"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <FaAppStore className="text-cyan-500" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Virtual Reality</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <a
                className="dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="../pages/rtl.html"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <FaGlobe className="text-red-600" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">RTL</span>
              </a>
            </li>

            <li className="w-full mt-4">
              <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">
                Account pages
              </h6>
            </li>

            <li className="mt-0.5 w-full">
              <a
                className="dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="../pages/profile.html"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <FaUser className="text-gray-700" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Profile</span>
              </a>
            </li>

            <li className="mt-0.5 w-full">
              <NavLink
                className="dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                to={"signIn"}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <FaSignInAlt className="text-orange-500" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign In</span>
              </NavLink>
            </li>

            <li className="mt-0.5 w-full">
              <a
                className="dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
                href="../pages/sign-up.html"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <FaUserPlus className="text-cyan-500" />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-0 left-0 w-full px-4 py-4 pb-10">
          <div className='text-center pb-10'>
            <h1>Need Help?</h1>
            <p className='text-sm'>Please check our docs</p>
          </div>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 mb-2 text-xs font-bold text-white bg-gray-700 rounded-lg text-center shadow-md transition-transform hover:shadow-xs"
          >
            Documentation
          </a>
          <a
            className="block w-full px-4 py-2 text-xs font-bold text-white bg-blue-500 rounded-lg text-center shadow-md transition-transform hover:shadow-xs"
            href="https://www.creative-tim.com/product/argon-dashboard-pro-tailwind?ref=sidebarfree"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upgrade to pro
          </a>
        </div>
      </aside>

      <div className="xl:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg">
        <FaCalendarAlt
          className="opacity-50 cursor-pointer text-red-400"
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default Sidebar;
