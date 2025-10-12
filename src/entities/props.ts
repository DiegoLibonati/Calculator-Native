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

export interface ActionButtonsRowProps extends DefaultProps {}

export interface CalculatorProviderProps extends DefaultProps {}

export interface UiProviderProps extends DefaultProps {}
