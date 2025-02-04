let spacial_offers = [
  {
    id: 1,
    name: "Organic Red Apples (1kg)",
    category: "fruits",
    image: 'https://plus.unsplash.com/premium_photo-1666822816000-bf68f7ce506c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
    image1: 'https://images.unsplash.com/photo-1439127989242-c3749a012eac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
    image2: 'https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
    image3: 'https://plus.unsplash.com/premium_photo-1724249989963-9286e126af81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
    new_price: 2.99,
    old_price: 4.50,
  },
  {
    id: 4,
    name: "Organic Almond Milk",
    category: "healthy",
    image: 'https://images.unsplash.com/photo-1601436423474-51738541c1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxtb25kJTIwTWlsa3xlbnwwfHwwfHx8MA%3D%3D',
    image1: 'https://plus.unsplash.com/premium_photo-1693118931226-54167a9c6c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWxtb25kJTIwTWlsa3xlbnwwfHwwfHx8MA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1505576540771-be91e4753e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFsbW9uZCUyME1pbGt8ZW58MHx8MHx8fDA%3D',
    image3: 'https://images.unsplash.com/photo-1601436423474-51738541c1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxtb25kJTIwTWlsa3xlbnwwfHwwfHx8MA%3D%3D',
    new_price: 4.99,
    old_price: 6.50,
  },
  {
    id: 5,
    name: "Organic Quinoa",
    category: "fruits",
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww',
    image1: 'https://plus.unsplash.com/premium_photo-1664304188646-47b168d698aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuYW5hfGVufDB8fDB8fHww',
    image2: 'https://plus.unsplash.com/premium_photo-1664304188646-47b168d698aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuYW5hfGVufDB8fDB8fHww',
    image3: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuYW5hfGVufDB8fDB8fHww',
    new_price: 5.99,
    old_price: 7.75,
  },
  {
    id: 6,
    name: "Organic Honey",
    category: "healthy",
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    image1: 'https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZXl8ZW58MHx8MHx8fDA%3D',
    image2: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    image3: 'https://images.unsplash.com/photo-1555211652-5c6222f971bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbmV5fGVufDB8fDB8fHww',
    new_price: 9.99,
    old_price: 12.99,
  } 
    ];
    
    export default spacial_offers;