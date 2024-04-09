import StyledComponent, { type StyledProps, fillColor } from "./Styled";

/**
 * moaui Styled GuideBox
 * 
 * @param props - children, tag, show, width, height, fill, column, row, rowReverse, columnReverse, spacing, center, horLeft, horCenter, horRight, horSpaceBetween, verTop, verCenter, verBottom, verSpaceBetween, duration, pulse, loading, overflow, borderRadius, border, flexGrow, onKeyDown
 * @example
 * <GuideBox show={true} width={100} height={100} fill='1' /> 
 * @returns React.ReactElement
 */
const GuideBox = (props: StyledProps) => (<StyledComponent {...props} />);

GuideBox.defaultProps = {
	show: false,
	width: 'auto',
	height: 'auto',
	fill: '1',
	opacity: 1,
	duration: 1,
} as StyledProps;

const SampleProps = {};

export default GuideBox;

export { 
	type StyledProps as GuideBoxProps,
	SampleProps as GuideBoxSample,

	fillColor as GuideBoxFillColor,
};