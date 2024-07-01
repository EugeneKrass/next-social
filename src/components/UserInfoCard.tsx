import Image from "next/image"
import Link from "next/link"

function UserInfoCard( { userId }: { userId?: string } ) {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-600">User Information</span>
                <Link href="/" className="text-blue-500 underline text-xs">See All</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-black">Euheniyo Kavalkante</span>
                    <span className="text-sm">@euheniyo</span>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" width={16} height={16} className="rounded-full" />
                    <span className="">Living in <span className="text-balck font-bold">Denver</span></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="" width={16} height={16} className="rounded-full" />
                    <span className="">Went to <span className="text-balck font-bold">Edgar High School</span></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="" width={16} height={16} className="rounded-full" />
                    <span className="">Work at <span className="text-balck font-bold">Apple Inc.</span></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Link href={"/"} className="text-blue-500 underline font-medium">kraus.dev</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src="/date.png" alt="" width={16} height={16} className="rounded-full" />
                        <span className="">Joined <span className="text-balck font-bold">Juli 2024</span></span>
                    </div>
                </div>
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg">Follow</button>
                <span className="text-red-500 self-end text-xs cursor-pointer">Block User</span>
            </div>
        </div>
    )
}

export default UserInfoCard