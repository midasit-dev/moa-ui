import * as All from ".";
import { ItemTypes } from './ItemTypes';

function DraggedComponent(props: any){
  const item = props.item;

	switch (item.type) {
		case ItemTypes.VerifyDialogDefault: return <All.VerifyDialogDefault />;
		case ItemTypes.VerifyDialogLoading: return <All.VerifyDialogLoading />;
		case ItemTypes.AlertError: return <All.AlertError />;
		case ItemTypes.ButtonComposite: return <All.ButtonComposite />;
		case ItemTypes.ButtonContained: return <All.ButtonContained />;
		case ItemTypes.ButtonLoading: return <All.ButtonLoading />;
		case ItemTypes.ButtonNegative: return <All.ButtonNegative />;
		case ItemTypes.ButtonNormal: return <All.ButtonNormal />;
		case ItemTypes.ButtonOutlined: return <All.ButtonOutlined />;
		case ItemTypes.ButtonText: return <All.ButtonText />;
		case ItemTypes.ButtonWidth: return <All.ButtonWidth />;
		case ItemTypes.ChartLineAxisLegend: return <All.ChartLineAxisLegend />;
		case ItemTypes.ChartLineAxisPointSize: return <All.ChartLineAxisPointSize />;
		case ItemTypes.ChartLineAxisTopRight: return <All.ChartLineAxisTopRight />;
		case ItemTypes.ChartLineDecimals: return <All.ChartLineDecimals />;
		case ItemTypes.CheckDisabled: return <All.CheckDisabled />;
		case ItemTypes.CheckNotRequired: return <All.CheckNotRequired />;
		case ItemTypes.CheckRequired: return <All.CheckRequired />;
		case ItemTypes.CheckGroupStateful: return <All.CheckGroupStateful />;
		case ItemTypes.CheckGroupUnControlled: return <All.CheckGroupUnControlled />;
		case ItemTypes.ChipDefault: return <All.ChipDefault />;
		case ItemTypes.CodeBlockBackgroundColor: return <All.CodeBlockBackgroundColor />;
		case ItemTypes.CodeBlockJavascript: return <All.CodeBlockJavascript />;
		case ItemTypes.CodeBlockLanguage: return <All.CodeBlockLanguage />;
		case ItemTypes.CodeBlockPadding: return <All.CodeBlockPadding />;
		case ItemTypes.CodeBlockTypescript: return <All.CodeBlockTypescript />;
		case ItemTypes.DataGridPagination: return <All.DataGridPagination />;
		case ItemTypes.DialogDialogButton: return <All.DialogDialogButton />;
		case ItemTypes.DialogHelpButton: return <All.DialogHelpButton />;
		case ItemTypes.DialogHelpIconButton: return <All.DialogHelpIconButton />;
		case ItemTypes.DialogHiddenClose: return <All.DialogHiddenClose />;
		case ItemTypes.DialogOnClose: return <All.DialogOnClose />;
		case ItemTypes.DropListDisabled: return <All.DropListDisabled />;
		case ItemTypes.DropListDropdown: return <All.DropListDropdown />;
		case ItemTypes.DropListItemListFromArray: return <All.DropListItemListFromArray />;
		case ItemTypes.DropListListWidth: return <All.DropListListWidth />;
		case ItemTypes.DropListMaxLength: return <All.DropListMaxLength />;
		case ItemTypes.FloatingBoxClassName: return <All.FloatingBoxClassName />;
		case ItemTypes.FloatingBoxGuideBoxProps: return <All.FloatingBoxGuideBoxProps />;
		case ItemTypes.FloatingBoxMouseEvents: return <All.FloatingBoxMouseEvents />;
		case ItemTypes.FloatingBoxWithPanel: return <All.FloatingBoxWithPanel />;
		case ItemTypes.GridColumn: return <All.GridColumn />;
		case ItemTypes.GridItems: return <All.GridItems />;
		case ItemTypes.GridRow: return <All.GridRow />;
		case ItemTypes.GuideBoxBasic300x300: return <All.GuideBoxBasic300x300 />;
		case ItemTypes.GuideBoxEmpty: return <All.GuideBoxEmpty />;
		case ItemTypes.GuideBoxFlexGrow: return <All.GuideBoxFlexGrow />;
		case ItemTypes.GuideBoxLayout1: return <All.GuideBoxLayout1 />;
		case ItemTypes.GuideBoxLayout2: return <All.GuideBoxLayout2 />;
		case ItemTypes.GuideBoxLayout3: return <All.GuideBoxLayout3 />;
		case ItemTypes.GuideBoxLayout4: return <All.GuideBoxLayout4 />;
		case ItemTypes.GuideBoxLayout5: return <All.GuideBoxLayout5 />;
		case ItemTypes.GuideBoxLoading: return <All.GuideBoxLoading />;
		case ItemTypes.GuideBoxOnKeyDown: return <All.GuideBoxOnKeyDown />;
		case ItemTypes.GuideBoxOpacity: return <All.GuideBoxOpacity />;
		case ItemTypes.GuideBoxOverflow: return <All.GuideBoxOverflow />;
		case ItemTypes.GuideBoxPulse: return <All.GuideBoxPulse />;
		case ItemTypes.GuideBoxRowDirection: return <All.GuideBoxRowDirection />;
		case ItemTypes.GuideBoxSpaceBetween: return <All.GuideBoxSpaceBetween />;
		case ItemTypes.IconAdd: return <All.IconAdd />;
		case ItemTypes.IconClose: return <All.IconClose />;
		case ItemTypes.IconToButton: return <All.IconToButton />;
		case ItemTypes.IconButtonAdd: return <All.IconButtonAdd />;
		case ItemTypes.IconButtonClose: return <All.IconButtonClose />;
		case ItemTypes.IconButtonTransparent: return <All.IconButtonTransparent />;
		case ItemTypes.IconButtonWithName: return <All.IconButtonWithName />;
		case ItemTypes.ListControlled: return <All.ListControlled />;
		case ItemTypes.ListDynamic: return <All.ListDynamic />;
		case ItemTypes.ListTypographyRadio: return <All.ListTypographyRadio />;
		case ItemTypes.ListUnControlled: return <All.ListUnControlled />;
		case ItemTypes.ListItemDefault: return <All.ListItemDefault />;
		case ItemTypes.ListItemButtonDefault: return <All.ListItemButtonDefault />;
		case ItemTypes.MidasControllerTitle: return <All.MidasControllerTitle />;
		case ItemTypes.PanelBorder: return <All.PanelBorder />;
		case ItemTypes.PanelBox: return <All.PanelBox />;
		case ItemTypes.PanelPadding0: return <All.PanelPadding0 />;
		case ItemTypes.PanelShadow: return <All.PanelShadow />;
		case ItemTypes.PanelShadow2: return <All.PanelShadow2 />;
		case ItemTypes.PanelStrock: return <All.PanelStrock />;
		case ItemTypes.PanelTypographyDropList: return <All.PanelTypographyDropList />;
		case ItemTypes.PanelTypographyTextField: return <All.PanelTypographyTextField />;
		case ItemTypes.RadioName: return <All.RadioName />;
		case ItemTypes.RadioGroupControlled: return <All.RadioGroupControlled />;
		case ItemTypes.RadioGroupUnControlled: return <All.RadioGroupUnControlled />;
		case ItemTypes.ScrollbarsCheckGroup: return <All.ScrollbarsCheckGroup />;
		case ItemTypes.ScrollbarsList: return <All.ScrollbarsList />;
		case ItemTypes.SeparatorHorizontal: return <All.SeparatorHorizontal />;
		case ItemTypes.SeparatorVertical: return <All.SeparatorVertical />;
		case ItemTypes.StackColumn: return <All.StackColumn />;
		case ItemTypes.StackRow: return <All.StackRow />;
		case ItemTypes.SwitchLabel: return <All.SwitchLabel />;
		case ItemTypes.SwitchGroupControlled: return <All.SwitchGroupControlled />;
		case ItemTypes.SwitchGroupUnControlled: return <All.SwitchGroupUnControlled />;
		case ItemTypes.TabLabel: return <All.TabLabel />;
		case ItemTypes.TabSizeControl: return <All.TabSizeControl />;
		case ItemTypes.TabGroupHorizontal: return <All.TabGroupHorizontal />;
		case ItemTypes.TabGroupSizeControl: return <All.TabGroupSizeControl />;
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
		case ItemTypes.TextFieldMultiLine: return <All.TextFieldMultiLine />;
		case ItemTypes.TextFieldRight: return <All.TextFieldRight />;
		case ItemTypes.TextFieldWrappedWidth: return <All.TextFieldWrappedWidth />;
		case ItemTypes.TextFieldV2Basic: return <All.TextFieldV2Basic />;
		case ItemTypes.TextFieldV2Bottom: return <All.TextFieldV2Bottom />;
		case ItemTypes.TextFieldV2CheckErrorAsFunction: return <All.TextFieldV2CheckErrorAsFunction />;
		case ItemTypes.TextFieldV2Error: return <All.TextFieldV2Error />;
		case ItemTypes.TextFieldV2Left: return <All.TextFieldV2Left />;
		case ItemTypes.TextFieldV2MultiLine: return <All.TextFieldV2MultiLine />;
		case ItemTypes.TextFieldV2Number: return <All.TextFieldV2Number />;
		case ItemTypes.TextFieldV2NumberOption: return <All.TextFieldV2NumberOption />;
		case ItemTypes.TextFieldV2NumberOptionNegativeInteger: return <All.TextFieldV2NumberOptionNegativeInteger />;
		case ItemTypes.TextFieldV2NumberOptionPositiveInteger: return <All.TextFieldV2NumberOptionPositiveInteger />;
		case ItemTypes.TextFieldV2Right: return <All.TextFieldV2Right />;
		case ItemTypes.TextFieldV2SinglelineTitle: return <All.TextFieldV2SinglelineTitle />;
		case ItemTypes.TextFieldV2TitleInputScale: return <All.TextFieldV2TitleInputScale />;
		case ItemTypes.TextFieldV2Top: return <All.TextFieldV2Top />;
		case ItemTypes.TooltipArrowBorder: return <All.TooltipArrowBorder />;
		case ItemTypes.TooltipRight: return <All.TooltipRight />;
		case ItemTypes.TypographyBody1: return <All.TypographyBody1 />;
		case ItemTypes.TypographyBody2: return <All.TypographyBody2 />;
		case ItemTypes.TypographyBody3: return <All.TypographyBody3 />;
		case ItemTypes.TypographyH1: return <All.TypographyH1 />;
		case ItemTypes.TypographySingleLine: return <All.TypographySingleLine />;
		case ItemTypes.TypographyGroupText: return <All.TypographyGroupText />;
		case ItemTypes.AutoDropListTemplatesAutoDropList: return <All.AutoDropListTemplatesAutoDropList />;
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
