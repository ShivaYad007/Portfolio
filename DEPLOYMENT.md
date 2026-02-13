# Quick Deployment Commands

# 1. Initialize Git (if not already done)
git init
git add .
git commit -m "Initial commit: Portfolio website"

# 2. Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# 3. Push to GitHub
git branch -M main
git push -u origin main

# After pushing, GitHub Actions will automatically deploy your site!
# Your portfolio will be live at: https://YOUR_USERNAME.github.io/Portfolio/

# For future updates:
git add .
git commit -m "Update portfolio"
git push
