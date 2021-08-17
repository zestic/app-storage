import { Storage } from '@ionic/storage';

let storage: Storage;

export async function createStore(name?: string): Promise<Storage> {
  if (storage) {
    return storage;
  }
  let config = {};
  if (name) {
    config = { name: name };
  }
  storage = new Storage(config);

  return storage.create();
}

export async function storeValue(key: string, value: any): Promise<void> {
  await createStore();
  await storage.set(key, JSON.stringify(value));
}

export async function getValue(key: string, defaultValue: any = null): Promise<any> {
  await createStore();
  const item = await storage.get(key);
  if (!item) {
    return defaultValue;
  }

  return JSON.parse(item);
}

export async function clearValue(key: string): Promise<void> {
  await createStore();
  await storage.remove(key);
}