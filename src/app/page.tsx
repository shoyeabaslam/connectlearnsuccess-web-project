"use client";

import Image from "next/image";
import logo from "../../public/logo.jpg";
import pythonImage from "../assests/images/python.jpg";
import htmlImage from "../assests/images/html.jpg";
import javaImage from "../assests/images/java.jpg";
import jsImage from "../assests/images/js.jpg";
import Link from "next/link";

const data = [
  { image: pythonImage, url: "/viewcourse?id=_uQrJ0TkZlc?si=Qi-e6SbFKaAdI5ob", title: "Python Complete Course" },
  { image: htmlImage, url: "/viewcourse?id=qz0aGYrrlhU?si=S0yHhpN3fBqCe81y", title: "Html Complete Course" },
  { image: javaImage, url: "/viewcourse?id=eIrMbAQSU34?si=DTKpgw0QN37nbFTt", title: "Java Complete Course" },
  { image: jsImage, url: "/viewcourse?id=W6NZfCO5SIk?si=mqWppOGqI0x3eEsH", title: "Javascript Complete Course" },
];
export default function Home() {
  return (
    <main>
      <div className="flex px-32 mt-24 min-h-[75vh]">
        <div className="flex-1 flex flex-col items-start space-y-10">
          <p className="text-sm font-semibold ml-3">
            <span className="bg-rose-500 rounded-full px-2 text-white">
              50%off
            </span>{" "}
            <span className="text-rose-500">Learn From Today</span>
          </p>
          <h1 className="text-7xl font-Alegreya mt-4 font-bold">
            The Best Way For Your Learning
          </h1>
          <h4 className="ml-3 text-sm font-semibold">
            Unlock Knowledge, Connect, Grow Together
          </h4>
          <button className="border px-4 py-3  bg-secondary-color font-sm text-white rounded-full">
            Explore Courses
          </button>
        </div>
        <div className="flex-1 flex justify-end -mt-8 mr-8">
          <Image
            className="w-[25rem] h-[25rem] mix-blend-multiply "
            src={logo}
            width={400}
            height={400}
            alt="logo"
          />
        </div>
      </div>
      <div className="flex px-32 pb-10 flex-col">
        <h2 className="text-4xl font-bold font-Alegreya pb-10">Top Courses</h2>
        <div className="flex justify-between">
          {data.map((item, index) => (
            <Link href={item.url} key={index}>
              <div className="w-60 hover:shadow-2xl cursor-pointer hover:shadow-gray-600 h-60 shadow-lg rounded-xl overflow-hidden flex bg-green-100 space-y-6 p-3 flex-col items-center shadow-gray-400">
                <Image
                  className="rounded-xl w-[100%] h-36 bg-contain"
                  src={item.image}
                  width={200}
                  height={200}
                  alt="cover image"
                />
                <h2 className="mt-4 truncate font-semibold">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
