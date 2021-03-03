import { _ } from "core-js";

export const state = () => ({
  'uiState': 'init'
});

export const mutations = () => ({
  loadApp: (state) => { state.uiState = 'loaded'; }
});