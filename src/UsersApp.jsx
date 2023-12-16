import { useReducer } from "react"
import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"
import { userReducer } from "./reducers/usersReducer"

const initialUsers = [
    {
        id:1,
        username:'arni',
        password:'123456',
        email:'arni@example.com'
    }
];
const initialUserForm = {
    username:'',
    password:'',
    email:''
}
export const UsersApp = ()=>{
    const [users, dispatch] = useReducer(userReducer, initialUsers)
    const handlerAddUser = (user)=>{
        console.log(user);
        dispatch({
            type:'addUser',
            payload: user
        })
    }
    const handlerRemoveUser = (id)=>{
        console.log(id);
        dispatch({
            type:'removeUser',
            payload: id
        })
    }
    return(
        <>
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        <UserForm initialUserForm={initialUserForm} handlerAddUser={handlerAddUser} />
                    </div>
                    <div className="col">
                        {users.length === 0 ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>:
                        <UsersList users={users} handlerRemoveUser={handlerRemoveUser}/>
                        }
                             
                    </div>
                </div>
            </div>
        </>
        )
}