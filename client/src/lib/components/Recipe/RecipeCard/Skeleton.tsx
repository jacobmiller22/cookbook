import { Card, CardContent, Skeleton, Box, CardActions } from "@mui/material";

const SkeletonCard = () => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Skeleton variant="text" sx={{}} width={120} height={25} />
        <Skeleton variant="text" sx={{}} width={280} height={32} />
        <Box sx={{ mb: 2 }} display="flex">
          <Skeleton
            variant="rectangular"
            sx={{ mr: "0.5rem", borderRadius: "16px" }}
            width={72.5}
            height={32}
          />
          <Skeleton
            variant="rectangular"
            sx={{ mr: "0.5rem", borderRadius: "16px" }}
            width={72.5}
            height={32}
          />
          <Skeleton
            variant="rectangular"
            sx={{ mr: "0.5rem", borderRadius: "16px" }}
            width={72.5}
            height={32}
          />
        </Box>
        <Box>
          <Skeleton variant="text" sx={{ width: "92%" }} />
          <Skeleton variant="text" sx={{ width: "96%" }} />
          <Skeleton variant="text" sx={{ width: "67%" }} />
        </Box>
      </CardContent>
      <CardActions>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "4px", ml: 1 }}
          width={68}
          height={36}
        />
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "4px", ml: 1 }}
          width={68}
          height={36}
        />
        {/* <Skeleton variant="rectangular" sx={{}} /> */}
      </CardActions>
    </Card>
  );
};

export default SkeletonCard;
