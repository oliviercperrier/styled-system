import React from "react";
import { styled } from "..";
import { TAliasedFlexboxProps } from "../config/theme";

export const Box = styled.View<TAliasedFlexboxProps>();

export const App = () => {
  return (
    <Box px="xl" width={100} flex={1}>
      Hello
    </Box>
  );
};
