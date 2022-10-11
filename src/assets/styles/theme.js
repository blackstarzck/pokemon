import styled, { css } from "styled-components"

const colors = {
    normal:     "#444444",
    gray1:      "#F8F8F8",
    gray2:      "#e0e0e0",
    gray3:      "#C6C6C6",
    gray4:      "#858585",
    expRed:     "#FF4D4D",
    expGreen:   "#77FF74",
    primary:    "#0085FF"
}

const font = {
    mainTitle:  "2.875rem",
    subTitle1:  "2.25rem",
    subTitle2:  "1.625rem",
    descr:       "0.875rem",
    mainName:   "1.375rem",
    subName:    "2.25rem",
}

const button = {
    inactive:   "#F1F1F1",
    active:     "#0085FF"
}

const boxShadow = {
    type1:      "2px 7px 10px 0 rgba(0, 0, 0, .1)",
    type2:      "0 4px 8px 0 rgba(0, 0, 0, .25)",
}

const symbols = {
    bug:        "#1DE9B6",
    dragon:     "#FF9100",
    Fairy:      "#C6FF00",
    fire:       "#FF3D00",
    ghost:      "#D500F9",
    ground:     "#4E342E",
    normal:     "#ECECEC",
    psychic:    "#F50057",
    steel:      "#37474F",
    dark:       "#424242",
    electric:   "#FFEA00",
    fighting:   "#8D6E63",
    flying:     "#00B0FF",
    grass:      "#00E676",
    ice:        "#84FFFF",
    poison:     "#651FFF",
    rock:       "#938E8E",
    water:      "#2979FF"
}

const theme = { colors, font, button, boxShadow, symbols }

export default theme;