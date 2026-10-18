# NavLoop research website

A static English project page with three supplied navigation videos. Select Task 1, Task 2, or Task 3 in the dropdown to switch the video. Task labels follow filename order; update the option text in `index.html` when descriptive task names are available.

Videos autoplay muted when visible and pause when scrolled out of view. Native controls remain available. No generated graphs or simulated walkthroughs are included.

## Preview

```sh
cd /home/l/Joseph/gpt_nav_lwj/gpt_nav_website
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765. No installation or build step is required. `index.html` contains the copy and video options, `script.js` handles selection and playback, and `styles.css` controls presentation. Assets use relative URLs for GitHub Pages. See `assets/README.md` for the task-to-file mapping.
