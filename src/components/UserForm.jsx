import { useState } from "react"

export const UserForm = ({handlerAddUser, initialUserForm})=>{

    const [userForm, setUserForm] = useState(initialUserForm);
    const {username, password, email} = userForm;
    const onInputChange = ({target})=>{
        const {name, value} = target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(!username || !password || !email){
            alert("Debe completar los campos del formulario!");
            return;
        }
        //console.log("Sending form...", userForm);
        //saving user in the userList
        handlerAddUser(userForm)
        setUserForm(initialUserForm)
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <input type="text" className="form-control my-3 w-75" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            <input type="email" className="form-control my-3 w-75" placeholder="Email" name="email" value={email} onChange={onInputChange} />
            <input type="password" name="password" className="form-control my-3 w-75" value={password} placeholder="Password" onChange={onInputChange} />
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
        </>
    )
}