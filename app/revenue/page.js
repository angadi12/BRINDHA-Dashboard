"use client";
import { CreditCard, DollarSign, MoreHorizontal, Wallet } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Revenuecard from "@/components/revenuecomponent/Revenuecard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("product-sellers");

  return (
    <ScrollArea className="w-full bg-gray-50 mx-auto pb-14 h-screen">

     <section className="p-4">
      <div className="flex justify-between items-center  mb-4 ">
        <Tabs
          defaultValue="product-sellers"
          className="w-auto bg-gray-50"
          onValueChange={setActiveTab}
        >
          <TabsList>
            <TabsTrigger
              value="product-sellers"
              className={`text-sm border-0 rounded-none font-medium ${
                activeTab === "product-sellers"
                  ? "border-b-2 border-[#106C83] bg-gray-50"
                  : ""
              }`}
            >
              Product Sellers
            </TabsTrigger>
            <TabsTrigger
              value="service-providers"
              className={`text-sm border-0 rounded-none font-medium ${
                activeTab === "service-providers"
                  ? "border-b-2 border-[#106C83]"
                  : ""
              }`}
            >
              Service Providers
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button className="bg-[#106C83] hover:bg-[#106C83] text-sm">
          Withdraw
        </Button>
      </div>
      <Revenuecard />
      <div className="bg-white rounded-lg border p-4 mb-2">
        <div className="flex justify-between items-center mb-6">
          <Tabs defaultValue="earnings" className="w-auto">
            <TabsList className="bg-transparent p-0">
              <TabsTrigger
                value="earnings"
                className="px-0 py-2 mr-6 data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-0 data-[state=active]:border-[#106C83] data-[state=active]:rounded-none data-[state=active]:shadow-none"
              >
                Earnings Breakdown
              </TabsTrigger>
              <TabsTrigger
                value="withdrawal"
                className="px-0 py-2 data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-0 data-[state=active]:border-[#106C83] data-[state=active]:rounded-none data-[state=active]:shadow-none"
              >
                Withdrawal Transaction
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Select defaultValue="this-week">
            <SelectTrigger className="w-[180px] border rounded-md">
              <SelectValue placeholder="This Week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-100 border border-gray-300 ">
              <TableRow className="bg-gray-50">
                <TableHead className="text-[#9C9C9C] text-sm font-medium">
                  CLIENT NAME
                </TableHead>
                <TableHead className="text-[#9C9C9C] text-sm font-medium">
                  ORDER ID
                </TableHead>
                <TableHead className="text-[#9C9C9C] text-sm font-medium">
                  DATE
                </TableHead>
                <TableHead className="text-[#9C9C9C] text-sm font-medium">
                  PAYMENT METHOD
                </TableHead>
                <TableHead className="text-[#9C9C9C] text-sm font-medium">
                  AMOUNT
                </TableHead>
                <TableHead className="text-[#9C9C9C] text-sm font-medium">
                  COMMISSION
                </TableHead>
                <TableHead className="text-[#9C9C9C] text-sm font-medium">
                  STATUS
                </TableHead>
                <TableHead className="text-[#9C9C9C] text-sm font-medium">
                  ACTIONS
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(7)].map((_, index) => (
                <TableRow key={index} className="border-t border-gray-200 h-14">
                  <TableCell>Robbin K</TableCell>
                  <TableCell>#order672</TableCell>
                  <TableCell>26/03/25</TableCell>
                  <TableCell>UPI</TableCell>
                  <TableCell>
                    {index === 2 ? "- Rs 5,789" : "+ Rs 5,789"}
                  </TableCell>
                  <TableCell>10%</TableCell>
                  <TableCell>
                    <span
                      className={`${
                        index === 2 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {index === 2 ? "Refunded" : "Complete"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Link href="#" className="text-[#106C83] hover:underline">
                      View Invoice
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

     </section>
    </ScrollArea>
  );
}
