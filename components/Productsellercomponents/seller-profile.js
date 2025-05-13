"use client";

import Link from "next/link";
import {
  Store,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Package,
  Wallet,
  CreditCard,
  Gift,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RevenueOverview from "../Analyticscomponents/revenue-overview";
import RevenueCommission from "../revenuecomponent/revenue-commission-card";
import ProductTable from "./product-table";

export default function SellerProfile({ seller }) {
  // Default seller data if none provided
  const defaultSeller = {
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
    customers: "4K+",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  };

  const sellerData = seller || defaultSeller;

  return (
    <div className="w-full p-4 mx-auto">
      {/* <div className="mb-6">
        <Button variant="ghost" className="text-gray-600 pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Sellers
        </Button>
      </div> */}

      {/* Top Section */}
      <Card className="mb-3 border border-gray-200">
        <CardContent className="p-3">
          <div className="flex flex-col md:flex-row gap-6 relative">
            {/* Store Icon */}
            <div className="w-full md:w-44 h-40 bg-red-200 rounded-md flex justify-center items-center shrink-0">
              <Store className="h-16 w-16 text-gray-800" />
            </div>

            {/* Seller Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold mb-1">
                  {sellerData.businessName}
                </h1>
              </div>

              <Link
                href={`https://${sellerData.website}`}
                className="text-teal-600 text-sm flex items-center hover:underline mb-2"
              >
                {sellerData.website}
                <ChevronRight className="h-3 w-3 ml-1" />
              </Link>

              <div className="flex items-center mb-4">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-medium">{sellerData.rating}</span>
                <span className="text-gray-500 ml-1">
                  ({sellerData.reviews})
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start text-sm">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{sellerData.address}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-gray-500 mr-2 shrink-0" />
                  <span className="text-gray-700">{sellerData.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-gray-500 mr-2 shrink-0" />
                  <span className="text-gray-700">
                    {sellerData.phone} | {sellerData.alternatePhone}
                  </span>
                </div>
              </div>
            </div>

            {/* Revenue Overview */}
            <div className="md:w-1/2 lg:w-1/2">
              <h2 className="text-lg font-medium mb-4">Revenue Overview</h2>
              <div className="grid grid-cols-4 gap-3">
                <Card className="border border-gray-200">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="bg-gray-100 p-2 rounded-md mb-2">
                      <Package className="h-5 w-5 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-500 mb-1">Total Products</p>
                    <p className="text-xl font-semibold">
                      {sellerData.totalProducts}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="bg-gray-100 p-2 rounded-md mb-2">
                      <Wallet className="h-5 w-5 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-500 mb-1">Revenue</p>
                    <p className="text-xl font-semibold">
                      ${sellerData.revenue.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="bg-gray-100 p-2 rounded-md mb-2">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-500 mb-1">Commission</p>
                    <p className="text-xl font-semibold">
                      ${sellerData.commission.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="bg-gray-100 p-2 rounded-md mb-2">
                      <Gift className="h-5 w-5 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-500 mb-1">Customers</p>
                    <p className="text-xl font-semibold">
                      {sellerData.customers}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About & Description */}
      <Card className="border border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">About & Description</h2>
          <div className="space-y-4 text-gray-700">
            <p>{sellerData.description}</p>
            <p>{sellerData.description}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch py-4">
        <RevenueOverview />
        <RevenueCommission/>
      </div>
      <div >
        <ProductTable/>
      </div>
    </div>
  );
}
