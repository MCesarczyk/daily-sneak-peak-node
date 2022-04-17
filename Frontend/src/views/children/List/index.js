import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectChildrenList, selectChildrenState } from "../childrenSlice";
import { clearChildrenList, fetchChildrenList } from '../childrenSlice';
import { selectGroupsList } from '../../groups/groupsSlice';
import { groupLabelFindingHelper } from '../../../assets/utils/groupLabelFindingHelper';
import ListView from '../../../components/ListView';
import ListViewItem from '../../../components/ListView/Item';
import DialogPopup from '../../dialog/DialogPopup';

const ChildrenList = () => {
  const childrenList = useSelector(selectChildrenList);
  const state = useSelector(selectChildrenState);
  const dispatch = useDispatch();
  const groups = useSelector(selectGroupsList);
  const findLabel = groupId => groupLabelFindingHelper(groups, groupId);

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
        <DialogPopup form='addChild' />
      }
    >
      {childrenList.length > 0 && childrenList.map(child => (
        <ListViewItem
          key={child.id}
          url={`/children/${child.id}`}
          title={`Child: ${child.name + " " + child.surname}`}
          subtitle={`Group: ${findLabel(child.group)}`}
        />
      ))}
    </ListView>
  )
};

export default ChildrenList;