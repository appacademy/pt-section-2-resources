# Python Environment Management + Testing

## Environment Management

### Dependency Management

- `pip` == `npm --global` -> globally install a package on your computer
- Ideally, dependencies should be isolated to a specific project
- To that end, we'll be using pipenv to create virtual environments for individual projects
  - `venv` akin to `node_modules` in JS
  - `Pipfile` akin to a `package.json` in JS


## Testing

- 2 common Python testing frameworks
  - unittest
    - built-in to Python
  - pytest
    - Install globally with `pip install -U pytest`