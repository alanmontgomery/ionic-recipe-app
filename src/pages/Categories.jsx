import { useEffect, useState } from "react";
import { IonButton, IonButtons, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import styles from "./Categories.module.scss";
import { recipes } from "../recipes";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { bookmarkOutline } from "ionicons/icons";

const Categories = () => {

	const router = useIonRouter();
    const pageRef = useRef();
	const [ recipeCategories, setRecipeCategories ] = useState([]);

	useEffect(() => {

		const getAllRecipes = async () => {

			const tempRecipeCategories = [
				{
					name: "Chicken",
					data: recipes.chicken.hits[0]
				},
				{
					name: "Beef",
					data: recipes.beef.hits[0]
				},
				{
					name: "Fish",
					data: recipes.fish.hits[0]
				},
				{
					name: "Fruit",
					data: recipes.fruit.hits[0]
				},
				{
					name: "Salad",
					data: recipes.salad.hits[0]
				},
				{
					name: "Vegan",
					data: recipes.vegan.hits[0]
				}
			];

			setRecipeCategories(tempRecipeCategories);
		}

		getAllRecipes();
	}, []);

	return (
		<IonPage ref={ pageRef }>
			<IonHeader className="ion-no-border">
                <IonToolbar className="ion-no-border">
                    <IonTitle>Recipe Categories</IonTitle>

                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon icon={ bookmarkOutline } />
                        </IonButton>
                    </IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
                <div className={ styles.searchArea }>
                    <IonSearchbar className="ion-justify-content-center" placeholder="Try 'Chicken Piccata'" onClick={ () => router.push("/search") } />
                </div>

				<IonGrid>
					<IonRow className={ styles.row }>
						{ recipeCategories.map((category, index) => {

							const { name, data } = category;
							const { recipe } = data;

							return (
                                
                                <IonCol className={ styles.col } size="6" key={ `recipe_${ index }` }>
                                    <Link to={ `/category/${ name }`}>
                                        <img src={ recipe.image } alt="cover" />
                                        <div className={ styles.categoryName }>
                                            <IonCardTitle>{ name }</IonCardTitle>
                                        </div>
                                    </Link>
                                </IonCol>
							);
						})}
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Categories;