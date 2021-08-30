import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { Ingredient } from "./Ingredient";

const IngredientsModal = ({ dismiss, ingredients}) => {

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>View Ingredients</IonTitle>
                    <IonButtons slot="start">
                        <IonButton color="main" onClick={ dismiss }>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
				<IonList>
					{ ingredients.map((ingredient, index) => {

						return <Ingredient key={ `ingredient_${ index }` } ingredient={ ingredient } />;
					})}
				</IonList>
            </IonContent>
        </IonPage>
    );
}

export default IngredientsModal;