import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

export const mockDatabase = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const connect = async () => {
    try {
      await mongoose.connect(mongoServer.getUri());
    } catch (error: any) {
      return;
    }
  };

  const close = async (): Promise<void> => {
    try {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();  
      mongoServer.stop();
    } catch (error: any) {
      return;
    }
  };

  return {
    connect,
    close,
  };
};

export const clearDatabase = async (): Promise<void> => {
  try {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  } catch (error: any) {
    return;
  }
};
