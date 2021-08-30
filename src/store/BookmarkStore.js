import { Store } from "pullstate";

const BookmarkStore = new Store({
    
    recipes: []
});

export default BookmarkStore;

export const addToBookmarks = (passedRecipe) => {
    
    BookmarkStore.update(s => {

        if (s.recipes.find(recipe => recipe === passedRecipe)) {
            s.coffee_ids = s.recipes.filter(recipe => recipe !== passedRecipe);
        } else {
            s.recipes = [ ...s.recipes, passedRecipe ];
        }
    });
}
