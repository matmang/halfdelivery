import { atom } from "recoil";

export const termServiceState = atom({
  key: "service",
  default: false,
});

export const termPersonalState = atom({
  key: "personal",
  default: false,
});

export const termLocationState = atom({
  key: "location",
  default: false,
});
