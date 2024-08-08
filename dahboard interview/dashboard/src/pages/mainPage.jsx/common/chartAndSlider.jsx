import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import the icons
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../../assets/carousel-1.jpg";
import img2 from "../../../assets/carousel-2.jpg";
import img3 from "../../../assets/carousel-3.jpg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Custom navigation components
const CustomPrevArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className='absolute top-4 right-16 z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100' 
    aria-label='Previous slide'
  >
    <FaChevronLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className='absolute top-4 right-4 z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100' 
    aria-label='Next slide'
  >
    <FaChevronRight />
  </button>
);

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // Chart.js data and options
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className='flex flex-wrap mt-6 my-10'>
      {/* Chart */}
      <div className='w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none'>
        <div className='border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
          <div className='border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0'>
            <h6 className='capitalize dark:text-white'>Sales overview</h6>
            <p className='mb-0 text-sm leading-normal dark:text-white dark:opacity-60'>
              <i className='fa fa-arrow-up text-emerald-500'></i>
              <span className='font-semibold'>4% more</span> in 2021
            </p>
          </div>
          <div className='flex-auto p-4'>
            <Line data={chartData} options={chartOptions} height={95} />
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className='w-full max-w-full px-3 lg:w-5/12 lg:flex-none'>
        <div className='relative w-full h-full overflow-hidden rounded-2xl'>
          <Slider {...sliderSettings}>
            {/* Slide 1 */}
            <div className='relative w-full h-full'>
              <img className='object-cover h-full w-full' src={img1} alt='carousel image' />
              <div className='absolute left-0 bottom-0 right-[15%] p-5 text-white'>
                <div className='inline-block w-8 h-8 mb-4 text-center text-black bg-white rounded-lg'>
                  <i className='text-slate-700 ni ni-camera-compact'></i>
                </div>
                <h5 className='mb-1'>Get started with Argon</h5>
                <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at.</p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className='relative w-full h-full'>
              <img className='object-cover h-full w-full' src={img2} alt='carousel image' />
              <div className='absolute left-0 bottom-0 right-[15%] p-5 text-white'>
                <div className='inline-block w-8 h-8 mb-4 text-center text-black bg-white rounded-lg'>
                  <i className='text-slate-700 ni ni-bulb-61'></i>
                </div>
                <h5 className='mb-1'>Faster way to create web pages</h5>
                <p>That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className='relative w-full h-full'>
              <img className='object-cover h-full w-full' src={img3} alt='carousel image' />
              <div className='absolute left-0 bottom-0 right-[15%] p-5 text-white'>
                <div className='inline-block w-8 h-8 mb-4 text-center text-black bg-white rounded-lg'>
                  <i className='text-slate-700 ni ni-trophy'></i>
                </div>
                <h5 className='mb-1'>Share with us your design tips!</h5>
                <p>Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
