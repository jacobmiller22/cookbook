import { NextPage } from "next";
import { IndexView } from "views";
import Layout from "../src/layouts/Layout";
import WithLayout from "WithLayout";

const IndexPage: NextPage = () => {
  //@ts-expect-error
  return <WithLayout component={IndexView} layout={Layout} title="Index" />;
};

export default IndexPage;
