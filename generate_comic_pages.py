import os

# Path to the comics folder
comics_dir = "assets/img/dumb comics"
output_dir = "projects/weekly-comic-pages"

# Make sure output directory exists
os.makedirs(output_dir, exist_ok=True)

for folder in os.listdir(comics_dir):
    folder_path = os.path.join(comics_dir, folder)
    if os.path.isdir(folder_path):
        # Format title: replace "-" with " "
        title = folder.replace("-", " ")
        # Output markdown file path
        md_path = os.path.join(output_dir, f"{folder}.md")
        # Markdown content
        content = f"""---
layout: comic
title: "{title}"
comic: "{folder}"
permalink: /projects/weekly-comic-pages/{folder}
---
"""
        # Write the file
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(content)

print("Comic pages generated!")