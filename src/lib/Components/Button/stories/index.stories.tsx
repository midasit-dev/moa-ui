import type { Meta, StoryObj } from "@storybook/react";
import Button from "..";
import Explore from "./Explore.mdx";

import LiveEditStory from "../../../Common/Storybook/LiveEditStory";
import { 
	CompositeCode, 
	ContainedCode, 
	OutlinedCode, 
	TextCode, 
	NormalCode, 
	NegativeCode, 
	WidthCode } 
from "../Code";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: { page: Explore },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Composite = LiveEditStory(CompositeCode);
export const Contained = LiveEditStory(ContainedCode);
export const Outlined = LiveEditStory(OutlinedCode);
export const Text = LiveEditStory(TextCode);
export const Normal = LiveEditStory(NormalCode);
export const Negative = LiveEditStory(NegativeCode);
export const Width = LiveEditStory(WidthCode);

export const Sample: Story = {
  args: {
    children: "Button",
    onClick: () => {},
    variant: "contained",
    disabled: false,
    width: "auto",
    color: "normal",
  },
};
