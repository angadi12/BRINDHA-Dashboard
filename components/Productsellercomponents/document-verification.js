"use client";
import { Download } from "lucide-react";
import { Button } from "@heroui/react";
import { Card } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { updateSellerDocumentStatus } from "@/lib/Redux/Slices/sellarSlice";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/toast-provider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const documentMeta = {
  AddressProof: {
    title: "Address Proof",
    description: "Proof of residence",
    required: true,
    urgent: true,
  },
  AadharCard: {
    title: "Aadhar Card",
    description: "Government-issued ID",
    required: true,
    urgent: true,
  },
  Pincard: {
    title: "PAN Card",
    description: "Permanent Account Number",
    required: true,
    urgent: true,
  },
  BankPassbook: {
    title: "Bank Passbook",
    description: "Bank account details",
    required: true,
    urgent: true,
  },
};

export default function Documentspreview({ document, id }) {
  const { updateStatusLoading, updateStatusError, updatedSellerStatus } =
    useSelector((state) => state.sellar);
  const [loadingAction, setLoadingAction] = useState(null);
  const { addToast } = useToast();
  const router = useRouter();

  const dispatch = useDispatch();
  if (!document || typeof document !== "object") {
    return (
      <p className="text-sm text-red-500 w-full flex justify-center items-center">
        No documents available.
      </p>
    );
  }
  const entries = Object.entries(document);

  const handleStatusUpdate = (status) => {
    if (!id) {
      addToast({
        title: "Error",
        description: "Seller ID is missing from the URL",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setLoadingAction(status);
    dispatch(updateSellerDocumentStatus({ id, status }))
      .unwrap()
      .then((res) => {
        addToast({
          title: `Seller ${status}`,
          description: res.message || `Seller marked as ${status}`,
          variant: "success",
          duration: 5000,
        });
        router.push("/product-seller");
      })
      .catch((err) => {
        addToast({
          title: "Error",
          description: err,
          variant: "destructive",
          duration: 5000,
        });
      })
      .finally(() => {
        setLoadingAction(null);
      });
  };

  const handleDownload = async (url, filename = "document.jpg") => {
    if (typeof window === "undefined") return;

    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      // Use window.document to ensure you're referencing the DOM's document
      const link = window.document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      link.style.display = "none";

      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, "_blank");
    }
  };

  return (
    <div className="w-full mx-auto p-2 space-y-6">
      <div className="w-full justify-between flex items-center">
        <h1 className="text-lg font-bold text-gray-900">
          Documents for Verification
        </h1>

        <div>
          <Button
            size="sm"
            disabled={loadingAction !== null}
            className="bg-white text-green-600 underline cursor-pointer font-semibold w-24"
            onPress={() => handleStatusUpdate("Approved")}
          >
            {loadingAction === "Approved" ? (
              <span className="loader2"></span>
            ) : (
              "Accept"
            )}
          </Button>

          <Button
            size="sm"
            isLoading={loadingAction === "Reverify"}
            disabled={loadingAction !== null}
            className="bg-white text-yellow-600 underline cursor-pointer font-semibold w-24"
            onPress={() => handleStatusUpdate("Reverify")}
          >
            Reverify
          </Button>

          <Button
            size="sm"
            isLoading={loadingAction === "Rejected"}
            disabled={loadingAction !== null}
            className="bg-white text-red-600 underline cursor-pointer font-semibold w-32"
            onPress={() => handleStatusUpdate("Rejected")}
          >
            Blacklist Seller
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {entries?.map(([key, filename]) => {
          const meta = documentMeta[key] || {};
          return (
            <Card key={key} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center bg-gray-50">
                      <Download className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900">
                      {meta.title || key}
                      {meta.required && (
                        <span
                          className={
                            meta.urgent ? "text-red-500" : "text-gray-500"
                          }
                        >
                          *
                        </span>
                      )}
                      {meta.urgent && <span className="text-red-500">*</span>}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {meta.description || "No description"}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Dialog>
                    <DialogTrigger>
                      <span
                        variant="link"
                        className="text-[#106C83] hover:underline cursor-pointer font-medium p-0 h-auto"
                      >
                        View Document
                      </span>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                      <DialogHeader className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between ">
                          <DialogTitle className="text-lg font-semibold text-gray-900">
                            Document Preview
                          </DialogTitle>
                          <div className="flex items-center gap-2 mr-4">
                            <Button
                              onPress={() =>
                                handleDownload(filename, `${key}.jpg`)
                              }
                              className="bg-[#106C83] hover:bg-[#0D5669] rounded-md text-white gap-2"
                            >
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="flex-1 overflow-auto  ">
                        <div className="flex justify-center py-4">
                          <Image
                            src={filename}
                            alt={filename}
                            height={300}
                            width={300}
                            className="w-full max-h-[70vh] object-contain rounded-lg "
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
