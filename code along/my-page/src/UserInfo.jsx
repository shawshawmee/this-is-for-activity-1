import { useState } from "react";

function UserInfo() {

    const [user, setUser] = useState({
        name: "Janus Imus",
        email: "janus@gmail.com",
        bio: "Ako po si Janus"
    })

    return (
        <div className="card shadow">
            <div className="card-body m-3">
                <h3 className="card-text fw-bold">
                    {user.name}
                </h3>
                <p className="card-text">
                    {user.email}
                </p>
                <p className="card-text">
                    {user.bio}
                </p>
            </div>
        </div>
    )
}

export default UserInfo;