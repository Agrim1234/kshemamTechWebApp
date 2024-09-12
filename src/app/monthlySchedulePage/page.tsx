"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { dailyScheduleItemProps } from '@/types/DailyScheduleItem';
import { IoIosArrowBack } from 'react-icons/io';


const Page = () => {

    const [startDate, setStartDate] = useState(new Date());
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
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center items-center max-w-md'>

                <div className="bg-gray-200 p-4 z-100 flex justify-around fixed top-0 items-center w-[448px] max-w-md">
                    <div className="w-6">
                        <Link href={'/homePage'}>
                            <IoIosArrowBack size={24} />
                        </Link>
                    </div> {/* Placeholder for left icon */}
                    <h1 className="text-lg font-semibold z-100 mr-16">Monthly/Weekly Schedule</h1>
                </div>

                <InfiniteCalendar
                    className='p-sm mt-16 z-0'
                    width={300}
                    height={240}
                    selected={startDate}
                    onSelect={(date: React.SetStateAction<Date>) => setStartDate(date)}
                />

                <div className='flex justify-center'>
                    <div className="p-4 flex gap-4 align-middle w-full flex-wrap">
                        {
                            dailySchedule && dailySchedule.map(item => {
                                return <div key={item.id} className="bg-gray-300 p-4 rounded flex flex-col w-[120px] h-[120px]">
                                    <p className="text-sm font-medium">{item.time}</p>
                                    <p className="text-lg font-bold">{item.name}</p>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;
