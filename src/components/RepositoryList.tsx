import { useEffect, useState } from "react";
import { RepositoryItem, Repository } from "./RepositoryItem";

import '../styles/repositories.scss'

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Repositories</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem 
            key={repository.name} 
            repository={repository} 
          />
        ))}
      </ul>
    </section>
  )
}