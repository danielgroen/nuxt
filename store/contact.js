import { _ } from "core-js";

export const state = () => ({
    phone: '+31 35 60 20 54 6',
    openingHours: {
      maandag: {
        open:'Telefonisch bereikbaar',
        currentDay: false,
        gesloten: true,
      },
      dinsdag: {
        open:'09:00',
        sluit: '17:30',
        currentDay: false,
      },
      woensdag: {
        open:'09:00',
        sluit: '17:30',
        currentDay: false,
      },
      donderdag: {
        open:'09:00',
        sluit: '17:30',
        currentDay: false,
      },
      vrijdag: {
        open:'08:30',
        sluit: '20:30',
        currentDay: false,
      },
      zaterdag: {
        open:'08:30',
        sluit: '16:00',
        currentDay: false,
      },
      zondag: {
        open:'Gesloten',
        currentDay: false,
        gesloten: true,
      },
    }
});

export const getters = {
  getPhone: (state) => {return 'test'},
  phoneFormatted: (state, getters) => {
    return 'tel:' + state.phone.replace(/\s/g, "");
  }
};