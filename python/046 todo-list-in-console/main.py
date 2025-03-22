todos = []

while True:
    task = input("Add task (or 'exit'): ")
    if task == 'exit':
        break
    todos.append(task)

print("Your Tasks:")
for i, t in enumerate(todos, 1):
    print(f"{i}. {t}")

print("Goodbye!")