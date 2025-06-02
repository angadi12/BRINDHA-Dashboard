"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Pencil, Eye, Trash2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllsellarproduct } from "@/lib/Redux/Slices/sellarSlice";
import { useParams } from "next/navigation";

export default function ProductTable() {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const { productloading, productdata, producterror } = useSelector(
    (state) => state.sellar
  );

  console.log(productdata);

  useEffect(() => {
    dispatch(
      fetchAllsellarproduct({
        Status: "",
        CategoryId: "",
        SubcategoryId: "",
        Measturments: "",
        VendorId: id,
        page: 1,
        limit: 10,
      })
    );
  }, []);

  const [selectedProduct, setSelectedProduct] = useState("Sewing Machine");
  const [selectedTimeframe, setSelectedTimeframe] = useState("This Week");

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "text-green-600";
      case "Pending":
        return "text-amber-500";
      case "Out of Stock":
        return "text-red-600";
      default:
        return "";
    }
  };

  return (
    <>
      {productloading ? (
        <div className="flex w-full justify-center items-center">
          <span className="loader2"></span>
        </div>
      ) : (
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg font-medium">
              {" "}
              <Tabs defaultValue="earnings" className="w-auto">
                <TabsList className="bg-transparent p-0">
                  <TabsTrigger
                    value="earnings"
                    className="px-0 py-2 cursor-pointer mr-6 data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-0 data-[state=active]:border-[#106C83] data-[state=active]:rounded-none data-[state=active]:shadow-none"
                  >
                    Approved Products
                  </TabsTrigger>
                  <TabsTrigger
                    value="withdrawal"
                    className="px-0 py-2 cursor-pointer data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-0 data-[state=active]:border-[#106C83] data-[state=active]:rounded-none data-[state=active]:shadow-none"
                  >
                    Pending Products
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardTitle>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex items-center justify-between w-48 px-4 py-2 text-sm"
              >
                {selectedProduct}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-between w-36 px-4 py-2 text-sm"
              >
                {selectedTimeframe}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-3">
            <ScrollArea className="h-auto rounded-md">
              <Table>
                <TableHeader className="bg-gray-100 text-[#9C9C9C]">
                  <TableRow>
                    <TableHead className="w-auto text-gray-500">
                      PRODUCT NAME
                    </TableHead>
                    <TableHead className="text-gray-500 uppercase">
                      Stock
                    </TableHead>
                    <TableHead className="text-gray-500">
                      PRODUCT PRICE
                    </TableHead>
                    <TableHead className="text-gray-500">DISCOUNTS</TableHead>
                    <TableHead className="text-gray-500">
                      PRICE ON DISPLAY
                    </TableHead>
                    <TableHead className="text-gray-500">STATUS</TableHead>
                    <TableHead className="text-gray-500">ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productdata?.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              alt={product?.Name}
                              width={40}
                              height={40}
                              className="rounded-md"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium">{product?.Name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{product.Stock}</TableCell>
                      <TableCell>{product.Yourprice}</TableCell>
                      <TableCell>{product.Discount}</TableCell>
                      <TableCell>{product.SellingPrice}</TableCell>

                      <TableCell>
                        <span
                          className={`font-medium ${getStatusColor(
                            product?.Status
                          )}`}
                        >
                          {product?.Status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {product?.Status ? (
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                          )}
                          {/* <Button variant="outline" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button> */}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </>
  );
}
