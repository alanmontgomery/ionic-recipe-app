import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonList, IonPage, IonRow, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { Ingredient } from '../components/Ingredient';
import IngredientsModal from '../components/IngredientsModal';
import NutritionModal from '../components/NutritionModal';
import styles from "./Recipe.module.scss";

const Recipe = () => {

	const pageRef = useRef();
	const { state } = useLocation();
	const [ recipe, setRecipe ] = useState([]);
	const [ fromSearch, setFromSearch ] = useState(false);

	const handleDismissIngredientsModal = () => {

		hideIngredientsModal();
	}

	const handleDismissNutritionModal = () => {

		hideNutritionModal();
	}

	const [ showIngredientsModal, hideIngredientsModal ] = useIonModal(IngredientsModal, {

		dismiss: handleDismissIngredientsModal,
		ingredients: recipe.ingredients
	});

	const [ showNutritionModal, hideNutritionModal ] = useIonModal(NutritionModal, {

		dismiss: handleDismissNutritionModal,
		recipe
	});

	useEffect(() => {

		if (state && state.recipe) {

			setRecipe(state.recipe);
		}

		if (state && state.fromSearch) {

			setFromSearch(state.fromSearch);
		}
	}, [ state ]);

	console.log(recipe);

	return (
		<IonPage ref={ pageRef }>
			<IonHeader>
				<IonToolbar>
					<IonTitle>View Recipe</IonTitle>
					<IonButtons slot="start">
						<IonBackButton text={ fromSearch ? "Search" : "Recipes" } color="main" />
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>

				<div className={ styles.headerImage }>
					<img src={ recipe.image } alt="main cover" />
					<div className={ `${ styles.headerInfo } animate__animated animate__slideInLeft` }>
						<h1>{ recipe.label }</h1>
						<p>{ recipe.dishType && recipe.dishType[0] }</p>
					</div>
				</div>

				<IonGrid>

					<IonRow className="ion-text-center">
						<IonCol size="6">
							<IonButton color="main" onClick={ () => showIngredientsModal({
								
								presentingElement: pageRef.current,
								cssClass: "customModal"
							})}>
								<IonIcon icon={ informationCircleOutline } />&nbsp;
								View Ingredients
								</IonButton>
						</IonCol>
						<IonCol size="6">
							<IonButton color="main" onClick={ () => showNutritionModal({
								
								presentingElement: pageRef.current,
								cssClass: "customModal"
							})}>
								<IonIcon icon={ informationCircleOutline } />&nbsp;
								View Nutrition
								</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Recipe;
