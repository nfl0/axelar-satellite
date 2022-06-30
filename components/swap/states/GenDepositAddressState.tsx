import React from "react";
import { SpinnerCircular } from "spinners-react";
import { InputWrapper } from "../../common";

export const GenDepositAddressState = () => {
  return (
    <InputWrapper className="h-40">
      <div className="h-full space-x-2">
        <div className="flex flex-col w-full h-full">
          <div className="h-full">
            <div className="grid items-center grid-cols-5 mt-2 text-xs font-medium justify-items-center">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary inline-bloc">
                1
              </div>
              <progress className="h-1 progress progress-primary"></progress>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary inline-bloc">
                2
              </div>
              <progress className="h-1 progress" value={0}></progress>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary inline-bloc">
                3
              </div>
            </div>

            <div className="flex items-center justify-center mt-6 text-xs gap-x-2">
              <SpinnerCircular
                size={20}
                thickness={147}
                color={"#00a5ff"}
                secondaryColor={"#375f73"}
              />
              <span className="font-semibold">
                Generating deposit address...
              </span>
            </div>
          </div>
          <div className="w-full mt-auto">
            <div className="my-0 divider" />
            <div className="w-full text-xs font-medium text-center text-gray-500">
              Generating deposit address
            </div>
          </div>
        </div>
      </div>
    </InputWrapper>
  );
};