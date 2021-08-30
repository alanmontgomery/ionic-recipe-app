import { IonCardTitle, IonCol, IonRow } from "@ionic/react";

const NutritionalFact = ({ type, amount, inset }) => {

    const label = type.replace("_", " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    return (

        <IonRow style={{ borderBottom: "1px solid #242424", padding: "0.5rem" }}>
            <IonCol size="9">
                <IonCardTitle style={{ fontSize: "0.9rem", marginLeft: inset ? "1.5rem" : "" }}>
                    { label }
                </IonCardTitle>
            </IonCol>

            <IonCol size="3">
                <IonCardTitle style={{ fontSize: "0.9rem" }}>
                    { amount }{ type !== "calories" && "g" }
                </IonCardTitle>
            </IonCol>
        </IonRow>
    );
}

export default NutritionalFact;