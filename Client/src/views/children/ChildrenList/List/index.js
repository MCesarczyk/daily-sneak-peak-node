import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { useSelector } from "react-redux";
import { selectChildren } from "../../childrenSlice";

const ListView = () => {
  const children = useSelector(selectChildren);

  return (
    <List data-testid="childrenList" sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {children.length > 0 && children.map(child => (
        <ListItem key={child.id}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <Link to={`/children/${child.id}`}>
            <ListItemText
              primary={"Child: " + child.name + " " + child.surname}
              secondary={"Group: " + child.group} />
          </Link>
        </ListItem>
      ))}
    </List>
  )
};

export default ListView;