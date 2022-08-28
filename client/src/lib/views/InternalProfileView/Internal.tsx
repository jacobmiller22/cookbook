import { useAuth } from "lib/hooks";
import { useState } from "react";
/** Interfaces/types */

/** components */
import Link from "next/link";
import {
  Box,
  Card,
  FormLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import theme from "lib/theme";
import { useRouter } from "next/router";
import { Account, Sidebar } from "./components";

type InternalProps = {};

const Internal = ({}: InternalProps) => {
  const { user } = useAuth();
  const router = useRouter();
  const [panel, setPanel] = useState<PanelType>(
    (router.query.panel as PanelType) || PanelType.ACCOUNT
  );

  if (!user) {
    // Render skeleton
    return <div>skeleton</div>;
  }

  const renderContent = () => {
    switch (panel) {
      case PanelType.ACCOUNT:
        return <Account />;
      default:
        return (
          <Box>
            <Typography variant="h6">
              Whoops! It looks like the path you are on is unrecognizeable.
              Please make this component prettier later
            </Typography>
          </Box>
        );
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Sidebar items={sidebarItems} state={[panel, setPanel]} />
      </Grid>
      <Grid item xs={12} md={9}>
        {renderContent()}
      </Grid>
    </Grid>
  );
};

export default Internal;

const CardItem = ({ label, value }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: "0.5rem",
        margin: "0.5rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <FormLabel>{label}</FormLabel>
      <Typography variant="body1">{value}</Typography>
      <IconButton>
        <EditIcon />
      </IconButton>
    </Card>
  );
};

enum PanelType {
  ACCOUNT = "account",
  PREFERENCES = "preferences",
}

const sidebarItems = [
  {
    label: "Account",
    type: PanelType.ACCOUNT,
  },
  {
    label: "Preferences",
    type: PanelType.PREFERENCES,
  },
];
