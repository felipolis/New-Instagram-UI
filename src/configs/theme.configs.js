import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

export const themeModes = {
    dark: 'dark',
    light: 'light',
}

const themeConfigs = {
    custom: ({ mode }) => {
        const customPalette = mode === themeModes.dark ? {
            background: {
                primary: "#101010",
                secondary: "#151515",
            },
            text: {
                primary: "#FFFFFF",
                secondary: "#76777E",
            }
        } : {
            background: {
                primary: "#EBF1FB",
                secondary: "#F8FBFF",
            },
            text: {
                primary: "#1B1D28",
                secondary: "#76777E",
            }
        };

        return createTheme({
            palette: {
                mode,
                ...customPalette,
            },
            components: {
                MuiButton: {
                    defaultProps: { disableElevation: true },
                }
            }
        });
    },
}

export default themeConfigs;