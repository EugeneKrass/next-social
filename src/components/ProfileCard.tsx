import Image from "next/image"
import Link from "next/link"
function ProfileCard() {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
            <div className="h-20 relative">
                <Image
                    src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt=""
                    fill
                    className="rounded-md object-cover"
                />
                <Image
                    src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full w-12 h-12 absolute object-cover left-0 right-0 m-auto -bottom-6 ring-1 z-10 ring-white"
                />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className="font-semibold">Euhenio Kavalkante</span>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <Image
                            src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full w-3 h-3 object-cover"
                        />
                        <Image
                            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full w-3 h-3 object-cover"
                        />
                        <Image
                            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            width={12}
                            height={12}
                            className="rounded-full w-3 h-3 object-cover"
                        />
                    </div>
                    <span className="text-sm">2.5k followers</span>
                </div>
                <button className="bg-blue-500 text-white rounded-md px-4 p-1">My Profile</button>
            </div>
        </div>
    )
}

export default ProfileCard