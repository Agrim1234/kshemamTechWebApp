import Link from 'next/link';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg w-full max-w-md">
                <div className="bg-gray-200 p-4 flex justify-start items-center gap-8 mb-md  max-w-md">
                    <div className="w-6">
                        <Link href={'/homePage'}>
                            <IoIosArrowBack size={24} />
                        </Link>
                    </div> {/* Placeholder for left icon */}
                    <h1 className="text-lg font-semibold">My Profile</h1>
                </div>

                {/* Doctor Title and Name */}
                <div className="mb-4 px-lg">
                    <div className="flex">
                        <select
                            id="doctorTitle"
                            className="rounded-l-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option>Dr.</option>
                            <option>Mr.</option>
                            <option>Ms.</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Name of the doctor"
                            className="rounded-r-md w-full border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                </div>

                {/* Speciality */}
                <div className="mb-4 px-lg">
                    <input
                        type="text"
                        placeholder="Speciality"
                        className="w-full border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Language Spoken */}
                <div className="mb-4 px-lg">
                    <input
                        type="text"
                        placeholder="Language spoken"
                        className="w-full border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Non-editable field */}
                <div className="mb-4 px-lg">
                    <input
                        type="text"
                        placeholder="Patient attend till date (a non-edit field)"
                        className="w-full border border-gray-300 p-2 rounded-md text-gray-500 bg-gray-200 cursor-not-allowed"
                        disabled
                    />
                </div>

                {/* Brief on work experience */}
                <div className="mb-4 px-lg">
                    <textarea
                        placeholder="Brief on the work experience."
                        className="w-full border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Upload Photo */}
                <div className="mb-4 px-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Upload photo
                    </label>
                    <input
                        type="file"
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                    />
                </div>

                {/* Change Password */}
                <div className="mb-4 px-lg">
                    <a href="#" className="text-indigo-600 text-sm hover:underline">
                        Change Password
                    </a>
                </div>

                {/* Patient Reviews */}
                <div className="mb-4 px-lg">
                    <textarea
                        placeholder="Patient Reviews"
                        className="w-full border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end px-lg">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}