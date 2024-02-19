# It's time to Git Gud

## Let's say we're on branch `feature-1` and you run into a difficult error

- Stop making changes and commit!
  - `git commit -m "Starting to debug <some error here>"`
- Move to a new branch
  - `git checkout -b debug-feature-1-error-name`
- Make changes and break everything with no fear!

## Uh oh, we made things much worse, time to try again

- Make sure to commit this branches changes
  - `git add .`
  - `git commit -m "Still not working, trying a different approach"`
  - `git push`
- Checkout your original branch
  - `git checkout feature-1`
- Try again on a new branch
  - `git checkout -b debug-feature-1-error-name-part-2`

## Once you solve your bug, update the original branch

- Make sure to commit this branches changes
  - `git add .`
  - `git commit -m "Fixed the error"`
  - `git push`
- Checkout your original branch
  - `git checkout feature-1`
- Then merge!
  - `git merge debug-feature-1-error-name-part-32`
  - `git push`
