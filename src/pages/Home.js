import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Fetch from '../components/Fetch';
import gitIcon from '../img/git-icon.png';

function Home() {
  return (
    <>
      <Helmet>
        <title>Github-Finder</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: {  ease: "easeInOut", duration: 0.8, delay: 0.8 } }}
        exit={{ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.4}}}
      >
        <section className='center'>
          <div className='grid'>
            <figure>
              <img className='git-icon' src={gitIcon} alt='github' />
            </figure>
            <Fetch />
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Home;