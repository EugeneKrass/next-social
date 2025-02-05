import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  ClerkLoading,
  ClerkLoaded
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between '>

      {/* LEFT */}

      <div className="md:hidden lg:block w-[20%] ">
        <Link href='/' className='font-bold text-xl text-blue-700'>EugeneDev</Link>
      </div>

      {/* CENTER */}

      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">

        {/* LINKS */}
        <div className='flex gap-6 text-grey-600'>

          <Link href='/' className='flex items-center gap-2'>
            <Image src='/home.png' alt='HomePage' width={16} height={16} className='w-4 h-4' />
            <span>Homepage</span>
          </Link>

          <Link href='/' className='flex items-center gap-2'>
            <Image src='/friends.png' alt='Friends' width={16} height={16} className='w-4 h-4' />
            <span>Friends</span>
          </Link>

          <Link href='/' className='flex items-center gap-2'>
            <Image src='/stories.png' alt='Stories' width={16} height={16} className='w-4 h-4' />
            <span>Stories</span>
          </Link>

        </div>
        <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input type="text" placeholder='search...' className='bg-transparent outline-none'  />
          <Image src='/search.png' alt='Search' width={14} height={14} className='w-4 h-4' />
        </div>
      </div>
      {/* RIGHT */}

      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full  border-gray-500  border-2 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
              <div className='cursor-pointer'>
                <Image src='/people.png' alt='People' width={28} height={28} />
              </div>
              <div className='cursor-pointer'>
                <Image src='/messages.png' alt='Messages' width={24} height={24}  />
              </div>
              <div className='cursor-pointer'>
                <Image src='/notifications.png' alt='Notifications' width={24} height={24} />
              </div>
              <UserButton />
            </SignedIn>
          <SignedOut>
            <div className='flex items-center gap-2 text-sm'>
              <Image src='/login.png' alt='Login' width={24} height={24} />
              <Link href='/sign-in'>Login/Register</Link>
            </div>  
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>

    </div>
  )
}

export default Navbar