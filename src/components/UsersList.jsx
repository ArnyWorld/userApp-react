import { UserRow } from "./UserRow"

export const UsersList = ({ users = [], handlerRemoveUser }) => {
    return (
        <>
        <p>User List</p>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        users.map(({id, username, email})=>(
                            <UserRow key={id} username={username} email={email} id={id} handlerRemoveUser = {handlerRemoveUser}/>
                        ))
                     }
                </tbody>
            </table>
        </>
    )
}