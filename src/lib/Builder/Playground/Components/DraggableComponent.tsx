import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Components/ItemTypes';
import { GuideBox } from '../../..';

const CustomStyled = (isDragging: boolean) => {
	return {
		width: '100%',
		cursor: 'grab',
		opacity: isDragging ? 0.5 : 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'left',
		padding: '10px 0px 10px 10px',
		borderBottom: '1px solid #e9e9e9',
		color: isDragging ? '#000080' : '#000000',
		background: isDragging ? '#e9e9e9' : '#ffffff',
	}
}

const CustomDraggableComponent = (props: any) => {
	const itemType = props.itemType || "Invalid";

	const [{ isDragging }, drag] = useDrag({
    type: itemType,
		item: { type: itemType },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

	return (
		<div 
			draggable={true}
			onDragStart={(e) => {e.dataTransfer.setData("type", itemType)}}
			ref={drag}
			style={CustomStyled(isDragging)}
		>
			{props.children}
		</div>
	)
}

const VerifyDialogCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="super" fill='2' itemCenter itemSpacing={0}>
			<div style={{ 
				width: 200, 
				height: 30, 
				display: 'flex', 
				justifyContent: 'center', 
				alignItems: 'center',
				margin: '15 0 10 0',
			}}>
				<h4>AUTHENTICATION</h4>
			</div>
			<div style={{ 
				width: 200, 
				height: 10,
				borderTop: '1px solid #bdbebd',
				background: 'linear-gradient(#e9e9e9, #fff)',
				marginBottom: '5px'
			}} />
		</GuideBox>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>VerifyDialog</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.VerifyDialogDefault}>Default</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const ButtonCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="super" fill='2' itemCenter itemSpacing={0}>
			<div style={{ 
				width: 200, 
				height: 30, 
				display: 'flex', 
				justifyContent: 'center', 
				alignItems: 'center',
				margin: '15 0 10 0',
			}}>
				<h4>COMPONENTS</h4>
			</div>
			<div style={{ 
				width: 200, 
				height: 10,
				borderTop: '1px solid #bdbebd',
				background: 'linear-gradient(#e9e9e9, #fff)',
				marginBottom: '5px'
			}} />
		</GuideBox>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Button</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.ButtonComposite}>Composite</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ButtonContained}>Contained</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ButtonNegative}>Negative</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ButtonNormal}>Normal</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ButtonOutlined}>Outlined</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ButtonText}>Text</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ButtonWidth}>Width</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const ChartLineCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>ChartLine</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.ChartLineAxisLegend}>AxisLegend</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ChartLineAxisPointSize}>AxisPointSize</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ChartLineAxisTopRight}>AxisTopRight</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const CheckCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Check</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.CheckNotRequired}>NotRequired</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.CheckRequired}>Required</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const CheckGroupCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>CheckGroup</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.CheckGroupStateful}>Stateful</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.CheckGroupUnControlled}>UnControlled</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const CodeBlockCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>CodeBlock</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.CodeBlockJavascript}>Javascript</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.CodeBlockTypescript}>Typescript</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const DataGridCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>DataGrid</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.DataGridPagination}>Pagination</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const DialogCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Dialog</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.DialogHelpButton}>HelpButton</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.DialogHelpIconButton}>HelpIconButton</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const DropListCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>DropList</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.DropListDropdown}>Dropdown</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const GridCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Grid</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.GridColumn}>Column</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.GridItems}>Items</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.GridRow}>Row</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const GuideBoxCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>GuideBox</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.GuideBoxBasic300x300}>Basic300x300</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.GuideBoxLayout1}>Layout1</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.GuideBoxLayout2}>Layout2</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.GuideBoxLayout3}>Layout3</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.GuideBoxLayout4}>Layout4</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.GuideBoxRowDirection}>RowDirection</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const IconCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Icon</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.IconAdd}>Add</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.IconClose}>Close</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const IconButtonCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>IconButton</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.IconButtonAdd}>Add</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.IconButtonClose}>Close</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.IconButtonWithName}>WithName</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const ListCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>List</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.ListControlled}>Controlled</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ListDynamic}>Dynamic</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ListTypographyRadio}>TypographyRadio</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ListUnControlled}>UnControlled</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const ListItemCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>ListItem</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.ListItemDefault}>Default</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const ListItemButtonCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>ListItemButton</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.ListItemButtonDefault}>Default</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const PanelCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Panel</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.PanelBox}>Box</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.PanelShadow}>Shadow</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.PanelStrock}>Strock</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.PanelTypographyDropList}>TypographyDropList</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.PanelTypographyTextField}>TypographyTextField</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const RadioCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Radio</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.RadioName}>Name</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const RadioGroupCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>RadioGroup</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.RadioGroupControlled}>Controlled</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.RadioGroupUnControlled}>UnControlled</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const ScrollbarsCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Scrollbars</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.ScrollbarsCheckGroup}>CheckGroup</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.ScrollbarsList}>List</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const SeperatorCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Seperator</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.SeperatorHorizontal}>Horizontal</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.SeperatorVertical}>Vertical</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const StackCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Stack</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.StackColumn}>Column</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.StackRow}>Row</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const SwitchCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Switch</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.SwitchLabel}>Label</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const SwitchGroupCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>SwitchGroup</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.SwitchGroupControlled}>Controlled</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.SwitchGroupUnControlled}>UnControlled</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const TabCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Tab</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.TabLabel}>Label</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const TabGroupCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>TabGroup</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.TabGroupHorizontal}>Horizontal</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TabGroupVertical}>Vertical</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TabGroupWithDataGrid}>WithDataGrid</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TabGroupWithTable}>WithTable</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const TableCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Table</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.TableBody}>Body</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TableBundle}>Bundle</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TableCell}>Cell</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TableHeader}>Header</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TableRow}>Row</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TableWithTitle}>WithTitle</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const TextFieldCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>TextField</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.TextFieldError}>Error</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TextFieldLabel}>Label</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TextFieldLeft}>Left</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TextFieldRight}>Right</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const TypographyCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>Typography</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.TypographyBody1}>Body1</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TypographyBody2}>Body2</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TypographyBody3}>Body3</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TypographyH1}>H1</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const TypographyGroupCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>TypographyGroup</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.TypographyGroupText}>Text</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const DualComponentsCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="super" fill='2' itemCenter itemSpacing={0}>
			<div style={{ 
				width: 200, 
				height: 30, 
				display: 'flex', 
				justifyContent: 'center', 
				alignItems: 'center',
				margin: '15 0 10 0',
			}}>
				<h4>TEMPLATES</h4>
			</div>
			<div style={{ 
				width: 200, 
				height: 10,
				borderTop: '1px solid #bdbebd',
				background: 'linear-gradient(#e9e9e9, #fff)',
				marginBottom: '5px'
			}} />
		</GuideBox>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>DualComponents</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.DualComponentsTypographyDropListSpaceBetween}>TypographyDropListSpaceBetween</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.DualComponentsTypographyTextFieldSpaceBetween}>TypographyTextFieldSpaceBetween</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);

