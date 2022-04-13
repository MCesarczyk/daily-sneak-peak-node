import List from '@mui/material/List';
import Loader from '../../../../components/Loader';
import { Space } from '../../../../components/Space';

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