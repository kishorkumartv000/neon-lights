# ISO DATA - Personal Dashboard

This project is a personal dashboard website designed for quick access to bookmarks, commands, and notes. It features a modern, dark theme and a data-driven architecture for managing content.

## Features

- **Multi-Page Dashboard**: Organized into three main sections:
  - **Bookmarks**: A categorized, card-based view of your favorite websites.
  - **Commands**: A collection of useful shell commands with syntax highlighting.
  - **Notes**: A space for personal notes and thoughts.
- **Live Search**: All pages include a search bar to instantly filter content.
- **Copy to Clipboard**: A "Copy" button on each command block allows for easy copying with a single click.
- **Data-Driven Bookmarks**: Bookmarks are managed in a central `bookmarks.json` file, and the HTML is generated automatically, making the system robust and easy to manage.
- **Automated Content Management**: A suite of GitHub Actions workflows allows for adding, editing, and deleting bookmarks without manually editing any code.

## How to Manage Your Bookmarks

All bookmark management is done through the **"Actions"** tab in your GitHub repository. You will find three workflows there.

### 1. To Add a New Bookmark
- **Workflow**: `Add New Bookmark`
- **How to use**:
  1. Click the **"Run workflow"** button.
  2. Fill in the `name`, `url`, `description`, and `category` for the new bookmark.
  3. Click the green "Run workflow" button. A new bookmark will be created.

### 2. To Edit an Existing Bookmark
- **Workflow**: `Edit Existing Bookmark`
- **How to use**:
  1. Click **"Run workflow"**.
  2. In the `name` field, type the **exact name** of the bookmark you want to change.
  3. Fill in **only the fields you want to update** (e.g., `new_category` to move it, or `new_url` to fix a link). Leave the other "new_" fields blank.
  4. Click the green "Run workflow" button.

### 3. To Delete a Bookmark
- **Workflow**: `Delete Existing Bookmark`
- **How to use**:
  1. Click **"Run workflow"**.
  2. In the `name` field, type the **exact name** of the bookmark you want to delete.
  3. Click the green "Run workflow" button.

After running any workflow, it will take a minute to complete. The workflow automatically updates your data and rebuilds the page.

### Manually Editing Other Content
To add or change commands and notes, you can still edit the `commands.html` and `notes.html` files directly.
