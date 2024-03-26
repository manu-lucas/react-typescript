import { FC } from "react";
import { Text as PDFText } from "@react-pdf/renderer";
import { InputBaseProps } from "@mui/material/InputBase";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import { useGenerator } from "../../hooks/useGenerator";
import { getTypographyColor, getTypographyFontSize } from "../../utils";
import { PdfStyle } from "../../interfaces/pdf-styles";
import { SxProps, TypeText, TypographyVariant } from "@mui/material";

const StyledInputBase = styled(OutlinedInput)(({ theme }) => ({
  padding: "0 !important",
  "& .MuiInputBase-input.MuiInputBase-inputSizeSmall": {
    padding: "2.4px 8px !important",
  },
  "& .MuiInputBase-sizeSmall.MuiInputBase-multiline": {
    padding: "2.4px 8px !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid transparent !important",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #bed1e4 !important",
    },
  },
  "&.Mui-focused": {
    backgroundColor: theme.palette.primary.light,
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #bed1e4 !important",
    },
  },
}));

interface Props extends Omit<InputBaseProps, "color" | "style"> {
  style?: SxProps | PdfStyle;
  variant?: TypographyVariant;
  color?: keyof TypeText;
}

const EditableText: FC<Props> = (props) => {
  const { editable, debug } = useGenerator();

  const { variant, color, value, style, ...rest } = props;

  return editable ? (
    <StyledInputBase
      size="small"
      value={String(value)}
      sx={{ width: "90%", ...style }}
      {...rest}
    />
  ) : (
    <PDFText
      debug={false}
      style={[
        {
          lineHeight: 1.5,
          fontSize: getTypographyFontSize(variant),
          color: getTypographyColor(color),
        },
        { ...(style as PdfStyle) },
      ]}
    >
      {String(value)}
    </PDFText>
  );
};

EditableText.defaultProps = {
  variant: "body1",
  color: "primary",
};

export default EditableText;
