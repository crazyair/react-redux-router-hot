import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import _ from 'lodash';
import './App.less';

const {Header, Sider, Content} = Layout;

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            collapsed: false,
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        return (
            <div className='components-layout-demo-custom-trigger'>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo"/>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user"/>
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera"/>
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload"/>
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ padding: 0,height:51}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <span style={{color:'#fff',fontSize:23}}>LOGO</span>
                        </Header>
                        <Content style={{ background: '#fff', minHeight: 280}}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App