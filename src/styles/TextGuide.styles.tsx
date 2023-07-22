import styled, { css } from "styled-components";

const baseTextStyle = css`
    font-family: "Noto Sans KR";
    font-style: normal;
`;

const sizes = {
    20: css`
        font-size: 20px;
        line-height: 20px;
    `,
    18: css`
        font-size: 18px;
        line-height: 26px;
    `,
    16: css`
        font-size: 16px;
        line-height: 23px;
    `,
    14: css`
        font-size: 14px;
        line-height: 20px;
    `,
    13: css`
        font-size: 13px;
        line-height: 19px;
    `,
    12: css`
        font-size: 12px;
        line-height: 18px;
    `,
    10: css`
        font-size: 10px;
        line-height: 16px;
    `,
};

interface TextComponentProps {
    size?: keyof typeof sizes;
    fontWeight?: number;
    color?: string;
}

const Text = styled.p<TextComponentProps>`
    ${baseTextStyle}
    ${({ size }) => size && sizes[size]}
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color ?? "var(--brand-primary-darknavy)"};
`;

export const H1 = styled(Text).attrs({ size: 20, fontWeight: 700 })``;
export const H2 = styled(Text).attrs({ size: 20, fontWeight: 400 })``;
export const H3 = styled(Text).attrs({ size: 18, fontWeight: 700 })``;
export const H4 = styled(Text).attrs({ size: 18, fontWeight: 400 })``;
export const Subtitle1 = styled(Text).attrs({ size: 16, fontWeight: 700 })``;
export const Subtitle2 = styled(Text).attrs({ size: 16, fontWeight: 400 })``;
export const Subtitle3 = styled(Text).attrs({ size: 14, fontWeight: 400 })``;
export const Body1 = styled(Text).attrs({ size: 14, fontWeight: 700 })``;
export const Body2 = styled(Text).attrs({ size: 14, fontWeight: 400 })``;
export const Body3 = styled(Text).attrs({ size: 13, fontWeight: 700 })``;
export const Body4 = styled(Text).attrs({ size: 13, fontWeight: 400 })``;
export const Menu1 = styled(Text).attrs({ size: 10, fontWeight: 700 })``;
export const Menu2 = styled(Text).attrs({ size: 10, fontWeight: 400 })``;
