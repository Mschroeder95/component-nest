export interface ClassName {
  className?: string;
}

export interface IsMobileOverride {
  isMobileOverride?: boolean;
}

export interface HasChildNodes {
  children?: React.ReactNode;
}

export interface HasChildText {
  children?: string;
}

export interface Selectable {
  selected?: boolean | undefined;
}

export type ColorModeOptions = "dark" | "light";
export interface ColorMode {
  colorMode: ColorModeOptions;
}
