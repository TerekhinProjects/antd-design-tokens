import {
    Button,
    Dropdown,
    MenuProps,
    Space,
    Typography,
    App as AntdApp,
    Divider,
    Form,
    Input,
    Card,
    Flex,
    Checkbox
} from 'antd';
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

interface IAuthFormData {
    email: string;
    password: string;
    remember: boolean;
}

function App() {
    const {notification} = AntdApp.useApp();

    const onAuthSelect = (event: MenuClickEventHandler) => {
        const {key: provider} = event;

        notification.open({
            message: 'Выбран способ входа',
            description: provider,
            placement: 'bottomRight',
        });
    };

    const onSubmit = (formData: IAuthFormData) => {
        console.log(formData);
    };

    return (
        <main>
            <div className="card">
                <Typography.Title>Antd Design Tokens</Typography.Title>

                <Space direction="vertical">
                    <Typography.Paragraph>Кнопка с корпоративным <span
                        className="brand">цветом Rubius</span></Typography.Paragraph>

                    <Dropdown menu={{items: authProviders, onClick: onAuthSelect}} trigger={['click']}>
                        <Button icon={<LogIn size={18} />} type="primary" size="large">
                            Войти в приложение
                        </Button>
                    </Dropdown>
                </Space>
            </div>

            <Divider/>

            <Card bordered={false} title="Вход в приложение">
                <Form size="large" layout="vertical" onFinish={onSubmit}>
                    <Form.Item name="email" label="Email" required rules={[{ required: true }]}>
                        <Input placeholder="Введите Email"/>
                    </Form.Item>

                    <Form.Item name="password" label="Пароль" required rules={[{ required: true }]}>
                        <Input.Password placeholder="Введите пароль"/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Запомнить</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType="submit" type="primary" block>Войти</Button>
                    </Form.Item>

                    <Divider>или</Divider>

                    <Flex justify="center">
                        <Button.Group size="middle">
                            <Button htmlType="button">Yandex</Button>
                            <Button htmlType="button">VK</Button>
                            <Button htmlType="button">GitHub</Button>
                        </Button.Group>
                    </Flex>
                </Form>
            </Card>

            <Divider/>

            <article>
                <Typography.Title level={2}>Learn Figma</Typography.Title>
                <Typography.Paragraph type="secondary">If you are new to Figma, we highly recommend visiting
                    Figma’s Getting Started help page or watching Beginner's Guide to Figma on Figma’s YouTube
                    channel.</Typography.Paragraph>

                <Typography.Title level={3}>Components</Typography.Title>
                <Typography.Paragraph type="secondary">Ant Design System for Figma is built with components. These are
                    elements you can reuse across your designs. They help to create and manage consistent designs across
                    projects. You can learn more about Components and how to use them here.</Typography.Paragraph>
            </article>

        </main>
    )
}

export default App
