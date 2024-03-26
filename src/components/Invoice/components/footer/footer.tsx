import { FC } from "react";
import { Box, Typography } from "@mui/material";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        pb: 8,
        pt: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle1">Made with, </Typography>
        {/*         <FavoriteIcon sx={{ color: '#ff3636', fontSize: 18, margin: '0 4px' }} />
         */}{" "}
        <Typography variant="subtitle1"> Lucasss</Typography>
      </Box>
      <Typography variant="subtitle1">Mendoza,Argentina</Typography>
    </Box>
  );
};

export default Footer;
