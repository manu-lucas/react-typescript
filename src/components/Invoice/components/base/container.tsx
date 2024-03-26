import { FC, ReactNode } from "react";
import { View as PDFView } from "@react-pdf/renderer";
import MuiBox from "@mui/material/Box";
import { useGenerator } from "../../hooks/useGenerator";

interface Props {
  children?: ReactNode;
}

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "40px",
  borderRadius: 3,
  overflow: "hidden",
};

const Container: FC<Props> = ({ children }) => {
  const { editable, debug } = useGenerator();

  return editable ? (
    <MuiBox sx={containerStyles}>{children}</MuiBox>
  ) : (
    <PDFView
      debug={false}
      style={{
        padding: "22px 28px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      {children}
    </PDFView>
  );
};

export default Container;
