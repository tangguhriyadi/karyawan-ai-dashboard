import type { Config } from "tailwindcss";

export const COLORS = {
  // Primary Colors
  primary: {
    DEFAULT: "#1C2D5A", // 500
    hover: "#51659E", // 700
    "5": "#060A14",
    "10": "#060A14",
    "20": "#0B1326",
    "30": "#111B36",
    "40": "#152245",
    "50": "#1C2D5A",
    "60": "#31467A",
    "70": "#51659E",
    "80": "#8497CF",
    "90": "#BAC5E5",
    "93": "#D7E0F5",
    "95": "#E8EDFA",
    "98": "#F5F8FF",
  },
  accent: {
    DEFAULT: "#EF4123", // 500
    hover: "#F4806C", // 700
    "5": "#641B0F",
    "10": "#641B0F",
    "20": "#832413",
    "30": "#AA2E19",
    "40": "#D93B20",
    "50": "#EF4123",
    "60": "#F2674F",
    "70": "#F4806C",
    "80": "#F8A89A",
    "90": "#FAC4BB",
    "93": "#FAC4BB",
    "95": "#FDF2F0",
    "98": "#FDFBFA",
    "100": "#FDFBFA",
  },
  link: {
    DEFAULT: "#FF5032",
    hover: "#FF7A63",
  },
  success: {
    DEFAULT: "#32C365",
    hover: "#76D798",
    "5": "#15522A",
    "10": "#15522A",
    "20": "#1C6B38",
    "30": "#248A48",
    "40": "#2EB15C",
    "50": "#32C365",
    "60": "#5BCF84",
    "70": "#76D798",
    "80": "#A1E3B8",
    "90": "#BFECCF",
    "93": "#EBF9F0",
    "95": "#F2FCF6",
    "98": "#FAFFFC",
  },
  warning: {
    DEFAULT: "#E9A125",
    hover: "#F0C06D",
    "5": "#624410",
    "10": "#624410",
    "20": "#805914",
    "30": "#A5721A",
    "40": "#D49322",
    "50": "#E9A125",
    "60": "#EDB451",
    "70": "#F0C06D",
    "80": "#F5D49B",
    "90": "#F8E2BB",
    "93": "#FDF6E9",
    "95": "#FDF9F0",
    "98": "#FDFBF8",
  },
  error: {
    DEFAULT: "#CB2020",
    hover: "#DC6A6A",
    "5": "#550D0D",
    "10": "#550D0D",
    "20": "#701212",
    "30": "#901717",
    "40": "#B91D1D",
    "50": "#CB2020",
    "60": "#D54D4D",
    "70": "#DC6A6A",
    "80": "#E79898",
    "90": "#EFBABA",
    "93": "#FAE9E9",
    "95": "#FCF0F0",
    "98": "#FFFAFA",
  },
  neutral: {
    DEFAULT: "#262626",
    hover: "#404040",
    "5": "#262626",
    "10": "#262626",
    "20": "#323232",
    "30": "#404040",
    "40": "#525252",
    "50": "#5A5A5A",
    "60": "#7B7B7B",
    "70": "#909090",
    "80": "#B3B3B3",
    "90": "#CCCCCC",
    "93": "#E8E8E8",
    "95": "#EFEFEF",
    "98": "#F5F5F5",
    "100": "#FFFFFF",
  },
  info: {
    DEFAULT: "#2C99FF",
    hover: "#0D79DF",
  },
  dark: {
    DEFAULT: "#272B41",
    hover: "#131623",
  },
  gray: {
    DEFAULT: "#5A5F7D",
    hover: "#363A51",
    light: "#9299B8",
    "extra-light": "#ADB4D2",
    solid: "#9299b8",
  },
  text: {
    primary: "#262626",
    secondary: "#797676",
  },
  white: {
    DEFAULT: "#ffffff",
    hover: "#5A5F7D",
  },
  danger: {
    DEFAULT: "#CB2020",
    hover: "#DC6A6A",
    "5": "#550D0D",
    "10": "#550D0D",
    "20": "#701212",
    "30": "#901717",
    "40": "#B91D1D",
    "50": "#CB2020",
    "60": "#D54D4D",
    "70": "#DC6A6A",
    "80": "#E79898",
    "90": "#EFBABA",
    "93": "#FAE9E9",
    "95": "#FCF0F0",
    "98": "#FFFAFA",
  },
  pink: "#F63178",
  dash: "#E3E6EF",
  black: {
    DEFAULT: "#262626",
    border: "#26262629",
  },
  surface: {
    "2": "#EEF2F7",
    "3": "#DCE5EF",
  },
} as const;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
      borderColor: {
        light: "#F1F2F6",
        normal: "#E3E6EF",
        deep: "#C6D0DC",
      },
      backgroundColor: {
        "gray-light": "#F8F9FB",
        "gray-normal": "#F4F5F7",
        "gray-deep": "#EFF0F3",
        "gray-middle": "#1B2C590A",
        "gray-body": "#1B2C5908",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        base: "14px",
      },
      borderRadius: {
        base: "4px",
      },
      boxShadow: {
        base: "0 2px 8px rgba(0, 0, 0, 0.15)",
        card: "0 5px 20px rgba(146,153,184,0.03)",
      },
      height: {
        "btn-lg": "48px",
        "btn-sm": "36px",
        "btn-xs": "29px",
        "input-base": "48px",
        "input-sm": "30px",
        "input-lg": "50px",
      },
      spacing: {
        "grid-gutter": "25px",
      },
      typography: {
        "result-title": {
          fontSize: "20px",
        },
        "result-subtitle": {
          fontSize: "12px",
        },
      },
      // Additional themed configurations from the original theme
      textColor: {
        heading: "rgba(0, 0, 0, 0.85)",
        disabled: "rgba(0, 0, 0, 0.25)",
      },
    },
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [],
} satisfies Config;
