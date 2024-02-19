import React from "react";
import { useState, useEffect } from "react";

import HelloContent from "./HelloContent";
import Players from "./Players";
import Players02 from "./Players02";

import ListKey from "./ListKey";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Counter from "./Counter";
import apiRequest from "./apiRequest";

export default function HelloWorld() {
  
  const myNameVar = "var-one";

  const itemArray = ["rice", "chicken", "coockies"];

  const propsVal = "Prop_Sample";

  const players = [
    { name: "Lebron James", number: 23 },
    { name: "Michael Jordan", number: 23 },
    { name: "Kobe Bryant", number: 8 },
  ];

  // List and Key
  // List and Key
  // List and Key
  const [items, setItems] = useState( [] );

      // option 1
      // useState default value
      // [
      //   { id: 1, checked: false, item: "TOTO 01" },
      //   { id: 2, checked: true, item: "TOTO 02" },
      //   { id: 3, checked: false, item: "TOTO 03" },
      // ]
      
      // option 2
      // useState JSON
      // JSON.parse( localStorage.getItem('shoppinglist') || [] )

  
      
  // USEEFFECT
  // USEEFFECT
  // USEEFFECT
  console.log("before useEffect");

  //option 1 - useEffect w/ local
  // useEffect( () => {       
  //   localStorage.setItem('shoppinglist', JSON.stringify(items)); 
  // }, [items] )

  //option 2 - useEffect w/ fetch API DATA + json server
  const API_URL = 'http://localhost:3500/itemsdb';
  const [fetchError, setFetchError] = useState (null);
  const [isLoading, setIsLoading] = useState (true);
  
  useEffect( () => {       
    const fetchItems = async () => {

      try{
        const response = await fetch(API_URL);   
        //console.log(response);

        if (!response.ok) throw new Error('Did not received expected data');
        
        const listItems = await response.json();

        console.log(listItems);
        
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        //setFetchError(err.stack);
        console.log(err.message)
        setFetchError(err.message);
        setItems([]);
      } finally {
        setIsLoading(false);
      }
      
    }

    setTimeout( ()=> {
      ( async () => await fetchItems() )();
    }, 1000 )
    
  }, [] )

  console.log("after useEffect");


  // HANDLE AREA
  // HANDLE AREA
  // HANDLE AREA
  const handleCheck = async (searchID) => {
    const listItems = items.map( (item) =>
      item.id === searchID ? { ...item, checked: !item.checked } : item
    );
    console.log("list");
    console.log(listItems);
    updateItemList(listItems);
    

    const updateItem = listItems.filter( (item) => 
      item.id === searchID );
    console.log("To update");
    console.log(updateItem[0]);
    console.log(updateItem[0].checked);


    //API - UPDATE
    //API - UPDATE
    //API - UPDATE
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: updateItem[0].checked })
    };
    //console.log(updateOptions);    

    const reqURL = `${API_URL}/${searchID}`;
    console.log("Link"); 
    console.log(reqURL);

    const result = await apiRequest(reqURL, updateOptions);
    if (result) setFetchError(result);
  };




  const handleDelete = async (deleteID) => {
    const listItems = items.filter((item) => item.id !== deleteID);
    updateItemList(listItems);

    const deleteOptions = {
      method: 'DELETE',
    };

    const reqURL = `${API_URL}/${deleteID}`;

    const result = await apiRequest(reqURL, deleteOptions);
    if (result) setFetchError(result);
  };

  // UPDATE ITEM - set & localStorage
  // UPDATE ITEM - set & localStorage
  // UPDATE ITEM - set & localStorage
  const updateItemList = (listItems) => {
    setItems(listItems);
  }

  // AddItem
  // AddItem
  // AddItem
  const [newItem, setNewItem] = useState("");

  const addItem = async (item) => {

    const itemID = items.length ? ( parseInt(items[items.length - 1].id) + 1 ) : 1;    
    // TEST array length or "items"
    console.log(itemID);
    

    const myNewItem = {
      id: `${itemID}`,
      checked: false,
      item,
    };// NEW ITEM TO ADD AS ARRAY
    const listItems = [...items, myNewItem];

    //update 
    updateItemList(listItems);

    //API add item
    const postoptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postoptions);
    if (result) setFetchError(result);
  };


  const handleSubmit = (e) => {    
    e.preventDefault(); //prevent refresh    
    if (!newItem) return; //check if now empty

    addItem(newItem); //function to add newItem
    setNewItem(""); //to clear input field
  };

  // SEARCH
  // SEARCH
  // SEARCH
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
      
      e.preventDefault();
      
      if (!searchItem) return;
  
      //console.log("submitted");
      console.log(searchItem);
      //console.log(searchItem);
  
      //addItem(searchItem);
  
      //searchItem("");    
  };


  return (
    <div>
      <h1>Hello World! {myNameVar}</h1>
      <p>Content Here</p>

      {/* <h1>Foods</h1>
      <ul>
        {itemArray.map((item) => {
          return <li>{item}</li>;
        })}
      </ul> */}
      {/* <HelloContent propsName={propsVal} /> */}

      {/* pass whole props to statefull component*/}
      {/* <Players playerList={players} /> */}

      {/* stateless component */}
      {/* mapping is here in page, component will posting and designing the output only */}
      {/* {players.map((player) => {
        return <Players02 playerName={player.name} playerNum={player.number} />;
      })} */}

      {/* List and Key */}
      {/* List and Key */}
      {/* List and Key */}
      { fetchError && <p>Error: {fetchError}</p> }
      { isLoading 
      ? 
        <p>Loading Items... </p> 
      :   
        items.length < 1 ? (
          "Empty List"
        ) : (
          <ListKey
            items={items.filter( 
              item => ( (item.item).toLowerCase()).includes(searchItem.toLowerCase() )
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )
        
      }
      
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        handleSearch={handleSearch}
      />
      <Counter totalCounter={items.length} />
    </div>
  );
}
