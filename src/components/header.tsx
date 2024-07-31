import Image from "next/image"


const Header = () => {
  return (
    <div className="flex w-full items-center justify-between lg:h-24 h-20 border-b-2 lg:p-8 p-4 border-slate-100">
        <div className="relative w-32 md:w-48 h-14">
            <Image src="/images/whatbytes-logo.png" alt="WhatBytes Logo" fill className="object-contain" />
        </div>

        <div className="rounded-md md:w-48 w-36 h-12 lg:h-14 flex items-center gap-2 border border-black p-4 cursor-pointer hover:scale-110">
          <div className="relative rounded-full w-10 h-10 md:w-10 md:h-10 overflow-hidden">
            <Image src="/images/profile.jpg" alt="Profile Picture" fill className="object-cover" />
          </div>
          <div className="font-bold lg:text-xl text-md text-slate-900">
            Tajjuddin
          </div>
        </div>
    </div>
  )
}

export default Header