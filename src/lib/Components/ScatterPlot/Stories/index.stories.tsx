import type { Meta, StoryObj } from "@storybook/react";
import { ScatterPlot } from "../../..";
import Explore from "./Explore.mdx";

import LiveEditStory from "../../../Common/Storybook/LiveEditStory";
import { 
	ScatterPlotDefaultCode,
	GetNodesCode,
} from "../Code";
import { cleanMask } from "../../../Common/Storybook/CodeExtractor";

const meta = {
  title: "Components/ScatterPlot",
  component: ScatterPlot,
  parameters: {
    layout: "centered",
    docs: { page: Explore },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScatterPlot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = LiveEditStory(cleanMask(ScatterPlotDefaultCode));
export const GetNodes: Story = LiveEditStory(cleanMask(GetNodesCode));

export const Sample: Story = {
  args: {
		data: [
			{
				"id": "group A",
				"data": [
					{
						"x": 57,
						"y": 57
					},
					{
						"x": 37,
						"y": 5
					},
					{
						"x": 34,
						"y": 16
					},
					{
						"x": 73,
						"y": 38
					},
					{
						"x": 78,
						"y": 65
					},
					{
						"x": 31,
						"y": 117
					},
					{
						"x": 54,
						"y": 36
					},
					{
						"x": 94,
						"y": 42
					},
					{
						"x": 88,
						"y": 47
					},
					{
						"x": 83,
						"y": 111
					},
					{
						"x": 54,
						"y": 35
					},
					{
						"x": 81,
						"y": 0
					},
					{
						"x": 31,
						"y": 78
					},
					{
						"x": 98,
						"y": 0
					},
					{
						"x": 78,
						"y": 6
					},
					{
						"x": 27,
						"y": 71
					},
					{
						"x": 95,
						"y": 106
					},
					{
						"x": 21,
						"y": 100
					},
					{
						"x": 84,
						"y": 101
					},
					{
						"x": 65,
						"y": 35
					},
					{
						"x": 15,
						"y": 109
					},
					{
						"x": 78,
						"y": 28
					},
					{
						"x": 4,
						"y": 110
					},
					{
						"x": 92,
						"y": 106
					},
					{
						"x": 96,
						"y": 11
					},
					{
						"x": 78,
						"y": 71
					},
					{
						"x": 52,
						"y": 21
					},
					{
						"x": 15,
						"y": 46
					},
					{
						"x": 52,
						"y": 65
					},
					{
						"x": 24,
						"y": 19
					},
					{
						"x": 76,
						"y": 32
					},
					{
						"x": 32,
						"y": 24
					},
					{
						"x": 57,
						"y": 25
					},
					{
						"x": 11,
						"y": 32
					},
					{
						"x": 98,
						"y": 37
					},
					{
						"x": 81,
						"y": 46
					},
					{
						"x": 1,
						"y": 0
					},
					{
						"x": 62,
						"y": 3
					},
					{
						"x": 88,
						"y": 6
					},
					{
						"x": 18,
						"y": 49
					},
					{
						"x": 36,
						"y": 72
					},
					{
						"x": 76,
						"y": 97
					},
					{
						"x": 45,
						"y": 85
					},
					{
						"x": 71,
						"y": 93
					},
					{
						"x": 78,
						"y": 50
					},
					{
						"x": 31,
						"y": 31
					},
					{
						"x": 65,
						"y": 96
					},
					{
						"x": 22,
						"y": 26
					},
					{
						"x": 39,
						"y": 66
					},
					{
						"x": 34,
						"y": 3
					}
				]
			},
			{
				"id": "group B",
				"data": [
					{
						"x": 91,
						"y": 114
					},
					{
						"x": 6,
						"y": 20
					},
					{
						"x": 47,
						"y": 59
					},
					{
						"x": 85,
						"y": 68
					},
					{
						"x": 84,
						"y": 115
					},
					{
						"x": 20,
						"y": 25
					},
					{
						"x": 58,
						"y": 36
					},
					{
						"x": 48,
						"y": 17
					},
					{
						"x": 99,
						"y": 36
					},
					{
						"x": 100,
						"y": 48
					},
					{
						"x": 60,
						"y": 58
					},
					{
						"x": 85,
						"y": 75
					},
					{
						"x": 91,
						"y": 72
					},
					{
						"x": 1,
						"y": 11
					},
					{
						"x": 31,
						"y": 96
					},
					{
						"x": 42,
						"y": 51
					},
					{
						"x": 88,
						"y": 54
					},
					{
						"x": 56,
						"y": 70
					},
					{
						"x": 89,
						"y": 37
					},
					{
						"x": 19,
						"y": 96
					},
					{
						"x": 76,
						"y": 45
					},
					{
						"x": 90,
						"y": 106
					},
					{
						"x": 46,
						"y": 78
					},
					{
						"x": 70,
						"y": 42
					},
					{
						"x": 22,
						"y": 86
					},
					{
						"x": 13,
						"y": 90
					},
					{
						"x": 15,
						"y": 91
					},
					{
						"x": 86,
						"y": 118
					},
					{
						"x": 47,
						"y": 8
					},
					{
						"x": 73,
						"y": 99
					},
					{
						"x": 11,
						"y": 62
					},
					{
						"x": 75,
						"y": 86
					},
					{
						"x": 33,
						"y": 23
					},
					{
						"x": 29,
						"y": 83
					},
					{
						"x": 32,
						"y": 104
					},
					{
						"x": 92,
						"y": 3
					},
					{
						"x": 60,
						"y": 104
					},
					{
						"x": 33,
						"y": 119
					},
					{
						"x": 95,
						"y": 92
					},
					{
						"x": 28,
						"y": 0
					},
					{
						"x": 69,
						"y": 109
					},
					{
						"x": 67,
						"y": 26
					},
					{
						"x": 15,
						"y": 16
					},
					{
						"x": 89,
						"y": 118
					},
					{
						"x": 75,
						"y": 101
					},
					{
						"x": 17,
						"y": 99
					},
					{
						"x": 36,
						"y": 1
					},
					{
						"x": 9,
						"y": 47
					},
					{
						"x": 62,
						"y": 63
					},
					{
						"x": 35,
						"y": 43
					}
				]
			},
			{
				"id": "group C",
				"data": [
					{
						"x": 8,
						"y": 99
					},
					{
						"x": 54,
						"y": 89
					},
					{
						"x": 16,
						"y": 24
					},
					{
						"x": 34,
						"y": 48
					},
					{
						"x": 82,
						"y": 59
					},
					{
						"x": 2,
						"y": 75
					},
					{
						"x": 65,
						"y": 80
					},
					{
						"x": 4,
						"y": 97
					},
					{
						"x": 88,
						"y": 59
					},
					{
						"x": 95,
						"y": 101
					},
					{
						"x": 40,
						"y": 97
					},
					{
						"x": 94,
						"y": 41
					},
					{
						"x": 35,
						"y": 76
					},
					{
						"x": 80,
						"y": 40
					},
					{
						"x": 56,
						"y": 1
					},
					{
						"x": 37,
						"y": 3
					},
					{
						"x": 51,
						"y": 102
					},
					{
						"x": 92,
						"y": 6
					},
					{
						"x": 35,
						"y": 81
					},
					{
						"x": 10,
						"y": 44
					},
					{
						"x": 14,
						"y": 23
					},
					{
						"x": 87,
						"y": 85
					},
					{
						"x": 16,
						"y": 72
					},
					{
						"x": 8,
						"y": 33
					},
					{
						"x": 81,
						"y": 81
					},
					{
						"x": 55,
						"y": 88
					},
					{
						"x": 50,
						"y": 58
					},
					{
						"x": 11,
						"y": 59
					},
					{
						"x": 69,
						"y": 97
					},
					{
						"x": 71,
						"y": 28
					},
					{
						"x": 28,
						"y": 91
					},
					{
						"x": 79,
						"y": 55
					},
					{
						"x": 13,
						"y": 94
					},
					{
						"x": 24,
						"y": 105
					},
					{
						"x": 18,
						"y": 45
					},
					{
						"x": 14,
						"y": 20
					},
					{
						"x": 57,
						"y": 53
					},
					{
						"x": 100,
						"y": 42
					},
					{
						"x": 17,
						"y": 61
					},
					{
						"x": 56,
						"y": 41
					},
					{
						"x": 76,
						"y": 70
					},
					{
						"x": 50,
						"y": 19
					},
					{
						"x": 4,
						"y": 83
					},
					{
						"x": 56,
						"y": 65
					},
					{
						"x": 31,
						"y": 25
					},
					{
						"x": 79,
						"y": 116
					},
					{
						"x": 80,
						"y": 116
					},
					{
						"x": 74,
						"y": 80
					},
					{
						"x": 55,
						"y": 84
					},
					{
						"x": 99,
						"y": 39
					}
				]
			},
			{
				"id": "group D",
				"data": [
					{
						"x": 95,
						"y": 80
					},
					{
						"x": 42,
						"y": 16
					},
					{
						"x": 87,
						"y": 3
					},
					{
						"x": 22,
						"y": 103
					},
					{
						"x": 14,
						"y": 6
					},
					{
						"x": 61,
						"y": 75
					},
					{
						"x": 47,
						"y": 81
					},
					{
						"x": 87,
						"y": 25
					},
					{
						"x": 54,
						"y": 93
					},
					{
						"x": 68,
						"y": 113
					},
					{
						"x": 39,
						"y": 57
					},
					{
						"x": 84,
						"y": 27
					},
					{
						"x": 54,
						"y": 31
					},
					{
						"x": 16,
						"y": 53
					},
					{
						"x": 44,
						"y": 56
					},
					{
						"x": 93,
						"y": 50
					},
					{
						"x": 31,
						"y": 31
					},
					{
						"x": 70,
						"y": 66
					},
					{
						"x": 66,
						"y": 54
					},
					{
						"x": 28,
						"y": 37
					},
					{
						"x": 34,
						"y": 11
					},
					{
						"x": 28,
						"y": 104
					},
					{
						"x": 68,
						"y": 30
					},
					{
						"x": 63,
						"y": 17
					},
					{
						"x": 85,
						"y": 43
					},
					{
						"x": 28,
						"y": 6
					},
					{
						"x": 89,
						"y": 58
					},
					{
						"x": 72,
						"y": 94
					},
					{
						"x": 9,
						"y": 50
					},
					{
						"x": 31,
						"y": 73
					},
					{
						"x": 17,
						"y": 100
					},
					{
						"x": 88,
						"y": 69
					},
					{
						"x": 8,
						"y": 26
					},
					{
						"x": 11,
						"y": 84
					},
					{
						"x": 87,
						"y": 41
					},
					{
						"x": 97,
						"y": 65
					},
					{
						"x": 27,
						"y": 77
					},
					{
						"x": 13,
						"y": 78
					},
					{
						"x": 38,
						"y": 62
					},
					{
						"x": 45,
						"y": 73
					},
					{
						"x": 66,
						"y": 63
					},
					{
						"x": 98,
						"y": 41
					},
					{
						"x": 43,
						"y": 40
					},
					{
						"x": 16,
						"y": 43
					},
					{
						"x": 17,
						"y": 11
					},
					{
						"x": 79,
						"y": 22
					},
					{
						"x": 63,
						"y": 39
					},
					{
						"x": 4,
						"y": 33
					},
					{
						"x": 0,
						"y": 40
					},
					{
						"x": 46,
						"y": 56
					}
				]
			},
			{
				"id": "group E",
				"data": [
					{
						"x": 69,
						"y": 39
					},
					{
						"x": 24,
						"y": 50
					},
					{
						"x": 78,
						"y": 41
					},
					{
						"x": 84,
						"y": 119
					},
					{
						"x": 61,
						"y": 8
					},
					{
						"x": 86,
						"y": 56
					},
					{
						"x": 26,
						"y": 51
					},
					{
						"x": 19,
						"y": 39
					},
					{
						"x": 35,
						"y": 43
					},
					{
						"x": 95,
						"y": 95
					},
					{
						"x": 53,
						"y": 84
					},
					{
						"x": 85,
						"y": 76
					},
					{
						"x": 86,
						"y": 29
					},
					{
						"x": 85,
						"y": 102
					},
					{
						"x": 2,
						"y": 19
					},
					{
						"x": 23,
						"y": 4
					},
					{
						"x": 31,
						"y": 61
					},
					{
						"x": 68,
						"y": 70
					},
					{
						"x": 93,
						"y": 120
					},
					{
						"x": 38,
						"y": 44
					},
					{
						"x": 71,
						"y": 103
					},
					{
						"x": 18,
						"y": 87
					},
					{
						"x": 33,
						"y": 31
					},
					{
						"x": 67,
						"y": 63
					},
					{
						"x": 80,
						"y": 42
					},
					{
						"x": 48,
						"y": 36
					},
					{
						"x": 29,
						"y": 14
					},
					{
						"x": 16,
						"y": 45
					},
					{
						"x": 84,
						"y": 77
					},
					{
						"x": 68,
						"y": 16
					},
					{
						"x": 91,
						"y": 68
					},
					{
						"x": 61,
						"y": 35
					},
					{
						"x": 32,
						"y": 27
					},
					{
						"x": 81,
						"y": 4
					},
					{
						"x": 49,
						"y": 55
					},
					{
						"x": 84,
						"y": 48
					},
					{
						"x": 38,
						"y": 24
					},
					{
						"x": 18,
						"y": 37
					},
					{
						"x": 55,
						"y": 36
					},
					{
						"x": 44,
						"y": 118
					},
					{
						"x": 99,
						"y": 62
					},
					{
						"x": 85,
						"y": 35
					},
					{
						"x": 84,
						"y": 22
					},
					{
						"x": 77,
						"y": 4
					},
					{
						"x": 46,
						"y": 108
					},
					{
						"x": 50,
						"y": 20
					},
					{
						"x": 22,
						"y": 2
					},
					{
						"x": 98,
						"y": 110
					},
					{
						"x": 90,
						"y": 10
					},
					{
						"x": 95,
						"y": 72
					}
				]
			}
		]
	}
};
