import { Store } from "pullstate";

const BookmarkStore = new Store({
    
    recipes: []
});

export default BookmarkStore;

export const addToBookmarks = (passedRecipe) => {

    const currentBookmarks = BookmarkStore.getRawState().recipes;
    const added = !currentBookmarks.includes(passedRecipe);

    BookmarkStore.update(s => {

        if (currentBookmarks.includes(passedRecipe)) {
            
            s.recipes = currentBookmarks.filter(bookmark => bookmark !== passedRecipe);
        } else {
            
            s.recipes = [ ...s.recipes, passedRecipe ];
        }
    });

    return added;
}
