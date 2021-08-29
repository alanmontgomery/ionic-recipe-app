import { IonItem, IonLabel } from "@ionic/react";
import styles from "./RecipeListItem.module.scss";

export const RecipeListItem = ({ recipe }) => (

    <IonItem detail={ true } lines="full" className={ styles.categoryItem }>
                                    
        <img src={ recipe.image } alt="cover" className={ styles.categoryImage } />

        <IonLabel className={ styles.categoryDetails }>
            <h2>{ recipe.label }</h2>
            <p>{ recipe.dishType && recipe.dishType[0] }</p>
        </IonLabel>
    </IonItem>
);