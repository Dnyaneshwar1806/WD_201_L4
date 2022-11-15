const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
    
    const overdue = () => {
      return all.filter((item)=> {
          return item.completed === false && item.dueDate <= new Date().toLocaleDateString("en-CA")
      })
    }
    const dueToday = () => {
      return all.filter((item)=> {
        return item.dueDate === new Date().toLocaleDateString("en-CA") 
      })
    }
    const dueLater = () => {
      return all.filter((item)=> {
        return item.dueDate >= new Date().toLocaleDateString("en-CA") 
      })
    }
    const toDisplayableList = (list) => {
      let tasklist = [];
      list.forEach((item) => {
        if (item.dueDate === today) {
          if (item.completed === true) {
            tasklist.push(`[x] ${item.title}`)
          } else {
            tasklist.push(`[ ] ${item.title}`)
          }
        }else{
          if (item.completed === true) {
            tasklist.push(`[x] ${item.title} ${item.dueDate}`)
          }else{
            tasklist.push(`[ ] ${item.title} ${item.dueDate}`)
          }
        }
      })
      return tasklist.join("\n")
    }
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
module.exports = todoList;
