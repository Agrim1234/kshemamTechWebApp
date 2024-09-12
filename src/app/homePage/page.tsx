"use client"

import { dailyScheduleItemProps } from '@/types/DailyScheduleItem';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Page = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [scheduleDropdown, setScheduleDropdown] = useState(false)
    const [dailySchedule, setDailySchedule] = useState<dailyScheduleItemProps[]>([
        {
            id: 1,
            name: "Sonali Shah",
            time: "7AM - 8AM"
        },
        {
            id: 2,
            name: "Aditya Pande",
            time: "8AM - 9AM"
        },
        {
            id: 3,
            name: "Aman Singh",
            time: "9AM - 10AM"
        },
        {
            id: 4,
            name: "Rajesh",
            time: "11AM - 12AM"
        }

    ])

    return (
        <div className=" min-h-screen">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gray-200 p-4 flex justify-between items-center">
                    <div className="w-6"></div> {/* Placeholder for left icon */}
                    <h1 className="text-lg font-semibold">Today&apos;s Appointments</h1>
                    <div className="flex items-center relative" onClick={() => setShowDropdown(prev => !prev)}>
                        <PiDotsThreeOutlineVerticalFill size={24} />
                        {showDropdown && <div className="bg-gray-300 p-4 absolute top-0 right-0 rounded flex flex-col w-[150px] h-[50px]">
                            <Link href={'/doctorProfile'}>
                                My Profile
                            </Link>
                        </div>}
                    </div>
                </div>

                {/* Appointments */}
                <div className="p-4 flex gap-4 align-middle w-full flex-wrap">
                    {
                        dailySchedule && dailySchedule.map(item => {
                            return <div key={item.id} className="bg-gray-300 p-4 rounded flex flex-col w-[150px] h-[150px]">
                                <Link href={'/patientProfile'}>
                                    <p className="text-sm font-medium">{item.time}</p>
                                    <p className="text-lg font-bold">{item.name}</p>
                                </Link>
                            </div>
                        }
                        )
                    }
                </div>

                {/* Footer Buttons */}
                <div className="p-4 space-y-2 relative flex flex-col justify-center items-center">
                    <div className=''>
                        <button id="dropdownHoverButton" onClick={() => setScheduleDropdown(!scheduleDropdown)} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Select Schedule<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>

                        <div id="dropdownHover" className={`z-10 ${scheduleDropdown ? '' : 'hidden'} bg-white divide-y divide-gray-100 bottom-28 rounded-lg absolute shadow w-44 dark:bg-gray-700`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Daily Schedule</a>
                                </li>
                                <li>
                                    <Link href="/monthlySchedulePage" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Monthly/Weekly Schedule</Link>
                                </li>
                                <li>
                                    <Link href="/monthlySchedulePage" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yearly Schedule</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button className="w-full py-2 bg-gray-200 rounded-lg text-gray-700 font-medium">
                        My Account
                    </button>
                </div>

                {/* Bottom Navigation */}

            </div>
        </div>
    );
};

export default Page;
