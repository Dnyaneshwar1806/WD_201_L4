const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueLater, dueToday } = todoList();

describe("Todolist test Suite", () => {
   
  beforeAll(() => {
    add(
      {
        title: "test todo",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA")
      }
    );
  })
   test("Should add new todo", () => {
     const todoItemsCount = all.length;
    add(
      {
        title: "test todo",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA")
      }
    );
    expect(all.length).toBe(todoItemsCount + 1 );
  });
  
  test("Should mark a to do as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  
  test("Should check over due items", () => {
    expect(overdue().length).toBe(1);
  });
  
  test("Should check due Today items ", () => {
    expect(dueToday().length).toBe(2);
  });
  
  test("Should check due later items", () => {
    expect(dueLater().length).toBe(2);
  });
}) 
