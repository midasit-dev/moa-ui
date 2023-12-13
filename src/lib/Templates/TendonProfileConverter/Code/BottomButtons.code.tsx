import { GuideBox, Stack, Button, Typography, TemplatesTendonProfileConverterHelpIconButton } from "@midasit-dev/moaui";/**${comma}*/

const TemplatesTendonProfileConverterBottomButtons = () => {
  return (
		<GuideBox row itemSpacing={2.53} center>
			<TemplatesTendonProfileConverterHelpIconButton />
      <Typography flexItem textAlign="center">Convert to</Typography>
      <Button>New</Button>
      <Button color="negative">Modify</Button>
    </GuideBox>
  );
}; /**${comma}*/

export default TemplatesTendonProfileConverterBottomButtons;
