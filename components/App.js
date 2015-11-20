import React            from "react";
import {COLORS, MIXINS} from "../STYLES";

const STYLE = {
    container: {
        ...MIXINS.pickAbsolute(0, 0, 0, 0),
        backgroundColor: COLORS.slate,
    },

    content: {
        ...MIXINS.centeredBox({width: 440, height: 550}),
    },

    title: {
        ...MIXINS.font(32),
        marginBottom: 40,
        fontWeight: 800,
        textAlign: "center",
        color: COLORS.cream,
    },

    line: {
        ...MIXINS.font(20, 30, "Gentium Book Basic"),
        fontWeight: 400,
        color: COLORS.lightteal,
    },
};

const POEM = [
    "I met a traveller from an antique land",
    "Who said: “Two vast and trunkless legs of stone",
    "Stand in the desert... Near them, on the sand,",
    "Half sunk, a shattered visage lies, whose frown,",
    "And wrinkled lip, and sneer of cold command,",
    "Tell that its sculptor well those passions read",
    "Which yet survive, stamped on these lifeless things,",
    "The hand that mocked them, and the heart that fed:",
    "And on the pedestal these words appear:",
    "‘My name is Ozymandias, king of kings:",
    "Look on my works, ye Mighty, and despair!’",
    "Nothing beside remains. Round the decay",
    "Of that colossal wreck, boundless and bare",
    "The lone and level sands stretch far away.”",
];

const renderLine = (line) => {
    return <div style={STYLE.line}>{line}</div>;
}

export default class App extends React.Component {
    render() {
        return (
            <div style={STYLE.container}>
                <div style={STYLE.content}>
                    <div style={STYLE.title}>OZYMANDIAS</div>
                    <div style={STYLE.poem}>{POEM.map(renderLine)}</div>
                </div>
            </div>
        )
    }
};
