import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#212121', //theme color
            light: '#ffffff',
            //background: '#f7f5f0', //background color
        },
    //     secondary: {
    //         background: '#ffffff', //background color
    // },
  },
});

export default theme;