import os
import re

def add_content_to_md_files(directory):
    # 获取目录下的所有文件和子目录
    for root, dirs, files in os.walk(directory):
        for file_name in files:
            # 检查文件是否以.md结尾
            if file_name.endswith(".md") and not file_name.startswith('_index'):
                file_path = os.path.join(root, file_name)
                # 打开文件并添加内容
                with open(file_path, 'r+', encoding='utf-8') as file:
                    # content = file.read()
                    # a=content.split('\n')
                    parts = file_name.split('_')[1]
                    parts = parts.split('.md')[0]
                    # a.insert(2, "weight: "+parts+"\n")
                    # file.write(content)
                    lines=file.readlines()
                    for idx, line in enumerate(lines):
                        if line.strip().startswith('#'):
                            del lines[idx]
                            break
                    lines.insert(2, "title: "+parts+"\n")
                    file.seek(0)
                    file.writelines(lines)
                    file.truncate()


# 调用函数并传入目录路径
add_content_to_md_files("content/dev/css")