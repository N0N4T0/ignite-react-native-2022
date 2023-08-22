import React from "react";

import { Button as NativeBaseButton, IButtonProps } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton mb={4} {...rest}>
      {title}
    </NativeBaseButton>
  );
}