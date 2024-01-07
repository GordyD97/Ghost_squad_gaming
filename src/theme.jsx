import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Material Blue
    },
    secondary: {
      main: "#ff4081", // Pink
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h6: {
      fontSize: "0.75rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1rem",
      marginBottom: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
      marginBottom: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Avoid uppercase transformation
        },
        containedPrimary: {
          backgroundColor: "#2196f3", // Material Blue for primary buttons
          "&:hover": {
            backgroundColor: "#1565c0", // Slightly darker blue on hover
          },
        },
        containedSecondary: {
          backgroundColor: "#ff4081", // Pink for secondary buttons
          "&:hover": {
            backgroundColor: "#d81b60", // Slightly darker pink on hover
          },
        },
      },
    },
  },
});

export default theme;
