import Image from "next/image"
import Link from "next/link"

function FriendRequests(){
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-600">Friend Requests</span>
            <Link href="/" className="text-blue-500 underline text-xs">See All</Link>
        </div>
        {/* USERS */}
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
                <Image
                    src="/accept.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
                <Image
                    src="/close.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </div>
        </div>
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
                <Image
                    src="/accept.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
                <Image
                    src="/close.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </div>
        </div>
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
                <Image
                    src="/accept.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
                <Image
                    src="/close.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </div>
        </div>
    </div>
  )
}

export default FriendRequests