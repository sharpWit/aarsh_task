export interface ICustomization {
  fontFamily: string;
  borderRadius: number;
}

export interface IThemeOption {
  colors: CSSModuleClasses;
  heading: string;
  paper: string;
  backgroundDefault: string;
  background: string;
  darkTextPrimary: string;
  darkTextSecondary: string;
  textDark: string;
  menuSelected: string;
  menuSelectedBack: string;
  divider: string;
  customization?: ICustomization;
}
