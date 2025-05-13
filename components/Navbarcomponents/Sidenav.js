"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/Asset/Logo.png";
import Logo2 from "@/public/Asset/Logo2.png";
import {
  LayoutDashboard,
  PackageSearch,
  Heart,
  ReceiptIndianRupee,
  Mail,
  Users,
  Settings,
} from "lucide-react";
import User from "@/public/Asset/User.png";
import { usePathname, useRouter } from "next/navigation";
const Sidenav = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/" },
    { label: "Product Sellers", icon: PackageSearch, path: "/product-seller" },
    { label: "Service Providers", icon: Heart, path: "/service-providers" },
    {
      label: "Revenue & Commission",
      icon: ReceiptIndianRupee,
      path: "/revenue",
    },
    { label: "Messages", icon: Mail, path: "/messages" },
    { label: "Customer's Service", icon: Users, path: "/customer-service" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <div
      className={`h-screen  sticky top-0 bottom-0 left-0 overflow-hidden border-r  border-gray-300  hidden md:flex lg:flex flex-col items-center bg-white transition-all duration-700 ease-in-out ${
        isMinimized ? "w-20" : "w-60   "
      }`}
    >
      <div className="p-0 sticky top-0  border-b w-full h-16 flex justify-center items-center">
        <Image
          src={Logo}
          alt="Brindah Logo"
        loading="lazy"
          className=" w-auto "
        />
        <Image
          src={Logo2}
          alt="Brindah"
         loading="lazy"
          className=" w-auto"
        />
      </div>

      <div className="flex w-full mt-3 px-2 flex-col flex-1">
        <div className="py-2">
          <p className="px-4 text-xs font-medium text-gray-500 mb-1">
            Dashboard
          </p>
          <div className="space-y-1 pb-2 border-b-1 border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => router.push(item.path)}
                className={`w-full flex items-center px-4 py-2 text-sm rounded-md transition-all duration-500 ${
                  isActive(item.path)
                    ? "bg-[#106C83] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon size={15} className="mr-2" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className=" py-2">
          <p className="px-4 text-xs font-medium text-gray-500 mb-1">Account</p>
          <div className="space-y-0.5">
            <button
              onClick={() => router.push("/settings")}
              className={`w-full flex items-center px-4 py-2 text-sm rounded-md transition-all duration-500 ${
                  isActive("/settings")
                    ? "bg-[#106C83] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}            >
              <Settings size={15} className="mr-2" />
              Settings
            </button>
          </div>
        </div>

        <div className="mt-auto p-4 border-t flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
            <Image src={User} alt="User Avatar" width={32} height={32} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">Martin Sharma</p>
            <p className="text-xs text-gray-500 truncate">
              Thursday, Mar 20, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
