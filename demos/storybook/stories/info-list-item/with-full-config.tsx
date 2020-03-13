import * as Colors from '@pxblue/colors';
import { Device } from '@pxblue/icons-mui';

import { InfoListItem } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withFullConfig = (): StoryFnReactReturnType => {
    const divider = select('divider', ['none', 'full', 'partial'], 'full');
    const appliedDivider = divider === 'none' ? undefined : divider;

    return (
        <InfoListItem
            title={text('title', 'Info List Item')}
            subtitle={text('subtitle', 'with all customizable properties')}
            icon={<Device />}
            statusColor={color('statusColor', Colors.yellow[500])}
            iconColor={color('iconColor', Colors.blue[500])}
            fontColor={color('fontColor', Colors.blue[500])}
            backgroundColor={color('backgroundColor', Colors.white[50])}
            avatar={boolean('avatar', false)}
            chevron={boolean('chevron', true)}
            dense={boolean('dense', false)}
            divider={appliedDivider}
            hidePadding={boolean('hidePadding', false)}
            ripple={boolean('ripple', true)}
            onClick={action('clicked')}
        />
    );
};

withFullConfig.story = { name: 'with full config' };