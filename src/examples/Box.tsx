import React from "react";
import { styled } from "..";
import { TExtendedFlexboxProps } from "../config/theme";

export const Box = styled.View<TExtendedFlexboxProps>();

export const App = () => {
  return (
    <Box px="xl" width={100} flex={1}>
      Hello
    </Box>
  );
};
