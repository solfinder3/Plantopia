import React, {useState, useEffect} from 'react';
import {AuthConsumer} from '../../providers/AuthProvider'
import Dropzone from 'react-dropzone'

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const Profile = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState('')

  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    const { auth: { user: { first_name, last_name, email, }, }, } = props;
    setFirstName(first_name)
    setLastName(last_name)
    setEmail(email)
    setFile(file)
  }, [])

 const handleFileChange = (e) => {
   setFile(e.target.value)
 }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.auth.updateUser(props.auth.user.id, { firstName, lastName, email, file })
    setToggleEdit(!toggleEdit)
    setFirstName('')
    setLastName('')
    setEmail('')
    setFile('')
  }

  const onDrop = (files) => {
    setFile(files[0])
  }
  
  const profileView = () => {
    const {auth: { user }, } = props;
    return (
      <>
        <img src={user.image || 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'} />
        <h1>
          {props.auth.user.first_name} 
          <br />
          {props.auth.user.last_name}
        </h1>
      </>
    )
  }

  const editView = () => {
    const {auth: { user } } = props;
    
    return (
      <form onSubmit={handleSubmit} toggleEdit={setToggleEdit}>
        <Dropzone
          onDrop={onDrop}
          multiple={false}
          onChange={handleFileChange}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
        <input 
          label='First Name'
          name='firstName'
          value={firstName}
          required
          onChange={handleFirstNameChange}
        />
        <input 
          label='Last Name'
          name='lastName'
          value={lastName}
          required
          onChange={handleLastNameChange}
        />
        <input 
          label='Email'
          name='email'
          value={email}
          required
          onChange={handleEmailChange}
        />
        <button type='submit'>update</button>
      </form>
    )
  }



  return (
    <>
      {toggleEdit ? editView() : profileView()}
  <button onClick={() => setToggleEdit(!toggleEdit)}>
    {toggleEdit ? 'Exit' : 'Edit'}
  </button>
    </>
  )
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}



const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;
