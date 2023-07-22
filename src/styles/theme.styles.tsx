import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        success: {
            main: "#2e7d32",
        },
        secondary: {
            main: "#9c27b0",
        },
        error: {
            main: "#d32f2f",
        },
        warning: {
            main: "#ed6c02",
        },
    },
});

export const filterTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
    },
    components: {
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": { borderBottom: "1px solid #ffffff" },
                    "&:hover:not(.Mui-disabled):before": { borderBottom: "2px solid #ffffff" },
                    "&:after": { borderBottom: "2px solid #ffffff" },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#fff",
                    "&.Mui-focused": {
                        color: "#fff",
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: "#fff",
                    "&fieldset": { borderColor: "#ffffff" },
                    "&:hover fieldset": { borderColor: "#ffffff !important" },
                    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                    "&.MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ffffff",
                        "&:hover": {
                            borderColor: "#ffffff",
                        },
                        "&.Mui-focused": {
                            borderColor: "#ffffff",
                        },
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    "&.MuiSelect-icon": { color: "#ffffff !important" },
                },
            },
        },
        MuiInputAdornment: {
            styleOverrides: {
                root: {
                    "& svg": { color: "#ffffff" },
                },
            },
        },
    },
});