const TendonProfileConverterCategory: React.FC<{}> = () => (
	<GuideBox show={false} tag="outline" fill='1' itemSpacing={1}>
		<GuideBox show={false} tag="title" fill='2'>
			<div style={{
				marginTop: '5px',
				marginLeft: '5px'
			}}>
				<h4>TendonProfileConverter</h4>
			</div>
		</GuideBox>
		<GuideBox show={false} tag="contents" fill='2' itemDirection="row" itemSpacing={0}>
			<div style={{
				marginBottom: '30px',
				width: '188px',
			}}>
				<CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterBottomButtons}>BottomButtons</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterComposite}>Composite</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterHelpIconButton}>HelpIconButton</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterList}>List</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterSelectButton}>SelectButton</CustomDraggableComponent>
				<CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterUpdateButton}>UpdateButton</CustomDraggableComponent>
			</div>
		</GuideBox>
	</GuideBox>
);


export const VerifyDialogDefault = 
	() => <CustomDraggableComponent itemType={ItemTypes.VerifyDialogDefault}>VerifyDialogDefault</CustomDraggableComponent>;

export const ButtonComposite = 
	() => <CustomDraggableComponent itemType={ItemTypes.ButtonComposite}>ButtonComposite</CustomDraggableComponent>;

export const ButtonContained = 
	() => <CustomDraggableComponent itemType={ItemTypes.ButtonContained}>ButtonContained</CustomDraggableComponent>;

