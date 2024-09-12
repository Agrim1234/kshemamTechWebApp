"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosAdd } from "react-icons/io";


const ProfileForm = () => {

    const [hasCondition, setHasCondition] = useState(false);

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg max-h-[90vh] overflow-auto scroll-smooth">

            <div className="bg-gray-200 p-4 flex justify-start fixed top-0 items-center gap-8 w-[448px] max-w-md">
                <div className="w-6">
                    <Link href={'/homePage'}>
                        <IoIosArrowBack />
                    </Link>
                </div> {/* Placeholder for left icon */}
                <h1 className="text-lg font-semibold">Patient Profile</h1>
            </div>

            <div className="flex items-center justify-between mt-14 px-md border-b-black bg-slate-100 py-sm">
                <div className="flex items-center space-x-2">
                    <div className='border-[1px] border-black p-sm rounded-xl bg-black text-white'>
                        <p className="font-semibold">Profile1</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className='border-[1px] border-black p-sm rounded-xl'>
                        <p className="font-semibold">Profile2</p>
                    </div>
                </div>
                <button className="text-blue-500 font-semibold">Add Profile</button>
            </div>

            <form>
                <div className="space-y-4 mt-md mb-6 px-md">
                    <input
                        type="text"
                        placeholder="Pre Populated Patient Name (Editable)"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Pre Populated Patient Age (Editable)"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Pre Populated Patient Gender (Editable)"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="space-y-2 mb-6 px-md">
                    <div className="flex items-center">
                        <input type="checkbox" id="service1" className="mr-2" checked />
                        <label htmlFor="service1">Pre checked service type</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="service2" className="mr-2" />
                        <label htmlFor="service2">Rehabilitation</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="service3" className="mr-2" />
                        <label htmlFor="service3">Pain Management</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="service4" className="mr-2" />
                        <label htmlFor="service4">Exercise Therapy</label>
                    </div>
                </div>

                <div className='mb-6 px-md'>
                    <textarea
                        placeholder="Details of the service opted by the patient to be filled as per the plan etc. for each"
                        className="w-full p-2 border border-gray-300 rounded-md mb-6 px-md"
                        rows={4}
                    ></textarea>
                </div>
            </form>


            <form>
                <div className="mb-6 px-md">
                    <p className="text-lg font-semibold mb-2">Any other medical condition</p>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="medicalCondition"
                                value="yes"
                                checked={hasCondition === true}
                                onChange={() => setHasCondition(true)}
                                className="mr-2"
                            />
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="medicalCondition"
                                value="no"
                                checked={hasCondition === false}
                                onChange={() => setHasCondition(false)}
                                className="mr-2"
                            />
                            <span>No</span>
                        </label>
                    </div>
                </div>

                {hasCondition && (
                    <div className="mb-6 px-md">
                        <input
                            type="text"
                            placeholder="If yes"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                )}

                <div className="mb-6 px-md">
                    <button
                        type="button"
                        className="w-full p-2 bg-gray-100 text-gray-600 border border-gray-300 rounded-md text-left"
                    >
                        Supporting documents upload
                    </button>
                </div>

                <div className="mb-6 px-md">
                    <textarea
                        placeholder="Doctor Notes"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    ></textarea>
                </div>

                <div className="mb-6 px-md">
                    <p className="text-lg font-semibold mb-2">Treatment Plan</p>
                    <div className="flex items-center space-x-4">
                        <div>
                            <label className="flex items-center">Tense</label>
                            <select className="p-2 border border-gray-300 rounded-md" defaultValue={'Tense'}>
                                <option value="IR">IR</option>
                                <option value="electrotherapy">Electrotherapy</option>
                            </select>
                        </div>

                        <div>
                            <label className="flex items-center">Part</label>
                            <select className="p-2 border border-gray-300 rounded-md w-[150px]">
                                <option value="tense">Arms</option>
                                <option value="electrotherapy">Legs</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex flex-col items-start space-x-4 mt-md">
                        <label className="flex items-center">Number of days</label>
                        <select className="p-2 border flex items-center border-gray-300 rounded-md w-[150px]">
                            <option value="tense">7</option>
                            <option value="electrotherapy">5</option>
                        </select>
                    </div>

                </div>

                <div className='flex justify-start px-md'>
                    <button type="submit" className=" flex gap-3 items-center justify-center bg-blue-500 text-white py-2 rounded-md w-[100px]">
                        <IoIosAdd size={30}/>
                        <span className='flex justify-center items-center'>Add</span>
                    </button>
                </div>

                <div className='flex justify-center mt-lg'>
                    <button type="submit" className=" bg-blue-500 text-white py-2 rounded-md w-[200px]">
                        Add to Patient Profile
                    </button>
                </div>
            </form>
        </div>


    );
};

export default ProfileForm;