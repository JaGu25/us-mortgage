import React, { useContext } from 'react'
import { AuthContext } from '../../../store/auth/authContext'

interface Props {

}

const Dashboard: React.FC = (props: Props) => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            {
                user ? (<p>Hi, { user.user.name}!</p>) : null
            }
        </div>
    )
}

export default Dashboard
