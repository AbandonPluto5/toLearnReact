import { useParams } from "react-router-dom";

const Article = () => {
  // searchParams接收参数
  // const [params] = useSearchParams();
  // const id = params.get("id");
  // const name = params.get("name");

  // params接收参数
  const params = useParams();
  const paramsId = params.id;
  const paramsName = params.name;
  return (
    <div>
      {/* 我是文章页{id}-{name} */}
      {paramsId}-{paramsName}
    </div>
  );
};

export default Article;
