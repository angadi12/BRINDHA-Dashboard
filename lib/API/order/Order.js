import { BaseUrl } from "@/lib/API/Baseurl";
import Cookies from "js-cookie";

export const GetAllorder = async (status) => {
  const token = Cookies.get("token");

  try {
    const params = new URLSearchParams();
    if (status) params.append("status", status);

    let result = await fetch(
      `${BaseUrl}/superadmin/get/vendorlist?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          token: token,
        },
      }
    );
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};
