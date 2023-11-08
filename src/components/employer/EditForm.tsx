export default function EditForm() {}
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Typography from '@mui/material/Typography';
// import "../../App.css"
// import { addPost, getPosts, updatePost } from '../../redux/actions/user';
// import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';


// export default function EditForm({ open, setOpen, ...props }: any) {

//   const rootRef = React.useRef<HTMLDivElement>(null);

//   // console.log('props-------', props);
  
//   // const { open, setOpen } = props
//   // const [open, setOpen] = useState(false);

//   const dispatch = useDispatch()

//   const user = useSelector((state: any) => state)

//   // console.log('userrrrr---', user);
  
//   const [formData, setFormData] = useState({
//     // id: '',
//     firstName: '',
//     lastName: '',
//     age: '',
//     phoneNumber: '',
//     email: '',
//   });
//   // const [formData, setFormData] = useState({
//   //   firstName: props.firstName,
//   //   lastName: props.lastName,
//   //   age: props.age,
//   //   phoneNumber: props.phoneNumber,
//   //   email: props.email,
//   // });

//     useEffect(() => {
//     if (user) {
//       setFormData(user)
//     }

//     // console.log('formData--', formData)
//   }, [])

//   // console.log('form data---', formData);
  

//   // const handleSave = () => {

//   //   dispatch(updatePost(formData));

//   //   // Now that the post has been  added, you can fetch the added list of posts
//   //   dispatch(getPosts());
//   // };

//   const handleSave = (_id: any) => {
//     dispatch(updatePost({ id: _id }));
//     setOpen(false);
//   };

//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   //   useEffect(() => {
//   //   if (user) {
//   //     setFormData(user)
//   //   }

//   //   console.log('formData--', formData)
//   // }, [])


//   return (
//     <Box
//       component="form"
//       sx={{
//         bgcolor: 'background.paper',
//         '& > :not(style)': { m: 2,
//       },
//         p: 6,
//       }}
//       autoComplete="off"
//     >
//       <FormControl variant="standard" required>
//         <InputLabel htmlFor="component-helper">First Name</InputLabel>
//         <Input
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleInputChange}
//           id="component-helper"
//           aria-describedby="component-helper-text"
//           required
//         />
//       </FormControl>

//       <FormControl variant="standard" required>
//         <InputLabel htmlFor="component-helper">Last Name</InputLabel>
//         <Input
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleInputChange}
//           id="component-helper"
//           aria-describedby="component-helper-text"
//           required
//         />
//       </FormControl>

//       <FormControl variant="standard" required>
//         <InputLabel htmlFor="component-helper">Phone Number</InputLabel>
//         <Input
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleInputChange}
//           id="component-helper"
//           aria-describedby="component-helper-text"
//           required
//         />
//       </FormControl>

//       <FormControl variant="standard" required>
//         <InputLabel htmlFor="component-helper">Age</InputLabel>
//         <Input
//           name="age"
//           value={formData.age}
//           onChange={handleInputChange}
//           id="component-helper"
//           aria-describedby="component-helper-text"
//           required
//         />
//       </FormControl>

//       <FormControl variant="standard" required>
//         <InputLabel htmlFor="component-helper">Email</InputLabel>
//         <Input
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           id="component-helper"
//           aria-describedby="component-helper-text"
//           required
//         />
//       </FormControl>
//       <Typography sx={{display: 'flex'}}>
//           <button className='save-button' onClick={() => handleSave(props._id)}>Submit</button>
//           <button className='cancel-button' onClick={()=>setOpen(false)}>Cancel</button>

//       </Typography>
//     </Box>
//   );
// }






































// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import Modal from '@mui/material/Modal';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import '../App.css'
// // import { addPost, updatePost, getPosts } from '../redux/actions/user';
// // import { UPDATE_POST } from "../redux/actions/actionTypes";



// // export default function Form(props: any) {

// //   const rootRef = React.useRef<HTMLDivElement>(null);
// //   const [open, setOpen] = useState(false);

// //   const dispatch = useDispatch()

// //   // console.log('props--',props);

// //   const user = useSelector((state: any) => state.updatePost.user)

// //   console.log('user---', user);

// //   const [formData, setFormData] = useState({
// //     // id: '',
// //     firstName: '',
// //     lastName: '',
// //     age: '',
// //     phoneNumber: '',
// //     email: '',
// //   });

// //   useEffect(() => {
// //     if (user) {
// //       setFormData(user)
// //     }

// //     console.log('formData--', formData)
// //   }, [])


// //   const handleOpen = () => setOpen(true);


// //   const handleClose = () => {
// //     console.log('1234');
// //     setOpen(false)
// //     window.location.reload();
// //   };

// //   const handleSave = async () => {
// //     if (user) {

// //       await dispatch(updatePost(formData));
// //     } else {
// //       await dispatch(addPost(formData));
// //     }

// //     // Now that the post has been updated or added, you can fetch the updated list of posts
// //     await dispatch(getPosts());

// //     handleClose();
// //   };

// //   const handleInputChange = (e: any) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         bgcolor: 'background.paper',
// //         p: 4,
// //       }}
// //     >
// //       <Typography id="server-modal-title" variant="h6" component="h2">
// //         {/* <label>Id<input name='id' value={formData.id} onChange={handleInputChange} ></input></label> */}
// //         <label>First Name<input name="firstName" value={formData.firstName} onChange={handleInputChange} required /></label>
// //         <label>Last Name<input name="lastName" value={formData.lastName} onChange={handleInputChange} required /></label>
// //         <label>Phone Number<input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required /></label>
// //         <label>Age<input name="age" value={formData.age} onChange={handleInputChange} required /></label>
// //         <label>Email<input name="email" value={formData.email} onChange={handleInputChange} required /></label>
// //         <div>
// //           <button className='save-button' onClick={() => handleSave()}>Submit</button>
// //           <button className='cancel-button' onClick={handleClose}>Cancel</button>
// //         </div>

// //       </Typography>
// //     </Box>
// //   );
// // }

