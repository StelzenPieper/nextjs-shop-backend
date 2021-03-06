import { useState } from "react";
import { useSWRConfig } from "swr";
import { ProductItem, ActionBar } from "./ProductCard.styled";
import { CardButton } from "./Buttons.styled";

export default function ProductCard(props) {
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

function CardModeShow({
  id,
  name,
  price,
  description,
  category,
  tags,
  onEnableEditMode,
}) {
  const { mutate } = useSWRConfig();
  /* const tag = tags.map((tag) => {
    return tag.tags;
  });*/

  return (
    <>
      <ProductItem>
        <h2>Produkt: {name}</h2>
        <p>Preis: {price}€</p>
        <p>Beschreibung: {description}</p>
        <p>Kategorie: {category}</p>
        <p>Tags: {tags}</p>
        <ActionBar>
          <CardButton
            onClick={async () => {
              const response = await fetch("/api/product/" + id, {
                method: "DELETE",
              });
              console.log(await response.json());
              mutate("/api/products");
            }}
            delete
          >
            Delete
          </CardButton>
          <CardButton onClick={onEnableEditMode} edit>
            Edit
          </CardButton>
        </ActionBar>
      </ProductItem>
    </>
  );
}

function CardModeEdit({
  id,
  name,
  price,
  description,
  category,
  tags,
  onDisableEditMode,
}) {
  const [nameValue, setNameValue] = useState(name);
  const [priceValue, setPriceValue] = useState(price);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [categoryValue, setCategoryValue] = useState(category);
  const [tagsValue, setTagsValue] = useState(tags);

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log(
      id,
      nameValue,
      priceValue,
      descriptionValue,
      categoryValue,
      tagsValue
    );

    const response = await fetch("/api/product/" + id, {
      method: "PUT",
      body: JSON.stringify({
        name: nameValue,
        price: priceValue,
        description: descriptionValue,
        category: categoryValue,
        tags: tagsValue,
      }),
    });
    console.log(await response.json());

    onDisableEditMode();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <ProductItem>
        <div>
          <label>Name</label>
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
          <label>Preis</label>
          <input
            type="number"
            name="price"
            label="Price"
            value={priceValue}
            onChange={(event) => {
              setPriceValue(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Beschreibung</label>
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
        <div>
          <label>Kategorie</label>
          <input
            type="text"
            name="category"
            label="Category"
            value={categoryValue}
            onChange={(event) => {
              setCategoryValue(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Tags</label>
          <input
            type="text"
            name="tags"
            label="Tags"
            value={tagsValue}
            onChange={(event) => {
              setTagsValue(event.target.value);
            }}
          />
        </div>
        <CardButton
          type="submit"
          onClick={() => {
            console.log(
              "Save product",
              id,
              name,
              price,
              description,
              category,
              tags
            );
          }}
        >
          Save
        </CardButton>
      </ProductItem>
    </form>
  );
}
