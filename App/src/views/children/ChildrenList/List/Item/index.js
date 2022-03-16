import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

const ListViewItem = ({ child }) => (
  <ListItem key={child.id}>
    <ListItemAvatar>
      <Avatar>
        <ImageIcon />
      </Avatar>
    </ListItemAvatar>
    <Link to={`/children/${child.id}`}>
      <ListItemText
        primary={`Child: ${child.name + " " + child.surname}`}
        secondary={`Group: ${child.group}`} />
    </Link>
  </ListItem>
);

export default ListViewItem;