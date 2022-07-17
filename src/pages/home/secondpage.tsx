import { TitledFunction } from "../../templates/titledfunction"
import { Typography } from "antd"
const { Text } = Typography

export function SecondPage() {
    return (
        <TitledFunction title="Second Page" content={<Text>Second Page</Text>} />
    )
}