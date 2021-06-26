import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
type Props = {
  children: ReactNode;
  title?: string;
};
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

const Layout = ({ children, title = "LMS Registration" }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@thorwebdev" />
      <meta name="twitter:title" content="TypeScript Next.js Stripe Example" />
      <meta
        name="twitter:description"
        content="Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node."
      />
      <meta
        name="twitter:image"
        content="https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png"
      /> */}
      </Head>
      <div className={classes.root}>{children}</div>
    </>
  );
};

export default Layout;
