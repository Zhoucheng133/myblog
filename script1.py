import os
import re

# 需要处理的目录
directory = "docs/dev/flutter"

# 遍历目录下所有文件
for filename in os.listdir(directory):
    if filename.endswith(".md"):
        file_path = os.path.join(directory, filename)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # 匹配开头的 YAML front matter
        match = re.match(r"^---\s*\n(.*?)\n---\s*\n", content, re.DOTALL)
        if match:
            front_matter = match.group(1)
            # 提取 title 字段
            title_match = re.search(r"title:\s*(.+)", front_matter)
            if title_match:
                title = title_match.group(1).strip()
                # 替换开头内容为 # title
                new_content = re.sub(r"^---\s*\n(.*?)\n---\s*\n", f"# {title}\n\n", content, count=1, flags=re.DOTALL)
                
                # 写回文件
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Processed: {filename}")
            else:
                print(f"No title found in {filename}")
        else:
            print(f"No front matter found in {filename}")