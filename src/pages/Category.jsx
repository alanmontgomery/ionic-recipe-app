import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { recipes } from '../utils';
import styles from "./Category.module.scss";

const Category = () => {

    const { name } = useParams();
    const [ categoryRecipes, setCategoryRecipes ] = useState([]);

    useEffect(() => {

        setCategoryRecipes(recipes[name.toLowerCase()].hits);
    }, [ name ]);

    console.log(name);
    console.log(categoryRecipes);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Categories" />
                    </IonButtons>
					<IonTitle>{ name } Recipes</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{ name } Recipes</IonTitle>
					</IonToolbar>
				</IonHeader>

                <IonList>
                    { categoryRecipes.map((categoryRecipe, index) => {

                            const { recipe } = categoryRecipe;

                            return (
                                <IonItem lines="full" key={ `recipe_${ index }` } className={ styles.categoryItem }>
                                    
                                    <img src={ recipe.image } alt="cover" className={ styles.categoryImage } />

                                    <IonLabel className={ styles.categoryDetails }>
                                        <h2>{ recipe.label }</h2>
                                        <p>{ recipe.dishType && recipe.dishType[0] }</p>
                                    </IonLabel>
                                </IonItem>
                            );
                        })}
                </IonList>
			</IonContent>
		</IonPage>
	);
};

export default Category;
