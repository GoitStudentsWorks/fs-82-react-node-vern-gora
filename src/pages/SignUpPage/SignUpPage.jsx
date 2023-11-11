import React from 'react';
import style from './SignUpPage.module.css';
// import { useDispatch } from 'react-redux';
// import { registerUser } from 'redux/auth/api';
// import { Button, TextField } from '@mui/material';

const SignUpPage = () => {
  
//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
    
//     event.preventDefault();

//     const name = event.currentTarget.elements.userName.value;
//     const email = event.currentTarget.elements.userEmail.value;
//     const password = event.currentTarget.elements.userPassword.value;
    
//     const formData = {
//       name,
//       email,
//       password,
//     };

//     dispatch(registerUser(formData));
//   }

  return (
    // <div className={style.container}>
    //   <form onSubmit={handleSubmit} className={style.form}>
    //     <label>
    //       <TextField
    //         margin="normal"
    //         required
    //         type="text"
    //         label="Name"
    //         name="userName"
    //         placeholder="Enter your name..."
    //       />
    //     </label>
    //     <label>
    //       <TextField
    //         margin="normal"
    //         required
    //         type="email"
    //         label="Email"
    //         name="userEmail"
    //         placeholder="Enter your email..."
    //       />
    //     </label>
    //     <label>
    //       <TextField
    //         margin="normal"
    //         required
    //         type="password"
    //         label="Password"
    //         name="userPassword"
    //         placeholder="Enter your password..."
    //         minLength={7}
    //       />
    //     </label>
    //     <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
    //       Register
    //     </Button>
    //   </form>
    // </div>


    <div className={style.container}>
      <div className={style.loginContainer}>
        <div className={style.formContainer}>
          <h1 className={style.title}>Sign Up</h1>
          <p className={style.titleDescription}>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</p>
          <form className={style.form}>
            <label>
              <input type="text" required placeholder="Name" name="userName" className={style.input} />
              {/* <TextField
                margin="normal"
                required
                type="email"
                label="Email"
                name="userEmail"
                placeholder="Enter your email..."
              /> */}
            </label>
            <label>
              <input type="email" required placeholder="Email" name="userEmail" className={style.input} />
              {/* <TextField
                margin="normal"
                required
                type="email"
                label="Email"
                name="userEmail"
                placeholder="Enter your email..."
              /> */}
            </label>
            <label>
              <input type="password" required placeholder="Password" name="userPassword" minLength={7} className={style.input} />
              {/* <TextField
                margin="normal"
                required
                type="password"
                label="Password"
                name="userPassword"
                placeholder="Enter your password..."
                minLength={7}
              /> */}
            </label>
          </form>
        </div>
        <button className={style.btn}>Sign Up</button>
        <p className={style.description}>Already have an account? Sign In</p>
          {/* <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Login
          </Button> */}
      </div>
    </div>
  )
}

export default SignUpPage