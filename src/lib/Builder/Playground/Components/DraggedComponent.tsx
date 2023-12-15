import * as All from ".";
import { ItemTypes } from './ItemTypes';

function DraggedComponent(props: any){
  const item = props.item;

	switch (item.type) {
		case ItemTypes.VerifyDialogDefault: return <All.VerifyDialogDefault />;
		case ItemTypes.ButtonComposite: return <All.ButtonComposite />;
		case ItemTypes.ButtonContained: return <All.ButtonContained />;
		case ItemTypes.ButtonNegative: return <All.ButtonNegative />;
		case ItemTypes.ButtonNormal: return <All.ButtonNormal />;
		case ItemTypes.ButtonOutlined: return <All.ButtonOutlined />;
		case ItemTypes.ButtonText: return <All.ButtonText />;
		case ItemTypes.ButtonWidth: return <All.ButtonWidth />;
		case ItemTypes.ChartLineAxisLegend: return <All.ChartLineAxisLegend />;
		case ItemTypes.ChartLineAxisPointSize: return <All.ChartLineAxisPointSize />;
		case ItemTypes.ChartLineAxisTopRight: return <All.ChartLineAxisTopRight />;
		case ItemTypes.CheckNotRequired: return <All.CheckNotRequired />;
		case ItemTypes.CheckRequired: return <All.CheckRequired />;
		case ItemTypes.CheckGroupStateful: return <All.CheckGroupStateful />;
		case ItemTypes.CheckGroupUnControlled: return <All.CheckGroupUnControlled />;
		case ItemTypes.CodeBlockJavascript: return <All.CodeBlockJavascript />;
		case ItemTypes.CodeBlockTypescript: return <All.CodeBlockTypescript />;
		case ItemTypes.DataGridPagination: return <All.DataGridPagination />;
		case ItemTypes.DialogDialogButton: return <All.DialogDialogButton />;
		case ItemTypes.DialogHelpButton: return <All.DialogHelpButton />;
		case ItemTypes.DialogHelpIconButton: return <All.DialogHelpIconButton />;
		case ItemTypes.DropListDropdown: return <All.DropListDropdown />;
		case ItemTypes.GridColumn: return <All.GridColumn />;
		case ItemTypes.GridItems: return <All.GridItems />;
		case ItemTypes.GridRow: return <All.GridRow />;
		case ItemTypes.GuideBoxBasic300x300: return <All.GuideBoxBasic300x300 />;
		case ItemTypes.GuideBoxEmpty: return <All.GuideBoxEmpty />;
		case ItemTypes.GuideBoxLayout1: return <All.GuideBoxLayout1 />;
		case ItemTypes.GuideBoxLayout2: return <All.GuideBoxLayout2 />;
		case ItemTypes.GuideBoxLayout3: return <All.GuideBoxLayout3 />;
		case ItemTypes.GuideBoxLayout4: return <All.GuideBoxLayout4 />;
		case ItemTypes.GuideBoxLayout5: return <All.GuideBoxLayout5 />;
		case ItemTypes.GuideBoxRowDirection: return <All.GuideBoxRowDirection />;
		case ItemTypes.IconAdd: return <All.IconAdd />;
		case ItemTypes.IconClose: return <All.IconClose />;
		case ItemTypes.IconButtonAdd: return <All.IconButtonAdd />;
		case ItemTypes.IconButtonClose: return <All.IconButtonClose />;
		case ItemTypes.IconButtonWithName: return <All.IconButtonWithName />;
		case ItemTypes.ListControlled: return <All.ListControlled />;
		case ItemTypes.ListDynamic: return <All.ListDynamic />;
		case ItemTypes.ListTypographyRadio: return <All.ListTypographyRadio />;
		case ItemTypes.ListUnControlled: return <All.ListUnControlled />;
		case ItemTypes.ListItemDefault: return <All.ListItemDefault />;
		case ItemTypes.ListItemButtonDefault: return <All.ListItemButtonDefault />;
		case ItemTypes.PanelBox: return <All.PanelBox />;
		case ItemTypes.PanelShadow: return <All.PanelShadow />;
		case ItemTypes.PanelStrock: return <All.PanelStrock />;
		case ItemTypes.PanelTypographyDropList: return <All.PanelTypographyDropList />;
		case ItemTypes.PanelTypographyTextField: return <All.PanelTypographyTextField />;
		case ItemTypes.RadioName: return <All.RadioName />;
		case ItemTypes.RadioGroupControlled: return <All.RadioGroupControlled />;
		case ItemTypes.RadioGroupUnControlled: return <All.RadioGroupUnControlled />;
		case ItemTypes.ScrollbarsCheckGroup: return <All.ScrollbarsCheckGroup />;
		case ItemTypes.ScrollbarsList: return <All.ScrollbarsList />;
		case ItemTypes.SeperatorHorizontal: return <All.SeperatorHorizontal />;
		case ItemTypes.SeperatorVertical: return <All.SeperatorVertical />;
		case ItemTypes.StackColumn: return <All.StackColumn />;
		case ItemTypes.StackRow: return <All.StackRow />;
		case ItemTypes.SwitchLabel: return <All.SwitchLabel />;
		case ItemTypes.SwitchGroupControlled: return <All.SwitchGroupControlled />;
		case ItemTypes.SwitchGroupUnControlled: return <All.SwitchGroupUnControlled />;
		case ItemTypes.TabLabel: return <All.TabLabel />;
		case ItemTypes.TabGroupHorizontal: return <All.TabGroupHorizontal />;
		case ItemTypes.TabGroupVertical: return <All.TabGroupVertical />;
		case ItemTypes.TabGroupWithDataGrid: return <All.TabGroupWithDataGrid />;
		case ItemTypes.TabGroupWithTable: return <All.TabGroupWithTable />;
		case ItemTypes.TableBody: return <All.TableBody />;
		case ItemTypes.TableBundle: return <All.TableBundle />;
		case ItemTypes.TableCell: return <All.TableCell />;
		case ItemTypes.TableHeader: return <All.TableHeader />;
		case ItemTypes.TableRow: return <All.TableRow />;
		case ItemTypes.TableWithTitle: return <All.TableWithTitle />;
		case ItemTypes.TextFieldBasic: return <All.TextFieldBasic />;
		case ItemTypes.TextFieldError: return <All.TextFieldError />;
		case ItemTypes.TextFieldLabel: return <All.TextFieldLabel />;
		case ItemTypes.TextFieldLeft: return <All.TextFieldLeft />;
		case ItemTypes.TextFieldRight: return <All.TextFieldRight />;
		case ItemTypes.TypographyBody1: return <All.TypographyBody1 />;
		case ItemTypes.TypographyBody2: return <All.TypographyBody2 />;
		case ItemTypes.TypographyBody3: return <All.TypographyBody3 />;
		case ItemTypes.TypographyH1: return <All.TypographyH1 />;
		case ItemTypes.TypographyGroupText: return <All.TypographyGroupText />;
		case ItemTypes.DualComponentsTypographyDropListSpaceBetween: return <All.DualComponentsTypographyDropListSpaceBetween />;
		case ItemTypes.DualComponentsTypographyTextFieldSpaceBetween: return <All.DualComponentsTypographyTextFieldSpaceBetween />;
		case ItemTypes.TendonProfileConverterBottomButtons: return <All.TendonProfileConverterBottomButtons />;
		case ItemTypes.TendonProfileConverterComposite: return <All.TendonProfileConverterComposite />;
		case ItemTypes.TendonProfileConverterHelpIconButton: return <All.TendonProfileConverterHelpIconButton />;
		case ItemTypes.TendonProfileConverterList: return <All.TendonProfileConverterList />;
		case ItemTypes.TendonProfileConverterSelectButton: return <All.TendonProfileConverterSelectButton />;
		case ItemTypes.TendonProfileConverterUpdateButton: return <All.TendonProfileConverterUpdateButton />;
		default: return <>Invalid</>;
	}
}

export default DraggedComponent;
