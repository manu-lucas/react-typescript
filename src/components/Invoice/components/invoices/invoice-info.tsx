import { ChangeEvent, FC, memo } from "react";
import { Box, Typography } from "../../components/base";
import { useGenerator } from "../../hooks/useGenerator";
import { useInvoice } from "../../hooks";

const lineStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const textStyle = { fontWeight: 600 };

interface Props {
  invoiceNumber: string;
  date: string;
  due: string;
}

const InvoiceInfo: FC<Props> = ({ invoiceNumber, date, due }) => {
  const { editable } = useGenerator();
  const { invoice, setInvoice } = useInvoice();

  const onChangeInvoiceNumber = (e: ChangeEvent<HTMLInputElement>): void => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const onChangeDate = (property: "date" | "due", value: string): void => {
    setInvoice({ ...invoice, [property]: value });
  };

  return (
    <Box
      style={{
        backgroundColor: "#F7FBFF",
        borderRadius: 3,
        padding: editable ? "16px 20px" : "12px 16px",
      }}
    >
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography
          style={{ minWidth: editable ? "110px" : "80px", ...textStyle }}
        >
          Invoice No :
        </Typography>
        {editable ? (
          <input
            type="text"
            name="invoiceNumber"
            value={invoiceNumber}
            onChange={onChangeInvoiceNumber}
          />
        ) : (
          <Typography>{invoiceNumber}</Typography>
        )}
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography
          style={{ minWidth: editable ? "110px" : "80px", ...textStyle }}
        >
          Invoice Date :
        </Typography>
        {editable ? (
          <input
            type="text"
            name="date"
            value={invoice.date}
            onChange={(e) => onChangeDate("date", e.target.value)}
          />
        ) : (
          <Typography>{date}</Typography>
        )}
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography
          style={{ minWidth: editable ? "110px" : "80px", ...textStyle }}
        >
          Due Date :
        </Typography>
        {editable ? (
          <input
            type="text"
            name="due"
            value={invoice.due}
            onChange={(e) => onChangeDate("due", e.target.value)}
          />
        ) : (
          <Typography>{due}</Typography>
        )}
      </Box>
    </Box>
  );
};

const MemoizedInvoiceInfo = memo(InvoiceInfo);
export default MemoizedInvoiceInfo;
