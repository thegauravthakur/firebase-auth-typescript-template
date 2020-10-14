import { atom } from "recoil";

export const currentUserState = atom<string | null | undefined>({
  key: "currentUserState",
  default: null,
});
