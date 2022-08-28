/** Components */
import { Box, Typography } from "@mui/material";
import { useAuth } from "hooks";
import Link from "next/link";
import { myRecipesRoute, profileRoute } from "routes/client";
import { replaceWildcards } from "routes";
import theme from "theme";

const Footer = () => {
  const { user } = useAuth();

  return (
    <Box
      display="flex"
      justifyContent="center"
      padding="2rem 6rem"
      sx={{
        backgroundColor: theme.palette.secondary.dark,
      }}
    >
      <Box maxWidth={theme.layout.contentWidth} display="flex">
        {/* <Box
          display="flex"
          flexDirection="column"
          margin="0.75rem"
          padding="0.25rem"
        >
          <TextLink href={replaceWildcards(myRecipesRoute, [user.username])}>
            Recipes
          </TextLink>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          margin="0.75rem"
          padding="0.25rem"
        >
          <TextLink href={replaceWildcards(profileRoute, [user.username])}>
            Profile
          </TextLink>
        </Box> */}
      </Box>
    </Box>
  );
};
export default Footer;

const TextLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Typography
        color={theme.palette.secondary.contrastText}
        variant="body1"
        component="a"
        sx={{
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
            color: theme.palette.primary.light,
          },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};
