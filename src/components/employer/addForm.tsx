import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import "../../App.css"
import { addPost, getPosts } from '../../redux/actions/user';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({ autoClose: 1000, position: toast.POSITION.TOP_RIGHT });

export default function AddForm() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const users = useSelector((state: any) => state?.getPosts?.users?.posts);
  console.log('addform---', users)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    email: '',
  });

  const handleSave = async () => {
    if (!isValidFormData(formData)) {
      toast.error('Please fill in all required fields...');
      return;
    }

    await dispatch(addPost(formData));
    dispatch(getPosts());
    navigate('/grid');
  };

  const isValidFormData = (data: any) => {
    // Define your validation logic here
    return data.firstName && data.lastName && data.email;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box
      component="form"
      sx={{
        bgcolor: 'background.paper',
        '& > :not(style)': {
          m: 2,
        },
        p: 6,
      }}
      autoComplete="off"
      aria-required
    >
      <FormControl variant="standard" required>
        <InputLabel htmlFor="component-helper">First Name</InputLabel>
        <Input
          name="firstName"
          value={formData.firstName || ''} 
          onChange={handleInputChange}
          id="component-helper"
          aria-describedby="component-helper-text"
          required
        />
      </FormControl>

      <FormControl variant="standard" required>
        <InputLabel htmlFor="component-helper">Last Name</InputLabel>
        <Input
          name="lastName"
          value={formData.lastName || ''} 
          onChange={handleInputChange}
          id="component-helper"
          aria-describedby="component-helper-text"
          required
        />
      </FormControl>

      <FormControl variant="standard" required>
        <InputLabel htmlFor="component-helper">Phone Number</InputLabel>
        <Input
          name="phoneNumber"
          value={formData.phoneNumber || ''} 
          onChange={handleInputChange}
          id="component-helper"
          aria-describedby="component-helper-text"
          required
        />
      </FormControl>

      <FormControl variant="standard" required>
        <InputLabel htmlFor="component-helper">Age</InputLabel>
        <Input
          name="age"
          value={formData.age || ''} 
          onChange={handleInputChange}
          id="component-helper"
          aria-describedby="component-helper-text"
          required
        />
      </FormControl>

      <FormControl variant="standard" required>
        <InputLabel htmlFor="component-helper">Email</InputLabel>
        <Input
          name="email"
          value={formData.email || ''} 
          onChange={handleInputChange}
          id="component-helper"
          aria-describedby="component-helper-text"
          required
        />
      </FormControl>
      <Typography sx={{ display: 'flex' }}>
        <button className='save-button' onClick={handleSave}>Save</button>
        <button className='cancel-button'>
          <Link to='/grid' style={{ textDecoration: 'none', color: 'inherit' }}>
            Cancel
          </Link>
        </button>
      </Typography>
    </Box>
  );
}
