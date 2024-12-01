# Grocery Bud

Grocery Bud is a simple grocery list management application built with **React**.

---

## Features

-   **Add Items**: Add items to your grocery list.
-   **Mark as Completed**: Check off items as you shop to track your progress.
-   **Remove Items**: Remove items from the list when they're no longer needed.
-   **Persistent Storage**: Your data is saved in the browser's local storage, so your list remains intact even after you close the app.

---

# Grocery Bud Architecture and Components

## Application Architecture

Grocery Bud's core architectural features are:

-   **State Management**: Implemented using React's Context API for centralized state sharing across components.
-   **Data Persistence**: Browser local storage ensures that the grocery list remains intact between sessions.

---

## Component Breakdown

### 1. **Root Layout**

-   Defines the app's overall structure and layout.
-   Applies global styles and fonts to maintain a consistent theme.

---

### 2. **GroceryBud**

-   Serves as the main entry point for the application.
-   Wraps all other components within the `GroceryBudContextProvider` to manage shared state.

---

### 3. **Context API**

The `GroceryBudContext` handles all state management:

-   **State**: Maintains an array of grocery items, where each item has:

    -   `id`: A unique identifier.
    -   `name`: The name of the grocery item.
    -   `completed`: A flag to indicate completion status.

-   **Methods**:
    -   `addItem`: Adds a new item to the list.
    -   `removeItem`: Deletes an item from the list.
    -   `editItem`: Toggles the completion status of an item.

---

### 4. **Form Component**

-   Allows users to input and add items to the grocery list.
-   **Functionality**:
    -   Manages input state using `useState`.
    -   Clears the input field upon submission.

---

### 5. **ItemList Component**

-   Displays all the items in the grocery list.
-   **Data Flow**: Fetches data from the `GroceryBudContext`.
-   Renders each item using the `Item` component.

---

### 6. **Item Component**

-   Represents a single grocery item in the list.
-   **Features**:
    -   Displays the item's name.
    -   Includes a checkbox to mark items as completed.
    -   Provides a delete button to remove the item.

---

### 7. **Utilities**

Utility functions for managing local storage:

-   `setLocalStorage`: Saves the current state to local storage.
-   `getLocalStorage`: Loads the saved state when the app starts.

---

## State Flow

1. The `GroceryBudContextProvider` initializes the state with data retrieved from local storage.
2. User actions such as adding, editing, or removing items update the state via the context methods.
3. Changes in state are shared across all components using React Context.
4. The updated state is persisted back to local storage to maintain data integrity across sessions.
