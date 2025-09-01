import os
import re

directory = "docs/dev/flutter"  # 改成你的目录
base_link = "/dev/flutter"  # 链接前缀

output_list = []

# 收集文件信息
files_info = []
for filename in os.listdir(directory):
    if filename.endswith(".md"):
        file_path = os.path.join(directory, filename)
        with open(file_path, "r", encoding="utf-8") as f:
            first_line = f.readline().strip()
            if first_line.startswith("# "):
                title = first_line[2:].strip()
                name_without_ext = os.path.splitext(filename)[0]
                
                # 提取文件名前面的数字
                match = re.match(r"(\d+)_", name_without_ext)
                number = int(match.group(1)) if match else 0
                files_info.append((number, name_without_ext, title))

# 按数字排序
files_info.sort(key=lambda x: x[0])

# 生成输出列表
for number, name, title in files_info:
    output_list.append(f"{{ text: '{title}', link: '{base_link}/{name}' }},")

# 输出到文件
output_file = os.path.join(directory, "nav_list.js")
with open(output_file, "w", encoding="utf-8") as f:
    f.write("\n".join(output_list))

print(f"Generated nav list with {len(output_list)} items at {output_file}")
