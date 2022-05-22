import { Row, Col, Menu } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { ItemType } from "antd/lib/menu/hooks/useItems";

export interface GroupPropsType {
    siderLinks: ItemType[],
    content: JSX.Element,
}

export function Group(props: GroupPropsType) {
    return (
        <Row>
            <Col flex="200px">
                <Sider className='site-layout-background sider' width={200}>
                    <Menu mode='inline' defaultSelectedKeys={['0']} items={props.siderLinks} className="sider-menu" />
                </Sider>
            </Col>
            <Col flex="auto">
                <Content className='content'>
                    {props.content}
                </Content>
            </Col>
        </Row>
    )
}