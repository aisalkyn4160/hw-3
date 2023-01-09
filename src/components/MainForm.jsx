import { useState } from "react"
import './mainForm.css'

const MainForm = () => {
    // -----------------------1 вариант---------------------
    // const [firstName, setFirstName] = useState('')
    // const [email, setEmail] = useState('')


    // const nameChangeHandler = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const emailChangeHandler = (e) => {
    //     setEmail(e.target.value)
    // }


    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     console.log(firstName);
    //     console.log(email);
    // }



    //-------------------------2 вариант -------------------------
    // const [signInp, setSignInp] = useState({
    //     firstName: '',
    //     email: '',
    // })


    // const nameChangeHandler = (e) =>{
    //     setSignInp({
    //         ...signInp,
    //         firstName: e.target.value
    //     })
    // }

    // const emailChangeHandler = (e) =>{
    //     setSignInp({
    //         ...signInp,
    //         email: e.target.value
    //     })
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault()

    //     console.log(signInp.firstName);
    //     console.log(signInp.email);
    // }


    //------------------------3 вариант -----------------------------------------
    const [signInp, setSignInp] = useState({
        firstName: '',
        email: '',
    })


    const nameChangeHandler = (e) => {
        setSignInp((prevState) => {
            return {
                ...prevState,
                firstName: e.target.value
            }
        })
    }

    const emailChangeHandler = (e) => {
        setSignInp((prevState) => {
            return {
                ...prevState,
                email: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        console.log(signInp.firstName);
        console.log(signInp.email);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="sign-form">
                <h1>Sign up</h1>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter your name" onChange={nameChangeHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email" onChange={emailChangeHandler} />
                </div>
                <div>
                    <button type="submit">Sent</button>
                </div>
            </div>

        </form>
    )
}


export default MainForm