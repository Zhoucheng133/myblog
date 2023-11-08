import datetime
import pyperclip

# 获取当前日期和时间
current_datetime = datetime.datetime.now()

# 格式化日期和时间为指定格式
formatted_datetime = current_datetime.strftime('%Y-%m-%d %H:%M:%S')

# 复制格式化后的日期和时间到剪贴板
pyperclip.copy(formatted_datetime)

# 输出结果
print("已复制到剪贴板:", formatted_datetime)