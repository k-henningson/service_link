# Coding Test

Everything you need to touch is in the src/look_here folder. Everything else can be left alone.

I have created the skeleton for a basic single page todo list. This app has
no backend, all the data will be cleared on refreshing the page. Your job will
be to 'finish' the app by completing the steps below. There aren't any points
for making the UI look pretty, it's about how well you can apply basic React and Typescript
fundamentals.

## Step 1:

You have been given three initial todos, and the first one has been hard coded as the 'Selected Todo'. You can see this
in the Page.tsx file.

Your task is to Make the <button>Save Data</button> button located inside the SelectedTodo.tsx file actually
save the data to the todos state found in Page.tsx. If the user does not click <button>Save Data</button>
the todos should not be updated.

## Step 2:

Now your data is saving, but you can only edit the original 'Selected Todo' (the 0th entry in todos).
The rest can never change, and will always remain as the initial todos. Make it so that when a
user clicks on a TodoListItem in the TodoList, that todo becomes the Selected Todo. There should
only be one selected Todo at a time, and editing it should edit the corresponding item
in the todo list upon clicking <button>Save Data</button>.

## Bonus:

If the SelectedTodo is mid-edit (changed from its state in the TodoList) and a user clicks
on another item in the TodoList, make a warning appear on the screen. If the user wants to
abandon their changes the action goes through, and the clicked item becomes the selected todo
as if the warning was never there (the warning should be cleared). If they decide they
don't want to lose these changes they can cancel the action, and go back to editing the todo.