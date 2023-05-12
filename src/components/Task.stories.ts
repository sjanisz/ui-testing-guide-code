import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {Task} from './Task';

const meta: Meta<typeof Task> = {
    component: Task,
    title: 'Task',
};

export default meta;
type Story = StoryObj<typeof Task>;

export const DefaultTS: Story = {
    args: {
        task: {
            id: '1',
            title: 'Buy milk for meeeeee',
            state: 'TASK_INBOX',
        },
    },
};