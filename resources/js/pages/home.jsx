
import Header from '../components/header.jsx';
import Main from './main.jsx';
import { motion } from 'framer-motion';

export default function Home({children}) {
    return (
        <>
        <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
       <Header />
       </motion.div>
       <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
        </motion.main>
       </>
    );
}
