import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

function AddPost() {
  const { userId } = auth();

  const testAction = async (formData: FormData) => {
    "use server";

    if (!userId) return;
    const desc = formData.get("desc") as string;
    try {
      const res = await prisma.post.create({
        data: {
          authorId: userId,
          desc: desc,
        },
      });

      console.log("test", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4  justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/26050321/pexels-photo-26050321.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action={testAction} className="flex gap-4">
          <textarea
            name="desc"
            id=""
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2"
          >
            Post
          </button>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-600  flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
