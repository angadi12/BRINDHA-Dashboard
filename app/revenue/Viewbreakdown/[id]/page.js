"use client";
import { Fetchpendingpayoutbyid } from "@/lib/Redux/Slices/revenueSlice";
import { ChevronLeft, ChevronDown, DiscIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast-provider";
import { Createpayout } from "@/lib/API/Revenue/Revenue";
import Image from "next/image";
import Wallet from "@/public/Asset/Wallet.png"
export default function PendingTransactionPage() {
  const { addToast } = useToast();
  const dispatch = useDispatch();
  const { pending, pendingloading, pendingerror } = useSelector(
    (state) => state.revenue
  );
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [vendorid, Setvendorid] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(Fetchpendingpayoutbyid(id));
  }, [dispatch, id]);

  const Createpayment = async () => {
    if (!vendorid) {
      addToast({
        title: `Vendor ID is required`,
        description: "Vendor ID is required",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    setLoading(true);

    try {
      const result = await Createpayout({ vendorId: vendorid });

      if (result?.status) {
        addToast({
          title: `Payment successfully Created`,
          description: result?.message,
          variant: "success",
          duration: 5000,
        });
        setOpen(false);
        // You can add toast or UI feedback here
      } else {
        addToast({
          title: `Payment failed Create`,
          description: result?.message,
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      addToast({
        title: `Payment failed Create`,
        description: error,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollArea className="w-full bg-gray-50 mx-auto pb-14 h-screen">
      {pendingloading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <span className="loader2"></span>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 p-4">
          <div className="w-full mx-auto ">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 pt-4">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.back()}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
                <h1 className="text-sm font-medium text-gray-900">
                  Pending Transaction
                </h1>
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>
                  <span
                    onClick={() => Setvendorid(pending[0]?.totalPayoutAmount)}
                    className="bg-[#106C83] hover:bg-[#106C83] cursor-pointer text-white px-6 py-2 rounded-md font-medium"
                  >
                    Pay {pending[0]?.totalPayoutAmount}
                  </span>{" "}
                </DialogTrigger>
                <DialogContent className="sm:max-w-md p-0 gap-0">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Confirm Payment</DialogTitle>
                    <DialogDescription>
                      Confirm your payment details before proceeding
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col items-center p-6 pt-8">
                    {/* Wallet Icon */}
                    <div className="mb-6">
                      <div className="border border-gray-300 flex justify-center items-center p-3 rounded-lg">
                        <Image alt="confirm payment" src={Wallet}/>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Confirm Payment
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-center mb-6">
                      Are you sure you want to Payment your funds ₹
                      {pending[0]?.totalPayoutAmount}
                    </p>

                    {/* Payment Details Card */}
                    {/* <div className="w-full bg-gray-100 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="mb-3">
                            <span className="font-semibold text-gray-900">
                              Holder Name:{" "}
                            </span>
                            <span className="text-gray-900">John Doe</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">
                              Account Number:{" "}
                            </span>
                            <span className="text-gray-900">
                              **** **** **** 6729
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="link"
                          className="text-[#106C83] hover:text-[#0d5a6e] p-0 h-auto font-semibold"
                        >
                          Change
                        </Button>
                      </div>
                    </div> */}

                    {/* Confirm Button */}
                    <Button
                      className="w-full bg-[#106C83] hover:bg-[#0d5a6e] text-white py-3 text-base font-semibold"
                      onClick={Createpayment}
                    >
                      {loading ? (
                        <span className="loader"></span>
                      ) : (
                        " Confirm Payment"
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
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
              {pendingloading ? (
                // Loading State
                <div className="flex justify-center items-center py-10">
                  <span className="loader2"></span>
                </div>
              ) : pendingerror ? (
                // Error State
                <div className="flex justify-center items-center py-10">
                  <p>{pendingerror}</p>
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
                      <TableHead>STATUS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pending[0]?.payments.map((transaction, index) => (
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