export const ButtonNegative = 
	() => <CustomDraggableComponent itemType={ItemTypes.ButtonNegative}>ButtonNegative</CustomDraggableComponent>;

export const ButtonNormal = 
	() => <CustomDraggableComponent itemType={ItemTypes.ButtonNormal}>ButtonNormal</CustomDraggableComponent>;

export const ButtonOutlined = 
	() => <CustomDraggableComponent itemType={ItemTypes.ButtonOutlined}>ButtonOutlined</CustomDraggableComponent>;

export const ButtonText = 
	() => <CustomDraggableComponent itemType={ItemTypes.ButtonText}>ButtonText</CustomDraggableComponent>;

export const ButtonWidth = 
	() => <CustomDraggableComponent itemType={ItemTypes.ButtonWidth}>ButtonWidth</CustomDraggableComponent>;

export const ChartLineAxisLegend = 
	() => <CustomDraggableComponent itemType={ItemTypes.ChartLineAxisLegend}>ChartLineAxisLegend</CustomDraggableComponent>;

export const ChartLineAxisPointSize = 
	() => <CustomDraggableComponent itemType={ItemTypes.ChartLineAxisPointSize}>ChartLineAxisPointSize</CustomDraggableComponent>;

export const ChartLineAxisTopRight = 
	() => <CustomDraggableComponent itemType={ItemTypes.ChartLineAxisTopRight}>ChartLineAxisTopRight</CustomDraggableComponent>;

export const CheckNotRequired = 
	() => <CustomDraggableComponent itemType={ItemTypes.CheckNotRequired}>CheckNotRequired</CustomDraggableComponent>;

export const CheckRequired = 
	() => <CustomDraggableComponent itemType={ItemTypes.CheckRequired}>CheckRequired</CustomDraggableComponent>;

export const CheckGroupStateful = 
	() => <CustomDraggableComponent itemType={ItemTypes.CheckGroupStateful}>CheckGroupStateful</CustomDraggableComponent>;

export const CheckGroupUnControlled = 
	() => <CustomDraggableComponent itemType={ItemTypes.CheckGroupUnControlled}>CheckGroupUnControlled</CustomDraggableComponent>;

export const CodeBlockJavascript = 
	() => <CustomDraggableComponent itemType={ItemTypes.CodeBlockJavascript}>CodeBlockJavascript</CustomDraggableComponent>;

export const CodeBlockTypescript = 
	() => <CustomDraggableComponent itemType={ItemTypes.CodeBlockTypescript}>CodeBlockTypescript</CustomDraggableComponent>;

export const DataGridPagination = 
	() => <CustomDraggableComponent itemType={ItemTypes.DataGridPagination}>DataGridPagination</CustomDraggableComponent>;

export const DialogHelpButton = 
	() => <CustomDraggableComponent itemType={ItemTypes.DialogHelpButton}>DialogHelpButton</CustomDraggableComponent>;

export const DialogHelpIconButton = 
	() => <CustomDraggableComponent itemType={ItemTypes.DialogHelpIconButton}>DialogHelpIconButton</CustomDraggableComponent>;

export const DropListDropdown = 
	() => <CustomDraggableComponent itemType={ItemTypes.DropListDropdown}>DropListDropdown</CustomDraggableComponent>;

export const GridColumn = 
	() => <CustomDraggableComponent itemType={ItemTypes.GridColumn}>GridColumn</CustomDraggableComponent>;

export const GridItems = 
	() => <CustomDraggableComponent itemType={ItemTypes.GridItems}>GridItems</CustomDraggableComponent>;

