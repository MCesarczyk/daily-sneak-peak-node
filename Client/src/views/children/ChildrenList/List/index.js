import List from '@mui/material/List';
import { useSelector } from "react-redux";
import { selectChildren } from "../../childrenSlice";
import ListViewItem from './Item';

const ListView = () => {
  const children = useSelector(selectChildren);

  return (
    <List  sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {children.length > 0 && children.map(child => (
        <ListViewItem
          key={child.id}
          child={child}
        />
      ))}
    </List>
  )
};

export default ListView;