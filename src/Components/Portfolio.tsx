import { useState, useEffect } from "react";

interface ResumeProps {
  visibility: boolean;
  closeButton: () => void;
}

interface Post {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
}
interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

interface GitHubRepo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

interface Repo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

function Portfolio({ visibility, closeButton }: ResumeProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(visibility);
  const [posts, setPosts] = useState<Post[]>([]);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    if (visibility) {
      setIsMounted(true);
      setIsExiting(false);
      fetchPosts();
      fetchGitHubRepos();
    } else {
      setIsExiting(true);
      setTimeout(() => {
        setIsMounted(false);
        setIsExiting(false);
      }, 400);
    }
  }, [visibility]);

  // Fetch Medium Posts
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ymedagedara"
      );
      const data = await response.json();

      if (data.status === "ok") {
        const fetchedPosts = data.items.slice(0, 5).map((item: MediumPost) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          contentSnippet: item.description.replace(/<img[^>]*>/g, ""),
        }));

        setPosts(fetchedPosts);
      }
    } catch (error) {
      console.error("Error fetching Medium posts:", error);
    }
  };

  // Fetch GitHub Repositories
  const fetchGitHubRepos = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/Yasashri/repos?sort=updated"
      );
      const data = await response.json();

      const fetchedRepos = data.slice(0, 3).map((repo: GitHubRepo) => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description || "No description available",
        stargazers_count: repo.stargazers_count,
      }));

      setRepos(fetchedRepos);
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
    }
  };

  if (!isMounted) return null;

  return (
    <div
      className={`ym-contact-container ${
        isExiting ? "exit-right" : "enter-left"
      }`}
    >
      <div className='ym-contact-container__title' onClick={closeButton}>
        Close
      </div>
      <div className='ym-contact-container__card'>
        <div className='ym-contact-container__card-data'>
          {/* Medium Posts */}
          <h2 className='ym-section-title'>Blog Posts</h2>
          <div className='ym-portfolio-data'>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={index} className='ym-portfolio-box'>
                  <h3 className='ym-portfolio-title'>{post.title}</h3>
                  <p
                    className='ym-portfolio-snippet'
                    dangerouslySetInnerHTML={{ __html: post.contentSnippet }}
                  />
                  <a href={post.link} target='_blank' rel='noopener noreferrer'>
                    Read More
                  </a>
                  <span className='ym-portfolio-date'>
                    {new Date(post.pubDate).toDateString()}
                  </span>
                </div>
              ))
            ) : (
              <p>Loading Medium posts...</p>
            )}
          </div>

          {/* GitHub Projects */}
          <h2 className='ym-section-title'>GitHub Projects</h2>
          <div className='ym-github-projects'>
            {repos.length > 0 ? (
              repos.map((repo, index) => (
                <div key={index} className='ym-github-box'>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <div className='ym-github-info'>
                    ⭐ {repo.stargazers_count} Stars
                  </div>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View on GitHub
                  </a>
                </div>
              ))
            ) : (
              <p>Loading GitHub projects...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
