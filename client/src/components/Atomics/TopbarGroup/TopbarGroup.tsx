import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
/** Components */
import { ListItem, Typography } from "@mui/material";

interface ITopbarGroupProps {
  items: {
    url: string;
    label: string;
  }[];
}

const renderTopbarGroup = ({ items }: ITopbarGroupProps) => {
  const router = useRouter();

  return _.map(items, (item, i) => {
    return (
      <ListItem key={`topbar-item-link-${i}`} sx={{ cursor: "pointer" }}>
        <Link href={item.url}>
          <Typography color={router.pathname === item.url ? "primary" : ""}>
            {item.label}
          </Typography>
        </Link>
      </ListItem>
    );
  });
};

export default renderTopbarGroup;
