import mongoose from "mongoose";

// Mongoose configuration

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
// mongoose.set("useUnifiedTopology", true);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "\n\nMongoDB Connect Error\n\n"));
