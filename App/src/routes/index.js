import { Navigate, Route, Routes } from "react-router-dom";
import ChildrenList from "../views/children/ChildrenList";
import ChildData from "../views/child/ChildData";

const Paths = () => (
    <Routes>
        <Route path='/children' element={<ChildrenList />} />
        <Route path='/children/:id' element={<ChildData />} />
        <Route path='*' element={<Navigate replace to='/children' />} />
    </Routes>
);

export default Paths;