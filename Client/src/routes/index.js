import { Navigate, Route, Routes } from "react-router-dom";
import ChildrenList from "../views/children/ChildrenList";

const Paths = () => (
    <Routes>
        <Route path='/' element={<Navigate replace to='/children' />} />
        <Route path='/children' element={<ChildrenList />} />
    </Routes>
);

export default Paths;