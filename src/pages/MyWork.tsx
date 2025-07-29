import { useState, useEffect } from "react";
import "../styles/scss/mywork.scss";

type MediumPost = {
  title: string;
  link: string;
};

type GithubRepo = {
  name: string;
  html_url: string;
  description: string;
};

const amazonBooks = [
  { title: "Mastering Automation", url: "https://amazon.com/dp/yourbookid", description: "A practical guide to automation for developers." },
  { title: "React for Professionals", url: "https://amazon.com/dp/yourbookid2", description: "Advanced React concepts and patterns." },
];


type SectionType = "medium" | "github" | "amazon" | null;

const MyWork = () => {
  const [openSection, setOpenSection] = useState<SectionType>(null);

  // Medium state
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);
  const [mediumLoading, setMediumLoading] = useState(false);
  const [mediumError, setMediumError] = useState<string | null>(null);

  // GitHub state
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
  const [githubLoading, setGithubLoading] = useState(false);
  const [githubError, setGithubError] = useState<string | null>(null);

  useEffect(() => {
    if (openSection === "medium" && mediumPosts.length === 0 && !mediumLoading) {
      setMediumLoading(true);
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ymedagedara")
        .then(res => res.json())
        .then(data => {
          if (data.items) {
            setMediumPosts(data.items.map((item: MediumPost) => ({
              title: item.title,
              link: item.link,
            })));
          } else {
            setMediumError("No posts found.");
          }
        })
        .catch(() => setMediumError("Failed to load Medium posts."))
        .finally(() => setMediumLoading(false));
    }
  }, [openSection, mediumPosts.length, mediumLoading]);

  useEffect(() => {
    if (openSection === "github" && githubRepos.length === 0 && !githubLoading) {
      setGithubLoading(true);
      fetch("https://api.github.com/users/Yasashri/repos")
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setGithubRepos(data.map((repo: GithubRepo) => ({
              name: repo.name,
              html_url: repo.html_url,
              description: repo.description || "",
            })));
          } else {
            setGithubError("No repos found.");
          }
        })
        .catch(() => setGithubError("Failed to load GitHub repos."))
        .finally(() => setGithubLoading(false));
    }
  }, [openSection, githubRepos.length, githubLoading]);

  const handleToggle = (section: SectionType) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="mywork-section">
      <div className="container">
        <div className="header">
          <h1>My Work</h1>
          <p className="subtitle">
            Browse my Medium blog posts, open-source GitHub projects, and books available on Amazon. Click to expand each section!
          </p>
        </div>
        <div className="mywork-list">
          {/* Medium Posts */}
          <div
            className={`mywork-card${openSection === "medium" ? " expanded" : ""}`}
            onClick={() => handleToggle("medium")}
            tabIndex={0}
            role="button"
            aria-expanded={openSection === "medium"}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleToggle("medium")}
          >
            <div className="mywork-header">
              <h2>Medium Blog Posts</h2>
              <span className="mywork-toggle">{openSection === "medium" ? "▲" : "▼"}</span>
            </div>
            {openSection === "medium" && (
              <div className="mywork-content">
                {mediumLoading && <div className="loader">Loading...</div>}
                {mediumError && <div className="error">{mediumError}</div>}
                {!mediumLoading && !mediumError && (
                  <ul>
                    {mediumPosts.map((post, idx) => (
                      <li key={idx}>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          {/* GitHub Repos */}
          <div
            className={`mywork-card${openSection === "github" ? " expanded" : ""}`}
            onClick={() => handleToggle("github")}
            tabIndex={0}
            role="button"
            aria-expanded={openSection === "github"}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleToggle("github")}
          >
            <div className="mywork-header">
              <h2>GitHub Public Repos</h2>
              <span className="mywork-toggle">{openSection === "github" ? "▲" : "▼"}</span>
            </div>
            {openSection === "github" && (
              <div className="mywork-content">
                {githubLoading && <div className="loader">Loading...</div>}
                {githubError && <div className="error">{githubError}</div>}
                {!githubLoading && !githubError && (
                  <ul>
                    {githubRepos.map((repo, idx) => (
                      <li key={idx}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                        <span className="repo-desc"> — {repo.description}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          {/* Amazon Books */}
          <div
            className={`mywork-card${openSection === "amazon" ? " expanded" : ""}`}
            onClick={() => handleToggle("amazon")}
            tabIndex={0}
            role="button"
            aria-expanded={openSection === "amazon"}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleToggle("amazon")}
          >
            <div className="mywork-header">
              <h2>Amazon Books</h2>
              <span className="mywork-toggle">{openSection === "amazon" ? "▲" : "▼"}</span>
            </div>
            {openSection === "amazon" && (
              <div className="mywork-content">
                <ul>
                  {amazonBooks.map((book, idx) => (
                    <li key={idx}>
                      <a href={book.url} target="_blank" rel="noopener noreferrer">{book.title}</a>
                      <span className="book-desc"> — {book.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;