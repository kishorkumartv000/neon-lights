# ISO DATA - Personal Dashboard

This project is a personal dashboard website designed for quick access to bookmarks, commands, and notes. It features a modern, dark theme inspired by media applications and includes an automated workflow for easily adding new content.

## Features

- **Multi-Page Dashboard**: Organized into three main sections:
  - **Bookmarks**: A categorized, card-based view of your favorite websites.
  - **Commands**: A collection of useful shell commands with syntax highlighting.
  - **Notes**: A space for personal notes and thoughts.
- **Live Search**: All pages include a search bar to instantly filter content.
- **Copy to Clipboard**: A "Copy" button on each command block allows for easy copying with a single click.
- **Automated Content Updates**: A GitHub Actions workflow allows for adding new bookmarks without manually editing any code.

## How to Use

### Adding a New Bookmark (The Easy Way)

The easiest way to add a new bookmark is to use the built-in GitHub Action.

1.  **Go to the "Actions" Tab** in your GitHub repository.
2.  On the left sidebar, click on the **"Add New Bookmark"** workflow.
3.  Click the **"Run workflow"** dropdown button.
4.  You will see a form with four fields:
    - **The name of the website**: The title for the bookmark card.
    - **The full URL of the website**: The link the bookmark should open.
    - **A short description of the website**: The text that appears on the card.
    - **Category**: The category for the bookmark. If the category doesn't exist, a new one will be created automatically.
5.  Fill in the details and click the green **"Run workflow"** button.

The workflow will run and automatically commit the new bookmark to your site.

### Manually Editing Content

While the workflow is best for bookmarks, you can still manually edit the content for the Commands and Notes pages.

- **To add a new command**: Edit the `commands.html` file and copy an existing `<div class="content-entry">...</div>` block.
- **To add a new note**: Edit the `notes.html` file and copy an existing `<div class="content-entry">...</div>` block.
- **To add a new bookmark manually**: Edit the `bookmarks.html` file and copy an existing `<div class="card">...</div>` block inside the category of your choice.

This project is automatically published to GitHub Pages from the main branch. Any changes committed to the main branch will be deployed within minutes.
