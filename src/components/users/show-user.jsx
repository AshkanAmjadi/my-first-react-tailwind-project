import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

const ShowUser = () => {

    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    const [user, setUser] = useState()

    useEffect(() => {
        setLoading(true)
        const getUser = async () => {

            try {
                const response = await axios.get(`https://dummyjson.com/users/${id}`);
                setUser(response.data)
                setTimeout(()=>{
                    setLoading(false)
                },1000)
            } catch (e) {
                console.log(e)
            }


        }
        getUser();
    }, [])


    return (

        <div className='page__container'>
            {
                loading
                    ?
                    <SkeletonTheme baseColor='#242424' highlightColor="#444">
                        <div>
                            <Skeleton className='mb-2' circle={true} width='80px' height="80px"/>
                            <Skeleton className='mb-2' width='60px'/>
                            <Skeleton className='mb-4'/>
                        </div>
                    </SkeletonTheme>
                    :

                    <div className='px-4'>
                        <img className='w-20 rounded-full' src={user?.image}/>
                        <h2 className='font-bold text-xl'>{user?.firstName}</h2>
                        <h2 className='font-semibold text-lg'>{user?.email}</h2>
                    </div>
            }
        </div>


    )

}


export default ShowUser
