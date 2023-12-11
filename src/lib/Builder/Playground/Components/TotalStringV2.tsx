import React from "react";
import { TemplateWidth, TemplateHeight, CodeString, RowCount, ColumnCount, LayoutsInfo } from '../recoil/PlaygroundAtom';
import { useRecoilValue } from 'recoil';
import CodeComponent from "../../../Components/CodeBlock";
import DraggedComponent from "./DraggedComponent";
import ButtonCode from "../../../Components/Button/Code/Contained.code.tsx?raw";
// import TextfieldCode from "./Textfield.txt?raw";
import { ItemTypes } from './ItemTypes';
import CodeExtractor from "../../../Common/Storybook/CodeExtractor";
import * as All from "./DraggedComponentRawCode";

function extractComponentCode(str:string){
	const code = CodeExtractor.extract(str);
	return code.functionalComponentCode;
}

function extractComponentName(str:string){
	const code = CodeExtractor.extract(str);
	return `<${code.functionalComponentName} />`;
}

function extractComponentImport(str:string){
	const code = CodeExtractor.extract(str);
	return code.importCodes[0];
}

export default function TotalCodeString(){
	const Sizewidth = useRecoilValue(TemplateWidth);
	const Sizeheight = useRecoilValue(TemplateHeight);
	const Codestring = useRecoilValue(CodeString);
	const Rowcount = useRecoilValue(RowCount);
	const Columncount = useRecoilValue(ColumnCount);
	const Layoutsinfo = useRecoilValue(LayoutsInfo);

	function makeImportlist() : string {
		let importlist : string[] = Layoutsinfo.map((value: any) => {
			let extractCode : string = "";
			if(value.type === ItemTypes.ButtonContained || value.type === ItemTypes.ButtonComposite || value.type === ItemTypes.ButtonNegative || value.type === ItemTypes.ButtonNormal || value.type === ItemTypes.ButtonOutlined || value.type === ItemTypes.ButtonText || value.type === ItemTypes.ButtonWidth)
				extractCode += extractComponentImport(All.ButtonContained);
			else if(value.type === ItemTypes.CheckNotRequired || value.type === ItemTypes.CheckRequired || value.type === ItemTypes.CheckGroupControlled || value.type === ItemTypes.CheckGroupUnControlled)
				extractCode += extractComponentImport(All.CheckNotRequired);
			else if(value.type === ItemTypes.DataGridPagination)
				extractCode += extractComponentImport(All.DataGridPagination);
			else if(value.type === ItemTypes.DialogHelpButton || value.type === ItemTypes.DialogHelpIconButton)
				extractCode += extractComponentImport(All.DialogHelpButton);
			else if(value.type === ItemTypes.DropListDropdown)
				extractCode += extractComponentImport(All.DropListDropdown);
			else if(value.type === ItemTypes.GridColumn || value.type === ItemTypes.GridItems || value.type === ItemTypes.GridRow)
				extractCode += extractComponentImport(All.GridColumn);
			else if(value.type === ItemTypes.IconAdd || value.type === ItemTypes.IconClose)
				extractCode += extractComponentImport(All.IconAdd);
			else if(value.type === ItemTypes.IconButtonAdd || value.type === ItemTypes.IconButtonClose)
				extractCode += extractComponentImport(All.IconButtonAdd);
			else if(value.type === ItemTypes.ListControlled || value.type === ItemTypes.ListDynamic || value.type === ItemTypes.ListUnControlled)
				extractCode += extractComponentImport(All.ListControlled);
			else if(value.type === ItemTypes.ListItemDefault)
				extractCode += extractComponentImport(All.ListItemDefault);
			else if(value.type === ItemTypes.ListItemButtonDefault)
				extractCode += extractComponentImport(All.ListItemButtonDefault);
			else if(value.type === ItemTypes.PanelBox || value.type === ItemTypes.PanelShadow || value.type === ItemTypes.PanelStrock)
				extractCode += extractComponentImport(All.PanelBox);
			else if(value.type === ItemTypes.RadioName)
				extractCode += extractComponentImport(All.RadioName);
			else if(value.type === ItemTypes.RadioGroupControlled || value.type === ItemTypes.RadioGroupUnControlled)
				extractCode += extractComponentImport(All.RadioGroupControlled);
			else if(value.type === ItemTypes.ScrollbarsCheckGroup || value.type === ItemTypes.ScrollbarsList)
				extractCode += extractComponentImport(All.ScrollbarsCheckGroup);
			else if(value.type === ItemTypes.SeperatorHorizontal || value.type === ItemTypes.SeperatorVertical)
				extractCode += extractComponentImport(All.SeperatorHorizontal);
			else if(value.type === ItemTypes.StackColumn || value.type === ItemTypes.StackRow)
				extractCode += extractComponentImport(All.StackColumn);
			else if(value.type === ItemTypes.SwitchLabel)
				extractCode += extractComponentImport(All.SwitchLabel);
			else if(value.type === ItemTypes.SwitchGroupControlled || value.type === ItemTypes.SwitchGroupUnControlled)
				extractCode += extractComponentImport(All.SwitchGroupControlled);
			else if(value.type === ItemTypes.TabLabel)
				extractCode += extractComponentImport(All.TabLabel);
			else if(value.type === ItemTypes.TabGroupHorizontal || value.type === ItemTypes.TabGroupVertical)
				extractCode += extractComponentImport(All.TabGroupHorizontal);
			else if(value.type === ItemTypes.TableBody || value.type === ItemTypes.TableBundle)
				extractCode += extractComponentImport(All.TableBody);
			else if(value.type === ItemTypes.TableCell || value.type === ItemTypes.TableHeader || value.type === ItemTypes.TableRow)
				extractCode += extractComponentImport(All.TableCell);
			else if(value.type === ItemTypes.TextFieldError || value.type === ItemTypes.TextFieldLabel || value.type === ItemTypes.TextFieldLeft || value.type === ItemTypes.TextFieldRight)
				extractCode += extractComponentImport(All.TextFieldError);
			else if(value.type === ItemTypes.TypographyBody1 || value.type === ItemTypes.TypographyBody2 || value.type === ItemTypes.TypographyBody3 || value.type === ItemTypes.TypographyH1 || value.type === ItemTypes.TypographyGroupText)
				extractCode += extractComponentImport(All.TypographyBody1);
			else if(value.type === ItemTypes.TendonProfileConverterBottomButtons || value.type === ItemTypes.TendonProfileConverterComposite || value.type === ItemTypes.TendonProfileConverterHelpIconButton || value.type === ItemTypes.TendonProfileConverterList || value.type === ItemTypes.TendonProfileConverterSelectButton || value.type === ItemTypes.TendonProfileConverterUpdateButton)
				extractCode += extractComponentImport(All.TendonProfileConverterBottomButtons);

			extractCode = extractCode.replace(/import { /ig, "");
			extractCode = extractCode.replace(/ } from "@midasit-dev\/moaui";/ig, "");
			return extractCode;
		});
		//console.log("Import List : ", importlist); // ex) ["button", "button"]
		// remove duplicate elements
		const uniqueImportList: string[] = Array.from(new Set(importlist));
		//console.log("uniqueImportList : ", uniqueImportList); // ex) ["button"]
		const importString = `import { ${uniqueImportList.join(", ")} } from "@midasit-dev/moaui";`;
		//console.log("importString : ", importString); // ex) import { button } from "@midasit-dev/moaui";
		return importString;
	}

	const totalCode = `import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
${ makeImportlist() }

function Components(props: any) {
  function onClickExampleHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // do something
  }

${ Layoutsinfo.map((value: any) => {
	let extractCode : any = "";
	if(value.type === ItemTypes.VerifyDialogDefault)
		extractCode += extractComponentCode(All.VerifyDialogDefault);
	else if(value.type === ItemTypes.ButtonComposite)
		extractCode += extractComponentCode(All.ButtonComposite);
	else if(value.type === ItemTypes.ButtonContained)
		extractCode += extractComponentCode(All.ButtonContained);
	else if(value.type === ItemTypes.ButtonNegative)
		extractCode += extractComponentCode(All.ButtonNegative);
	else if(value.type === ItemTypes.ButtonNormal)
		extractCode += extractComponentCode(All.ButtonNormal);
	else if(value.type === ItemTypes.ButtonOutlined)
		extractCode += extractComponentCode(All.ButtonOutlined);
	else if(value.type === ItemTypes.ButtonText)
		extractCode += extractComponentCode(All.ButtonText);
	else if(value.type === ItemTypes.ButtonWidth)
		extractCode += extractComponentCode(All.ButtonWidth);
	else if(value.type === ItemTypes.ChartLineAxisLegend)
		extractCode += extractComponentCode(All.ChartLineAxisLegend);
	else if(value.type === ItemTypes.ChartLineAxisPointSize)
		extractCode += extractComponentCode(All.ChartLineAxisPointSize);
	else if(value.type === ItemTypes.ChartLineAxisTopRight)
		extractCode += extractComponentCode(All.ChartLineAxisTopRight);
	else if(value.type === ItemTypes.CheckNotRequired)
		extractCode += extractComponentCode(All.CheckNotRequired);
	else if(value.type === ItemTypes.CheckRequired)
		extractCode += extractComponentCode(All.CheckRequired);
	else if(value.type === ItemTypes.CheckGroupControlled)
		extractCode += extractComponentCode(All.CheckGroupControlled);
	else if(value.type === ItemTypes.CheckGroupUnControlled)
		extractCode += extractComponentCode(All.CheckGroupUnControlled);
	else if(value.type === ItemTypes.CodeBlockJavascript)
		extractCode += extractComponentCode(All.CodeBlockJavascript);
	else if(value.type === ItemTypes.CodeBlockTypescript)
		extractCode += extractComponentCode(All.CodeBlockTypescript);
	else if(value.type === ItemTypes.DataGridPagination)
		extractCode += extractComponentCode(All.DataGridPagination);
	else if(value.type === ItemTypes.DialogHelpButton)
		extractCode += extractComponentCode(All.DialogHelpButton);
	else if(value.type === ItemTypes.DialogHelpIconButton)
		extractCode += extractComponentCode(All.DialogHelpIconButton);
	else if(value.type === ItemTypes.DropListDropdown)
		extractCode += extractComponentCode(All.DropListDropdown);
	else if(value.type === ItemTypes.GridColumn)
		extractCode += extractComponentCode(All.GridColumn);
	else if(value.type === ItemTypes.GridItems)
		extractCode += extractComponentCode(All.GridItems);
	else if(value.type === ItemTypes.GridRow)
		extractCode += extractComponentCode(All.GridRow);
	else if(value.type === ItemTypes.IconAdd)
		extractCode += extractComponentCode(All.IconAdd);
	else if(value.type === ItemTypes.IconClose)
		extractCode += extractComponentCode(All.IconClose);
	else if(value.type === ItemTypes.IconButtonAdd)
		extractCode += extractComponentCode(All.IconButtonAdd);
	else if(value.type === ItemTypes.IconButtonClose)
		extractCode += extractComponentCode(All.IconButtonClose);
	else if(value.type === ItemTypes.ListControlled)
		extractCode += extractComponentCode(All.ListControlled);
	else if(value.type === ItemTypes.ListDynamic)
		extractCode += extractComponentCode(All.ListDynamic);
	else if(value.type === ItemTypes.ListTypographyRadio)
		extractCode += extractComponentCode(All.ListTypographyRadio);
	else if(value.type === ItemTypes.ListUnControlled)
		extractCode += extractComponentCode(All.ListUnControlled);
	else if(value.type === ItemTypes.ListItemDefault)
		extractCode += extractComponentCode(All.ListItemDefault);
	else if(value.type === ItemTypes.ListItemButtonDefault)
		extractCode += extractComponentCode(All.ListItemButtonDefault);
	else if(value.type === ItemTypes.PanelBox)
		extractCode += extractComponentCode(All.PanelBox);
	else if(value.type === ItemTypes.PanelShadow)
		extractCode += extractComponentCode(All.PanelShadow);
	else if(value.type === ItemTypes.PanelStrock)
		extractCode += extractComponentCode(All.PanelStrock);
	else if(value.type === ItemTypes.PanelTypographyDropList)
		extractCode += extractComponentCode(All.PanelTypographyDropList);
	else if(value.type === ItemTypes.PanelTypographyTextField)
		extractCode += extractComponentCode(All.PanelTypographyTextField);
	else if(value.type === ItemTypes.RadioName)
		extractCode += extractComponentCode(All.RadioName);
	else if(value.type === ItemTypes.RadioGroupControlled)
		extractCode += extractComponentCode(All.RadioGroupControlled);
	else if(value.type === ItemTypes.RadioGroupUnControlled)
		extractCode += extractComponentCode(All.RadioGroupUnControlled);
	else if(value.type === ItemTypes.ScrollbarsCheckGroup)
		extractCode += extractComponentCode(All.ScrollbarsCheckGroup);
	else if(value.type === ItemTypes.ScrollbarsList)
		extractCode += extractComponentCode(All.ScrollbarsList);
	else if(value.type === ItemTypes.SeperatorHorizontal)
		extractCode += extractComponentCode(All.SeperatorHorizontal);
	else if(value.type === ItemTypes.SeperatorVertical)
		extractCode += extractComponentCode(All.SeperatorVertical);
	else if(value.type === ItemTypes.StackColumn)
		extractCode += extractComponentCode(All.StackColumn);
	else if(value.type === ItemTypes.StackRow)
		extractCode += extractComponentCode(All.StackRow);
	else if(value.type === ItemTypes.SwitchLabel)
		extractCode += extractComponentCode(All.SwitchLabel);
	else if(value.type === ItemTypes.SwitchGroupControlled)
		extractCode += extractComponentCode(All.SwitchGroupControlled);
	else if(value.type === ItemTypes.SwitchGroupUnControlled)
		extractCode += extractComponentCode(All.SwitchGroupUnControlled);
	else if(value.type === ItemTypes.TabLabel)
		extractCode += extractComponentCode(All.TabLabel);
	else if(value.type === ItemTypes.TabGroupHorizontal)
		extractCode += extractComponentCode(All.TabGroupHorizontal);
	else if(value.type === ItemTypes.TabGroupVertical)
		extractCode += extractComponentCode(All.TabGroupVertical);
	else if(value.type === ItemTypes.TabGroupWithDataGrid)
		extractCode += extractComponentCode(All.TabGroupWithDataGrid);
	else if(value.type === ItemTypes.TabGroupWithTable)
		extractCode += extractComponentCode(All.TabGroupWithTable);
	else if(value.type === ItemTypes.TableBody)
		extractCode += extractComponentCode(All.TableBody);
	else if(value.type === ItemTypes.TableBundle)
		extractCode += extractComponentCode(All.TableBundle);
	else if(value.type === ItemTypes.TableCell)
		extractCode += extractComponentCode(All.TableCell);
	else if(value.type === ItemTypes.TableHeader)
		extractCode += extractComponentCode(All.TableHeader);
	else if(value.type === ItemTypes.TableRow)
		extractCode += extractComponentCode(All.TableRow);
	else if(value.type === ItemTypes.TextFieldError)
		extractCode += extractComponentCode(All.TextFieldError);
	else if(value.type === ItemTypes.TextFieldLabel)
		extractCode += extractComponentCode(All.TextFieldLabel);
	else if(value.type === ItemTypes.TextFieldLeft)
		extractCode += extractComponentCode(All.TextFieldLeft);
	else if(value.type === ItemTypes.TextFieldRight)
		extractCode += extractComponentCode(All.TextFieldRight);
	else if(value.type === ItemTypes.TypographyBody1)
		extractCode += extractComponentCode(All.TypographyBody1);
	else if(value.type === ItemTypes.TypographyBody2)
		extractCode += extractComponentCode(All.TypographyBody2);
	else if(value.type === ItemTypes.TypographyBody3)
		extractCode += extractComponentCode(All.TypographyBody3);
	else if(value.type === ItemTypes.TypographyH1)
		extractCode += extractComponentCode(All.TypographyH1);
	else if(value.type === ItemTypes.TypographyGroupText)
		extractCode += extractComponentCode(All.TypographyGroupText);
	else if(value.type === ItemTypes.TendonProfileConverterBottomButtons)
		extractCode += extractComponentCode(All.TendonProfileConverterBottomButtons);
	else if(value.type === ItemTypes.TendonProfileConverterComposite)
		extractCode += extractComponentCode(All.TendonProfileConverterComposite);
	else if(value.type === ItemTypes.TendonProfileConverterHelpIconButton)
		extractCode += extractComponentCode(All.TendonProfileConverterHelpIconButton);
	else if(value.type === ItemTypes.TendonProfileConverterList)
		extractCode += extractComponentCode(All.TendonProfileConverterList);
	else if(value.type === ItemTypes.TendonProfileConverterSelectButton)
		extractCode += extractComponentCode(All.TendonProfileConverterSelectButton);
	else if(value.type === ItemTypes.TendonProfileConverterUpdateButton)
		extractCode += extractComponentCode(All.TendonProfileConverterUpdateButton);
	return extractCode;
})}

  return (
    <Box sx={{width: "${Sizewidth}px", height:"${Sizeheight}px", p:"0.5rem", border: '1px solid #bebebe'}}>
			<Grid container spacing={0} style={{height:"100%", position: 'relative'}}>
			${Layoutsinfo.map((item:any, index:any) => {
				return (`
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							width: '${item.w * Number(Sizewidth) / 12}px', // w값을 colWidth 배수로 계산해 width로 사용합니다.
							height: '${item.h * 30}px', // rowHeight의 배수로 높이를 설정합니다.
							top: '${item.y * 30}px', // y값을 rowHeight 배수로 계산해 top으로 사용합니다.
							left: '${item.x * Number(Sizewidth) / 12}px', // x값을 colWidth 배수로 계산해 left로 사용합니다.
							position: 'absolute' // 위치를 절대값으로 지정합니다.
						}}
					>
						${item.type === ItemTypes.VerifyDialogDefault ? `${extractComponentName(All.VerifyDialogDefault)}` : ""}
						${item.type === ItemTypes.ButtonComposite ? `${extractComponentName(All.ButtonComposite)}` : ""}
						${item.type === ItemTypes.ButtonContained ? `${extractComponentName(All.ButtonContained)}` : ""}
						${item.type === ItemTypes.ButtonNegative ? `${extractComponentName(All.ButtonNegative)}` : ""}
						${item.type === ItemTypes.ButtonNormal ? `${extractComponentName(All.ButtonNormal)}` : ""}
						${item.type === ItemTypes.ButtonOutlined ? `${extractComponentName(All.ButtonOutlined)}` : ""}
						${item.type === ItemTypes.ButtonText ? `${extractComponentName(All.ButtonText)}` : ""}
						${item.type === ItemTypes.ButtonWidth ? `${extractComponentName(All.ButtonWidth)}` : ""}
						${item.type === ItemTypes.ChartLineAxisLegend ? `${extractComponentName(All.ChartLineAxisLegend)}` : ""}
						${item.type === ItemTypes.ChartLineAxisPointSize ? `${extractComponentName(All.ChartLineAxisPointSize)}` : ""}
						${item.type === ItemTypes.ChartLineAxisTopRight ? `${extractComponentName(All.ChartLineAxisTopRight)}` : ""}
						${item.type === ItemTypes.CheckNotRequired ? `${extractComponentName(All.CheckNotRequired)}` : ""}
						${item.type === ItemTypes.CheckRequired ? `${extractComponentName(All.CheckRequired)}` : ""}
						${item.type === ItemTypes.CheckGroupControlled ? `${extractComponentName(All.CheckGroupControlled)}` : ""}
						${item.type === ItemTypes.CheckGroupUnControlled ? `${extractComponentName(All.CheckGroupUnControlled)}` : ""}
						${item.type === ItemTypes.CodeBlockJavascript ? `${extractComponentName(All.CodeBlockJavascript)}` : ""}
						${item.type === ItemTypes.CodeBlockTypescript ? `${extractComponentName(All.CodeBlockTypescript)}` : ""}
						${item.type === ItemTypes.DataGridPagination ? `${extractComponentName(All.DataGridPagination)}` : ""}
						${item.type === ItemTypes.DialogHelpButton ? `${extractComponentName(All.DialogHelpButton)}` : ""}
						${item.type === ItemTypes.DialogHelpIconButton ? `${extractComponentName(All.DialogHelpIconButton)}` : ""}
						${item.type === ItemTypes.DropListDropdown ? `${extractComponentName(All.DropListDropdown)}` : ""}
						${item.type === ItemTypes.GridColumn ? `${extractComponentName(All.GridColumn)}` : ""}
						${item.type === ItemTypes.GridItems ? `${extractComponentName(All.GridItems)}` : ""}
						${item.type === ItemTypes.GridRow ? `${extractComponentName(All.GridRow)}` : ""}
						${item.type === ItemTypes.GuideBoxBasic300x300 ? `${extractComponentName(All.GuideBoxBasic300x300)}` : ""}
						${item.type === ItemTypes.GuideBoxLayoutSample1 ? `${extractComponentName(All.GuideBoxLayoutSample1)}` : ""}
						${item.type === ItemTypes.GuideBoxRowDirection ? `${extractComponentName(All.GuideBoxRowDirection)}` : ""}
						${item.type === ItemTypes.IconAdd ? `${extractComponentName(All.IconAdd)}` : ""}
						${item.type === ItemTypes.IconClose ? `${extractComponentName(All.IconClose)}` : ""}
						${item.type === ItemTypes.IconButtonAdd ? `${extractComponentName(All.IconButtonAdd)}` : ""}
						${item.type === ItemTypes.IconButtonClose ? `${extractComponentName(All.IconButtonClose)}` : ""}
						${item.type === ItemTypes.IconButtonWithName ? `${extractComponentName(All.IconButtonWithName)}` : ""}
						${item.type === ItemTypes.ListControlled ? `${extractComponentName(All.ListControlled)}` : ""}
						${item.type === ItemTypes.ListDynamic ? `${extractComponentName(All.ListDynamic)}` : ""}
						${item.type === ItemTypes.ListTypographyRadio ? `${extractComponentName(All.ListTypographyRadio)}` : ""}
						${item.type === ItemTypes.ListUnControlled ? `${extractComponentName(All.ListUnControlled)}` : ""}
						${item.type === ItemTypes.ListItemDefault ? `${extractComponentName(All.ListItemDefault)}` : ""}
						${item.type === ItemTypes.ListItemButtonDefault ? `${extractComponentName(All.ListItemButtonDefault)}` : ""}
						${item.type === ItemTypes.PanelBox ? `${extractComponentName(All.PanelBox)}` : ""}
						${item.type === ItemTypes.PanelShadow ? `${extractComponentName(All.PanelShadow)}` : ""}
						${item.type === ItemTypes.PanelStrock ? `${extractComponentName(All.PanelStrock)}` : ""}
						${item.type === ItemTypes.PanelTypographyDropList ? `${extractComponentName(All.PanelTypographyDropList)}` : ""}
						${item.type === ItemTypes.PanelTypographyTextField ? `${extractComponentName(All.PanelTypographyTextField)}` : ""}
						${item.type === ItemTypes.RadioName ? `${extractComponentName(All.RadioName)}` : ""}
						${item.type === ItemTypes.RadioGroupControlled ? `${extractComponentName(All.RadioGroupControlled)}` : ""}
						${item.type === ItemTypes.RadioGroupUnControlled ? `${extractComponentName(All.RadioGroupUnControlled)}` : ""}
						${item.type === ItemTypes.ScrollbarsCheckGroup ? `${extractComponentName(All.ScrollbarsCheckGroup)}` : ""}
						${item.type === ItemTypes.ScrollbarsList ? `${extractComponentName(All.ScrollbarsList)}` : ""}
						${item.type === ItemTypes.SeperatorHorizontal ? `${extractComponentName(All.SeperatorHorizontal)}` : ""}
						${item.type === ItemTypes.SeperatorVertical ? `${extractComponentName(All.SeperatorVertical)}` : ""}
						${item.type === ItemTypes.StackColumn ? `${extractComponentName(All.StackColumn)}` : ""}
						${item.type === ItemTypes.StackRow ? `${extractComponentName(All.StackRow)}` : ""}
						${item.type === ItemTypes.SwitchLabel ? `${extractComponentName(All.SwitchLabel)}` : ""}
						${item.type === ItemTypes.SwitchGroupControlled ? `${extractComponentName(All.SwitchGroupControlled)}` : ""}
						${item.type === ItemTypes.SwitchGroupUnControlled ? `${extractComponentName(All.SwitchGroupUnControlled)}` : ""}
						${item.type === ItemTypes.TabLabel ? `${extractComponentName(All.TabLabel)}` : ""}
						${item.type === ItemTypes.TabGroupHorizontal ? `${extractComponentName(All.TabGroupHorizontal)}` : ""}
						${item.type === ItemTypes.TabGroupVertical ? `${extractComponentName(All.TabGroupVertical)}` : ""}
						${item.type === ItemTypes.TabGroupWithDataGrid ? `${extractComponentName(All.TabGroupWithDataGrid)}` : ""}
						${item.type === ItemTypes.TabGroupWithTable ? `${extractComponentName(All.TabGroupWithTable)}` : ""}
						${item.type === ItemTypes.TableBody ? `${extractComponentName(All.TableBody)}` : ""}
						${item.type === ItemTypes.TableBundle ? `${extractComponentName(All.TableBundle)}` : ""}
						${item.type === ItemTypes.TableCell ? `${extractComponentName(All.TableCell)}` : ""}
						${item.type === ItemTypes.TableHeader ? `${extractComponentName(All.TableHeader)}` : ""}
						${item.type === ItemTypes.TableRow ? `${extractComponentName(All.TableRow)}` : ""}
						${item.type === ItemTypes.TextFieldError ? `${extractComponentName(All.TextFieldError)}` : ""}
						${item.type === ItemTypes.TextFieldLabel ? `${extractComponentName(All.TextFieldLabel)}` : ""}
						${item.type === ItemTypes.TextFieldLeft ? `${extractComponentName(All.TextFieldLeft)}` : ""}
						${item.type === ItemTypes.TextFieldRight ? `${extractComponentName(All.TextFieldRight)}` : ""}
						${item.type === ItemTypes.TypographyBody1 ? `${extractComponentName(All.TypographyBody1)}` : ""}
						${item.type === ItemTypes.TypographyBody2 ? `${extractComponentName(All.TypographyBody2)}` : ""}
						${item.type === ItemTypes.TypographyBody3 ? `${extractComponentName(All.TypographyBody3)}` : ""}
						${item.type === ItemTypes.TypographyH1 ? `${extractComponentName(All.TypographyH1)}` : ""}
						${item.type === ItemTypes.TypographyGroupText ? `${extractComponentName(All.TypographyGroupText)}` : ""}
						${item.type === ItemTypes.TendonProfileConverterBottomButtons ? `${extractComponentName(All.TendonProfileConverterBottomButtons)}` : ""}
						${item.type === ItemTypes.TendonProfileConverterComposite ? `${extractComponentName(All.TendonProfileConverterComposite)}` : ""}
						${item.type === ItemTypes.TendonProfileConverterHelpIconButton ? `${extractComponentName(All.TendonProfileConverterHelpIconButton)}` : ""}
						${item.type === ItemTypes.TendonProfileConverterList ? `${extractComponentName(All.TendonProfileConverterList)}` : ""}
						${item.type === ItemTypes.TendonProfileConverterSelectButton ? `${extractComponentName(All.TendonProfileConverterSelectButton)}` : ""}
						${item.type === ItemTypes.TendonProfileConverterUpdateButton ? `${extractComponentName(All.TendonProfileConverterUpdateButton)}` : ""}
					</div>`
				)
			})}
			</Grid>
    </Box>
  )
}`;

	function remove3Comma(str:string){
		let result = str.replace(/,{3}/g, "");
		let result2 = result.replace(/>,/g, ">");
		result2 = result2.replace(/,import/ig, "\nimport");
		result2 = result2.replace(/},/ig, "}");
		return result2;
	}

	return (
		<CodeComponent
			language="typescript"
			title='Plugin UI React Code'
			children={String(remove3Comma(totalCode)).replace(/\n$/, "")}
		/>
	);
}