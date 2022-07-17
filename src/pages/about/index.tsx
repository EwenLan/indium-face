import "./index.css"
import { List, Typography } from "antd"
const { Title } = Typography

interface SoftwareBaseInfo {
    SoftwareVersion: string
    ProjectHome: string
    Author: string
    Email: string
    BuildDate: string
}
interface FrontendVersionInfoType extends SoftwareBaseInfo {
    NodeJSVersion: string
}

interface InfoItem {
    title: string
    content: string
}

interface InfoListPropsType {
    title: string
    infoList: InfoItem[]
}

// FrontendVersionInfo
const FrontendVersion: FrontendVersionInfoType = {
    NodeJSVersion: "v16.14.2",
    SoftwareVersion: "0.7.8",
    ProjectHome: "https://github.com/EwenLan/indium-face",
    Author: "Ewen Lan",
    Email: "ewen_lan@outlook.com",
    BuildDate: "2022-07-17",
}

function InfoList(props: InfoListPropsType): JSX.Element {
    return (
        <>
            <List
                className="version-table"
                header={<div>{props.title}</div>}
                dataSource={props.infoList}
                bordered
                grid={{ gutter: 16, column: 3 }}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.title}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />
        </>
    )
}

// FrontendVersionInfo
function FrontendVersionInfo(): JSX.Element {
    const versionInfo: InfoItem[] = [
        { title: "Base Node.js Version", content: FrontendVersion.NodeJSVersion },
        { title: "Software Version", content: FrontendVersion.SoftwareVersion },
        { title: "Build Date", content: FrontendVersion.BuildDate },
        { title: "Project Home", content: FrontendVersion.ProjectHome },
        { title: "Author", content: FrontendVersion.Author },
        { title: "Email", content: FrontendVersion.Email },
    ]
    return (
        <>
            <InfoList title="Frontend Version Info" infoList={versionInfo}></InfoList>
        </>
    )
}

export function About(): JSX.Element {
    return (
        <div className="about-page">
            <Title>About</Title>
            <FrontendVersionInfo />
        </div>
    )
}