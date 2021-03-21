import { _ } from "core-js";

export const state = () => ({
    phone: '+31 35 60 20 54 6',
});

export const getters = {
  phone: (state) => state.phone,
  phoneFormatted: (state, getters) => {
    return 'tel:' + state.phone.replace(/\s/g, "");
  }
};
