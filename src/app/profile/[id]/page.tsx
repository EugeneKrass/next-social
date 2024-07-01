import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="">
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image
                  src="https://images.pexels.com/photos/764880/pexels-photo-764880.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
                <Image
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  width={128}
                  height={128}
                  className="w-32 h-32 absolute object-cover left-0 right-0 m-auto -bottom-16 ring-4 z-10 ring-white rounded-full"
                />
              </div>
              <h1 className="mt-20 mb-4 text-2xl font-medium">Euhenio Kavalkante</h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">2.5k</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">4.7k</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">1.2k</span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%] ">
          <RightMenu userId="test" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
