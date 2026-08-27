# Contributing Guidelines

Thank you for your interest in contributing to this project!

## Code Quality Standards

1. **Conventional Commits:** All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
   - `feat:` A new feature
   - `fix:` A bug fix
   - `docs:` Documentation changes
   - `refactor:` Code refactoring without behavioral change
   - `perf:` Code change that improves performance
   - `ci:` Changes to CI/CD workflows and configuration

2. **Automated Quality Gates:**
   - **Pre-commit:** Husky automatically runs `lint-staged` on staged files.
   - **Pre-push:** Husky validates TypeScript types (`npm run type-check`) and builds the project (`npm run build`).

3. **Pull Request Workflow:**
   - Create a feature branch (`git checkout -b feat/your-feature-name`).
   - Ensure all automated checks pass locally.
   - Open a Pull Request referencing the PR template.
