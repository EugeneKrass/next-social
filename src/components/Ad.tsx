import Image from "next/image";

function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm"
              ? "h-24"
              : size === "md"
              ? "h-36"
              : size === "lg"
              ? "h-48"
              : ""
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-full w-6 h-6"
          />
          <span className="text-blue-500 font-medium">Sponsor Name</span>
        </div>
        <p className={`size === "sm" ? "text-sm" : text-sm`}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            : size === "md" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, nulla, earum totam dolorum atque incidunt exercitationem assumenda."
            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, nulla, earum totam dolorum atque incidunt exercitationem assumenda rerum eveniet dolor itaque doloremque architecto hic officia fuga necessitatibus ex accusamus labore!"}
        </p>
        <button className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs">Learn More</button>
      </div>
    </div>
  );
}

export default Ad;
