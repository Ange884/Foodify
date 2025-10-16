const coffeeTheme = {
  primary: "#8B593E",
  background: "#FFF8F3",
  text: "#4A3428",
  border: "#E5D3B7",
  white: "#FFFFFF",
  textLight: "#9A8478",
  expense: "#E74C3C",
  income: "#2ECC71",
  card: "#FFFFFF",
  shadow: "#000000",
};

const forestTheme = {
  primary: "#2E7D32",
  background: "#E8F5E9",
  text: "#1B5E20",
  border: "#C8E6C9",
  white: "#FFFFFF",
  textLight: "#66BB6A",
  expense: "#C62828",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
};

const purpleTheme = {
  primary: "#6A1B9A",
  background: "#F3E5F5",
  text: "#4A148C",
  border: "#D1C4E9",
  white: "#FFFFFF",
  textLight: "#BA68C8",
  expense: "#D32F2F",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
};

const oceanTheme = {
  primary: "#0277BD",
  background: "rgba(253, 254, 255, 1)",
  text: "#01579B",
  border: "#B3E5FC",
  white: "#FFFFFF",
  textLight: "#4FC3F7",
  expense: "#EF5350",
  income: "#26A69A",
  card: "#FFFFFF",
  shadow: "#000000",
};

const grayTheme = {
  primary: "#757575",
  background: "#F5F5F5",
  text: "#424242",
  border: "#E0E0E0",
  white: "#FFFFFF",
  textLight: "#9E9E9E",
  expense: "#D32F2F",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
};
const creativeTheme = {
  primary: "#5F010D",     
  background: "#FFF5F5",  
  text: "#3A1C1C",        
  border: "#FFD6D6",      // Light pink border tone
  white: "#FFFFFF",       // Standard white for cards and highlights
  textLight: "#9C6C6C",   // Muted pinkish-brown for secondary text
  accent: "#FFB74D",      // Warm orange/yellow (matches bulb and book)
  secondary: "#D84315",   // Deep orange for highlights or icons
  card: "#FFECEC",        // Light pink card background
  shadow: "#4A0000",      // Dark reddish shadow tone
};


export const THEMES = {
  coffee: coffeeTheme,
  forest: forestTheme,
  purple: purpleTheme,
  ocean: oceanTheme,
  gray: grayTheme,
  creative:creativeTheme,
};

// 👇 change this to switch theme
export const COLORS = THEMES.coffee; 