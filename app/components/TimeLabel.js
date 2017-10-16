import { VictoryLabel } from "victory-native";

const TimeLabel = (props) => 
    <VictoryLabel
        {...props}
        text = {props.x.getMilliseconds()}
    />

export default TimeLabel