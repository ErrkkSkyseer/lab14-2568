import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  total: 0,
  password: "",
  passwordAgain: "",
  haveCoupon: false,
  couponCode: "",
  correctCoupon: false,
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  setPassword: (_password) =>
    set(() => ({
      password: _password,
    })),
  setPasswordAgain: (_passwordAgain) =>
    set(() => ({
      passwordAgain: _passwordAgain,
    })),
  sethaveCoupon: (_haveCoupon) =>
    set(() => ({
      haveCoupon: _haveCoupon,
    })),
  setCouponCode: (_couponCode) =>
    set(() => ({
      couponCode: _couponCode,
    })),
  setCorrectCoupon: (_correctCoupon) =>
    set(() => ({
      correctCoupon: _correctCoupon,
    })),
  // Function ชื่อ discountCoupon คำนวณ total ตรงนี้
  discountCoupon: () =>
    set((state) => {
      let totalPayment = 0;
      if (state.plan === "funrun") totalPayment += 500;
      if (state.plan === "mini") totalPayment += 800;
      if (state.plan === "half") totalPayment += 1200;
      if (state.plan === "full") totalPayment += 1500;

      if (state.haveCoupon && state.couponCode == "CMU2025")
        totalPayment *= 0.7;

      return { total: totalPayment };
    }),
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      password: "",
      passwordAgain: "",
      haveCoupon: false,
      couponCode: "",
      correctCoupon: false,
    }),
}));
