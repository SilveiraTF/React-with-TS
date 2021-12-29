import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const onNavGitHub = () => {
    navigate("/github");
  };
  return (
    <div className="flex flex-column p-card absolute top-0 left-0 w-full p-2">
      <h1>Home MENU</h1>
      <Button className="m-5" onClick={onNavGitHub}>
        Ir para GITHUB
      </Button>
    </div>
  );
}
