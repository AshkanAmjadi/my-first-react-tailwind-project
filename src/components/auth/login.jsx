import {z} from "zod";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import AuthContext from "./AuthContext.jsx";
import {useNavigate} from "react-router";
import {pick} from "../../helper/helper.js";


const Login = () => {



    const { currentUser , setCurrentUser } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(()=>{

        if (currentUser){

            navigate('/dashboard')

        }

    },[])

    const loginSchema = z.object({
        username: z.string().min(3, 'لطفا بیشتر از 3 کاراکتر باشد').max(30, 'لطفا بیشتر از 30 کاراکتر باشد'),
        password: z.string().min(3, 'لطفا بیشتر از 3 کاراکتر باشد').max(30, 'لطفا بیشتر از 16 کاراکتر باشد')
    });

    const [loginErorr, setLoginErorr] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: zodResolver(loginSchema),
        mode: 'onChange'
    })


    const login = async (data) => {

        setLoginErorr(false)
        try {

            const response = await axios.post('https://dummyjson.com/auth/login', {...data, expiresInMins: 1},
                {
                    headers: {'Content-Type': 'application/json'},
                }
            )


            localStorage.setItem('token' , response.data.accessToken)
            setCurrentUser(pick(response.data , ['id','username','image']))
            navigate('/dashboard')

        }catch (e) {
            console.log(e)
            setLoginErorr(true)
        }


    }

    function isValid(name) {
        return watch(name) === ""
            ? ""
            : (errors[name]
                ? 'ring ring-rose-500'
                : 'ring ring-green-500')
    }


    return (
        <>



            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your
                        account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(login)} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email
                                address</label>
                            <div className="mt-2 mb-3">
                                <input {...register("username")} id="username" type="text" name="username"
                                       autoComplete="username"
                                       className={`${isValid('username')} block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6`}/>
                            </div>
                            {errors.username && <span
                                className={`text-rose-500 font-bold text-right w-full inline-block`}>{errors.username.message}</span>}

                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm/6 font-medium text-gray-100">Password</label>
                            </div>
                            <div className="mt-2 mb-3">
                                <input {...register('password')} type="text" name="password"
                                       autoComplete="current-password"
                                       className={`${isValid('password')} block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6`}/>
                            </div>
                            {errors.password && <span
                                className={`text-rose-500 font-bold text-right w-full inline-block`}>{errors.password.message}</span>}

                        </div>

                        <div>
                            <button type="submit" disabled={isSubmitting}
                                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign
                                in
                            </button>
                        </div>

                        {loginErorr && <span
                            className={`text-rose-500 font-bold text-right w-full inline-block`}>مشکلی پیش اومده بعدا امتحان کنید😐</span>}
                    </form>


                </div>
            </div>

        </>
    )

}


export default Login