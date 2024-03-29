import { FC } from "react";
import { Typography, Box, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useGenerator } from "../../hooks/useGenerator";
import { useTheme } from "@mui/material";
import { useInvoice } from "../../hooks";
import { useAppDispatch } from "../../store";
/* import { useDispatch } from "react-redux"; */

const AddInvoiceItem: FC = () => {
  const dispatch = useAppDispatch(); // Use the custom hook for dispatching
  const { append } = useInvoice();
  const { editable } = useGenerator();

  // Mui theme.
  const { palette } = useTheme();

  const handleAddNewLine = (): void => {
    append({
      description: "",
      quantity: "1",
      rate: "0",
    });
  };

  if (editable) {
    return (
      <Tooltip title="Add invoice item">
        <Box
          onClick={handleAddNewLine}
          sx={{
            mt: 2.2,
            height: 44,
            opacity: 0.75,
            width: "100%",
            cursor: "cell",
            display: "flex",
            borderRadius: 1,
            alignItems: "center",
            backgroundColor: "#F6F9FC",
            justifyContent: "center",
            border: "2px dashed rgb(235 235 235)",
            "&:hover": {
              opacity: 1,
              color: "primary.main",
              backgroundColor: "primary.light",
              border: `2px dashed ${palette.primary.main}`,
              boxShadow: "4px 4px 0px rgb(0 0 0 / 4%)",
            },
          }}
        >
          <AddIcon sx={{ fontSize: 20, mr: 1 }} />
          <Typography fontWeight="bold">Add new row</Typography>
        </Box>
      </Tooltip>
    );
  }

  return null;
};

export default AddInvoiceItem;
