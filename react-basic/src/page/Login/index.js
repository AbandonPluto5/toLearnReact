import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是登录页
      {/* 声明式导航 */}
      <Link to={"/article"}>跳转到文章页</Link>
      {/* 编程式导航 */}
      <button onClick={() => navigate("/article")}>跳转到文章页</button>
      {/* searchParams传参 */}
      <button onClick={() => navigate("/article?id=1001&name=lily")}>
        searchParams传参
      </button>
      {/* params传参 */}
      <button onClick={() => navigate("/article/1001/lily")}>params传参</button>
    </div>
  );
};

export default Login;
