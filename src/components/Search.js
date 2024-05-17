import React, { useState } from 'react';

function Search(props) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(username);
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
      <p className='message'>Welcome to Github Finder</p>
    </>
  );
}

export default Search;