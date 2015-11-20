export const COLORS = {
    red: "#DC3522",
    cream: "#D9CB9E",
    teal: "#374140",
    slate: "#2A2C2B",
    black: "#1E1E20",
};

export const MIXINS = {
    pickAbsolute(top, right, bottom, left) {
        return {
            position: "absolute",
            top: top != undefined ? top : null,
            right: right != undefined ? right : null,
            bottom: bottom != undefined ? bottom : null,
            left: left != undefined ? left : null,
        };
    },

    centeredBox({width, height}={}) {
        return {
            position: "absolute",
            top: "50%",
            left: "50%",
            height: height,
            width: width,
            marginTop: `-${height/2}px`,
            marginLeft: `-${width/2}px`,
        }
    },

    font(size, lineHeight, family) {
        return {
            fontSize: size,
            lineHeight: lineHeight != undefined ? `${lineHeight}px` : `${size * 1.5}px`,
            fontFamily: family != undefined ? family : "Open Sans",
        }
    },
};
