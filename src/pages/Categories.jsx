import { useEffect, useState } from "react";
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import styles from "./Categories.module.scss";
import { recipes } from "../utils";
import { useRef } from "react";
import { SearchModal } from "../components/SearchModal";
import { Link } from "react-router-dom";

const Categories = () => {

    const pageRef = useRef();
	const [ recipeCategories, setRecipeCategories ] = useState([]);
    
    const handleDismiss = () => {

        dismissModal();
    };

    const [ presentModal, dismissModal ] = useIonModal(SearchModal, {

        onDismiss: handleDismiss
    });

	useEffect(() => {

		const getAllRecipes = async () => {

			// const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=vegan&app_id=ea1d37d5&app_key=fd382a172ba8d6668c0430dc9c14a181");
			// const data = await response.json();
			// console.log(data);

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
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
                <div className={ styles.searchArea }>
                    <IonSearchbar className="ion-justify-content-center" placeholder="Try 'Chicken Piccata'" onClick={ e => presentModal({
                        presentingElement: pageRef.current,
                        onDidDismiss: dismissModal,
                        cssClass: "customModal"
                    })} />
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