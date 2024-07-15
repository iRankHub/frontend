import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-foreground capitalize text-xl">
        UMUTONI sandrine
      </h3>
      <div className="flex items-center justify-between gap-5 flex-wrap mt-4">
        <div className="flex items-center justify-between flex-1 border-2 rounded-md border-border p-3">
          <div className="leading-6">
            <h3 className="font-bold text-foreground">Email</h3>
            <small className="text-purple">sandrine@gmail.com</small>
          </div>
          <Image
            src={"/static/images/gmail.png"}
            alt="Gmail"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-between flex-1 border-2 rounded-md border-border p-3">
          <div className="leading-6">
            <h3 className="font-bold text-foreground">Email</h3>
            <small className="text-purple">sandrine@gmail.com</small>
          </div>
          <Image
            src={"/static/images/mtn-logo.png"}
            alt="Gmail"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-between flex-1 border-2 rounded-md border-border p-3">
          <div className="leading-6">
            <h3 className="font-bold text-foreground">Email</h3>
            <small className="text-purple">sandrine@gmail.com</small>
          </div>
          <Image
            src={"/static/images/idebate-small.png"}
            alt="Gmail"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="mt-5">
        <h1>Account Information</h1>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Profile;
