import useAuth from "hooks/Auth/useAuth";
import theme from "theme";

/** Components */
import { Banner } from "components/Atomics";
import { Avatar, Box, Divider, Typography } from "@mui/material";

const UserProfile = () => {
  const { user } = useAuth();

  console.log(user);
  return (
    <>
      <Banner>
        <Box
          maxWidth={theme.layout.contentWidth}
          display="flex"
          columnGap="1rem"
        >
          <Box
            height="fit-content"
            sx={{
              backgroundColor: theme.palette.background.default,
              borderRadius: "50%",
            }}
            padding="0.5rem"
          >
            <Avatar sx={{ height: avatarLength, width: avatarLength }} />
          </Box>
        </Box>
      </Banner>
      <Box padding="0.5rem" maxWidth={theme.layout.contentWidth} width="100%">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1">{user.username}</Typography>
        </Box>
        <Divider variant="middle" />
        <Box display="block">
          <Typography variant="body1">{user.email}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;

const avatarLength = 128;
