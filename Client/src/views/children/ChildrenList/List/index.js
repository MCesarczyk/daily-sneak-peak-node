import List from '@mui/material/List';
import ListViewItem from './Item';
import { Space } from '../../../../components/Space';
import Loader from '../../../../components/Loader';

const ListView = ({ state, childrenList }) => (
  <Loader
    state={state}
    message="Loading"
  >
    <Space>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {childrenList.length > 0 && childrenList.map(child => (
          <ListViewItem
            key={child.id}
            child={child}
          />
        ))}
      </List>
      <Space
        vertical
        justify="start"
      >
      </Space>
    </Space>
  </Loader>
);

export default ListView;