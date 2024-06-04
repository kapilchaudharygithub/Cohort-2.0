# What is a Version Control System?

**Version control**, also known as **Source Control**, is the process of tracking and managing software code changes.

---

## Famous VCS

- Git (Most famous)
- Apache Subversion
- Piper (Used by Google)

---

# Setup

## Configuring User Information Used Across All Local Repositories

```bash
git config --global user.name “[firstname lastname]”
```
*Set a name that is identifiable for credit when reviewing version history.*

```bash
git config --global user.email “[valid-email]”
```
*Set an email address that will be associated with each history marker.*

```bash
git config --global color.ui auto
```
*Set automatic command line coloring for Git for easy reviewing.*

---

### Common Commands

```bash
mkdir <directory_name>  # Make directory
cd <directory_name>     # Change directory
code .                  # Open in VS Code
```

### Extension to Use

- Git Graph

---

## Initialize Git Inside the Current Directory

```bash
git init
```

---

# Tracking Files

## File Status Symbols in VS Code

- `U`: Untracked

## Start File Tracking

```bash
git add <file_name>
git add .  # Add all files
```

## Viewing Changes

```bash
git diff
```

## Removing Files from Version Control

```bash
git rm [-f or --cached] <file_path>
```
- `--cached`: Keep the file but remove it from tracking
- `-f`: Force removal

---

# Commit Changes and Commit History in Git

Commit changes over time and track them.

## What are Commits?

New changes added over time, committed with a user-friendly message.

```bash
git commit -m "Message Of Commit"
```

## Viewing Commit History

```bash
git log
```
Provides:
- Unique commit ID
- Author (username & email)
- Date & Time
- Commit Message

```bash
git log --oneline  # Show logs in short format
```

## Viewing Changes in a Specific File

```bash
git blame <file_path>
```

## Viewing Status of Changes After Commit

```bash
git status
```

---

# Staging Area

Changes are staged here; commits only happen in the staging area.

```bash
git add .
```

**Git Flow**

Local File ---> Staging Area ---> Commit

---

# Reverting Back

Mechanism to revert from faulty code to an older version. Git uses a linked list with the head pointing to the latest version/commit.

## Changing Head from Latest Faulty to Previous Working Version

```bash
git reset --hard <old_commit_id>
git push -f
```

### Problem 

Losing faulty commits due to linear flow.

## Reverting Changes in a File

Reverts the changes: if something is added, it deletes it, and vice-versa.

```bash
git revert <file_path>
```

---

# Working in a Team on the Same Project

Single Source of Truth: Push and pull changes in the same project. Can be done on any remote/public server and maintain history on the cloud.

- GitLab
- GitHub
- BitBucket

---

# GitHub

- It is a Git server and also provides a UI.

## Adding Remote to GitHub

```bash
git remote add origin <address>
```

## Check Remote Version

```bash
git remote -v
```

## Push Changes

```bash
git push -u origin main  # Push to the main branch
```

## Check Branch

```bash
git branch
```

## Add New Branch

```bash
git branch <branch_name>
```

## Switch to Another Branch

**Way 1**

```bash
git checkout <branch_name>
```

**Way 2**

```bash
git checkout -b <branch_name>
```

## Creating Branch on Remote

```bash
git push --set-upstream origin <branch_name>
```

## Merge New Branch to Main

**Steps:**

1. Go to the main branch
2. Check branch
3. Merge

```bash
git checkout main
git branch
git merge origin/<new_branch_name>
git push
```

**Alternative Way**

Create a new pull request:
1. Compare: From branch
2. Base: To branch
3. Add title, description
4. Go to file changes -> conversation -> click merge (on server)

```bash
git checkout main
git pull  # Sync with server
```

### Branching Name Convention

- Feature: `feat/featureName`
- Bug fix: `bug/bug_name`
- Work in progress: `wip/workName`
- Experiment: `junk/random` (throwaway branch created to experiment)

### Rebase

Maintain history well but increases commit history; done in special cases only.

```bash
git rebase <branch_name>
git push
```

### Git Stash

Get temporary code changes on remote without adding new changes to remote from local.

```bash
git stash
git pull
git stash apply
```