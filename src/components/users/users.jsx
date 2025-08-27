import {useEffect, useState} from "react";
import axios from "axios";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import User from "./user.jsx";
import {useDebouncedCallback} from "use-debounce";
import {useNavigate, useSearchParams} from "react-router";





const Users = () => {


    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    let [searchParams] = useSearchParams();
    const navigate = useNavigate()


    const searchDebounce = useDebouncedCallback(
        // function
        (value) => {
            navigate('/users?q=' + value)
            search(value)
        },
        // delay in ms
        1000
    );

    useEffect(() => {

        setUsers([])
        setLoading(true)


        const fetchUsers = async () => {
            try {
                let response
                if (searchParams.get('q')){
                    response = await axios.get('https://dummyjson.com/users/search?q=' + searchParams.get('q'))
                }else {
                    response = await axios.get('https://dummyjson.com/users')
                }
                setTimeout(() => {
                    setUsers(response.data.users)
                    setLoading(false)

                }, 300)
            } catch (error) {
                console.error(error);
            }
        }
        fetchUsers()

    }, [])


    return (
        <>

            <div className='page__container'>
                <input className='p-2 rounded-md' defaultValue={searchParams.get('q')}  onInput={(e)=>{searchDebounce(e.currentTarget.value)}}></input>
            </div>

            {
                loading
                    ?
                    <SkeletonTheme baseColor='#242424' highlightColor="#444">
                        <div className="page__container">
                            <Skeleton width='90px' height='50px' />
                        </div>
                        <div className="page__container users">
                            {
                                Array.from({length: 5}, () => ({})).map((value, index) => {
                                    return <div key={index} className='user'>
                                        <Skeleton className='mb-2' circle={true} width='80px' height="80px"/>
                                        <Skeleton className='mb-2' width='60px'/>
                                        <Skeleton className='mb-4'/>
                                        <div className='flex'>
                                            <Skeleton width='90px' height='50px' />
                                            <Skeleton width='90px' height='50px' />
                                        </div>
                                    </div>

                                })
                            }
                        </div>
                    </SkeletonTheme>
                    :

                    <>
                        <div className='page__container'>
                            <button className='bg-green-500 font-bold p-2 rounded max-w-20 text-center mb-2'
                                    onClick={() => {
                                        craeteUser()
                                    }}>
                                craete
                            </button>
                        </div>
                        <div className="page__container users">

                            {
                                users.map(user =>
                                    <User
                                        key={user.id}
                                        id={user.id}
                                        firstName={user.firstName}
                                        image={user.image}
                                        email={user.email}
                                        updateUser={updateUser}
                                        deleteUser={deleteUser}/>
                                )
                            }

                        </div>
                    </>
            }



        </>
    )


    async function search(value) {

        setLoading(true)

        const response = await axios.get(`https://dummyjson.com/users/search?q=${value}`);
        setUsers(response.data.users)
        setLoading(false)


    }

    async function craeteUser() {

        setLoading(true)

        try {
            const response = await axios.post(
                'https://dummyjson.com/users/add',
                {
                    firstName: 'ashkan',
                    email: 'Ashkan.amjadi8412@gamil.com',
                    image: 'https://avatars.githubusercontent.com/u/146482343?v=4',
                },
                {
                    headers: {'Content-Type': 'application/json'}
                }
            )
            setLoading(false)
            let newUers = [response.data , ...users];
            const seen = new Set();
            const unique = newUers.filter(item => {
                if (seen.has(item.id)) return false;
                seen.add(item.id);
                return true;
            });

            setUsers(unique)
            console.log(newUers)


        } catch (e) {
            console.log(e)
        }


    }

    async function updateUser(user_id) {

        setLoading(true)

        try {
            const response = await axios.put(
                `https://dummyjson.com/users/${user_id}`,
                {
                    firstName: 'ashkan',
                    email: 'Ashkan.amjadi8412@gamil.com',
                    image: 'https://avatars.githubusercontent.com/u/146482343?v=4',
                },
                {
                    headers: {'Content-Type': 'application/json'}
                }
            )

            console.log(response.data.id)

            let newUsers = users.map(item=>{

                if (item.id === response.data.id){
                    return response.data
                }
                return item;

            })

            setUsers(newUsers)
            setLoading(false)


        } catch (e) {
            console.log(e)
        }

    }

    async function deleteUser(user_id) {

        setLoading(true)
        try{

            let response = await axios.delete(`https://dummyjson.com/users/${user_id}`)

            let newUsers;
            if (response.data.isDeleted){

                newUsers = users.filter(e=> e.id !== user_id)

            }
            setUsers(newUsers)
            setLoading(false)



        }catch (e) {
            console.log(e)
        }

    }

}


export default Users