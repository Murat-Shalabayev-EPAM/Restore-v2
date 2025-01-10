import { decrement, increment } from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export default function ContactPage() {
  const { data } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h2">Contact page</Typography>
      <Typography variant="body1">{data}</Typography>
      <ButtonGroup>
        <Button color="primary" onClick={() => dispatch(increment(1))}>
          Decrement
        </Button>
        <Button color="error" onClick={() => dispatch(decrement(1))}>
          Decrement
        </Button>
        <Button color="error" onClick={() => dispatch(decrement(5))}>
          Decrement
        </Button>
      </ButtonGroup>
    </>
  );
}
