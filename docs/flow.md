# Flow

$$
\begin{align}
  \text{start} &\to
    \begin{cases}
      \text{page} &\to
        \begin{cases}
          \text{index} &\to
            \begin{cases}
              \text{[renderHome]}
            \end{cases}
          \\
          \text{knowledge} &\to
            \begin{cases}
              \text{[renderKnowledge]}
            \end{cases}
          \\
          \text{skills} &\to
            \begin{cases}
              \text{[renderSkills]}
            \end{cases}
          \\
          \text{portfolio} &\to
            \begin{cases}
              \text{[renderPortfolio]}
            \end{cases}
          \\
          \text{portfolio/products} &\to
            \begin{cases}
              \text{[renderPortfolioProducts]}
            \end{cases}
          \\
          \text{portfolio/projects} &\to
            \begin{cases}
              \text{[renderPortfolioProjects]}
            \end{cases}
          \\
          \text{interests} &\to
            \begin{cases}
              \text{[renderInterests]}
            \end{cases}
          \\
          \text{contact} &\to
            \begin{cases}
              \text{[renderContact]}
            \end{cases}
        \end{cases}
      \\\\
      \text{render} &\to
        \begin{cases}
          \text{header} &\to
            \begin{cases}
              \text{[renderHeader]} &\to
                \begin{cases}
                  \text{[page]}
                \end{cases}
            \end{cases}
          \\
          \text{nav} &\to
            \begin{cases}
              \text{[renderNav]} &\to
                \begin{cases}
                  \text{[page]}
                \end{cases}
            \end{cases}
          \\
          \text{main} &\to
            \begin{cases}
              \text{[renderMain]} &\to
                \begin{cases}
                  \text{[page]}
                \end{cases}
            \end{cases}
          \\
          \text{footer} &\to
            \begin{cases}
              \text{[renderFooter]} &\to
                \begin{cases}
                  \text{[contact]}
                \end{cases}
            \end{cases}
        \end{cases}
    \end{cases}
\end{align}
$$
