import { useState } from "react";
import { useSWRConfig } from "swr";
import { CategoryItem, ActionBar } from "./CategoryCard.styled";

export default function CategoryCard(props) {
  const [isEditMode, setIsEditMode] = useState(false);

  function enableEditMode() {
    setIsEditMode(true);
  }

  function disableEditMode() {
    setIsEditMode(false);
  }

  return (
    <>
      {isEditMode ? (
        <CardModeEdit {...props} onDisableEditMode={disableEditMode} />
      ) : (
        <CardModeShow {...props} onEnableEditMode={enableEditMode} />
      )}
    </>
  );
}

function CardModeShow({ id, name, description, onEnableEditMode }) {
  const { mutate } = useSWRConfig();

  return (
    <>
      <CategoryItem>
        <h2>Kategorie: {name}</h2>
        <p>Beschreibung: {description}</p>
        <ActionBar>
          <button
            onClick={async () => {
              const response = await fetch("/api/category/" + id, {
                method: "DELETE",
              });
              console.log(await response.json());
              mutate("/api/categories");
            }}
          >
            Delete
          </button>
          <button onClick={onEnableEditMode}>Edit</button>
        </ActionBar>
      </CategoryItem>
    </>
  );
}

function CardModeEdit({ id, name, description, onDisableEditMode }) {
  const [nameValue, setNameValue] = useState(name);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const { mutate } = useSWRConfig();

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log(id, nameValue, descriptionValue);

    const response = await fetch("/api/category/" + id, {
      method: "PUT",
      body: JSON.stringify({
        name: nameValue,
        description: descriptionValue,
      }),
    });
    console.log(await response.json());

    mutate("/api/categories");

    onDisableEditMode();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <div>
          <input
            type="text"
            name="name"
            label="Name"
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            label="Description"
            value={descriptionValue}
            onChange={(event) => {
              setDescriptionValue(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            console.log("Save category", id, name, description);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
}
