import { apiGit } from "./api";

export default class GitService {
  static async getUser(user: string) {
    const res = await apiGit.get(`https://api.github.com/users/${user}`);
    return res.data;
  }

  static async getRepos(user: string) {
    const res = await apiGit.get(`https://api.github.com/users/${user}/repos`);
    return res.data;
  }
}
