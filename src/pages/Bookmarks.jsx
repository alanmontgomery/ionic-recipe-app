import { IonBackButton, IonButtons, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RecipeListItem } from '../components/RecipeListItem';

import { useStoreState } from "pullstate";
import { BookmarkStore } from '../store';
import { getBookmarks } from '../store/Selectors';

const Bookmarks = () => {

	const bookmarks = useStoreState(BookmarkStore, getBookmarks);

	console.log(bookmarks);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Categories" />
                    </IonButtons>
					<IonTitle>Bookmarks</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Bookmarks ({ bookmarks.length })</IonTitle>
					</IonToolbar>
				</IonHeader>

                <IonList>
                    { bookmarks.map((bookmark, index) => {

                        return (
                            <RecipeListItem recipe={ bookmark } key={ `recipe_${ index }` } fromBookmarks={ true } />
                        );
                    })}
                </IonList>
			</IonContent>
		</IonPage>
	);
};

export default Bookmarks;
