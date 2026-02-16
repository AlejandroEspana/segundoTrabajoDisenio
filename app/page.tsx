import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-4 gap-4 bg-gray-400 rounded-lg p-4">
        <div className="flex col-span-4 rounded-lg p-4 bg-[url('https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/40b074e1-2853-58bb-8b60-9225dcf5c188/2cb01dcf-dd43-53d8-9133-9e2989925c24.jpg')] bg-cover bg-center">

            <span className="text-xs font-bold rounded-lg p-1 bg-blend-hue bg-gray-300 text-white ">
              Things
            </span>

        </div>
        

      </div>
      <div>

      </div>
    </div>
  );
}
