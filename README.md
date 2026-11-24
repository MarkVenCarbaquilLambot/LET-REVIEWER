# LET Reviewer — Complete Static Website

A responsive LET practice quiz made with plain HTML, CSS, and JavaScript. No database, framework, build step, or paid hosting is required.

## Included features
- Seven reviewer categories
- Flashcard-style multiple-choice quiz
- Random question order on every attempt
- Shuffled answer choices (the correct answer remains correctly tracked)
- Immediate correct/incorrect feedback and explanation
- Elapsed-time timer
- End-of-quiz score and item-by-item report
- Filter to show incorrect answers only
- Retake only missed questions
- Retake the full quiz
- Light/dark theme toggle (theme preference saved in the browser)
- Responsive layout for phones, tablets, and desktop

## Open locally
1. Download and extract this ZIP file.
2. Open `index.html` in a modern browser.

## Add your own questions
Open `script.js` in a code editor (for example, Visual Studio Code). Near the top, find `const quizCategories = [...]`.

Each category contains a `questions` array. Add question objects using this format:

```js
{
  question: "Write your question here?",
  choices: [
    "Choice A",
    "Choice B",
    "Choice C",
    "Choice D"
  ],
  correctAnswer: 2,
  explanation: "Optional short explanation."
}
```

Important:
- `correctAnswer` is zero-based: `0` means the first choice (A), `1` means B, `2` means C, and `3` means D.
- Keep exactly four choices if you want the usual A–D format.
- The site shuffles the choices automatically but keeps the correct answer linked to its text.
- You can copy a question object and edit it to add more questions.
- Replace the included sample questions with your own verified reviewer material.
- The category cards automatically show the number of questions in each category.

## Publish on GitHub Pages
1. Sign in or create an account at https://github.com/.
2. Create a new repository, for example `let-reviewer`.
3. Upload the contents of this folder to the repository root. `index.html`, `style.css`, and `script.js` should be at the top level.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. Wait for GitHub Pages to publish. Your URL will look like:
   `https://YOUR-USERNAME.github.io/let-reviewer/`

When you update questions later, edit `script.js` and commit the changes to GitHub. GitHub Pages will publish the updated site.

## Notes and limitations
- This is a static, browser-based website. Questions are part of `script.js` and are visible to anyone who can access the site source.
- Quiz answers and scores are held in the current browser session; they are not uploaded to a server or synchronized across devices.
- The dark/light preference is saved locally in the visitor's browser.
- The timer measures elapsed time; it does not impose a countdown or automatically end the quiz.
- The Google Fonts import is optional. If unavailable, the site uses system fonts.
