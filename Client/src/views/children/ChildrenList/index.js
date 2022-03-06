import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectChildrenList, selectChildrenState } from "../childrenSlice";
import { useDispatch } from 'react-redux';
import { clearChildrenList, fetchChildrenList } from '../childrenSlice';
import ListView from './List';

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
      childrenList={childrenList}
    />
  )
};

export default ChildrenList;