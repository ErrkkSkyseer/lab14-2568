import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  total: number;
  password: string;
  passwordAgain: string;
  haveCoupon: boolean;
  couponCode: string;
  correctCoupon: boolean;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  setPasswordAgain: (v: string) => void;
  sethaveCoupon: (v: boolean) => void;
  setCouponCode: (v: string) => void;
  setCorrectCoupon: (v: boolean) => void;
  discountCoupon: () => void;
  reset: () => void;
}
export type { MarathonFormState };
