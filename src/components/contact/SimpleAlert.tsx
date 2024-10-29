import Alert from "@mui/material/Alert";

export type AlertProps = {
  state: "success" | "error";
  text: string;
};

export default function SimpleAlert({
  banner: { state, text },
}: {
  banner: AlertProps;
}) {
  return (
    <Alert variant="outlined" severity={state}>
      {text}
    </Alert>
  );
}
