import Image from "next/image"
import Link from "next/link"

function UserMediaCard( { userId }: { userId?: string } ) {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-600">User Media</span>
                <Link href="/" className="text-blue-500 underline text-xs">See All</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image
                        src="https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserMediaCard