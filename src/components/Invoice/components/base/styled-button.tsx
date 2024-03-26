import { fontFamily } from "../../config/theme/typography";
import { Theme, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { FC, MouseEvent, ReactElement } from "react";

const selectorCircleSvgSpinner =
  "& [class$='-CircularProgress'] > svg > circle";

interface BaseButtonProps
  extends Pick<
    ButtonProps,
    | "variant"
    | "type"
    | "startIcon"
    | "endIcon"
    | "fullWidth"
    | "sx"
    | "type"
    | "children"
  > {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | undefined;
  variant?: "contained" | "outlined" | "text";
  color?: "default" | "primary" | "secondary" | "dark" | "light" | "error";
  size?: "small" | "medium" | "large";
  disableHoverEffect?: boolean;
  isLoading?: boolean;
}

interface StyledButtonRootProps extends BaseButtonProps {
  theme?: Theme;
}

const StyledButtonRoot = styled("button", {
  shouldForwardProp: (prop) =>
    prop !== "variant" &&
    prop !== "color" &&
    prop !== "size" &&
    prop !== "disableHoverEffect" &&
    prop !== "fullWidth" &&
    prop !== "isLoading",
})<StyledButtonRootProps>(
  ({
    theme,
    color,
    variant,
    size,
    disableHoverEffect,
    fullWidth,
    isLoading,
  }) => ({
    fontFamily,
    cursor: "pointer",
    minWidth: 40,
    lineHeight: 1.5,
    borderRadius: 5,
    display: "inline-flex",
    alignItems: "center",
    userSelect: "none",
    transform: "unset",
    position: "relative",
    overflow: "hidden",
    border: "none",
    whiteSpace: "nowrap",
    WebkitTapHighlightColor: "transparent",
    verticalAlign: "middle",
    outline: "none !important",
    transition: theme.transitions.create(["transform"]),
    ...(fullWidth && {
      width: "100%",
      justifyContent: "center",
    }),
    "&:hover": {
      ...(!disableHoverEffect && {
        transform: "translateY(-2px)",
      }),
    },
    "& svg": {
      fontSize: 20,
    },
    // sizes, variants, colors handled similarly to your original code...
  })
);

type Props = BaseButtonProps;

const StyledButton: FC<Props> = ({
  children,
  onClick,
  disableHoverEffect,
  startIcon,
  endIcon,
  isLoading,
  ...rest
}) => {
  const renderSpinner = (): ReactElement => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mr: 1,
      }}
    >
      <CircularProgress size={20} color="inherit" />
    </Box>
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void | undefined => {
    if (!onClick) return;
    else {
      if (isLoading) e.preventDefault();
      else onClick(e);
    }
  };

  return (
    <StyledButtonRoot
      onClick={handleClick}
      disableHoverEffect={disableHoverEffect}
      {...rest}
    >
      {isLoading && renderSpinner()}
      {!isLoading && startIcon && <Box sx={{ mr: 1 }}>{startIcon}</Box>}
      {children}
      {!isLoading && endIcon && <Box sx={{ ml: 1 }}>{endIcon}</Box>}
    </StyledButtonRoot>
  );
};

StyledButton.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "medium",
  disableHoverEffect: false,
};

export default StyledButton;
