import {useContext} from "react";
import AuthContext from "./AuthContext.jsx";


const Dashboard = () => {

    const { currentUser } = useContext(AuthContext)


    return (
        <div className={`page__container`}>
            <div className='px-4'>
                <img className='w-20 rounded-full' src={currentUser.image}/>
                <h2 className='font-bold text-xl'>{currentUser.username}</h2>
            </div>
        </div>
    )

}

export default Dashboard