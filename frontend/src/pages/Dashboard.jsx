import AccountBalance from "../components/AccountBalance"
import { Appbar } from "../components/Appbar"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <AccountBalance />
            <Users />
        </div>
    </div>
}