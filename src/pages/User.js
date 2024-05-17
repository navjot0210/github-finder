import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
  

function User() {
  const location = useLocation();
  const userData = location.state.userData;
  const repositories = location.state.repositories;

  function formatDate(dateString) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }
  
  
  return (
    <>
      <Helmet>
        <title>username</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: {  ease: "easeInOut", duration: 0.8, delay: 0.8 } }}
        exit={{ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.4}}}
      >
        <section className='center'>
          <div className='user-info grid'>
            <div className='user-profile grid'>
              <figure>
                <img className='profile-pic' src={userData.avatar_url} alt="Avatar" />
              </figure>
              <h1 className='username'>{userData.name}</h1>
            </div>
            <div className='stats flex'>
              <p className='grid'><span className='green repo-stat'>{userData.public_repos}</span> Repositories</p>
              <p className='grid'><span className='green follower-stat'>{userData.followers}</span> Followers</p>
              <p className='grid'><span className='green following-stat'>{userData.following}</span> Following</p>
            </div>
            <a className='profile-link' href={userData.html_url} target='_blank' rel="noopener noreferrer" >Go to GitHub</a>
            <div className='all-repos container'>
              <h2>Repositories</h2>
              {repositories.map(repo => (
                <div className='repo' key={repo.id}>  
                  <article className='repo-title flex space-between'>
                    <h3 className='repo-name'>{repo.name}</h3>
                    <span className='latest-date'>Updated at {formatDate(repo.updated_at)}</span>
                  </article>
                  {repo.description ? <p className='repo-description'>{repo.description}</p> : ''}
                </div> 
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default User;