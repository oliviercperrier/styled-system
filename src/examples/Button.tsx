import React from "react";
import { styled, TExtendedFlexboxProps } from "..";

const Pressable = styled.Pressable<TExtendedFlexboxProps>();

export const App = () => {
  return (
    <Pressable p="md">
      Hello
    </Pressable>
  );
};
