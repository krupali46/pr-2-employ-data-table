import React, { useEffect, useState } from 'react'
import generateUniqueId from 'generate-unique-id';
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandSamsungpass } from "react-icons/tb";
import { useNavigate } from 'react-router';
import { getData } from '../../services/helper';

function Create() {

    const [input, setInput] = useState({
        id: '',
        fname: '',
        email: '',
        salary: '',
        age: '',
        department: '',
        position: ''
    })

    const [viewData, setViewData] = useState(getData("StudentData"));
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate()

    const handleCreate = (e) => {
        const { name, value } = e.target;

        setInput({ ...input, [name]: value });

    }



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(input);

        const obj = {
            ...input,
            id: generateUniqueId({ length: 5, useLetters: false })
        }

        setViewData([...viewData, obj])

        setIsSubmit(true);

    }


    useEffect(()=>{
        localStorage.setItem("StudentData",JSON.stringify(viewData))
    },[viewData])

    useEffect(()=>{
        if(isSubmit){
            navigate('/');
        }
    },[isSubmit])

    return (
        <>

            <div className='createForm'>
                <form action="" class="form_main" onSubmit={handleSubmit}>
                    <p class="heading"> Employ Login</p>
                    <div class="inputContainer">
                        <input type="text" class="inputField" id="username" placeholder="Username" name='fname' onChange={handleCreate} value={input.fname} />
                    </div>

                    <div class="inputContainer">
                       
                        <input type="email" class="inputField" id="email" placeholder="Email" name='email' onChange={handleCreate} value={input.email} />
                    </div>

                    <div class="inputContainer">
                     <input type="text" class="inputField" id="age" placeholder="age" name='age' onChange={handleCreate} value={input.age} />
                    </div>

                    <div class="inputContainer">
                        <input type="text" class="inputField" id="department" placeholder="department" name='department' onChange={handleCreate} value={input.department} />
                    </div>

                    <div class="inputContainer">
                        <input type="text" class="inputField" id="password" placeholder="position" name='position' onChange={handleCreate} value={input.position} />
                    </div>

                    <button id="button" type='submit'>On Click</button>
        
                </form>
            </div>


        </>
    )
}

export default Create;
