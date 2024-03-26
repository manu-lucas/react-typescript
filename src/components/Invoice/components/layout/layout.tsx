import { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Footer } from "../../components/footer";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const theme = useTheme();

  const isMatchMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          /* backgroundColor: "primary.main", */
          height: isMatchMobileView ? 300 : 400,
          /* backgroundImage: `url(${backgroundImage})`, */
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box sx={{ position: "relative", pt: "130px", pb: 10, zIndex: 2 }}>
        <Container maxWidth={"lg"}>{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
