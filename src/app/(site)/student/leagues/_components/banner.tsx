import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="w-full rounded-md grid grid-cols-2 overflow-hidden">
      <div className="bg-[#5F3813] p-10">
        <p className="w-full max-w-sm text-white">
          The Kigai Debate League is a prestigious competition where students
          from Kigali schools engage in friendly and national-level debates.
        </p>
      </div>
      <div className="relative w-full h-full">
        <Image
          src={"/static/images/tournaments.png"}
          alt="tournaments"
          fill
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default Banner;
