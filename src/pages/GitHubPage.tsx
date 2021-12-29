import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import GitService from "../services/gitService";

const GitHubPage: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<string>("");

  const [reposData, setReposData] = useState([]);

  const onNavGitHub = () => {
    navigate("/");
  };
  const onGetUser = async () => {
    const res = await GitService.getRepos(user);
    setReposData(res);
  };
  return (
    <div>
      <main>
        <div className="flex flex-column m-5 align-items-center">
          <div className="absolute top-0 left-0 flex flex-column align-items-center  w-full">
            <div className="w-full font-bold bg-blue-500 text-white p-2">
              TESTE | GIT
            </div>
            <div className="w-full font-bold bg-white text-blue-500 p-2">
              <Button type="button" onClick={onNavGitHub}>
                GO TO HOME PAGE
              </Button>
            </div>
          </div>

          <div className="flex flex-column p-card p-5 mb-5 mt-8">
            <label htmlFor="user">User</label>
            <InputText
              id="user"
              type="text"
              placeholder="Enter your username..."
              className="mb-5"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <Button type="button" onClick={onGetUser}>
              Get User
            </Button>
          </div>

          <div className="p-card p-5 w-9">
            <DataTable value={reposData} responsiveLayout="scroll">
              <Column field="name" header="Name" />
              <Column field="full_name" header="Full Name" />
            </DataTable>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GitHubPage;
