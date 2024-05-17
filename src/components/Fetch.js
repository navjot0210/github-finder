import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Fetch() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const options = {headers:{ Authorization: `Bearer ${token}`}}
  let navigate = useNavigate();

  const fetchUser = async user => {
    try {
      const { data: userData } = await axios.get(`https://api.github.com/users/${user}`, options);
      const { data: reposData } = await axios.get(`https://api.github.com/users/${user}/repos`, options);
      // navigate(`/user/${data.login}`, { state: { userData, repositories: reposData } });
      console.log(userData);
      console.log(reposData);
      navigate(`/user/${userData.login}`, { state: { userData, repositories: reposData } });
    } catch(error) {
      setMessage('User not found. Try again');
    }
  };

  const onSubmit = data => {
    fetchUser(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
    setUsername('');
  };

  return (
    <>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Username'
          name='name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
      <p className='message'>{message ? message : 'Welcome to GitHub Finder'}</p>
    </>
  )
}

export default Fetch;