import Link from "next/link"
import ProfileCard from "./ProfileCard"
import Image from "next/image"
import Ad from "./Ad"

function LeftMenu({type}: {type: "home" | "profile"}) {
  return (
    <div className='flex flex-col gap-6'>
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>Cources</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>GPTs</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link 
          href={"/"} 
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} className="rounded-full" />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm"/>
    </div>
  )
}

export default LeftMenu