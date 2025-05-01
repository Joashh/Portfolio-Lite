
import Header from '../components/header.jsx';
import Main from './main.jsx';
import { motion } from 'framer-motion';

export default function Home({children}) {
    return (
        <>
       <Header />
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
