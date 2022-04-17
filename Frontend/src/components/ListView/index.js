import List from '@mui/material/List';
import Loader from '../Loader';
import { Space } from '../Space';

const ListView = ({ state, children, extraContent }) => (
  <Loader
    state={state}
    message="Loading"
  >
    <Space>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {children}
      </List>
      <Space
        vertical
        justify="start"
      >
        {extraContent}
      </Space>
    </Space>
  </Loader>
);

export default ListView;