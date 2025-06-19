"use client";
import {
  Fetchpaidpayoutbyid,
  Fetchpendingpayoutbyid,
} from "@/lib/Redux/Slices/revenueSlice";
import { ChevronLeft, ChevronDown, DiscIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PaidTransactionPage() {
  const dispatch = useDispatch();
  const { paid, paidloading, paiderror } = useSelector(
    (state) => state.revenue
  );
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  useEffect(() => {
    dispatch(Fetchpaidpayoutbyid(id));
  }, [dispatch, id]);

  console.log(params);
  console.log(paid);

  return (
    <ScrollArea className="w-full bg-gray-50 mx-auto pb-14 h-screen">
      {paidloading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <span className="loader2"></span>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 p-4">
          <div className="w-full mx-auto ">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 pt-4">
              <div
                className="flex items-center gap-2 cursor-pointer "
                onClick={() => router.back()}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
                <h1 className="text-sm font-medium text-gray-900">
                  Paid Transaction
                </h1>
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-lg  border border-gray-200 p-4">
              {/* Section Header */}
              <div className="flex justify-between items-center mb-6 ">
                <h2 className="text-sm font-medium text-gray-900">
                  Product Wise Breakdown
                </h2>
                <div className="flex items-center gap-2 text-gray-600 cursor-pointer"></div>
              </div>

              {/* Table */}
              {paidloading ? (
                // Loading State
                <div className="flex justify-center items-center py-10">
                  <span className="loader2"></span>
                </div>
              ) : paiderror ? (
                // Error State
                <div className="flex justify-center items-center py-10">
                  <p>{paiderror}</p>
                </div>
              ) : paid?.payments?.length === 0 ? (
                <div className="flex justify-center items-center w-full h-60">
                  <p>No data available</p>
                </div>
              ) : (
                <Table>
                  <TableHeader className="bg-gray-100 border border-gray-300">
                    <TableRow className="bg-gray-50">
                      <TableHead>ORDER ID</TableHead>
                      <TableHead>NUMBER OF PRODUCTS</TableHead>
                      <TableHead> UNIT PRICE</TableHead>
                      {/* <TableHead>PAYMENT METHOD</TableHead> */}
                      <TableHead> TOTAL AMOUNT</TableHead>
                      <TableHead>COMMISSION</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paid?.payments.map((transaction, index) => (
                      <TableRow
                        key={index}
                        className="border-t border-gray-200 h-14"
                      >
                        <TableCell>
                          ID:{transaction?.orderId.slice(-8)}
                        </TableCell>
                        <TableCell>
                          {
                            transaction?.matchedSubOrder[0]?.products[0]
                              ?.quantity
                          }
                        </TableCell>
                        <TableCell>
                          {transaction?.matchedSubOrder[0]?.products[0]?.price}
                        </TableCell>
                        {/* <TableCell>
                            {transaction?.payments?.paymentMode}
                          </TableCell> */}
                        <TableCell>{transaction?.amount}</TableCell>
                        <TableCell>{transaction.commissionAmount}</TableCell>
                        <TableCell className="text-yellow-500">
                          {transaction?.PayoutStatus}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
        </div>
      )}
    </ScrollArea>
  );
}
