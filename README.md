# plant_aj
Main plant_aj repository

## Project workflow

We use GitHub Projects and GitHub Issues to organize work.

Issue statuses:
- Draft: issue is created, but it is not ready to be started yet.
- Defined: issue is clearly described and ready to be worked on.
- In Progress: work on the issue is currently in progress.
- In Review: pull request has been created and is waiting for review.
- Done: work is completed and merged.

Basic labels:
- bug: something is not working correctly.
- enhancement: new feature or improvement.
- documentation: changes related to documentation.
- frontend: changes related to the frontend part.
- backend: changes related to the backend part.
- setup: project setup, configuration, CI/CD or workflow-related tasks.

Basic rules:
- Each task should have a GitHub issue.
- Move an issue to Defined when the scope and acceptance criteria are clear.
- Move an issue to In Progress when work starts.
- Move an issue to In Review when a pull request is created.
- Move an issue to Done after the pull request is merged.
- Use labels to describe the type or area of the issue.

## How to obtain the `.env` file from Infisical

0. If you are new to the team, write to @lisciu24 to request access to infisical. You will receive registration link.
1. Log into your account at [app.infisical.com](https://app.infisical.com).
2. Select our project ('plant-aj-app-env') from the dashboard.
3. In the left sidebar, click on **Overview** and select the **Development** environment.
4. Look at the top right corner of the secrets grid. Click on the **Download** icon.
5. A `dev.env` file containing all the keys and values will immediately download to your computer.
6. Move this downloaded file into the root directory of your project repository and ensure it is named exactly `.env`.
