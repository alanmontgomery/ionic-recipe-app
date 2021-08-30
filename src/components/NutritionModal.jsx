import { IonButton, IonButtons, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import NutritionalFact from "./NutritionalFact";

const NutritionModal = ({ dismiss, recipe }) => {

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>View Nutrition</IonTitle>
                    <IonButtons slot="start">
                        <IonButton color="main" onClick={ dismiss }>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>

                { (recipe && recipe.digest) &&
				
					<IonGrid>
						<IonRow>
							<IonCol size="12">
								<IonCardSubtitle className="ion-text-center" color="main">
									Based on a serving size of { recipe.totalWeight.toFixed(0) }g
								</IonCardSubtitle>
								<NutritionalFact type="calories" amount={ recipe.calories.toFixed(0) } />
								<NutritionalFact type="fat" amount={ recipe.digest[0].total.toFixed(0) } />
								<NutritionalFact type="trans_fat" amount={ recipe.digest[0].sub[1].total.toFixed(0) } inset={ true } />
								<NutritionalFact type="saturated_fat" amount={ recipe.digest[0].sub[0].total.toFixed(0) } inset={ true } />
								<NutritionalFact type="polyunsaturated_fat" amount={ recipe.digest[0].sub[3].total.toFixed(0) } inset={ true } />
								<NutritionalFact type="monounsaturated_fat" amount={ recipe.digest[0].sub[2].total.toFixed(0) } inset={ true } />
								<NutritionalFact type="carbs" amount={ recipe.digest[1].total.toFixed(0) } />
								<NutritionalFact type="sugar" amount={ recipe.digest[1].sub[2].total.toFixed(0) } inset={ true } />
								<NutritionalFact type="fibre" amount={ recipe.digest[1].sub[1].total.toFixed(0) } inset={ true } />
								<NutritionalFact type="sugars_added" amount={ recipe.digest[1].sub[3].total.toFixed(0) } inset={ true } />
								<NutritionalFact type="protein" amount={ recipe.digest[2].total.toFixed(0) } />
							</IonCol>
						</IonRow>
					</IonGrid>
				}
            </IonContent>
        </IonPage>
    );
}

export default NutritionModal;