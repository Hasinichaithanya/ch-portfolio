import { Typography } from "@mui/material";

const Heading = ({ heading }) => {
  return (
    <Typography
      variant="h4"
      component="h3"
      marginBottom="20px"
      className="aboutme-title"
      textAlign="center"
    >
      {heading}
    </Typography>
  );
};
export default Heading;
