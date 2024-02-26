import type { BadgeProps } from "@repo/ui";
import { Badge } from "@repo/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    children: "Example",
  },
};
