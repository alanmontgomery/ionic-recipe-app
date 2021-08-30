import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonList, IonNote, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar, useIonLoading, useIonViewDidEnter } from "@ionic/react"
import { useState } from "react";
import { useRef } from "react";
import styles from "./Categories.module.scss";
import { performSearch } from "../utils";
import { RecipeListItem } from "../components/RecipeListItem";

const Search = () => {

    const searchRef = useRef();
    const [ searchResults, setSearchResults ] = useState([]);
    const [ showLoader, hideLoader ] = useIonLoading();

    useIonViewDidEnter(() => {

		searchRef.current.setFocus();
	});

    const search = async () => {

        showLoader({
            cssClass: "customLoader",
            message: "Searching...",
            duration: 9999999,
            spinner: "dots"
        });

        const searchTerm = searchRef.current.value;
        const data = await performSearch(searchTerm);

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
                    <IonButtons slot="start">
                        <IonBackButton color="main" text="Categories" />
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
                                <RecipeListItem recipe={ recipe } key={ `result_${ index }` } fromSearch={ true } />
                            );
                        })}
                    </IonList>
                }

                { searchResults.length < 1 &&
                
                    <>
                        <IonRow className="ion-justify-content-center ion-text-center ion-margin-top ion-padding-top">
                            <IonCol size="8">
                                <IonText>
                                    Search for a recipe then select from the list to view it
                                </IonText>

                                <IonNote>
                                    <p>For development purposes, only 20 results will be returned</p>
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

export default Search;