"use client";

import { useState } from "react";
import Link from "next/link";
import { Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DocumentApprovalPage from "./document-approval";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, Mail, Phone, Store, ChevronRight } from "lucide-react"
import dashiconsstore from "@/public/Asset/dashiconsstore.png" 
import Image from "next/image";
export default function SellersManagement() {
  const [profileTab, setProfileTab] = useState("all");

  const applications = [
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      registrationDate: "28-03-2025",
      status: "Pending",
    },
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      registrationDate: "28-03-2025",
      status: "Pending",
    },
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      registrationDate: "28-03-2025",
      status: "Pending",
    },
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      registrationDate: "28-03-2025",
      status: "Approved",
    },
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      registrationDate: "28-03-2025",
      status: "Approved",
    },
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      registrationDate: "28-03-2025",
      status: "Approved",
    },
  ];


  const activeSellers= [
    {
      businessName: "Business Name",
      website: "www.businessname.com",
      address: "This is for a sample address",
      email: "businessname@gmail.com",
      phone: "+91 9738687282",
      alternatePhone: "+91 6783567389",
      rating: 5.0,
      reviews: 23,
      totalProducts: 234,
      revenue: 6876,
      commission: 1876,
    },
    {
      businessName: "Business Name",
      website: "www.businessname.com",
      address: "This is for a sample address",
      email: "businessname@gmail.com",
      phone: "+91 9738687282",
      alternatePhone: "+91 6783567389",
      rating: 5.0,
      reviews: 23,
      totalProducts: 234,
      revenue: 6876,
      commission: 1876,
    },
    {
      businessName: "Business Name",
      website: "www.businessname.com",
      address: "This is for a sample address",
      email: "businessname@gmail.com",
      phone: "+91 9738687282",
      alternatePhone: "+91 6783567389",
      rating: 5.0,
      reviews: 23,
      totalProducts: 234,
      revenue: 6876,
      commission: 1876,
    },
    {
      businessName: "Business Name",
      website: "www.businessname.com",
      address: "This is for a sample address",
      email: "businessname@gmail.com",
      phone: "+91 9738687282",
      alternatePhone: "+91 6783567389",
      rating: 5.0,
      reviews: 23,
      totalProducts: 234,
      revenue: 6876,
      commission: 1876,
    },
  ]


  return (
    <div className="w-full rounded-lg border h-full bg-white p-6">
      {/* Main Tabs */}
      <Tabs defaultValue="applications" className="">
        <TabsList className="p-0 bg-transparent space-x-2 h-auto">
          <TabsTrigger
            value="applications"
            className="rounded-md px-6 py-2 text-base font-medium data-[state=active]:bg-[#106C83] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:border data-[state=inactive]:border-gray-200 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-50"
          >
            Sellers Applications
          </TabsTrigger>
          <TabsTrigger
            value="active"
            className="rounded-md px-6 py-2 text-base font-medium data-[state=active]:bg-[#106C83] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:border data-[state=inactive]:border-gray-300 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-50"
          >
            Active Sellers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="applications">
          {/* Profile Tabs and Filters */}
          <div className="flex justify-between items-center mb-4">
            <div className="border-b border-gray-200 w-full">
              <div className="flex -mb-px">
                <button
                  onClick={() => setProfileTab("all")}
                  className={`mr-8 py-4 text-sm font-medium ${
                    profileTab === "all"
                      ? "border-b-2 border-[#106C83] text-[#106C83]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  All Profiles
                </button>
                <button
                  onClick={() => setProfileTab("pending")}
                  className={`mr-8 py-4 text-sm font-medium ${
                    profileTab === "pending"
                      ? "border-b-2 border-[#106C83] text-[#106C83]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Pending for Approval
                </button>
                <button
                  onClick={() => setProfileTab("rejected")}
                  className={`mr-8 py-4 text-sm font-medium ${
                    profileTab === "rejected"
                      ? "border-b-2 border-[#106C83] text-[#106C83]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Rejected Profiles
                </button>
                <button
                  onClick={() => setProfileTab("blacklisted")}
                  className={`mr-8 py-4 text-sm font-medium ${
                    profileTab === "blacklisted"
                      ? "border-b-2 border-[#106C83] text-[#106C83]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Blacklisted Profiles
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-4 shrink-0">
              <Select defaultValue="this-week">
                <SelectTrigger className="w-[130px] border-gray-200 bg-white text-sm">
                  <SelectValue placeholder="This Week" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="border-gray-200">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className=" rounded-md">
            <Table>
              <TableHeader className="bg-gray-50 border border-gray-300 rounded-md">
                <TableRow className="">
                  <TableHead className="text-xs font-medium text-gray-500">
                    BUSINESS NAME
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">
                    LOCATION
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">
                    OWNER NAME
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">
                    EMAIL ID
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">
                    CONTACT
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">
                    REGISTRATION DATE
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">
                    STATUS
                  </TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">
                    ACTION
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((application, index) => (
                  <TableRow key={index} className="border-b border-gray-200 h-12">
                    <TableCell className="font-medium">
                      {application.businessName}
                    </TableCell>
                    <TableCell>{application.location}</TableCell>
                    <TableCell>{application.ownerName}</TableCell>
                    <TableCell>{application.email}</TableCell>
                    <TableCell>{application.contact}</TableCell>
                    <TableCell>{application.registrationDate}</TableCell>
                    <TableCell>
                      <span
                        className={`font-medium ${
                          application.status === "Pending"
                            ? "text-amber-500"
                            : application.status === "Approved"
                            ? "text-green-500"
                            : application.status === "Rejected"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {application.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      {/* <span
                        href="#"
                        className="text-[#106C83] hover:underline font-medium"
                      >
                        View Details
                      </span> */}
                      <DocumentApprovalPage/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="active">
          <div className="flex justify-between items-center mb-2">
            <div className="w-full"></div>
            <div className="flex items-center gap-2 ml-4 shrink-0">
              <Select defaultValue="sort-by">
                <SelectTrigger className="w-[130px] border-gray-200 bg-white text-sm">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sort-by">Sort By</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="rating-high">Rating (High-Low)</SelectItem>
                  <SelectItem value="rating-low">Rating (Low-High)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Seller Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeSellers.map((seller, index) => (
              <Card key={index} className="border border-gray-200 rounded-lg overflow-hidden p-3">
                <div className="bg-[#EDC5C5] p-8 flex justify-center items-center rounded-md">
                  <Image src={dashiconsstore} alt="store" className=" object-contain  text-gray-800" />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">{seller.businessName}</h3>
                    <div className="flex items-center text-sm">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-medium">{seller.rating}</span>
                      <span className="text-gray-500 ml-1">({seller.reviews})</span>
                    </div>
                  </div>
                  <Link
                    href={`https://${seller.website}`}
                    className="text-[#106C83] text-sm flex items-center hover:underline mb-4"
                  >
                    {seller.website}
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start text-sm">
                      <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{seller.address}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 text-gray-500 mr-2 shrink-0" />
                      <span className="text-gray-700">{seller.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 text-gray-500 mr-2 shrink-0" />
                      <span className="text-gray-700">
                        {seller.phone} | {seller.alternatePhone}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-gray-200 pt-4">
                    <div className="text-center">
                      <p className="text-gray-500 text-xs">Total Products</p>
                      <p className="font-semibold">{seller.totalProducts}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-xs">Revenue</p>
                      <p className="font-semibold">${seller.revenue.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-xs">Commission</p>
                      <p className="font-semibold">${seller.commission.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="w-full rounded-md bg-[#106C83] hover:bg-[#106C83] text-white py-4">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
