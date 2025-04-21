import React from "react";
import Image from "next/image"
import Wallet from "@/public/Asset/Wallet.png"
import Commission from "@/public/Asset/Commission.png"
import pending from "@/public/Asset/pending.png"
import withdraw from "@/public/Asset/withdraw.png"
const Revenuecard = () => {
  return (
    <div className=" overflow-auto ">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-white border rounded-lg p-4 flex items-start gap-3">
          <div className="w-14 h-14 rounded-md ring-1 ring-gray-300 flex items-center justify-center ">
            <Image
              src={Wallet}
              alt="Total Earnings"
              className="object-contain w-10 h-10"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Total Earnings</p>
            <p className="text-2xl font-bold text-[#106C83]">$7,782</p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 flex items-start gap-3">
          <div className="w-14 h-14 rounded-md ring-1 ring-gray-300 flex items-center justify-center ">
            <Image
              src={Commission}v
              alt="Commission"
              className="object-contain w-10 h-10"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
            Commission
            </p>
            <p className="text-2xl font-bold text-[#106C83]">7,867</p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 flex items-start gap-3">
          <div className="w-14 h-14 rounded-md ring-1 ring-gray-300 flex items-center justify-center ">
            <Image
              src={pending}
              alt="Pending Payout"
              className="object-contain w-10 h-10"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
            Pending Payout
            </p>
            <p className="text-2xl font-bold text-[#106C83]">146</p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 flex items-start gap-3">
          <div className="w-14 h-14 rounded-md ring-1 ring-gray-300 flex items-center justify-center ">
            <Image
              src={withdraw}
              alt="Withdrawn"
              className="object-contain w-10 h-10"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">
            Withdrawn
            </p>
            <p className="text-2xl font-bold text-[#106C83]">55</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Revenuecard;
