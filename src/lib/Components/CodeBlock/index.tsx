import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import prettier from "prettier/standalone";
import parserBabel from 'prettier/parser-babel';
import ContentPasteTwoToneIcon from '@mui/icons-material/ContentPasteTwoTone';
// import parserBabel from "prettier/plugins/babel";
import { Typography, Color, GuideBox, Button } from "../..";
	
interface CodeComponentProps {
	/**
	 * The code to be displayed
	 * @default ""
	 */
	children: string;
	/**
	 * The language of the code
	 * @default "javascript"
	 */
	language: string;
	/**
	 * The title of the code
	 * @default ""
	 */
	title?:string;
	/**
	 * Whether to hide the title
	 * 
	 * @default false
	 */
	hideTitle?: boolean;
	/**
	 * The radius of the code block
	 * 
	 * @default 8
	 */
	radius?: number;
	/**
	 * The width of the code block
	 * 
	 * @default "100%"
	 */
	width?: number | string;
	/**
	 * The background color of the code block
	 */
	backgroundColor?: string;

	/**
	 * The padding of the code block
	 */
	titlePadding?: number | string;
	/**
	 * The padding X of the code block
	 */
	titlePaddingX?: number | string;
	/**
	 * The padding Y of the code block
	 */
	titlePaddingY?: number | string;

	/**
	 * The padding of the code block
	 */
	codePadding?: number | string;
	/**
	 * The padding X of the code block
	 */
	codePaddingX?: number | string;
	/**
	 * The padding Y of the code block
	 */
	codePaddingY?: number | string;
};

CodeBlock.defaultProps = {
	children: "",
	language: "javascript",
	title: "",
	hideTitle: false,
	radius: 8,
	width: "100%",
}

const combinePadding = (
	padding: number | string | undefined, 
	paddingX: number | string | undefined,
	paddingY: number | string | undefined
) => {
	if (typeof padding === "number") padding = `${padding * 8}px`;
	if (typeof paddingX === "number") paddingX = `${paddingX * 8}px`;
	if (typeof paddingY === "number") paddingY = `${paddingY * 8}px`;

	if (padding !== undefined) return padding;
	if (paddingX !== undefined && paddingY !== undefined) return `${paddingY} ${paddingX}`;
	if (paddingX !== undefined) return `0.5rem ${paddingX}`;
	if (paddingY !== undefined) return `${paddingY} 0.5rem`;
	return "0.5rem";
}

/**
 * A code block with syntax highlighting
 * 
 * @param props  - The props of the component (children, language, title)
 * @returns A code block with syntax highlighting
 */
function CodeBlock(props: CodeComponentProps){
	const [copySuccess, setCopySuccess] = React.useState(false);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setCopySuccess(false);
		}, 1500);
		return () => clearTimeout(timer);
	}, [copySuccess]);

  const [formattedCode, setFormattedCode] = React.useState<any>(props.children);

  React.useEffect(() => {
    const formatCode = async () => {
      try {
        const result = await prettier.format(props.children, {
					parser: "babel",
					plugins: [parserBabel],
					useTabs: true,
					semi: true,
					singleQuote: true,
					trailingComma: "all",
					jsxSingleQuote: true,
					jsxBracketSameLine: true,
					printWidth: 120,
        });
        setFormattedCode(result);
      } catch (error) {
        console.error("Error formatting code:", error);
      }
    };

    formatCode();
  }, [props.children]);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(formattedCode);
			setCopySuccess(true);
		} catch (err) {
			console.error('Async: Could not copy text: ', err);
		}
	}

	return (
		<Box width={props.width}>
			{!props.hideTitle &&
				<GuideBox
					show
					fill={Color.primaryNegative.enable}
					width="100%"
					row
					horSpaceBetween
					verCenter
					padding={combinePadding(props.titlePadding, props.titlePaddingX, props.titlePaddingY)}
					borderRadius={`${props.radius}px ${props.radius}px 0 0`}
				>
					<Typography 
						color={Color.primaryNegative.white} 
						variant="h1"
						paddingLeft='11px'
					>
						{props.title}
					</Typography>
					{
						copySuccess ? 
							<Button variant="text" disabled>copied</Button> :
								<Button variant="text" onClick={copyToClipboard}>copy</Button>
					}
				</GuideBox>
			}
			<SyntaxHighlighter
				showLineNumbers
				style={vscDarkPlus}
				wrapLines={true}
				customStyle={{
					borderBottomRightRadius: props.radius,
					borderBottomLeftRadius: props.radius,
					fontSize: "3px",
					margin: 0,
					width: '100%',
					// minHeight: "100px",
					...(props.backgroundColor !== undefined && { backgroundColor: props.backgroundColor }),
					boxSizing: "border-box",
					padding: combinePadding(props.codePadding, props.codePaddingX, props.codePaddingY),
				}}
				{...props}
			>
				{formattedCode}
			</SyntaxHighlighter>
		</Box>
	);
}

export default CodeBlock;
