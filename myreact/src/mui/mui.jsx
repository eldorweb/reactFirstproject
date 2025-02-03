import React from 'react'
import Button from '@mui/material/Button';
import { Autocomplete, Rating } from '@mui/material';
import { MuiContainer } from './muiStyle';
import top100Films from './top100movies';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';


const Mui = () => {
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
    setLoading(true);
    }
      const marks = [
        {
          value: 0,
          label: '0°C',
        },
        {
          value: 20,
          label: '20°C',
        },
        {
          value: 37,
          label: '37°C',
        },
        {
          value: 100,
          label: '100°C',
        },
      ];
      
      function valuetext(value) {
        return `${value}°C`;
      }
      
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
        });
    
        const handleChange = () => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
        };
    
        const { gilad, jason, antoine } = state;
        const error = [gilad, jason, antoine].filter((v) => v).length !== 2;


        const MaterialUISwitch = styled(Switch)(({ theme }) => ({
            width: 62,
            height: 34,
            padding: 7,
            '& .MuiSwitch-switchBase': {
              margin: 1,
              padding: 0,
              transform: 'translateX(6px)',
              '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                  )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                  opacity: 1,
                  backgroundColor: '#aab4be',
                //   ...theme.applyStyles('dark', {
                //     backgroundColor: '#8796A5',
                //   }),
                },
              },
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: '#001e3c',
              width: 32,
              height: 32,
              '&::before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                  '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
              },
            //   ...theme.applyStyles('dark', {
            //     backgroundColor: '#003892',
            //   }),
            },
            '& .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: '#aab4be',
              borderRadius: 20 / 2,
            //   ...theme.applyStyles('dark', {
            //     backgroundColor: '#8796A5',
            //   }),
            },
          }));
          
          const Android12Switch = styled(Switch)(({ theme }) => ({
            padding: 8,
            '& .MuiSwitch-track': {
              borderRadius: 22 / 2,
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 16,
                height: 16,
              },
              '&::before': {
                // backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                //   theme.palette.getContrastText(theme.palette.primary.main),
                // )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                left: 12,
              },
              '&::after': {
                // backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                //   theme.palette.getContrastText(theme.palette.primary.main),
                // )}" d="M19,13H5V11H19V13Z" /></svg>')`,
                right: 12,
              },
            },
            '& .MuiSwitch-thumb': {
              boxShadow: 'none',
              width: 16,
              height: 16,
              margin: 2,
            },
          }));
          
          const IOSSwitch = styled((props) => (
            <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
          ))(({ theme }) => ({
            width: 42,
            height: 26,
            padding: 0,
            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: 2,
              transitionDuration: '300ms',
              '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                  backgroundColor: '#65C466',
                  opacity: 1,
                  border: 0,
                //   ...theme.applyStyles('dark', {
                //     backgroundColor: '#2ECA45',
                //   }),
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                  opacity: 0.5,
                },
              },
              '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                // color: theme.palette.grey[100],
                // ...theme.applyStyles('dark', {
                //   color: theme.palette.grey[600],
                // }),
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.7,
                // ...theme.applyStyles('dark', {
                //   opacity: 0.3,
                // }),
              },
            },
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 22,
              height: 22,
            },
            '& .MuiSwitch-track': {
              borderRadius: 26 / 2,
              backgroundColor: '#E9E9EA',
              opacity: 1,
            //   transition: theme.transitions.create(['background-color'], {
            //     duration: 500,
            //   }),
            //   ...theme.applyStyles('dark', {
            //     backgroundColor: '#39393D',
            //   }),
            },
          }));
          
          const AntSwitch = styled(Switch)(({ theme }) => ({
            width: 28,
            height: 16,
            padding: 0,
            display: 'flex',
            '&:active': {
              '& .MuiSwitch-thumb': {
                width: 15,
              },
              '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
              },
            },
            '& .MuiSwitch-switchBase': {
              padding: 2,
              '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                  opacity: 1,
                //   backgroundColor: '#1890ff',
                //   ...theme.applyStyles('dark', {
                //     backgroundColor: '#177ddc',
                //   }),
                },
              },
            },
            '& .MuiSwitch-thumb': {
              boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
              width: 12,
              height: 12,
              borderRadius: 6,
            //   transition: theme.transitions.create(['width'], {
            //     duration: 200,
            //   }),
            },
            '& .MuiSwitch-track': {
              borderRadius: 16 / 2,
              opacity: 1,
              backgroundColor: 'rgba(0,0,0,.25)',
              boxSizing: 'border-box',
            //   ...theme.applyStyles('dark', {
            //     backgroundColor: 'rgba(255,255,255,.35)',
            //   }),
            },
          }));
    return (
        <MuiContainer>
        <Button variant="contained">Hello world</Button>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    <div>
            <FormControlLabel
            sx={{ display: 'block' }}
            control={
                <Switch
                checked={loading}
                onChange={() => setLoading(!loading)}
                name="loading"
                color="primary"
                />
            }
            label="Loading"
            />



            <Box sx={{ '& > button': { m: 1 } }}>
            <Button
                size="small"
                onClick={handleClick}
                loading={loading}
                variant="outlined"
                disabled
            >
                Disabled
            </Button>
            <Button
                size="small"
                onClick={handleClick}
                loading={loading}
                loadingIndicator="Loading…"
                variant="outlined"
            >
                Fetch data
            </Button>
            <Button
                size="small"
                onClick={handleClick}
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
            >
                Send
            </Button>
            <Button
                size="small"
                color="secondary"
                onClick={handleClick}
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
            >
                Save
            </Button>
            </Box>



            <Box sx={{ '& > button': { m: 1 } }}>
            <Button onClick={handleClick} loading={loading} variant="outlined" disabled>
                Disabled
            </Button>
            <Button
                onClick={handleClick}
                loading={loading}
                loadingIndicator="Loading…"
                variant="outlined"
            >
                Fetch data
            </Button>
            <Button
                onClick={handleClick}
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
            >
                Send
            </Button>
            <Button
                color="secondary"
                onClick={handleClick}
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
            >
                Save
            </Button>
            </Box>
        </div>



        <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>



    <Box sx={{ width: 250 }}>
      <Typography id="track-inverted-slider" gutterBottom>
        Inverted track
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        getAriaValueText={valuetext}
        defaultValue={30}
        marks={marks}
      />
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted track range
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[20, 37]}
        marks={marks}
      />
    </Box>

    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="MUI switch"
      />
      <FormControlLabel
        control={<Android12Switch defaultChecked />}
        label="Android 12"
      />
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label="iOS style"
      />
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
      </Stack>
    </FormGroup>
    
        </MuiContainer>
    )
}

export default Mui