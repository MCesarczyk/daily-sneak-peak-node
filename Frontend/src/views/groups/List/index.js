import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectGroupsList, selectGroupsState } from "../groupsSlice";
import { useDispatch } from 'react-redux';
import { clearGroupsList, fetchGroupsList } from '../groupsSlice';
import ListView from '../../../components/ListView';
import ListViewItem from '../../../components/ListView/Item';
import DialogPopup from '../../dialog/DialogPopup';

const GroupsList = () => {
  const groupsList = useSelector(selectGroupsList);
  const state = useSelector(selectGroupsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroupsList());

    return (() => {
      dispatch(clearGroupsList());
    });
  }, []);

  return (
    <ListView
      state={state}
    extraContent={
      <DialogPopup form='addGroup' />
    }
    >
      {groupsList.length > 0 && groupsList.map(group => (
        <ListViewItem
          key={group.gid}
          url={`/groups/${group.gid}`}
          title={`Name: ${group.name}`}
          subtitle={`Description: ${group.description}`}
        />
      ))}
    </ListView>
  )
};

export default GroupsList;