import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
            <div className=" rounded-lg p-8 w-80 md:h-full">
                {/* Logo section */}
                <div className="flex justify-center mb-6">
                    <div className="rounded-full flex items-center justify-center">
                        <Image
                            src={"/logo.png"}
                            alt="logo"
                            width={300}
                            height={300}
                            className="animate-fadein"
                        />
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    <label className="flex flex-col">
                        <span className="text-black">Email Address</span>
                        <input type="email" className="mt-1 block w-full rounded-md border-black border-[1px] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-black">Password</span>
                        <input type="password" className="mt-1 block w-full rounded-md border-black border-[1px] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                </form>

                {/* Buttons */}
                <div className="space-y-4 mt-lg">
                    <button className="animate-fadeinleft w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                        <Link href={""}>
                            Sign Up
                        </Link>
                    </button>
                    <button className="animate-fadeinleft w-full border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50">
                        <Link href={"/homePage"}>
                            Sign In
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
