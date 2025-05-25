import React, { useState } from 'react';
import body from "../../../../assets/img/dashboards/anatomical-structure-human-body-free-vector-removebg-preview.png"

const HealthMonitor = () => {
  const [selectedSystem, setSelectedSystem] = useState('heart');

  const healthSystems = [
    {
      id: 'heart',
      name: 'Heart',
      icon: '❤️',
      status: 'Healthy Heart',
      date: '26 Oct 2021',
      color: 'bg-red-500',
      progress: 85,
      statusColor: 'text-red-600 bg-red-50',
    },
    {
      id: 'lungs',
      name: 'Lungs',
      icon: '🫁',
      status: 'Good',
      date: '26 Oct 2021',
      color: 'bg-red-400',
      progress: 70,
      statusColor: 'text-red-600 bg-red-50',
    },
    {
      id: 'teeth',
      name: 'Teeth',
      icon: '🦷',
      status: 'Good',
      date: '26 Oct 2021',
      color: 'bg-green-400',
      progress: 90,
      statusColor: 'text-green-600 bg-green-50',
    },
    {
      id: 'bone',
      name: 'Bone',
      icon: '🦴',
      status: 'Good',
      date: '26 Oct 2021',
      color: 'bg-orange-400',
      progress: 75,
      statusColor: 'text-orange-600 bg-orange-50',
    },
  ];

  return (
    <div className="min-h-screen rounded-2xl">
      {/* Mobile/Tablet Layout - Stacked */}
      <div className="flex flex-col lg:hidden">
        {/* Top Panel - Body Image (Mobile/Tablet) */}
        <div className="flex items-center justify-center bg-red p-4 sm:p-6 relative min-h-[50vh]">
          <button className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-xs sm:max-w-sm">
            <img
              src={body}
              alt="Human Body"
              className="w-full h-auto"
            />

            {/* Interactive Points - Responsive sizing */}
            {/* Heart */}
            <div className="absolute top-[32%] left-[48%] -translate-x-1/2">
              <div
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${selectedSystem === 'heart' ? 'bg-red-500' : 'bg-red-300'
                  } cursor-pointer animate-pulse`}
                onClick={() => setSelectedSystem('heart')}
              ></div>
            </div>

            {/* Lungs */}
            <div className="absolute top-[28%] left-[42%]">
              <div
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${selectedSystem === 'lungs' ? 'bg-pink-500' : 'bg-pink-300'
                  } cursor-pointer animate-pulse`}
                onClick={() => setSelectedSystem('lungs')}
              ></div>
            </div>

            {/* Teeth */}
            <div className="absolute top-[18%] left-[49%] -translate-x-1/2">
              <div
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${selectedSystem === 'teeth' ? 'bg-green-500' : 'bg-green-300'
                  } cursor-pointer animate-pulse`}
                onClick={() => setSelectedSystem('teeth')}
              ></div>
            </div>

            {/* Bone */}
            <div className="absolute top-[45%] left-[50%] -translate-x-1/2">
              <div
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${selectedSystem === 'bone' ? 'bg-orange-500' : 'bg-orange-300'
                  } cursor-pointer animate-pulse`}
                onClick={() => setSelectedSystem('bone')}
              ></div>
            </div>
          </div>
        </div>

        {/* Bottom Panel - Health Systems (Mobile/Tablet) */}
        <div className="bg-white p-4 sm:p-6 border-t border-gray-200 min-h-[50vh] overflow-y-auto">
          <div className="space-y-3 sm:space-y-4">
            {healthSystems.map((system) => (
              <div
                key={system.id}
                className={`p-3 sm:p-4 rounded-lg border transition-all cursor-pointer ${selectedSystem === system.id
                  ? 'border-blue-200 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
                  }`}
                onClick={() => setSelectedSystem(system.id)}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="text-xl sm:text-2xl">{system.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {system.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{system.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 ${system.statusColor}`}
                >
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  {system.status}
                </div>

                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mb-2 sm:mb-3">
                  <div
                    className={`h-1.5 sm:h-2 rounded-full ${system.color} transition-all duration-500`}
                    style={{ width: `${system.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-600">
                    {system.progress}% Health Score
                  </span>
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 text-right">
            <button className="text-blue-500 hover:text-blue-600 text-xs sm:text-sm font-medium flex items-center ml-auto">
              Details
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex rounded-2xl">
        {/* Left Panel - Body Image (Desktop) */}
        <div className="flex-1 flex items-center justify-center relative" style={{ backgroundColor: '#481E14' }}>
          <button className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-md xl:max-w-lg">
            <img
              src={body}
              alt="Human Body"
              className="w-full h-auto"
            />

            {/* Interactive Points */}
            {/* Heart */}
            <div className="absolute top-[32%] left-[48%] -translate-x-1/2">
              <div
                className={`w-3 h-3 xl:w-4 xl:h-4 rounded-full ${selectedSystem === 'heart' ? 'bg-red-500' : 'bg-red-300'
                  } cursor-pointer animate-pulse hover:scale-110 transition-transform`}
                onClick={() => setSelectedSystem('heart')}
              ></div>
            </div>

            {/* Lungs */}
            <div className="absolute top-[28%] left-[42%]">
              <div
                className={`w-3 h-3 xl:w-4 xl:h-4 rounded-full ${selectedSystem === 'lungs' ? 'bg-pink-500' : 'bg-pink-300'
                  } cursor-pointer animate-pulse hover:scale-110 transition-transform`}
                onClick={() => setSelectedSystem('lungs')}
              ></div>
            </div>

            {/* Teeth */}
            <div className="absolute top-[18%] left-[49%] -translate-x-1/2">
              <div
                className={`w-3 h-3 xl:w-4 xl:h-4 rounded-full ${selectedSystem === 'teeth' ? 'bg-green-500' : 'bg-green-300'
                  } cursor-pointer animate-pulse hover:scale-110 transition-transform`}
                onClick={() => setSelectedSystem('teeth')}
              ></div>
            </div>

            {/* Bone */}
            <div className="absolute top-[45%] left-[50%] -translate-x-1/2">
              <div
                className={`w-3 h-3 xl:w-4 xl:h-4 rounded-full ${selectedSystem === 'bone' ? 'bg-orange-500' : 'bg-orange-300'
                  } cursor-pointer animate-pulse hover:scale-110 transition-transform`}
                onClick={() => setSelectedSystem('bone')}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Panel - Health Systems (Desktop) */}
        <div
          className="w-80 p-6 border-l border-gray-200 overflow-y-auto"
          style={{ backgroundColor: '#102E50' }}
        >
          <div className="space-y-4">
            {healthSystems.map((system) => (
              <div
                key={system.id}
                className={`p-4 rounded-lg border transition-all cursor-pointer hover:shadow-md ${selectedSystem === system.id
                  ? 'border-blue-200 bg-blue-50 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300'
                  }`}
                onClick={() => setSelectedSystem(system.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{system.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {system.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{system.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 ${system.statusColor}`}
                >
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  {system.status}
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full ${system.color} transition-all duration-500`}
                    style={{ width: `${system.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">
                    {system.progress}% Health Score
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center ml-auto transition-colors">
              Details
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMonitor;