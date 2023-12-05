import type { Meta } from "@storybook/react";
import Dialog from "..";

import LiveEditStory from "../../../Common/Storybook/LiveEditStory";
import { cleanMask } from "../../../Common/Storybook/CodeExtractor";
import { 
	HelpDialogCode, 
} from "../Code";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;

export const HelpDialog = LiveEditStory(cleanMask(HelpDialogCode));
