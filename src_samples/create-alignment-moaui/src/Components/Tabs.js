import * as React from "react";
import MoaTabGroup from "@midasit-dev/moaui/Components/TabGroup";
import MoaTab from "@midasit-dev/moaui/Components/Tab";
import MoaStack from "@midasit-dev/moaui/Components/Stack";
import MoaSeparator from "@midasit-dev/moaui/Components/Separator";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <MoaStack>{children}</MoaStack>}
		</div>
	);
}

export default function VerticalTabs(
	value,
	setValue,
	DataGridAlign,
	DataGridSegm
) {
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<MoaStack direction="row" height="100%">
			<MoaStack width="100px">
				<MoaTabGroup
					orientation="vertical"
					value={value}
					onChange={(e, v) => handleChange(e, v)}
				>
					<MoaTab label="Alignments" value={0} />
					<MoaTab label="Segments" value={1} />
				</MoaTabGroup>
			</MoaStack>
			<MoaSeparator />
			<TabPanel value={value} index={0}>
				{DataGridAlign}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{DataGridSegm}
			</TabPanel>
		</MoaStack>
	);
}
