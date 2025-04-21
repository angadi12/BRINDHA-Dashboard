"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"



export default function SellerApplicationsTable() {
  const [activeTab, setActiveTab] = useState("seller")

  const applications = [
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      status: "Pending",
    },
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      status: "Pending",
    },
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      status: "Pending",
    },
    {
      businessName: "Business Name PVT",
      location: "New York, USA",
      ownerName: "Robbin K",
      email: "robbink@gmail.com",
      contact: "+91 6737892767",
      status: "Approved",
    },
  ]

  return (
    <div className="w-full rounded-lg border bg-white p-3 mt-4 relative">
      <div className="flex w-full items-center justify-between ">
        <Tabs defaultValue="seller" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-[600px] grid-cols-2 mb-4 bg-white">
            <TabsTrigger
              value="seller"
              className={`text-sm border-0 rounded-none font-medium ${activeTab === "seller" ? "border-b-2 border-[#106C83]" : ""}`}
            >
              Latest Seller Applications
            </TabsTrigger>
            <TabsTrigger
              value="provider"
              className={`text-sm border-0 rounded-none shadow-none  text-[#939393] font-medium ${activeTab === "provider" ? "border-b-2 text-black border-[#106C83]" : ""}`}
            >
              Latest Service Provider Applications
            </TabsTrigger>
          </TabsList>

          <div className="absolute right-4 top-4 ">
            <Button variant="default" className="bg-[#106C83] hover:bg-[#106C83]">
              View all
            </Button>
          </div>

          <TabsContent value="seller" className="mt-2">
            <Table>
              <TableHeader  className="bg-gray-100 border border-gray-300 ">
                <TableRow>
                  <TableHead className="text-[#9C9C9C] text-sm font-medium">BUSINESS NAME</TableHead>
                  <TableHead className="text-[#9C9C9C] text-sm font-medium">LOCATION</TableHead>
                  <TableHead className="text-[#9C9C9C] text-sm font-medium">OWNER NAME</TableHead>
                  <TableHead className="text-[#9C9C9C] text-sm font-medium">EMAIL ID</TableHead>
                  <TableHead className="text-[#9C9C9C] text-sm font-medium">CONTACT</TableHead>
                  <TableHead className="text-[#9C9C9C] text-sm font-medium">STATUS</TableHead>
                  <TableHead className="text-[#9C9C9C] text-sm font-medium">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((application, index) => (
                  <TableRow key={index} className="border-t border-gray-200 h-14">
                    <TableCell className="font-medium">{application.businessName}</TableCell>
                    <TableCell>{application.location}</TableCell>
                    <TableCell>{application.ownerName}</TableCell>
                    <TableCell>{application.email}</TableCell>
                    <TableCell>{application.contact}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`
                          ${application.status === "Pending" ? "text-amber-500 border-amber-200 bg-amber-50" : ""}
                          ${application.status === "Approved" ? "text-green-500 border-green-200 bg-green-50" : ""}
                        `}
                      >
                        {application.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Link href="#" className="text-teal-600 hover:underline">
                        View Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="provider" className="mt-4">
            <div className="text-center py-8 text-gray-500">No service provider applications available</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
