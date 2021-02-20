import React from 'react';
import clsx from 'clsx'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { login } from '../store/actions';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '25ch',
      },
}));

function LoginPage(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      password: '',
      username: '',
      showPassword: false,
    });

  
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('handle submit', values.username)
       login({
            username: values.username,
            password: values.password
        });
        values.username = ''
        values.password = ''
      }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    

  return (
    <div className="App">
      <div className={classes.margin}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <TextField value={values.username} onChange={handleChange('username')} id="outlined-basic" label="UserId" variant="outlined" />
        </FormControl>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
          </Grid>
        <Grid item>
        <Button type="submit" color="secondary">Submit</Button>
        </Grid>
        </Grid>
      </form>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({ login },dispatch);
  }
export default withStyles(useStyles, mapDispatchToProps)(LoginPage);