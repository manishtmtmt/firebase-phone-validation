import React from "react";

import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "./ui/input-otp";

interface OtpProps {
  otp: string;
  mobileNumber: string;
  isLoading: boolean;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  validateOtp: () => void;
}

const Otp: React.FC<OtpProps> = ({
  otp,
  mobileNumber,
  isLoading,
  setOtp,
  validateOtp,
}) => {
  return (
    <Card className="flex flex-col gap-3">
      <CardHeader>
        <CardTitle className="text-center">Validate OTP</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col items-center gap-3 space-y-1.5">
              <label htmlFor="number">
                Enter the OTP sent to your mobile number: +91 {mobileNumber}
              </label>
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full" onClick={validateOtp} disabled={isLoading}>
          Verify OTP
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Otp;
