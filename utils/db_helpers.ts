import mongoose from "mongoose";

export async function runTransaction<T>(operations: (session: mongoose.ClientSession) => Promise<T>): Promise<T> {
  const session = await mongoose.startSession();
  let result: T;

  try {
    session.startTransaction();

    result = await operations(session);

    await session.commitTransaction();
    return result;
  } catch (err) {
    await session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
}