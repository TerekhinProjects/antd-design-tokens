import { Button, Dropdown, MenuProps, notification, Space, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
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
    const [notificationApi, contextHolder] = notification.useNotification();

    const onAuthSelect = (event: MenuClickEventHandler) => {
        const { key: provider } = event;

        notificationApi.open({
            message: 'Выбран способ входа',
            description: provider,
            placement: 'bottomRight',
        });
    };

    return (
        <>
            <div className="card">
                <Space direction="vertical">
                    <Typography.Text>Кнопка с корпоративным цветом Rubius</Typography.Text>

                    <Dropdown menu={{ items: authProviders, onClick: onAuthSelect }} trigger={['click']}>
                        <Button type="primary" size="large">
                            Войти в приложение
                        </Button>
                    </Dropdown>
                </Space>
            </div>

            {contextHolder}
        </>
    )
}

export default App
