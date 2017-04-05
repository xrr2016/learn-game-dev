import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu
const { Header, Footer, Sider, Content } = Layout

const LayoutExample = () => (
  <div>
    <Layout>
      <Header>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}>
          <Menu.Item key='1'>
            nav 1
          </Menu.Item>
          <Menu.Item key='2'>
            nav 2
          </Menu.Item>
          <Menu.Item key='3'>
            nav 3
          </Menu.Item>
          <SubMenu key='sub2' title={<span><Icon type='laptop' />subnav 2</span>}>
            <Menu.Item key='5'>
              option5
            </Menu.Item>
            <Menu.Item key='6'>
              option6
            </Menu.Item>
            <Menu.Item key='7'>
              option7
            </Menu.Item>
            <Menu.Item key='8'>
              option8
            </Menu.Item>
          </SubMenu>
        </Menu>
        Header
      </Header>
      <Layout>
        <Sider>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum possimus dolor quae, illo natus deleniti vitae quod, sit qui magnam sed, corporis amet earum assumenda
          ut odit mollitia tempora saepe.
        </Sider>
        <Content>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              List
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              App
            </Breadcrumb.Item>
          </Breadcrumb>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum natus hic aspernatur architecto nemo repellendus iure eos est, recusandae dolorem molestias quisquam
          iusto nihil accusamus dolore earum suscipit provident! Dolore.
        </Content>
      </Layout>
      <Footer>
        Footer
      </Footer>
    </Layout>
  </div>
)

export default LayoutExample
