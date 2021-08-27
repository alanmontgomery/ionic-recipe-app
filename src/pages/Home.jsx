import { useEffect, useState } from "react";
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import styles from "./Home.module.scss";
import { recipes } from "../utils";

const Home = () => {

	const [ recipeCategories, setRecipeCategories ] = useState([]);

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

	console.log(recipeCategories);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Recipe Categories</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonGrid>

					<IonRow>
						{ recipeCategories.map((category, index) => {

							const { name, data } = category;
							const { recipe } = data;

							return (
								<IonCol size="6" key={ `recipe_${ index }` }>
									<IonCard routerLink={ `/category/${ name }`}>
										<IonImg src={ recipe.image } alt="cover" />
										<div className={ styles.categoryName }>
											<IonCardTitle>{ name }</IonCardTitle>
										</div>
									</IonCard>
								</IonCol>
							);
						})}
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Home;