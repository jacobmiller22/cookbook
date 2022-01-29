import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

const connect =
  (handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
      });
      const db = mongoose.connection;
      db.on(
        "error",
        console.error.bind(console, "\n\nMongoDB Connect Error\n\n")
      );
    }
    return handler(req, res);
  };

export default connect;
