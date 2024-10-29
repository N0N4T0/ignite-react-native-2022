import { useWindowDimensions } from "react-native"
import { THEME } from "../../styles/theme"
import Animated from "react-native-reanimated"
import { BlurMask, Canvas, Rect } from "@shopify/react-native-skia"

const STATUS = ['transparent', THEME.COLORS.BRAND_LIGHT, THEME.COLORS.DANGER_LIGHT]

type Props = {
    status: number
}

export function OverlayFeeback({status} : Props){
    const {width, height} = useWindowDimensions()

    const color = STATUS[status]

    return(
        <Animated.View style={{width, height, position: 'absolute'}}>
            <Canvas style={{flex: 1}}>
                <Rect 
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    color={color}
                >
                    <BlurMask blur={50} style="inner"/>
                </Rect>
            </Canvas>
        </Animated.View>
    )
}