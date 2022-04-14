import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectChildrenList, selectChildrenState } from "../childrenSlice";
import { useDispatch } from 'react-redux';
import { clearChildrenList, fetchChildrenList } from '../childrenSlice';
import ListView from '../../../components/ListView';
import ListViewItem from '../../../components/ListView/Item';
import DialogPopup from '../../dialog/DialogPopup';

const ChildrenList = () => {
  const childrenList = useSelector(selectChildrenList);
  const state = useSelector(selectChildrenState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChildrenList());

    return (() => {
      dispatch(clearChildrenList());
    });
  }, []);

  return (
    <ListView
      state={state}
      extraContent={
        <DialogPopup form='add' />
      }
    >
      {childrenList.length > 0 && childrenList.map(child => (
        <ListViewItem
          key={child.id}
          url={`/children/${child.id}`}
          title={`Child: ${child.name + " " + child.surname}`}
          subtitle={`Group: ${child.group}`}
        />
      ))}
    </ListView>
  )
};

export default ChildrenList;