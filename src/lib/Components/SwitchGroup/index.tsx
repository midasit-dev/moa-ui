import StyledComponent, { type StyledProps } from "./Styled";

/**
 * moaui Styled Switch (Group)
 * 
 * @param props - children, text
 * @example
 * <SwitchGroup
 * 	text="Switch Group"	
 * >
 * 	{children}
 * </SwitchGroup>
 * @returns React.ReactElement
 */
const SwitchGroup = (props: StyledProps) => (<StyledComponent {...props} />);

SwitchGroup.defaultProps = {} as StyledProps;

const SampleProps = {};

export default SwitchGroup;

export {
	type StyledProps as SwitchGroupProps,
	SampleProps as SwitchGroupSample,
}
