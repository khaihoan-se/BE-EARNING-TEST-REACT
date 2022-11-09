import { lazy } from "react";

const CreateWalletOne = lazy(() => import("./pages/CreateWalletOne"));
const CreateWalletTwo = lazy(() => import("./pages/CreateWalletTwo"));

export const routes = [
   {
      path: "/",
      component: CreateWalletOne,
   },
   {
      path: "/create-wallet-two",
      component: CreateWalletTwo,
   }
];
