import useAuth from "hooks/Auth/useAuth";
import { useEffect } from "react";
import theme from "theme";
import axios from "axios";

/** Components */
import { Banner } from "components/Atomics";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Internal, External } from "./components";
import { useRouter } from "next/router";
import { useEffect } from "react";

const UserProfile = () => {
  const { user } = useAuth();
  const router = useRouter();

  const renderProfile = () => {
    const isSelf = user.username === router.query.username;

    useEffect(() => {}, []);

    return (
      <Box
        padding="0.5rem"
        maxWidth={theme.layout.contentWidth}
        width="100%"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1">{user.username}</Typography>
        </Box>
        <Divider variant="middle" />
        {isSelf ? <Internal /> : <External />}
      </Box>
    );
  };

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
            <Avatar
              sx={{ height: avatarLength, width: avatarLength }}
              src={user.image}
            />
          </Box>
        </Box>
      </Banner>

      {renderProfile()}
    </>
  );
};

export default UserProfile;

const avatarLength = 128;
