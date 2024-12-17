import { themeConfig } from './theme.config.ts';
import theme from './theme.json';
import { ConfigProvider, ThemeConfig } from 'antd';
import { PropsWithChildren } from 'react';

export const ThemeProvider = (props: PropsWithChildren) => {
    return (
        <ConfigProvider
            {...themeConfig}
            theme={{
                ...theme as unknown as ThemeConfig,
                cssVar: { key: 'app', prefix: '' }
            }}
            children={props.children}
        />
    );
}