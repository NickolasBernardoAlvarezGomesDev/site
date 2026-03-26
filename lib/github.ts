export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
};

export function scoreRepo(repo: GitHubRepo) {
  return Number(Boolean(repo.description)) * 3 + repo.stargazers_count + repo.forks_count;
}

export function selectTopRepos(repos: GitHubRepo[], limit = 6) {
  return repos
    .filter((repo) => !repo.name.toLowerCase().includes(".github"))
    .sort((a, b) => scoreRepo(b) - scoreRepo(a))
    .slice(0, limit);
}
