import Image from "next/image";

function Comments() {
    return (
        <div className="comments">
            {/* WRITE */}
            <div className="flex items-center gap-4">
                <Image
                    src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                />
                <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="bg-transparent outline-none "
                    />
                    <Image
                        src="/emoji.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                </div>
            </div>
            {/* COMMENTS */}
            <div className="">
                {/* COMMENT */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* AVATAR */}
                    <Image
                        src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                    />
                    {/* DESC */}
                    <div className="flex flex-col gap-2">
                        <span className="font-medium">Eugene</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Corrupti, nulla, earum totam dolorum atque incidunt exercitationem
                            assumenda rerum eveniet dolor itaque doloremque architecto hic
                            officia fuga necessitatibus ex accusamus labore!
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/like.png"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="cursor-pointer w-4 h-4"
                                />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123 Likes</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer ">
                                <Image
                                    src="/reply.png"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="cursor-pointer w-4 h-4"
                                />
                                <span>Reply</span></div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image
                        src="/more.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer w-4 h-4"
                    />
                </div>
            </div>
        </div>
    );
}

export default Comments;
