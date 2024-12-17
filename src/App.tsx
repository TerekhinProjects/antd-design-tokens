import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import './App.css'

function App() {
  return (
    <>
      <div className="card">
          <Button icon={<GithubOutlined />} type="primary" size="large">
              Signin with GitHub
          </Button>
      </div>
    </>
  )
}

export default App
