import Ordersmanagement from "@/components/Allordercomponents/ordermanagement";
import Allorderstats from "@/components/Allordercomponents/Statcard";
import React from "react";

const page = () => {
  return (
    <div className="p-4 bg-gray-50">
      <Allorderstats/>

      <Ordersmanagement/>
    </div>
  );
};

export default page;
