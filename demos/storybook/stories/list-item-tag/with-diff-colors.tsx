import * as Colors from '@pxblue/colors';
import { ListItemTag } from '@pxblue/react-components';
import { color, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withDifferentColors = (): StoryFnReactReturnType => (
    <ListItemTag
        label={text('label', 'active')}
        backgroundColor={color('backgroundColor', Colors.gold['500'])}
        fontColor={color('fontColor', Colors.black['500'])}
        style={{ boxSizing: 'border-box' }}
    />
);

withDifferentColors.story = { name: 'with different colors' };
