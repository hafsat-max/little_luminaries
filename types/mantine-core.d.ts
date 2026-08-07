declare module "@mantine/core" {
  import type { ComponentType, PropsWithChildren } from "react";

  type AnyProps = Record<string, unknown>;

  export const MantineProvider: ComponentType<PropsWithChildren<AnyProps>>;
  export const Drawer: ComponentType<PropsWithChildren<AnyProps>>;
  export const Divider: ComponentType<PropsWithChildren<AnyProps>>;
  export const Avatar: ComponentType<PropsWithChildren<AnyProps>>;
  export const Button: ComponentType<PropsWithChildren<AnyProps>>;
  export const Image: ComponentType<PropsWithChildren<AnyProps>>;
}
