import React from 'react';
import {  FaChevronRight } from 'react-icons/fa'; // Import the icons

const Stats = () => {
  return (
    <div className="flex flex-wrap mt-6 my-10">
      {/* Sales by Country */}
      <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-2xl   border-black-125 rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 mb-0 rounded-t-4">
            <div className="flex justify-between">
              <h6 className="mb-2 dark:text-white">Sales by Country</h6>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
              <tbody>
                {[
                  {
                    flag: '../assets/img/icons/flags/US.png',
                    country: 'United States',
                    sales: '2500',
                    value: '$230,900',
                    bounce: '29.9%',
                  },
                  {
                    flag: '../assets/img/icons/flags/DE.png',
                    country: 'Germany',
                    sales: '3.900',
                    value: '$440,000',
                    bounce: '40.22%',
                  },
                  {
                    flag: '../assets/img/icons/flags/GB.png',
                    country: 'Great Britain',
                    sales: '1.400',
                    value: '$190,700',
                    bounce: '23.44%',
                  },
                  {
                    flag: '../assets/img/icons/flags/BR.png',
                    country: 'Brasil',
                    sales: '562',
                    value: '$143,960',
                    bounce: '32.14%',
                  },
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap ">
                      <div className="flex items-center px-2 py-1">
                        <div>
                          <img src={item.flag} alt="Country flag" />
                        </div>
                        <div className="ml-6">
                          <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">Country:</p>
                          <h6 className="mb-0 text-sm leading-normal ">{item.country}</h6>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap ">
                      <div className="text-center">
                        <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">Sales:</p>
                        <h6 className="mb-0 text-sm leading-normal ">{item.sales}</h6>
                      </div>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                      <div className="text-center">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:opacity-60">Value:</p>
                        <h6 className="mb-0 text-sm leading-normal ">{item.value}</h6>
                      </div>
                    </td>
                    <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap ">
                      <div className="flex-1 text-center">
                        <p className="mb-0 text-xs font-semibold leading-tight  dark:opacity-60">Bounce:</p>
                        <h6 className="mb-0 text-sm leading-normal ">{item.bounce}</h6>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
        <div className="border-black/12.5 shadow-2xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="p-4 pb-0 rounded-t-4">
            <h6 className="mb-0">Categories</h6>
          </div>
          <div className="flex-auto p-4">
            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
              {[
                {
                  icon: 'ni-mobile-button',
                  title: 'Devices',
                  stock: '250 in stock,',
                  sold: '346+ sold',
                },
                {
                  icon: 'ni-tag',
                  title: 'Tickets',
                  closed: '123 closed,',
                  open: '15 open',
                },
                {
                  icon: 'ni-box-2',
                  title: 'Error logs',
                  active: '1 is active,',
                  closed: '40 closed',
                },
                {
                  icon: 'ni-satisfied',
                  title: 'Happy users',
                  count: '+ 430',
                },
              ].map((item, index) => (
                <li key={index} className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-xl text-inherit">
                  <div className="flex items-center">
                    <div className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                      <i className={`text-white ni ${item.icon} relative top-0.75 text-xxs`}></i>
                    </div>
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm leading-normal text-slate-700 ">{item.title}</h6>
                      <span className="text-xs leading-tight ">
                        {item.stock || item.closed || item.active || item.count}
                        {item.sold || item.open || item.closed}
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold  shadow-none transition-all text-black">
                        <FaChevronRight/>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
