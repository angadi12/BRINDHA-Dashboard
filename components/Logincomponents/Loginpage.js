"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import Logo from "@/public/Loginasset/Logo.png";
import Logoname from "@/public/Loginasset/Logoname.png";
import themeimage from "@/public/Loginasset/themeimage.png";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@heroui/react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { Superadminlogin } from "@/lib/API/Auth/Auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/toast-provider";

export default function LoginPage() {
  const { addToast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Basic email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    // --- Validation ---
    if (!email || !password) {
      addToast({
        title: `Password and email are required`,
        description: `Password and email are required`,
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    if (!validateEmail(email)) {
      addToast({
        title: `Please enter a valid email address.`,
        description: `Please enter a valid email address.`,
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setIsLoading(true);

    try {
      const data = { Email: email, Password: password };
      const result = await Superadminlogin(data);

      if (result && result.status) {
        // Store token and user info in localStorage
        Cookies.set("token", result.token);
        addToast({
        title: `Login Successful`,
        description: `Login Successful`,
        variant: "success",
        duration: 5000,
      });
        // Redirect to dashboard
        router.push("/");
      } else {
        setError(result?.message || "Invalid email or password.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen relative flex md:items-center md:justify-center items-start justify-start md:p-24 p-2 overflow-hidden bg-[#EDC5C5]">
      <div className="p-2 md:my-0 rounded-3xl shadow-2xl bg-white w-full">
        <div className="w-full bg-white h-full md:p-10 p-2 mx-auto flex flex-col md:flex-row justify-center items-center rounded-2xl border-dashed border-2 border-[#EDC5C5] z-10">
          {/* Left Card (Logo + Theme image) */}
          <Card className="w-full hidden md:flex flex-col justify-between items-start gap-4 py-0 overflow-hidden md:pt-6 md:px-4 md:w-5/12 bg-[#106C83] text-white rounded-tl-xl rounded-tr-xl md:rounded-bl-xl">
            <div className="h-full flex justify-between flex-col">
              <div className="flex items-start flex-col justify-items-start">
                <div className="flex items-center gap-2">
                  <Image src={Logo} alt="logo" className="object-contain" />
                  <Image
                    src={Logoname}
                    alt="brand"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <Image
              src={themeimage}
              alt="themeimage"
              className="object-contain mt-auto"
            />
          </Card>

          {/* Right Card (Form) */}
          <Card className="w-full md:w-7/12 shadow-none border-0 bg-white md:px-12 rounded-bl-xl rounded-br-xl md:rounded-tr-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full">
                <h1 className="mb-8 text-3xl font-medium text-center text-[#106C83]">
                  Log in to your account.
                </h1>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <p className="mb-2 text-gray-700 font-medium">
                      Fill your details
                    </p>

                    <div className="relative mb-4">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <MdEmail className="w-5 h-5 text-[#106C83]" />
                      </div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="pl-10 py-6 border-gray-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <IoMdLock className="w-5 h-5 text-[#106C83]" />
                      </div>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        className="pl-10 py-6 border-gray-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5 text-gray-400" />
                        ) : (
                          <Eye className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <p className="mt-2 text-sm text-red-600 font-medium">
                        {error}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="keep-logged-in"
                        className="border-[#106C83] data-[state=checked]:bg-[#106C83] data-[state=checked]:text-white"
                      />
                      <label
                        htmlFor="keep-logged-in"
                        className="text-sm font-medium text-gray-700"
                      >
                        Keep me Logged In
                      </label>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-[#106C83]"
                    >
                      Forgot Password
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 cursor-pointer rounded-2xl bg-[#106C83] hover:bg-[#0a5a6d] text-white"
                    disabled={isLoading}
                  >
                   <span className={isLoading?"loader":"hidden"}></span> {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
