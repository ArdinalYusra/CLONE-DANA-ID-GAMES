import VoucherDigitalList from "@/components/voucherdigital/VoucherDigitalList";
import React, { Suspense } from "react";

const VoucherDigital = () => {
  return (
    <div className=" bg-[#151131] py-6">
      <Suspense fallback={<div>Loading...</div>}>
        <VoucherDigitalList />
      </Suspense>
    </div>
  );
};

export default VoucherDigital;
