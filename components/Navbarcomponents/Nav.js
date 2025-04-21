import Image from 'next/image'
import React from 'react'
import { Bell, ChevronDown, ChevronRight } from "lucide-react"

const Nav = () => {
  return (
    <header className="h-16 py-8 border-b flex items-center justify-between px-6">
    <div>
      <h1 className="text-lg font-medium">Welcome back, Martin!</h1>
      <p className="text-sm text-gray-500">Here&apos;s what&apos;s happening today.</p>
    </div>

    <div className="flex items-center space-x-4">
      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
        <Bell className="h-5 w-5 text-gray-600" />
      </button>

      <div className="flex items-center">
       
        <span className="text-sm font-medium mr-1">En</span>
        <ChevronDown className="h-4 w-4 text-gray-600" />
      </div>
    </div>
  </header>
  )
}

export default Nav