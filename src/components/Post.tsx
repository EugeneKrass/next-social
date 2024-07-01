import Image from "next/image";
import Comments from "./Comments";

function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={40}
            height={40}
            className="w-12 h-12 object-cover rounded-full"
          />
          <span className="text-gray-500 font-medium">John Doe</span>
        </div>
        <div>
          <Image src="/more.png" alt="" width={16} height={16} />
        </div>
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
        <Image
            src="https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-md"
        />
        
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi totam, atque reiciendis maiores neque tempore sapiente voluptates suscipit cumque obcaecati. Sint deleniti, laudantium in cumque asperiores eveniet quos non delectus.
        Ratione a accusamus et molestiae officiis fugiat nemo ipsum similique explicabo tenetur doloremque deserunt corporis animi quidem ad assumenda laborum eaque minus, vel quo eum veritatis reiciendis, unde voluptate? </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"/>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer"/>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span></span>
            </div>
            
        </div>
        <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline"> Shares</span></span>
                </div>
            </div>
      </div>
      <Comments />
    </div>
  );
}

export default Post;
