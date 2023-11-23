import {
    // // RadiusBottomleftOutlined,
    // RadiusBottomrightOutlined,
    // // RadiusUpleftOutlined,
    RadiusUprightOutlined,
  } from '@ant-design/icons';
  import React, { useMemo } from 'react';
  import { Button, Divider, Space, notification } from 'antd';
  const Context = React.createContext({
    name: 'Default',
  });
  const App = () => {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement) => {
      api.info({
        message: `Notification ${placement}`,
        description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
        placement,
      });
    };
    const contextValue = useMemo(
      () => ({
        name: 'Ant Design',
      }),
      [],
    );
    return (
      <Context.Provider value={contextValue}>
        {contextHolder}
        <Space>
          {/* <Button
            type="primary"
            onClick={() => openNotification('topLeft')}
            icon={<RadiusUpleftOutlined />}
          >
            topLeft
          </Button> */}
          <Button
            type="primary"
            onClick={() => openNotification('topRight')}
            icon={<RadiusUprightOutlined />}
          >
            topRight
          </Button>
        </Space>
        <Divider />
       
      </Context.Provider>
    );
  };
  export default App;