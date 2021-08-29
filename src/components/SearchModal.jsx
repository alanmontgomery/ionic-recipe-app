import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonList, IonNote, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonLoading, useIonViewDidEnter } from "@ionic/react"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styles from "../pages/Categories.module.scss";
import { RecipeListItem } from "./RecipeListItem";

export const SearchModal = ({ onDismiss }) => {

    const searchRef = useRef();
    const [ searchResults, setSearchResults ] = useState([]);
    const [ showLoader, hideLoader ] = useIonLoading();

    useEffect(() => {
        searchRef.current.setFocus();
    }, []);

    const search = async () => {

        showLoader({
            cssClass: "customLoader",
            message: "Searching...",
            duration: 9999999,
            spinner: "dots"
        });

        const searchTerm = searchRef.current.value;

        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ searchTerm }&app_id=ea1d37d5&app_key=fd382a172ba8d6668c0430dc9c14a181`);
		const data = await response.json();

        setSearchResults(data.hits);

        setTimeout(() => {
            
            hideLoader();
        }, 300);
    }

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Search Recipes</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={ onDismiss }>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className={ styles.searchArea }>

                    <IonGrid>
                        <IonRow>
                            <IonCol size="9">
                                <IonSearchbar ref={ searchRef } placeholder="Try 'Chicken Piccata'" />
                            </IonCol>
                            <IonCol size="3">
                                <IonButton className={ styles.searchButton } expand="block" color="main" onClick={ search }>Search</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>

                { searchResults.length > 0 && 
                    <IonList>
                        { searchResults.map((result, index) => {

                            const { recipe } = result;

                            return (
                                <RecipeListItem recipe={ recipe } key={ `result_${ index }` } />
                            );
                        })}
                    </IonList>
                }

                { searchResults.length < 1 &&
                
                    <>
                        <IonRow className="ion-justify-content-center ion-text-center ion-margin-top ion-padding-top">
                            <IonCol size="8">
                                <IonNote>
                                    Search for a recipe then select from the list to view it
                                </IonNote>
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-justify-content-center">
                            <IonCol size="8">
                                <IonImg src="/assets/placeholder.png" />
                            </IonCol>
                        </IonRow>
                    </>
                }
            </IonContent>
        </IonPage>
    );
}