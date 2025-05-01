import { motion } from "framer-motion";

export default function Modal({ showModal, setShowModal, imgsrc }) {
  if (!showModal) return null;

  return (
    <>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
          <div
            className="bg-blue-950 p-3 pb-0 rounded shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >

            <img className="rounded-md h-full w-full" src={imgsrc} alt="" />
            <div className="flex justify-center space-x-2 py-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-400 rounded"
              >
                Close
              </button>

            </div>
          
        </div>
          </motion.div>
        </div >
        
      )
}
      
    </>
  );
}
