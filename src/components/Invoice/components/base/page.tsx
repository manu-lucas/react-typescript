import { FC, ReactNode } from "react";
import { Page as PDFPage } from "@react-pdf/renderer";
import { Box } from "../../components/base";
import { useGenerator } from "../../hooks/useGenerator";

interface Props {
  children: ReactNode;
}

const Page: FC<Props> = ({ children }) => {
  const { editable } = useGenerator();

  return editable ? (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  ) : (
    <PDFPage
      size={"A4"}
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "Be Vietnam Pro",
      }}
    >
      {children}
    </PDFPage>
  );
};
export default Page;