export const GridRow = 
	() => <CustomDraggableComponent itemType={ItemTypes.GridRow}>GridRow</CustomDraggableComponent>;

export const GuideBoxBasic300x300 = 
	() => <CustomDraggableComponent itemType={ItemTypes.GuideBoxBasic300x300}>GuideBoxBasic300x300</CustomDraggableComponent>;

export const GuideBoxLayout1 = 
	() => <CustomDraggableComponent itemType={ItemTypes.GuideBoxLayout1}>GuideBoxLayout1</CustomDraggableComponent>;

export const GuideBoxLayout2 = 
	() => <CustomDraggableComponent itemType={ItemTypes.GuideBoxLayout2}>GuideBoxLayout2</CustomDraggableComponent>;

export const GuideBoxLayout3 = 
	() => <CustomDraggableComponent itemType={ItemTypes.GuideBoxLayout3}>GuideBoxLayout3</CustomDraggableComponent>;

export const GuideBoxLayout4 = 
	() => <CustomDraggableComponent itemType={ItemTypes.GuideBoxLayout4}>GuideBoxLayout4</CustomDraggableComponent>;

export const GuideBoxRowDirection = 
	() => <CustomDraggableComponent itemType={ItemTypes.GuideBoxRowDirection}>GuideBoxRowDirection</CustomDraggableComponent>;

export const IconAdd = 
	() => <CustomDraggableComponent itemType={ItemTypes.IconAdd}>IconAdd</CustomDraggableComponent>;

export const IconClose = 
	() => <CustomDraggableComponent itemType={ItemTypes.IconClose}>IconClose</CustomDraggableComponent>;

export const IconButtonAdd = 
	() => <CustomDraggableComponent itemType={ItemTypes.IconButtonAdd}>IconButtonAdd</CustomDraggableComponent>;

export const IconButtonClose = 
	() => <CustomDraggableComponent itemType={ItemTypes.IconButtonClose}>IconButtonClose</CustomDraggableComponent>;

export const IconButtonWithName = 
	() => <CustomDraggableComponent itemType={ItemTypes.IconButtonWithName}>IconButtonWithName</CustomDraggableComponent>;

export const ListControlled = 
	() => <CustomDraggableComponent itemType={ItemTypes.ListControlled}>ListControlled</CustomDraggableComponent>;

export const ListDynamic = 
	() => <CustomDraggableComponent itemType={ItemTypes.ListDynamic}>ListDynamic</CustomDraggableComponent>;

export const ListTypographyRadio = 
	() => <CustomDraggableComponent itemType={ItemTypes.ListTypographyRadio}>ListTypographyRadio</CustomDraggableComponent>;

export const ListUnControlled = 
	() => <CustomDraggableComponent itemType={ItemTypes.ListUnControlled}>ListUnControlled</CustomDraggableComponent>;

export const ListItemDefault = 
	() => <CustomDraggableComponent itemType={ItemTypes.ListItemDefault}>ListItemDefault</CustomDraggableComponent>;

export const ListItemButtonDefault = 
	() => <CustomDraggableComponent itemType={ItemTypes.ListItemButtonDefault}>ListItemButtonDefault</CustomDraggableComponent>;

export const PanelBox = 
	() => <CustomDraggableComponent itemType={ItemTypes.PanelBox}>PanelBox</CustomDraggableComponent>;

export const PanelShadow = 
	() => <CustomDraggableComponent itemType={ItemTypes.PanelShadow}>PanelShadow</CustomDraggableComponent>;

export const PanelStrock = 
	() => <CustomDraggableComponent itemType={ItemTypes.PanelStrock}>PanelStrock</CustomDraggableComponent>;

export const PanelTypographyDropList = 
	() => <CustomDraggableComponent itemType={ItemTypes.PanelTypographyDropList}>PanelTypographyDropList</CustomDraggableComponent>;

export const PanelTypographyTextField = 
	() => <CustomDraggableComponent itemType={ItemTypes.PanelTypographyTextField}>PanelTypographyTextField</CustomDraggableComponent>;

