"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ImagePlus, X } from "lucide-react";

export default function PreOrderPage() {
  const [type, setType] = useState("private");

  const [files, setFiles] = useState({
    idFront: null,
    idBack: null,
    address: null,
  });

  const [preview, setPreview] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // File handler with validation
  const handleFile = (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG, PDF allowed");
      return;
    }

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Max file size is 5MB");
      return;
    }

    setFiles((prev) => ({ ...prev, [key]: file }));

    const url = URL.createObjectURL(file);
    setPreview((prev) => ({ ...prev, [key]: url }));
  };

  const quantity = watch("quantity");
  const agreement = watch("agreement");

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1);
  const dd = String(today.getDate());
  const formattedDate = `${dd}-${mm}-${yyyy}`;

  const onSubmit = (data) => {
    data.amount = data.quantity / 2;
    if (!files.idFront || !files.idBack) {
      alert("ID documents are required");
      return;
    }

    console.log(data, files);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        USFRANC Private Sale & Investors Order
      </h1>

      {/* Toggle */}
      <Tabs defaultValue="private" className="mb-6">
        <TabsList className="grid grid-cols-2 w-[320px] mx-auto">
          <TabsTrigger value="private" onClick={() => setType("private")}>
            Private
          </TabsTrigger>
          <TabsTrigger value="investor" onClick={() => setType("investor")}>
            Investor
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Bonus Section */}
      <Card className="mb-6">
        <CardContent className="p-5 text-sm text-gray-700">
          {type === "private" ? (
            <>
              <h4 className="text-lg font-semibold mb-2">
                Deferred Utility Distribution
              </h4>
              <p>10% bonus after 12 months</p>
              <p>10% bonus after 24 months</p>
              <p className="font-semibold mt-2">Total bonus: 20%</p>
            </>
          ) : (
            <>
              <p className="w-full md:w-1/2">
                Participants may receive up to 60% additional USFC coins over a
                three-year period following the official launch of USFranc,
                subject to compliance and continued engagement.
              </p>

              <h4 className="text-lg font-semibold mb-2">Release Schedule:</h4>
              <p>20% bonus after 12 months</p>
              <p>20% bonus after 24 months</p>
              <p>20% bonus after 36 months</p>
              <p className="font-semibold mt-2">Total bonus: 60%</p>
            </>
          )}
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Buyer Info */}
        <Card>
          <h4 className="text-2xl font-bold text-gray-500 px-6">
            Buyer Information
          </h4>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Full Name"
                {...register("fullName", {
                  required: "Full name is required",
                })}
              />
              <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
            </div>

            <div>
              <Input
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div>
              <Input
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone is required",
                })}
              />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>

            <div>
              <Input
                placeholder="Address"
                {...register("address", {
                  required: "Address is required",
                })}
              />
              <p className="text-red-500 text-sm">{errors.address?.message}</p>
            </div>

            <div>
              <Input
                placeholder="Country"
                {...register("country", {
                  required: "Country is required",
                })}
              />
              <p className="text-red-500 text-sm">{errors.country?.message}</p>
            </div>
          </CardContent>
        </Card>

        {/* Document Upload */}
        <Card>
          <h4 className="text-2xl font-bold text-gray-500 px-6">
            ID Document{" "}
            <span className="text-sm text-black font-normal">
              (Obligation — email to usfranc@bobosohomail.com)
            </span>
          </h4>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {["idFront", "idBack", "address", "signature"].map((key) => (
              <div key={key} className="space-y-2">
                <label className="text-sm font-medium capitalize">
                  {key === "idFront"
                    ? "ID Front"
                    : key === "idBack"
                      ? "ID Back"
                      : key === "address"
                        ? "Proof of Address"
                        : "Signature Document"}
                </label>

                {!preview[key] && (
                  <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <ImagePlus className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Upload file</p>

                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) => handleFile(e, key)}
                      className="hidden"
                    />
                  </label>
                )}

                {preview[key] && (
                  <div className="relative border rounded-lg overflow-hidden bg-gray-50">
                    <button
                      type="button"
                      onClick={() => {
                        setFiles((prev) => ({ ...prev, [key]: null }));
                        setPreview((prev) => ({ ...prev, [key]: null }));
                      }}
                      className="absolute top-2 right-2 bg-white shadow p-1 rounded-full hover:bg-red-100 transition">
                      <X className="w-4 h-4 text-red-500" />
                    </button>

                    {files[key]?.type.includes("image") ? (
                      <Image
                        src={preview[key]}
                        width={1000}
                        height={1000}
                        alt="preview"
                        className="w-full h-40 object-cover"
                      />
                    ) : (
                      <iframe src={preview[key]} className="w-full h-40" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-4 text-sm">
            <h3 className="text-lg font-semibold text-[#7b5e00]">
              Payment Instructions
            </h3>

            <p className="text-gray-600">
              (Please transfer your order amount to the below bank details
              within 7 days)
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="font-medium">Bank Transfer:</p>
                <p>LCL Bank</p>
              </div>

              <div>
                <p className="font-medium">Account Name:</p>
                <p>
                  SAS Afin (USFRANC Reserve Management Entity - Ref USFRANC)
                </p>
              </div>

              <div>
                <p className="font-medium">IBAN:</p>
                <p>FR10 3000 2030 3700 007 3122 J65</p>
              </div>

              <div>
                <p className="font-medium">SWIFT/BIC:</p>
                <p>CRLYFRPP</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 grid md:grid-cols-2 gap-4">
            <div>
              <Input
                type="number"
                placeholder="Quantity"
                {...register("quantity", {
                  required: "Quantity required",
                })}
              />
              <p className="text-red-500 text-sm">{errors.quantity?.message}</p>
            </div>

            <Input
              placeholder="Total Amount (€)"
              value={quantity ? quantity * 0.5 : 0}
              {...register("amount")}
              disabled
            />
          </CardContent>
        </Card>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            {...register("agreement", { required: true })}
            className="mt-1"
          />

          <p className="text-gray-700">
            I confirm my order of USFRANC cryptocurrency, that i have read and
            accept USFC Terms & Conditions and the Privacy Policy and my
            intention to transfer the full order amount in Euros to the Bank
            Account provided. Upon receipt of payment, the corresponding USFRANC
            coins will be delivered to your chosen crypto wallet address which
            we will contact you on received of your payment.
          </p>
        </div>

        {errors.agreement && (
          <p className="text-red-500 text-sm">You must accept the agreement</p>
        )}

        <p className="text-gray-600 font-medium">Date: {formattedDate}</p>

        <div className="text-center">
          <Button
            type="submit"
            disabled={!agreement}
            className={`px-10 py-3 ${
              agreement
                ? "bg-primary hover:bg-[#5f4800] cursor-pointer"
                : "cursor-not-allowed"
            }`}>
            Confirm Order
          </Button>
        </div>
      </form>
      <div className="mt-20">
        <h4 className="text-lg font-semibold mb-2">
          How you crypto order will be processed:
        </h4>
        <ul className="list-disc text-gray-600">
          <li>Transfer your payment to the above account.</li>
          <li>
            Once confirmed, we will credit your wallet with the selected amount
            of USFC. This will be sent to your BNB-compatible wallet.
          </li>
        </ul>
        <h2></h2>
      </div>
    </div>
  );
}
