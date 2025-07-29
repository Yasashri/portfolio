import { useState } from "react";
import "../styles/scss/stories.scss";
import { stories } from "../Components/MyStories";
import ScrollToTopButton from "../Components/ScrollToTopButton";


const Stories = () => {
  const [openStory, setOpenStory] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenStory(openStory === id ? null : id);
  };

  return (
    <section className="stories-section">
      <ScrollToTopButton />
      <div className="container">
        <div className="header">
          <h1>Project Stories</h1>
          <p className="subtitle">
            Explore the stories behind my offline and custom projects. Click a story to expand and read more!
          </p>
        </div>
        <div className="stories-list">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`story-card${openStory === story.id ? " expanded" : ""}`}
              onClick={() => handleToggle(story.id)}
              tabIndex={0}
              role="button"
              aria-expanded={openStory === story.id}
              onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleToggle(story.id)}
            >
              <div className="story-header">
                <h2>{story.title}</h2>
                <span className="story-toggle">{openStory === story.id ? "▲" : "▼"}</span>
              </div>
              <div className="story-subtitle">{story.subtitle}</div>
              {openStory === story.id && (
                <div className="story-content">{story.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;