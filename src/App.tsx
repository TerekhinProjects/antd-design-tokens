import { Button, Dropdown, MenuProps, Space, Typography, App as AntdApp } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { LogIn } from 'lucide-react';
import './App.css'

enum AuthProviderType {
    Github = 'github',
    Keyckloak = 'keyckloak',
    Inner = 'inner',
}

const authProviders: MenuProps['items'] = [
    {
        key: AuthProviderType.Github,
        label: 'Войти с помощью GitHub',
        icon: <GithubOutlined/>
    },
    {
        key: AuthProviderType.Keyckloak,
        label: 'Войти с помощью Keyckloak'
    },
    {
        key: AuthProviderType.Inner,
        label: 'Ввести email и пароль'
    },
];

type MenuClickEventHandler = { key: string; }

function App() {
    const { notification } = AntdApp.useApp();

    const onAuthSelect = (event: MenuClickEventHandler) => {
        const { key: provider } = event;

        notification.open({
            message: 'Выбран способ входа',
            description: provider,
            placement: 'bottomRight',
        });
    };

    return (
        <>
            <div className="card">
                <Typography.Title>Antd Design Tokens</Typography.Title>

                <Space direction="vertical">
                    <Typography.Paragraph>Кнопка с корпоративным <span className="brand">цветом Rubius</span></Typography.Paragraph>

                    <Dropdown menu={{ items: authProviders, onClick: onAuthSelect }} trigger={['click']}>
                        <Button icon={<LogIn size={18} />} type="primary" size="large">
                            Войти в приложение
                        </Button>
                    </Dropdown>
                </Space>
            </div>

            <article>
                <Typography.Title level={2}>Learn Figma</Typography.Title>
                <Typography.Paragraph type="secondary">If you are new to Figma, we highly recommend visiting
                    Figma’s Getting Started help page or watching Beginner's Guide to Figma on Figma’s YouTube
                    channel.</Typography.Paragraph>

                <Typography.Title level={3}>Components</Typography.Title>
                <Typography.Paragraph type="secondary">Ant Design System for Figma is built with components. These are elements you can reuse across your designs. They help to create and manage consistent designs across projects. You can learn more about Components and how to use them here.</Typography.Paragraph>
            </article>
        </>
    )
}

export default App
