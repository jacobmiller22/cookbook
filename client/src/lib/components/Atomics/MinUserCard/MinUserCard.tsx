/** Interfaces/types */

/** components */
import theme from "lib/theme";
import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Member } from "lib/member/types";
import Spacer from "../Spacer";

type MinUserCardProps = {
  member: Member;
  extra;
};

const MinUserCard = ({ member, extra = "" }: MinUserCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      width="fit-content"
      height="100%"
    >
      <Box
        padding="0.5rem"
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderStartStartRadius: "50%",
          borderEndStartRadius: "50%",
        }}
      >
        <Avatar src={member.image} />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        padding="0.5rem"
        height="100%"
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderStartEndRadius: "6px",
          borderEndEndRadius: "6px",
        }}
      >
        <Typography variant="h6" component="span">
          {member.username}
          {extra}
        </Typography>
      </Box>
    </Box>
  );
};

export default MinUserCard;
