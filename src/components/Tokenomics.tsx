'use client';

import Chart from 'chart.js/auto';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import {
  FaChartLine,
  FaCoins,
  FaFire,
  FaLock,
  FaRocket,
  FaSatelliteDish,
  FaUsers,
} from 'react-icons/fa';

import AnimatedSection from '@/components/AnimatedSection';

const Tokenomics = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  // Distribution data for pie chart - updated colors for more variety and less green
  // Dark theme colors with black, dark green, and dark purple
  const distributionData = [
    { name: 'Initial Pool', value: 38.2, color: '#1E293B' }, // Dark slate (near black)
    { name: 'Team Allocation', value: 15, color: '#064E3B' }, // Dark green
    { name: 'Reserved for Donations', value: 10, color: '#4C1D95' }, // Dark purple
    { name: 'Future Development', value: 20, color: '#0F766E' }, // Dark teal-green
    { name: 'Community & Airdrops', value: 16.8, color: '#312E81' }, // Dark indigo
  ];

  const tokenomicsData = [
    {
      title: 'Total Supply',
      value: '4.58B',
      description: 'Fixed forever - no minting',
      icon: <FaCoins className='text-gray-700 text-2xl' />,
    },
    {
      title: 'Initial Pool',
      value: '1.75B',
      description: 'Limited available supply',
      icon: <FaRocket className='text-gray-700 text-2xl' />,
    },
    {
      title: 'Launch Liquidity',
      value: '$9.4K',
      description: 'Liquidity burned',
      icon: <FaFire className='text-gray-700 text-2xl' />,
    },
    {
      title: 'Launch Price',
      value: '$0.000002691',
      description: 'Initial MCap $12K',
      icon: <FaChartLine className='text-gray-700 text-2xl' />,
    },
    {
      title: 'Team Allocation',
      value: '~15%',
      description: 'Marketing & Donations',
      icon: <FaUsers className='text-gray-700 text-2xl' />,
    },
    {
      title: 'Network',
      value: 'Solana',
      description: '99.9% less power than BTC',
      icon: <FaSatelliteDish className='text-gray-700 text-2xl' />,
    },
  ];

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: 'pie',
        data: {
          labels: distributionData.map((item) => item.name),
          datasets: [
            {
              data: distributionData.map((item) => item.value),
              backgroundColor: distributionData.map((item) => item.color),
              borderColor: 'white',
              borderWidth: 2,
              // These options create a 3D effect
              hoverOffset: 15,
              offset: 6,
              borderRadius: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '10%', // Slight donut effect for 3D feel
          layout: {
            padding: 10,
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.8)',
              titleColor: '#fff',
              bodyColor: '#fff',
              borderColor: 'rgba(255,255,255,0.2)',
              borderWidth: 1,
              // borderRadius: 8,
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.raw}%`;
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <AnimatedSection id='tokenomics'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='flex flex-col items-center mb-12'>
          <div className='flex items-center gap-3 mb-2'>
            <FaRocket className='text-2xl text-gray-800' />
            <h2 className='text-3xl md:text-4xl font-bold text-center'>
              Tokenomics
            </h2>
          </div>
          <p className='text-gray-600 max-w-md text-center'>
            The $THUMB token is environmentally friendly with a meme-worthy
            allocation
          </p>
        </div>

        {/* Central Pie Chart - Reduced size */}
        <div className='bg-white/30 rounded-xl shadow-lg p-6 mb-12 border border-gray-200 max-w-4xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center'>
            {/* Left side - Chart.js Pie Chart */}
            <div
              className='w-full md:w-1/2 max-w-md mx-auto'
              style={{ height: '300px' }}
            >
              <canvas ref={chartRef}></canvas>
            </div>

            {/* Right side - Custom Legend */}
            <div className='w-full md:w-1/2 grid grid-cols-1 gap-3 max-w-md mx-auto mt-6 md:mt-0'>
              <h3 className='text-xl font-bold mb-2 text-gray-800'>
                $THUMB Distribution
              </h3>
              {distributionData.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 bg-gray-50/30 p-3 rounded-lg'
                >
                  <div
                    className='w-4 h-4 rounded-full'
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className='flex justify-between w-full'>
                    <span className='font-medium text-gray-700'>
                      {item.name}
                    </span>
                    <span className='font-bold'>{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
          {tokenomicsData.map((item, index) => (
            <div
              key={index}
              className='border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all duration-300 bg-white/30 group hover:-translate-y-1'
            >
              <div className='flex items-center gap-3 mb-3'>
                <div className='p-2 bg-gray-100/30 rounded-full'>
                  {item.icon}
                </div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
              </div>
              <div>
                <p className='text-2xl font-bold mb-1'>{item.value}</p>
                <p className='text-gray-600 text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Meme-styled donation info */}
        <div className='max-w-4xl mx-auto bg-white/30 rounded-xl shadow-lg p-6 border border-gray-200 text-center relative overflow-hidden'>
          <div className='absolute right-0 top-0 w-20 h-20 opacity-10'>
            <Image
              src='/shiba.jpg'
              alt='Meme background'
              width={80}
              height={80}
              className='object-cover'
            />
          </div>

          <div className='flex items-center justify-center mb-4'>
            <h3 className='text-xl font-bold text-gray-800'>
              Eco-Friendly <span className='text-green-500'>Mission</span>
            </h3>
          </div>

          <p className='text-gray-700 mb-6 relative z-10'>
            For every <span className='font-bold text-green-500'>$100k</span>{' '}
            over $100k MarketCap, we donate{' '}
            <span className='font-bold text-green-500'>$1000</span> to the
            <span className='italic'> IQ Air Foundation</span> to promote clean
            air initiatives.
          </p>

          <div className='flex flex-wrap justify-center gap-4'>
            {[
              { text: 'No Owner', icon: <FaLock className='text-gray-700' /> },
              {
                text: 'Liquidity Burned',
                icon: <FaFire className='text-gray-700' />,
              },
              {
                text: 'Community Driven',
                icon: <FaUsers className='text-gray-700' />,
              },
              {
                text: 'Eco-Friendly',
                icon: <FaSatelliteDish className='text-gray-700' />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className='flex items-center gap-2 p-2 px-4 rounded-full bg-gray-100/30 transition-all duration-300 hover:bg-gray-200'
              >
                {feature.icon}
                <span className='font-semibold text-2lg'>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Tokenomics;
