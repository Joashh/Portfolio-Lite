import Profile from './profile.jsx';
import Quotation from './quotation.jsx';

export default function Header() {
    return(
        <>
        <div className='p-4 pb-0 flex gap-4'>
            <div className='flex-1 max-w-100'>
       <Profile />
       </div>

       <div className='flex-1 '>
       <Quotation />
       </div>
       </div>
       </>
    );
}