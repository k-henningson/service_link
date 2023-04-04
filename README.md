# Coding Test

I have created the skeleton for a basic single page todo list. This app has
no backend, all the data will be cleared on refreshing the page. Your job will
be to 'finish' the app by completing the steps below. There aren't any points
for making the UI look pretty, it's about how well you can apply basic React and Typescript
fundamentals.

### Before You Start:

Everything you need to touch is in the src/look_here folder, the rest of the files can be left alone. This
isn't a 'real' todo list, as you won't be adding and removing todos, you will just be editing them. 

If you end the test being stuck on a problem and were part way through debugging it, leave the evidence.
I would rather see how you were solving the problem than an incomplete solution with no explanation. 
If you think a certain aspect of your solution could be improved upon but you ran out of time, leave a
comment as to what you would have done differently! If you recognise a bug in the code, leave a comment
as to how you would go about fixing it given more time.

### Step 1:

You have been given three todos, and the first one has been hard coded as the 'Selected Todo'. 
You can see how this has been done in the Page.tsx file. The 'Selected Todo' represents a todo
from the todo list that you are EDITING.

Your task is to Make the <button>Save Data</button> button located inside the `SelectedTodo.tsx` file actually
save the data to the todos useState found in `Page.tsx`. This should NOT create a new todo, but propagate
the changes you made out to the corresponding `<TodoListItem/>` in the `<TodoList/>`
If the user does not click <button>Save Data</button> the todos should NOT be updated.

### Step 2:

Now your data is saving, but you can only edit the original 'Selected Todo' (the 0th entry in todos).
The rest can never change, and will always remain as the initial todos. Make it so that when a
user clicks on a `<TodoListItem/>` in the `<TodoList/>`, that todo becomes the `<SelectedTodo/>`. 
There should only be one selected todo at a time, and editing it should edit the corresponding item
in the `<TodoList/>` upon clicking <button>Save Data</button>.

### Bonus:

Now you can click through the 3 items in the todo list and edit each one. The problem is 
that if you are mid-edit and walk away from your computer / switch tabs, you might forget which todo
you are editing. Make whatever todo you are currently editing appear unique in the `<TodoList/>` so
the user never looses track of what they are doing. This doesn't have to be pretty, just add something 
like a thicker border, change the border color etc...
