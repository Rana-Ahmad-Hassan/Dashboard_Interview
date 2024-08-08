import React from 'react';
import { FaMoneyBillWave, FaUsers, FaGlobe, FaClipboardList } from 'react-icons/fa';
import { IoIosCart } from 'react-icons/io';

const Card = ({ title, value, change, icon, bgGradient }) => {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row ">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">{title}</p>
                <h5 className="mb-2 font-bold">{value}</h5>
                <p className="mb-0 dark:opacity-60">
                  <span className={`text-sm font-bold leading-normal ${change.includes('+') ? 'text-emerald-500' : 'text-red-600'}`}>{change}</span>
                  {` since ${title === "Today's Users" ? 'last week' : 'yesterday'}`}
                </p>
              </div>
            </div>
            <div className="px-3 text-right basis-1/3">
              <div className={`inline-block px-3 py-3  text-center rounded-full ${bgGradient}`}>
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DashboardCards = () => {
  return (
    <div className="flex flex-wrap ">
      <Card
        title="Today's Money"
        value="$53,000"
        change="+55%"
        icon={<FaMoneyBillWave className="text-lg text-white" />}
        bgGradient="bg-gradient-to-tl from-blue-500 to-violet-500"
      />
      <Card
        title="Today's Users"
        value="2,300"
        change="+3%"
        icon={<FaUsers className="text-lg text-white" />}
        bgGradient="bg-gradient-to-tl from-red-600 to-orange-600"
      />
      <Card
        title="New Clients"
        value="+3,462"
        change="-2%"
        icon={<FaGlobe className="text-lg text-white" />}
        bgGradient="bg-gradient-to-tl from-emerald-500 to-teal-400"
      />
      <Card
        title="Sales"
        value="$103,430"
        change="+5%"
        icon={<IoIosCart className="text-lg text-white" />}
        bgGradient="bg-gradient-to-tl from-orange-500 to-yellow-500"
      />
    </div>
  );
}

export default DashboardCards;
