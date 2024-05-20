import React from "react";
import {
  Typography,
  Grid,
  Button,
  FormControlLabel,
  Radio,
} from "@mui/material";

function OrderAddressCard() {
  return (
    <div className="rounded-lg text-sm md:text-xl w-full">
      <div
        className=" bg-white pt-4"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Grid container>
          <div className="w-full">
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <div className="pl-4 font-bold text-lg mb-1">
                Delivery Address
              </div>
              <div className="flex sm:space-x-3 pl-4 items-center w-full">
                <div className=" font-semibold text-base">Swastik Kumar Padhee</div>
                <div className=" hidden sm:flex">
                  <p className=" font-bold text-green-500 border border-solid w-fit p-2 border-green-500 rounded-3xl text-xs align-middle hover:bg-gray-300">
                    Home
                  </p>
                </div>
              </div>
              <div className="pl-4 pr-4 text-gray-500">
                <Typography style={{ textAlign: "left", marginTop: "7px" }}>
                  Aditya Hyundai, Plot No 2132/5132, Hal Plot No 342/P, Lewis
                  Road, Dist, BJB Nagar
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textAlign: "left", marginBottom: "8px" }}
                >
                  Bhubaneswar, ODISHA - 751014,
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textAlign: "left", marginBottom: "8px" }}
                >
                  6371949629
                </Typography>
                <p className=" font-bold text-green-500 border border-solid w-fit p-2 border-green-500 rounded-3xl text-xs mb-2 sm:hidden hover:bg-gray-30">
                  Home
                </p>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  );
}
export default OrderAddressCard;
