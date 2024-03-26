import { FC, SyntheticEvent, useEffect } from "react";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import { app_resetAlert } from "../../store/app/app-actions";
import { useAppSelector, useAppDispatch } from "../../store";
/* import { useDispatch } from "react-redux";
 */

const Snackbar: FC = () => {
  const dispatch = useAppDispatch(); // Use the custom hook for dispatching

  // Alert state
  const { autoHideDuration, show, severity, messages, variant } =
    useAppSelector((state) => state.app.alert);

  /**
   * Handle close alert.
   *
   * @param {SyntheticEvent | Event} e
   * @param {string} reason
   * @return {void | undefined} void
   */
  const handleClose = (
    e: SyntheticEvent | Event,
    reason?: string
  ): void | undefined => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(app_resetAlert());
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(
        () => handleClose(new Event("auto-hide")),
        autoHideDuration
      );
      return () => clearTimeout(timer);
    }
  }, [show, autoHideDuration, handleClose]);

  if (show) {
    return (
      <MuiSnackbar
        open={show}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant={variant || "filled"}
          sx={{ width: "100%" }}
        >
          {messages}
        </Alert>
      </MuiSnackbar>
    );
  }

  return null;
};

export default Snackbar;
