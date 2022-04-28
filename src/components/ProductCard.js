import { useState } from "react";
import { useSWRConfig } from "swr";
import { ProductItem, ActionBar } from "./ProductCard.styled";

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

  return (
    <>
      <ProductItem>
        <h2>Produkt: {name}</h2>
        <p>Preis: {price}€</p>
        <p>Beschreibung: {description}</p>
        <p>Kategorie: {category}</p>
        <p>Tags: {tags}</p>
        <ActionBar>
          <button
            onClick={async () => {
              const response = await fetch("/api/product/" + id, {
                method: "DELETE",
              });
              console.log(await response.json());
              mutate("/api/products");
            }}
          >
            Delete
          </button>
          <button onClick={onEnableEditMode}>Edit</button>
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
  const { mutate } = useSWRConfig();

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

    mutate("/api/products");

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
        <button
          type="submit"
          onClick={() => {
            console.log(
              "Delete product",
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
        </button>
      </div>
    </form>
  );
}
