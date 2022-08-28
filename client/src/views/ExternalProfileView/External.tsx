/** Interfaces/types */

/** components */
import { Box, Button, Chip, Typography } from "@mui/material";
import {
  ChipSkeleton as ChipSkele,
  ButtonSkeleton as ButtSkele,
} from "components/Skeletons";
import { Spacer } from "components/Atomics";
import { useProfile } from "hooks";
import Link from "next/link";
import { replaceWildcards } from "routes";
import { recipesRoute } from "routes/client";

interface IExternalProps {}

const External = ({}: IExternalProps) => {
  const profile = useProfile();

  console.log(profile);

  const renderChips = () => {
    const chips = [
      `${profile?.recipeCount} recipes`,
      `Joined: ${profile?.joinedAt.toLocaleDateString("en-US", {
        year: "numeric",
      })}`,
    ];

    if (!profile) {
      return chips.map((_: any, index) => <ChipSkele key={index} />);
    }
    return chips.map((chip, index) => (
      <Chip key={index} label={chip} sx={{ mr: "0.5rem" }} />
    ));
  };

  return (
    <Box mt="0.5rem">
      <Box display="flex">
        <Spacer />
        <Link href={replaceWildcards(recipesRoute, [profile?.username])}>
          {profile ? (
            <Button color="primary" variant="outlined">
              View Recipes
            </Button>
          ) : (
            <ButtSkele />
          )}
        </Link>
      </Box>
      <Box>
        <Typography variant="h6">Bio</Typography>
        <Typography>{profile?.bio}</Typography>
      </Box>
      <Box>{renderChips()}</Box>
    </Box>
  );
};

export default External;
