import { Route, Routes } from "react-router-dom"
import classes from './AdminPage.module.scss'
import Home from "./HomePage/HomePage"
import NavBar from "./NavBar/NavBar"
import OrdersPage from "./OrdersPage/OrdersPage"
import TimeAndDatePage from "./TimeAndDatePage/TimeAndDatePage"



function AdminPage() {
    return (
        <div className={classes.adminBoard}>
            {/* nav */}
            <NavBar />
            {/* content */}
            <div className={classes.content}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="orders" element={<OrdersPage />} />
                    <Route path="time" element={<TimeAndDatePage />} />
                </Routes>
            </div>

        </div>
    )
}

export default AdminPage