import { IonBackButton, IonButtons, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { RecipeListItem } from '../components/RecipeListItem';
import { recipes } from '../recipes';

const Category = () => {

    const { name } = useParams();
    const [ categoryRecipes, setCategoryRecipes ] = useState([]);

    useEffect(() => {

        setCategoryRecipes(recipes[name.toLowerCase()].hits);
    }, [ name ]);

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
                            <RecipeListItem recipe={ recipe } key={ `recipe_${ index }` } />
                        );
                    })}
                </IonList>
			</IonContent>
		</IonPage>
	);
};

export default Category;
