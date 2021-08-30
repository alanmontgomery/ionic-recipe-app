import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router';
import styles from "./Recipe.module.scss";

const Recipe = () => {

	const { state } = useLocation();
	const [ recipe, setRecipe ] = useState([]);

	useEffect(() => {

		if (state && state.recipe) {

			setRecipe(state.recipe);
		}
	}, [ state ]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>{ recipe && recipe.label }</IonTitle>
					<IonButtons slot="start">
						<IonBackButton text="Recipes" color="main" />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{recipe && recipe.label}</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonContent>
		</IonPage>
	);
};

export default Recipe;
