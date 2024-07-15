import { Icons } from "@/components/icons";
import React from "react";

function Instruction() {
  return (
    <div className="p-3 border rounded-md border-border bg-white w-full h-full">
      <div className="flex items-center justify-between mb-5">
        <span className="font-medium text-sm">Tournament Instructions</span>
        <span className="font-medium text-sm text-primary hover:underline cursor-pointer flex items-center gap-1">
          <Icons.downlaod size={16} />
          Dowload Tournament Instructions
        </span>
      </div>
      <p className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex inventore consectetur iure assumenda natus doloremque nostrum porro, velit quisquam exercitationem, fugit harum ipsa? Enim architecto vero perspiciatis ipsa eaque?
      </p>
    </div>
  );
}

export default Instruction;
