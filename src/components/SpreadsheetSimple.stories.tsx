import type { Meta, StoryObj } from '@storybook/react';
import { Spreadsheet } from './Spreadsheet';

const meta: Meta<typeof Spreadsheet> = {
  title: 'Components/Spreadsheet/Simple Test',
  component: Spreadsheet,
  parameters: {
    docs: {
      description: {
        component: 'Simple test story for Spreadsheet component debugging.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spreadsheet>;

/**
 * Minimal test - just render with defaults
 */
export const MinimalTest: Story = {
  args: {
    rows: 5,
    columns: 3,
  },
};
