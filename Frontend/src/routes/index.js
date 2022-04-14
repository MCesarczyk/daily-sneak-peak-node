import { Navigate, Route, Routes } from "react-router-dom";
import ChildrenList from "../views/children/ChildrenList";
import ChildData from "../views/child/ChildData";
import GroupsList from "../views/groups/GroupsList";
import GroupDetails from "../views/group/Details";

const Paths = () => (
    <Routes>
        <Route path='/children' element={<ChildrenList />} />
        <Route path='/children/:id' element={<ChildData />} />

        <Route path='/groups' element={<GroupsList />} />
        <Route path='/groups/:id' element={<GroupDetails />} />
        
        <Route path='/users' element={<h3 style={{textAlign: 'center'}}>PAGE UNDER CONSTRUCTION</h3>} />
        <Route path='*' element={<Navigate replace to='/children' />} />
    </Routes>
);

export default Paths;