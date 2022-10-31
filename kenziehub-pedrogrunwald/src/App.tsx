import Routes from "./Routes";
import AuthProvider from "./Contexts/AuthContext";
import 'antd/dist/antd.css';
const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes />  
      </AuthProvider>
    </>
  );
};

export default App;
