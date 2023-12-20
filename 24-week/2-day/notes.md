# Git branches and your project(s)

- Don't do all you work on the main branch
  - Most of you will set up Render to re-deploy your app each time there's a push to the `main` branch. Doing all of your work on `main` will cause you to run out of the free-tier build minutes and then you'll have to start paying for Render if you want your projects to work. (Also consider not enabling that feature)
- If you don't get practice with git branches, you are going to have a bad time in the group project.

![bad time meme](image.png)

- Git and version control are legitimate skills employers are looking for - take this opportunity to make yourself more employable
- Git commands to know:
  - git branch
    - list all local branches, indicates the active branch with an asterisk
  - git checkout `branch`
    - Switches active branch
  - git merge `some-other-branch`
    - Merges that other branch into the active branch