export const RadioName = 
	() => <CustomDraggableComponent itemType={ItemTypes.RadioName}>RadioName</CustomDraggableComponent>;

export const RadioGroupControlled = 
	() => <CustomDraggableComponent itemType={ItemTypes.RadioGroupControlled}>RadioGroupControlled</CustomDraggableComponent>;

export const RadioGroupUnControlled = 
	() => <CustomDraggableComponent itemType={ItemTypes.RadioGroupUnControlled}>RadioGroupUnControlled</CustomDraggableComponent>;

export const ScrollbarsCheckGroup = 
	() => <CustomDraggableComponent itemType={ItemTypes.ScrollbarsCheckGroup}>ScrollbarsCheckGroup</CustomDraggableComponent>;

export const ScrollbarsList = 
	() => <CustomDraggableComponent itemType={ItemTypes.ScrollbarsList}>ScrollbarsList</CustomDraggableComponent>;

export const SeperatorHorizontal = 
	() => <CustomDraggableComponent itemType={ItemTypes.SeperatorHorizontal}>SeperatorHorizontal</CustomDraggableComponent>;

export const SeperatorVertical = 
	() => <CustomDraggableComponent itemType={ItemTypes.SeperatorVertical}>SeperatorVertical</CustomDraggableComponent>;

export const StackColumn = 
	() => <CustomDraggableComponent itemType={ItemTypes.StackColumn}>StackColumn</CustomDraggableComponent>;

export const StackRow = 
	() => <CustomDraggableComponent itemType={ItemTypes.StackRow}>StackRow</CustomDraggableComponent>;

export const SwitchLabel = 
	() => <CustomDraggableComponent itemType={ItemTypes.SwitchLabel}>SwitchLabel</CustomDraggableComponent>;

export const SwitchGroupControlled = 
	() => <CustomDraggableComponent itemType={ItemTypes.SwitchGroupControlled}>SwitchGroupControlled</CustomDraggableComponent>;

export const SwitchGroupUnControlled = 
	() => <CustomDraggableComponent itemType={ItemTypes.SwitchGroupUnControlled}>SwitchGroupUnControlled</CustomDraggableComponent>;

export const TabLabel = 
	() => <CustomDraggableComponent itemType={ItemTypes.TabLabel}>TabLabel</CustomDraggableComponent>;

export const TabGroupHorizontal = 
	() => <CustomDraggableComponent itemType={ItemTypes.TabGroupHorizontal}>TabGroupHorizontal</CustomDraggableComponent>;

export const TabGroupVertical = 
	() => <CustomDraggableComponent itemType={ItemTypes.TabGroupVertical}>TabGroupVertical</CustomDraggableComponent>;

export const TabGroupWithDataGrid = 
	() => <CustomDraggableComponent itemType={ItemTypes.TabGroupWithDataGrid}>TabGroupWithDataGrid</CustomDraggableComponent>;

export const TabGroupWithTable = 
	() => <CustomDraggableComponent itemType={ItemTypes.TabGroupWithTable}>TabGroupWithTable</CustomDraggableComponent>;

export const TableBody = 
	() => <CustomDraggableComponent itemType={ItemTypes.TableBody}>TableBody</CustomDraggableComponent>;

export const TableBundle = 
	() => <CustomDraggableComponent itemType={ItemTypes.TableBundle}>TableBundle</CustomDraggableComponent>;

export const TableCell = 
	() => <CustomDraggableComponent itemType={ItemTypes.TableCell}>TableCell</CustomDraggableComponent>;

export const TableHeader = 
	() => <CustomDraggableComponent itemType={ItemTypes.TableHeader}>TableHeader</CustomDraggableComponent>;

export const TableRow = 
	() => <CustomDraggableComponent itemType={ItemTypes.TableRow}>TableRow</CustomDraggableComponent>;

export const TableWithTitle = 
	() => <CustomDraggableComponent itemType={ItemTypes.TableWithTitle}>TableWithTitle</CustomDraggableComponent>;

