import List from '@mui/material/List';
import ListViewItem from './Item';

const ListView = ({ children }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
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