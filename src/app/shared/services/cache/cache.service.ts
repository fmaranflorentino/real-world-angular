import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  setStorage(key: string, value: any) {
    const store = localStorage;

    store.setItem(key, value);
  }

  getStorage(key: string) {

    const storage = localStorage.getItem(key);

    if (storage) {
      const cache = JSON.parse(storage);
      return cache;
    } else {
      return null;
    }
  }
}
