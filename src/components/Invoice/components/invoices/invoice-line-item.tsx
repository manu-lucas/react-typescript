import { ChangeEvent, FC } from "react";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import MuiTypography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, EditableText } from "../../components/base";
import { useGenerator } from "../../hooks/useGenerator";
import { IInvoiceLineItem } from "../../interfaces/invoice";
import { useInvoice } from "../../hooks";
import { calculateAmount } from "../../utils/invoice";

const colStyles = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const textStyles = {
  marginLeft: "12px",
};

interface Props {
  item: IInvoiceLineItem;
  index: number;
  lastItem: boolean;
  onChange: (
    index: number,
    property: keyof IInvoiceLineItem,
    value: string
  ) => void;
  dispatchAlert: (item: IInvoiceLineItem) => void;
}

const InvoiceLineItem: FC<Props> = ({
  item,
  index,
  lastItem,
  onChange,
  dispatchAlert,
}) => {
  const { editable } = useGenerator();
  const { remove } = useInvoice();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    onChange(index, e.target.name as keyof IInvoiceLineItem, e.target.value);
  };

  const handleRemoveItem = (): void => {
    remove(index);
    dispatchAlert(item);
  };

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        position: "relative",
        borderBottomLeftRadius: lastItem ? 3 : 0,
        borderBottomRightRadius: lastItem ? 3 : 0,
        padding: editable ? "10px 18px" : "7px 16px",
        backgroundColor: index % 2 === 0 ? "#fff" : "#F6F9FC",
        "&:hover": {
          "& .remove-button": {
            transform: "scale(1)",
          },
        },
      }}
    >
      <Box style={{ width: "55%", ...colStyles }}>
        <EditableText
          name="description"
          multiline
          minRows={1}
          maxRows={3}
          value={item.description}
          onChange={handleChange}
        />
      </Box>
      <Box style={{ width: "10%", ...colStyles }}>
        <EditableText
          style={{ ...textStyles }}
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
        />
      </Box>
      <Box style={{ width: "15%", ...colStyles }}>
        <EditableText
          style={{ ...textStyles }}
          type="number"
          name="rate"
          value={item.rate}
          onChange={handleChange}
        />
      </Box>
      <Box style={{ width: "20%", ...colStyles }}>
        <Typography style={{ ...textStyles }}>
          {calculateAmount(item.quantity, item.rate)}
        </Typography>
      </Box>

      {editable && (
        <Fab
          onClick={handleRemoveItem}
          size="small"
          color="error"
          className="remove-button"
          sx={{
            minHeight: 26,
            height: 26,
            width: 26,
            position: "absolute",
            top: 10,
            right: -12,
            transform: "scale(0)",
            borderRadius: "20px",
            transition: (theme) =>
              theme.transitions.create(["transform", "width"]),
            "&:hover": {
              width: 85,
              "& h6": {
                display: "inline-flex",
                transform: "scale(1)",
              },
            },
          }}
        >
          <Tooltip title="Remove item" placement="top">
            <>
              <CloseIcon sx={{ fontSize: 20 }} />
              <MuiTypography
                sx={{
                  transform: "scale(0)",
                  display: "none",
                  textTransform: "capitalize",
                  ml: 0.5,
                }}
                variant="subtitle2"
              >
                Remove
              </MuiTypography>
            </>
          </Tooltip>
        </Fab>
      )}
    </Box>
  );
};

export default InvoiceLineItem;
