class tarefas():
  def __init__(self):
    self.tasks = []

  def addTask(self,nome):
    self.tasks.append({"nome" : nome, "concluida": 0})

  def completeTask(self,index):
    self.tasks[index]["concluida"] = 1

  def listTask(self,index):
    print(self.tasks[index])

t = tarefas()
t.addTask("aassaas")
t.listTask(0)
t.completeTask(0)
t.listTask(0)