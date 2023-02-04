import React from "react";
import { styled, TAliasedFlexboxProps } from "..";

const Pressable = styled.Pressable<TAliasedFlexboxProps>();

export const App = () => {
  return (
    <Pressable p="md">
      Hello
    </Pressable>
  );
};
