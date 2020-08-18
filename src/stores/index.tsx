import homeStore, { HomeStore } from './home';

export interface Store {
  homeStore?: HomeStore;
}

export function creatStore() {
  return {
    homeStore,
  }
};
