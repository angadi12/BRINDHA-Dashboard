"use client"

import Image from "next/image"
import { useState } from "react"
import Logo from "@/public/Asset/Logo.png"
import Logo2 from "@/public/Asset/Logo2.png"
import {
  LayoutDashboard,
  PackageSearch,
  Heart,
  ReceiptIndianRupee,
  Mail,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react"
import User from "@/public/Asset/User.png"
import { usePathname, useRouter } from "next/navigation"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Sidenav = () => {
  const [isMinimized, setIsMinimized] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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
  ]

  const isActive = (path) => pathname === path

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div
      className={`h-screen sticky top-0 bottom-0 left-0 overflow-hidden border-r border-gray-300 hidden md:flex lg:flex flex-col items-center bg-white transition-all duration-300 ease-in-out ${
        isMinimized ? "w-20" : "w-60"
      }`}
    >
      {/* Header with logo and toggle button */}
      <div className="p-0 sticky top-0 border-b w-full h-16 flex justify-between items-center px-4 transition-all duration-300 ease-in-out">
        {!isMinimized ? (
          <>
          <Image src={Logo || "/placeholder.svg"} alt="Brindah Logo" loading="lazy" className="w-auto transition-all duration-500 ease-in-out" />
          <Image src={Logo2 || "/placeholder.svg"} alt="Brindah" loading="lazy" className="w-auto transform transition-all duration-500 ease-in-out" />

          </>
        ) : (
          <></>
        )}

        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-12 w-12 rounded-full hover:bg-gray-100">
          {isMinimized ? (
            <PanelLeftOpen size={20} className="text-[#106C83]" />
          ) : (
            <PanelLeftClose size={20} className="text-[#106C83]" />
          )}
        </Button>
      </div>

      <div className="flex w-full mt-3 px-2 flex-col flex-1">
        <div className="py-2">
          {!isMinimized && <p className="px-4 text-xs font-medium text-gray-500 mb-1 transition-all duration-300 ease-in-out">Dashboard</p>}
          <div className={cn("space-y-1 pb-2", !isMinimized && "border-b border-gray-200")}>
            {navItems.map((item) =>
              isMinimized ? (
                <Popover key={item.label}>
                  <PopoverTrigger asChild>
                    <button
                      onClick={() => router.push(item.path)}
                      className={`w-full flex justify-center items-center p-2 text-sm rounded-md transition-all duration-300 ${
                        isActive(item.path) ? "bg-[#106C83] text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <item.icon size={18} />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent side="right" className="w-auto p-2">
                    <p className="text-sm font-medium">{item.label}</p>
                  </PopoverContent>
                </Popover>
              ) : (
                <button
                  key={item.label}
                  onClick={() => router.push(item.path)}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                    isActive(item.path) ? "bg-[#106C83] text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon size={15} className="mr-2" />
                  <span className={`transition-all transform duration-900 ${isMinimized ? "w-20" : ""}`}>{item.label}</span>
                </button>
              ),
            )}
          </div>
        </div>

        <div className="py-2">
          {!isMinimized && <p className="px-4 text-xs font-medium text-gray-500 mb-1">Account</p>}
          <div className="space-y-0.5">
            {isMinimized ? (
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    onClick={() => router.push("/settings")}
                    className={`w-full flex justify-center items-center p-2 text-sm rounded-md transition-all duration-300 ${
                      isActive("/settings") ? "bg-[#106C83] text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Settings size={18} />
                  </button>
                </PopoverTrigger>
                <PopoverContent side="right" className="w-auto p-2">
                  <p className="text-sm font-medium">Settings</p>
                </PopoverContent>
              </Popover>
            ) : (
              <button
                onClick={() => router.push("/settings")}
                className={`w-full flex items-center px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                  isActive("/settings") ? "bg-[#106C83] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Settings size={15} className="mr-2" />
                Settings
              </button>
            )}
          </div>
        </div>

        {/* User profile section */}
        <div className={cn("mt-auto border-t", isMinimized ? "p-2" : "p-4", "flex items-center")}>
          {isMinimized ? (
            <Popover>
              <PopoverTrigger asChild>
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden cursor-pointer mx-auto">
                  <Image src={User || "/placeholder.svg"} alt="User Avatar" width={32} height={32} />
                </div>
              </PopoverTrigger>
              <PopoverContent side="right" className="w-60 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <Image src={User || "/placeholder.svg"} alt="User Avatar" width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Martin Sharma</p>
                    <p className="text-xs text-gray-500">Thursday, Mar 20, 2025</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2 text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut size={14} className="mr-2" />
                  Sign Out
                </Button>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                <Image src={User || "/placeholder.svg"} alt="User Avatar" width={32} height={32} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Martin Sharma</p>
                <p className="text-xs text-gray-500 truncate">Thursday, Mar 20, 2025</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidenav
