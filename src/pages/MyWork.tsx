import { useState, useEffect } from "react";
import "../styles/scss/mywork.scss";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import Spinner from "../Components/Spinner";
import { FiExternalLink } from "react-icons/fi";

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
  {
    title: "Travel Sigiriya",
    url: "https://www.amazon.com/dp/B0FJR93HJ4",
    description:
      "Your Ultimate Travel Guide to Sigiriya: Discover the Ancient Rock Fortress: Explore History, Tips, Attractions, and Local Secrets in One.",
  },
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
    if (
      openSection === "medium" &&
      mediumPosts.length === 0 &&
      !mediumLoading
    ) {
      setMediumLoading(true);
      fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ymedagedara"
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.items) {
            setMediumPosts(
              data.items.map((item: MediumPost) => ({
                title: item.title,
                link: item.link,
              }))
            );
          } else {
            setMediumError("No posts found.");
          }
        })
        .catch(() => setMediumError("Failed to load Medium posts."))
        .finally(() => setMediumLoading(false));
    }
  }, [openSection, mediumPosts.length, mediumLoading]);

  useEffect(() => {
    if (
      openSection === "github" &&
      githubRepos.length === 0 &&
      !githubLoading
    ) {
      setGithubLoading(true);
      fetch("https://api.github.com/users/Yasashri/repos")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setGithubRepos(
              data.map((repo: GithubRepo) => ({
                name: repo.name,
                html_url: repo.html_url,
                description: repo.description || "",
              }))
            );
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
    <section className='mywork-section'>
      <ScrollToTopButton />
      <div className='container'>
        <div className='header'>
          <h1>My Work</h1>
          <p className='subtitle'>
            Browse my Medium blog posts, open-source GitHub projects, and books
            available on Amazon. Click to expand each section!
          </p>
        </div>
        <div className='mywork-list'>
          {/* Medium Posts */}
          <article className={`mywork-card${openSection === "medium" ? " expanded" : ""}`}>
            <header className='mywork-header'>
              <button
                id='medium-toggle'
                className='mywork-toggle-button'
                aria-controls='medium-panel'
                aria-expanded={openSection === "medium"}
                onClick={() => handleToggle("medium")}
              >
                <h2>Medium Blog Posts</h2>
                <span className='toggle-icon' aria-hidden>
                  {openSection === "medium" ? "▲" : "▼"}
                </span>
              </button>
            </header>
            <div
              id='medium-panel'
              role='region'
              aria-labelledby='medium-toggle'
              hidden={openSection !== "medium"}
              className='mywork-content'
            >
              {mediumLoading && <Spinner size={20} label="Loading Medium posts" />}
              {mediumError && (
                <div className='error'>
                  <span>{mediumError}</span>
                  <button className='retry' onClick={() => { setMediumPosts([]); setOpenSection("medium"); }}>
                    Retry
                  </button>
                </div>
              )}
              {!mediumLoading && !mediumError && (
                <ul>
                  {mediumPosts.map((post, idx) => (
                    <li key={idx}>
                      <a href={post.link} target='_blank' rel='noopener noreferrer'>
                        {post.title}
                        <FiExternalLink className='external-icon' aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
          {/* GitHub Repos */}
          <article className={`mywork-card${openSection === "github" ? " expanded" : ""}`}>
            <header className='mywork-header'>
              <button
                id='github-toggle'
                className='mywork-toggle-button'
                aria-controls='github-panel'
                aria-expanded={openSection === "github"}
                onClick={() => handleToggle("github")}
              >
                <h2>GitHub Public Repos</h2>
                <span className='toggle-icon' aria-hidden>
                  {openSection === "github" ? "▲" : "▼"}
                </span>
              </button>
            </header>
            <div
              id='github-panel'
              role='region'
              aria-labelledby='github-toggle'
              hidden={openSection !== "github"}
              className='mywork-content'
            >
              {githubLoading && <Spinner size={20} label="Loading GitHub repos" />}
              {githubError && (
                <div className='error'>
                  <span>{githubError}</span>
                  <button className='retry' onClick={() => { setGithubRepos([]); setOpenSection("github"); }}>
                    Retry
                  </button>
                </div>
              )}
              {!githubLoading && !githubError && (
                <ul>
                  {githubRepos.map((repo, idx) => (
                    <li key={idx}>
                      <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                        {repo.name}
                        <FiExternalLink className='external-icon' aria-hidden />
                      </a>
                      <span className='repo-desc'> — <span className='truncate'>{repo.description}</span></span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
          {/* Amazon Books */}
          <article className={`mywork-card${openSection === "amazon" ? " expanded" : ""}`}>
            <header className='mywork-header'>
              <button
                id='amazon-toggle'
                className='mywork-toggle-button'
                aria-controls='amazon-panel'
                aria-expanded={openSection === "amazon"}
                onClick={() => handleToggle("amazon")}
              >
                <h2>Amazon Books</h2>
                <span className='toggle-icon' aria-hidden>
                  {openSection === "amazon" ? "▲" : "▼"}
                </span>
              </button>
            </header>
            <div
              id='amazon-panel'
              role='region'
              aria-labelledby='amazon-toggle'
              hidden={openSection !== "amazon"}
              className='mywork-content'
            >
              <ul>
                {amazonBooks.map((book, idx) => (
                  <li key={idx}>
                    <a href={book.url} target='_blank' rel='noopener noreferrer'>
                      {book.title}
                      <FiExternalLink className='external-icon' aria-hidden />
                    </a>
                    <span className='book-desc'> — <span className='truncate'>{book.description}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
