/** Components */
import theme from "theme";
import { Banner } from "components/Atomics";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import {
  TypographySkeleton as TextSkele,
  ImageSkeleton as ImgSkele,
} from "components/Skeletons";
import { useProfile } from "hooks";
import { Member } from "interfaces/Member";

type UserProfileProps = {
  children: React.ReactNode;
  profile?: Member;
};

const UserProfile = ({
  children,
  profile: customProfile,
}: UserProfileProps) => {
  const profile = customProfile || useProfile();

  const renderProfile = () => {
    return (
      <Box
        padding="0.5rem"
        maxWidth={theme.layout.contentWidth}
        width="100%"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          {profile ? (
            <Typography variant="h4">{profile?.name}</Typography>
          ) : (
            <TextSkele variant="h4" width={200} />
          )}
          {profile ? (
            <Typography variant="body1">{profile?.username}</Typography>
          ) : (
            <TextSkele variant="body1" width={160} />
          )}
        </Box>
        <Divider variant="middle" />
        {children}
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
            {profile ? (
              <Avatar
                sx={{ height: avatarLength, width: avatarLength }}
                src={profile?.image}
              />
            ) : (
              <ImgSkele />
            )}
          </Box>
        </Box>
      </Banner>

      {renderProfile()}
    </>
  );
};

export default UserProfile;

const avatarLength = 128;
