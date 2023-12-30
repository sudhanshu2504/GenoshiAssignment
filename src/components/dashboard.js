import React from 'react';
import { MdAccountCircle ,MdLogout} from "react-icons/md";
import { FaLink, FaArrowRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";
import '../style.css';
function Dashboard() {
    // const [content, setContent] = useState(0);
  return (
    <div className='bg-black  h-auto flex p-4 text-white min-h-screen'>        
            <div className="nav absolute sm:-translate-x-2 -mx-1 hover:-translate-x-2 -translate-x-[20rem] sm:relative min-h-screen w-80  border border-slate-500 rounded-lg bg-gray-900">
                <h1 className='text-xl text-center my-5 bold m-auto'>User Dashboard</h1>
                <hr className='border-slate-500'/>
                <ul>
                    <li className='text-lg  py-5 hover:bg-gray-800 hover:border-slate-500 rounded mx-2 '> <h3 className='flex flex-inline items-center justify-center'> <MdAccountCircle className='size-6 mx-2'/> My Profile </h3> </li>
                    <li className='text-lg py-5 hover:bg-gray-800 hover:border-slate-500 rounded mx-2'><h3 className='flex flex-inline items-center justify-center'> <FaLink className='size-6 mx-2'/> Linked Account</h3></li>
                    <li className='text-lg py-5 hover:bg-gray-800 hover:border-slate-500 rounded mx-2'><h3 className='flex flex-inline items-center justify-center'> <VscGraphLine className='size-6 mx-2'/> My Graphs</h3></li>
                    <li className='text-lg py-5 hover:bg-gray-800 hover:border-slate-500 rounded mx-2'><h3 className='flex flex-inline items-center justify-center'> <IoMdSettings className='size-6 mx-2'/> Settings</h3></li>
                    <li className='text-lg py-5 hover:bg-gray-800 hover:border-slate-500 rounded mx-2'><h3 className='flex flex-inline items-center justify-center'> <MdLogout className='size-6 mx-2'/> LogOut</h3></li>
                </ul>
            </div>
        <div className="main mx-2 h-auto w-11/12">
            <div className="profile flex p-4 border border-slate-100 rounded-lg md:w-full min-h-1/4">
                <div>
                    <MdAccountCircle className='size-20 md:size-40 items-center '/>
                </div>
                <div className='flex flex-col w-9/12'>
                    <h1 className='text-lg p-2'>Welcome, Customer Name</h1>
                    <hr className='border border-slate-300 mx-2 w-full'/>
                    <h3 className='text-m text-gray-300 px-2 py-1 items-center flex flex-inline'><TfiEmail className='mx-2'/> customerGmail@gmail.com</h3>
                    <h3 className='text-m text-gray-300 px-2 py-1 items-center flex flex-inline'><FaPhone className='mx-2'/> +91 9876543210</h3>
                </div>
            </div>
            <div className="userdata flex flex-col md:flex-row my-2 w-full min-h-1/4">
                <div className="usage p-4 m-1 border border-slate-100 rounded-lg md:w-full min-h-72">
                    <h2 className='flex flex-inline gap-4 items-center'>Manage Account<FaArrowRight className='hover:cursor-pointer'/> </h2>
                    <h1 className='text-lg my-2'>Email : customerGmail@gmail.com</h1>
                    <h1 className='text-lg my-2'>Contact : +91 9876543210</h1>
                    <h1 className='text-lg my-2'>Current Subscription : Pro Plan</h1>
                    <h1 className='text-lg my-2'>Subscription Validity: 12/12/24</h1>
                    <button className="btn border p-2 rounded-lg m-2 hover:text-black hover:bg-white">Manage Subscription</button>
                    <button className="btn border p-2 rounded-lg m-2 hover:text-black hover:bg-white">Change Password</button>
                </div>
            </div>
            <div className="userdata flex flex-col md:flex-row my-2 w-full min-h-1/4">
                <div className="usage p-4 m-1 border border-slate-100 rounded-lg md:w-6/12 h-72">
                    <h2 className='flex flex-inline gap-4 items-center'> Usage Metrics <FaArrowRight className='hover:cursor-pointer'/> </h2>
                </div>
                <div className="usage p-4 m-1 border border-slate-100 rounded-lg md:w-6/12 h-72">
                    <h2 className='flex flex-inline gap-4 items-center'> Recent Activity <FaArrowRight className='hover:cursor-pointer'/> </h2>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Dashboard
