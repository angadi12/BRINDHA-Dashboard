"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Pencil, Eye, Trash2 } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function ProductTable() {
  const [selectedProduct, setSelectedProduct] = useState("Sewing Machine")
  const [selectedTimeframe, setSelectedTimeframe] = useState("This Week")

  const products = [
    {
      id: "#6547",
      name: "Elite Sewing Machine",
      date: "27/03/2025",
      price: "$59",
      discount: "20%",
      displayPrice: "$59 $33",
      status: "In Stock",
    },
    {
      id: "#6547",
      name: "Elite Sewing Machine",
      date: "27/03/2025",
      price: "$59",
      discount: "20%",
      displayPrice: "$59 $33",
      status: "Low Stock",
    },
    {
      id: "#6547",
      name: "Elite Sewing Machine",
      date: "27/03/2025",
      price: "$59",
      discount: "20%",
      displayPrice: "$59 $33",
      status: "Out of Stock",
    },
    {
      id: "#6547",
      name: "Elite Sewing Machine",
      date: "27/03/2025",
      price: "$59",
      discount: "20%",
      displayPrice: "$59 $33",
      status: "In Stock",
    },
    {
      id: "#6547",
      name: "Elite Sewing Machine",
      date: "27/03/2025",
      price: "$59",
      discount: "20%",
      displayPrice: "$59 $33",
      status: "In Stock",
    },
    {
      id: "#6547",
      name: "Elite Sewing Machine",
      date: "27/03/2025",
      price: "$59",
      discount: "20%",
      displayPrice: "$59 $33",
      status: "In Stock",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "text-green-600"
      case "Low Stock":
        return "text-amber-500"
      case "Out of Stock":
        return "text-red-600"
      default:
        return ""
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-medium">All Products</CardTitle>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center justify-between w-48 px-4 py-2 text-sm">
            {selectedProduct}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="flex items-center justify-between w-36 px-4 py-2 text-sm">
            {selectedTimeframe}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[500px] rounded-md">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[250px]">PRODUCT NAME</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>CREATED ON</TableHead>
                <TableHead>PRODUCT PRICE</TableHead>
                <TableHead>DISCOUNTS</TableHead>
                <TableHead>PRICE ON DISPLAY</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt={product.name}
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">{product.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.date}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.discount}</TableCell>
                  <TableCell>
                    <span className="line-through text-muted-foreground mr-1">$59</span>
                    <span className="font-medium">$33</span>
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${getStatusColor(product.status)}`}>{product.status}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
