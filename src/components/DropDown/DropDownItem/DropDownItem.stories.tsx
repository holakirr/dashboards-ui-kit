import type { Meta, StoryObj } from "@storybook/react";
import { DropDownItem } from ".";
import { imageControl, imageMocks, keyBindingsControl } from "../../../utils";

const meta = {
	title: "Base Components/Dropdown/Dropdown Item",
	component: DropDownItem,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		keyBindings: keyBindingsControl,
		img: imageControl,
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		title: "Title",
		href: "#",
	},
	decorators: [
		(Story) => (
			<div
				style={{
					width: 400,
					height: 400,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof DropDownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropDownItemBasic: Story = {
	args: {},
};

export const DropDownItemWithSubtitle: Story = {
	args: {
		title: "Title",
		href: "#",
		subtitle: "Subtitle",
	},
};

export const DropDownItemWithKeyBindings: Story = {
	args: {
		title: "Title",
		href: "#",
		keyBindings: ["Ctrl", "C"],
	},
};

export const DropDownItemWithImage: Story = {
	args: {
		title: "Title",
		href: "#",
		img: imageMocks.woman,
	},
};
