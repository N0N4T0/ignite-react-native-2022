import { useWindowDimensions } from "react-native"
import { THEME } from "../../styles/theme"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated"
import { BlurMask, Canvas, Rect } from "@shopify/react-native-skia"
import { useEffect } from "react"

const STATUS = ['transparent', THEME.COLORS.BRAND_LIGHT, THEME.COLORS.DANGER_LIGHT]

type Props = {
    status: number
}

export function OverlayFeeback({status} : Props){
    const opacity = useSharedValue(0)
    const {width, height} = useWindowDimensions()

    const styledAnimated = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    })

    const color = STATUS[status]

    useEffect(() => {
        opacity.value = withSequence(
            withTiming(1, {duration: 400, easing: Easing.bounce}),
            withTiming(0)
        )
    }, [status])

    return(
        <Animated.View style={[{width, height, position: 'absolute'}, styledAnimated]}>
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