# University Web Development Practice

This repository contains exercises, assignments, and in-class practice for a university web development course. It's organized by weeks and days so you can track progress and add new work consistently.

**Project Purpose**: keep a clean, easy-to-navigate record of small web projects and exercises that are safe to commit frequently during the semester.

**Structure**
- `Assignments/`: larger assignment projects (each in its own folder).
- `week-*/day-*/`: weekly practice exercises organized by day.
- `README.md`: this file — guidelines and contribution rules for future commits.

**Quick Start / Preview**
- To preview any HTML file, open it in your browser (double-click or use "Open File").
- To run a simple local static server (recommended):

	- Using Python 3 (from repository root):

		`python -m http.server 8000`

		Then open `http://localhost:8000` in your browser.

	- Or use any Live Server extension in your editor.

**Contributing / Commit Guidelines**
- Branches:
	- Use `feature/<short-description>` for new exercises or UI features.
	- Use `fix/<short-description>` for bug fixes.
	- Use `chore/<short-description>` for non-functional changes (formatting, README edits).
- Commit message format (conventional, keep short):

	`type(scope): short description`

	Examples:
	- `feat(week-3): add responsive navbar example`
	- `fix(day-2): correct event listener logic`
	- `chore(readme): improve instructions`

- Pull requests should include which file(s) changed and a short testing/preview note.

**File Naming & Structure Conventions**
- Keep each exercise self-contained inside its `week-X/day-Y/` folder when possible.
- Name files clearly: `index.html`, `index.css`, `index.js`, or descriptive names like `todo-app.html`.

**Adding New Work**
- Create a new folder under the appropriate `week-N/day-M/` path and add your files there.
- Update this README only when necessary (use `chore/readme` branch for edits).

**Commit Checklist**
- Code compiles or HTML opens in browser.
- No large unintentionally committed files (node_modules, build artifacts).
- Short, descriptive commit message and correct branch name.

**Testing & Preview**
- Manual testing by opening HTML in a browser is sufficient for these exercises.
- If you add JS modules or build tools, document run steps here.

**License & Attribution**
- Add a LICENSE file if you want to specify reuse terms (e.g., MIT).

**Contact / Owner**
- Repository owner: update this README with your name and contact if desired.

---

