interface DefaultProps {
  children?: React.ReactNode;
  className?: string;
}

export interface ActionButtonProps extends DefaultProps {
  text: string;
  containerStyle?: Record<string, string | number>;
  textStyle?: Record<string, string | number>;
  onPressButton: () => void;
}

export type ActionButtonsRowProps = DefaultProps;

export type CalculatorProviderProps = DefaultProps;

export type UiProviderProps = DefaultProps;