export const TextFieldError = 
	() => <CustomDraggableComponent itemType={ItemTypes.TextFieldError}>TextFieldError</CustomDraggableComponent>;

export const TextFieldLabel = 
	() => <CustomDraggableComponent itemType={ItemTypes.TextFieldLabel}>TextFieldLabel</CustomDraggableComponent>;

export const TextFieldLeft = 
	() => <CustomDraggableComponent itemType={ItemTypes.TextFieldLeft}>TextFieldLeft</CustomDraggableComponent>;

export const TextFieldRight = 
	() => <CustomDraggableComponent itemType={ItemTypes.TextFieldRight}>TextFieldRight</CustomDraggableComponent>;

export const TypographyBody1 = 
	() => <CustomDraggableComponent itemType={ItemTypes.TypographyBody1}>TypographyBody1</CustomDraggableComponent>;

export const TypographyBody2 = 
	() => <CustomDraggableComponent itemType={ItemTypes.TypographyBody2}>TypographyBody2</CustomDraggableComponent>;

export const TypographyBody3 = 
	() => <CustomDraggableComponent itemType={ItemTypes.TypographyBody3}>TypographyBody3</CustomDraggableComponent>;

export const TypographyH1 = 
	() => <CustomDraggableComponent itemType={ItemTypes.TypographyH1}>TypographyH1</CustomDraggableComponent>;

export const TypographyGroupText = 
	() => <CustomDraggableComponent itemType={ItemTypes.TypographyGroupText}>TypographyGroupText</CustomDraggableComponent>;

export const DualComponentsTypographyDropListSpaceBetween = 
	() => <CustomDraggableComponent itemType={ItemTypes.DualComponentsTypographyDropListSpaceBetween}>DualComponentsTypographyDropListSpaceBetween</CustomDraggableComponent>;

export const DualComponentsTypographyTextFieldSpaceBetween = 
	() => <CustomDraggableComponent itemType={ItemTypes.DualComponentsTypographyTextFieldSpaceBetween}>DualComponentsTypographyTextFieldSpaceBetween</CustomDraggableComponent>;

export const TendonProfileConverterBottomButtons = 
	() => <CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterBottomButtons}>TendonProfileConverterBottomButtons</CustomDraggableComponent>;

export const TendonProfileConverterComposite = 
	() => <CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterComposite}>TendonProfileConverterComposite</CustomDraggableComponent>;

export const TendonProfileConverterHelpIconButton = 
	() => <CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterHelpIconButton}>TendonProfileConverterHelpIconButton</CustomDraggableComponent>;

export const TendonProfileConverterList = 
	() => <CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterList}>TendonProfileConverterList</CustomDraggableComponent>;

export const TendonProfileConverterSelectButton = 
	() => <CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterSelectButton}>TendonProfileConverterSelectButton</CustomDraggableComponent>;

export const TendonProfileConverterUpdateButton = 
	() => <CustomDraggableComponent itemType={ItemTypes.TendonProfileConverterUpdateButton}>TendonProfileConverterUpdateButton</CustomDraggableComponent>;


const DraggableComponent: React.FC = () => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<VerifyDialogCategory />
			<ButtonCategory />
			<ChartLineCategory />
			<CheckCategory />
			<CheckGroupCategory />
			<CodeBlockCategory />
			<DataGridCategory />
			<DialogCategory />
			<DropListCategory />
			<GridCategory />
			<GuideBoxCategory />
			<IconCategory />
			<IconButtonCategory />
			<ListCategory />
			<ListItemCategory />
			<ListItemButtonCategory />
			<PanelCategory />
			<RadioCategory />
			<RadioGroupCategory />
			<ScrollbarsCategory />
			<SeperatorCategory />
			<StackCategory />
			<SwitchCategory />
			<SwitchGroupCategory />
			<TabCategory />
			<TabGroupCategory />
			<TableCategory />
			<TextFieldCategory />
			<TypographyCategory />
			<TypographyGroupCategory />
			<DualComponentsCategory />
			<TendonProfileConverterCategory />
		</div>
	);
};
	
export default DraggableComponent;
