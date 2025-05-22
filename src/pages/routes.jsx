import { Route, Routes } from "react-router-dom";
import { Home } from "./home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export { AppRoutes };