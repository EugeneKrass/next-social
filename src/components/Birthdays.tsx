import Image from "next/image"
import Link from "next/link"
import { Button } from '../../../../AccessFree/Web-2024-06-19-deployNodeJS-React-recursion/react/nextjs-dashboard/app/ui/button';

function Birthdays(){
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-600">Birthdays</span>
        </div>
        {/* USER */}
        <div className="flex justify-between items-center font-medium">
            <div className="flex justify-between items-center">
                <Image
                    src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                />
                <span className="ml-4 font-semibold">Eugene</span>
            </div>
            <div className="flex justify-between items-center gap-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-thin">Celebrate</button>
            </div>
        </div>
        {/* UPCOMING */}
        <div className="flex items-center bg-slate-100 rounded-lg p-4 gap-4">
            <Image
                src="/gift.png"
                alt=""
                width={24}
                height={24}
            />
            <Link href={"/"} className="flex flex-col gap-1 text-xs">
                <span className="font-semibold text-gray-700">Upcoming Birthday</span>
                <span className="text-gray-500">See other 16 have upoming birthdays</span>
            </Link>
        </div>
        
    </div>
  )
}

export default Birthdays