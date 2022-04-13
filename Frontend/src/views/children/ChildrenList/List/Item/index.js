import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

const ListViewItem = ({ id, url, title, subtitle }) => (
  <ListItem key={id}>
    <ListItemAvatar>
      <Avatar>
        <ImageIcon />
      </Avatar>
    </ListItemAvatar>
    <Link to={url}>
      <ListItemText
        primary={title}
        secondary={subtitle} />
    </Link>
  </ListItem>
);

export default ListViewItem;