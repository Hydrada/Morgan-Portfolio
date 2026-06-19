const projects = window.PORTFOLIO_PROJECTS || [];
const grid = document.querySelector("#project-grid");
const count = document.querySelector("#project-count");
const filters = [...document.querySelectorAll(".filter")];

const initialsFor = (title) =>
  title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const renderProjects = (filter = "all") => {
  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  grid.innerHTML = visible
    .map(
      (project) => `
        <article class="project-card${project.featured ? " featured" : ""}">
          <div class="project-art" aria-hidden="true">${initialsFor(project.title)}</div>
          <div class="project-body">
            <p class="eyebrow">${project.category} / ${project.status}</p>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="tag-row">
              ${project.stack.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="project-links">
              ${
                project.links.length
                  ? project.links
                      .map(
                        (link) =>
                          `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
                      )
                      .join("")
                  : `<span class="case-note">Case study coming soon</span>`
              }
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((filter) => filter.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

count.textContent = projects.length;
renderProjects();
