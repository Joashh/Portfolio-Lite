
import Header from '../components/header.jsx';
import Main from './main.jsx';
import { motion } from 'framer-motion';

export default function Home({children}) {
    return (
        <div className='flex flex-col h-screen '>

        <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}>

        <div className=' '>
       <Header />
       </div>

       </motion.div>

       <div>

       </div>

       <div className='flex flex-1 min-h-0 h-full'>
       <motion.main
        className="flex-1 overflow-y-auto min-h-0 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>

        {children}
        
        </motion.main>
        </div>

       </div>
    );
}
