function NamGen() {
    const TechStartup = ["OpenAI", "Stripe", "Airbnb", "SpaceX", "Nuro"];
    const eCommerce = ["Amazon", "eBay", "Shopify", "Flipkart", "AliExpress"];
    const fashionBrand = ["Zara", "H&M", "Gucci", "Nike", "Adidas"];
    const aiTool = ["ChatGPT", "DALL·E", "Midjourney", "Claude", "Jasper"];
    const gameStudio = ["Epic Games", "Valve", "Ubisoft", "Rockstar Games", "Naughty Dog"];
  
    const userInput = document.getElementById("inputbox1").value.trim().toLowerCase();
  
    let randomName = "";
  
    if (userInput === "tech startup") {
      randomName = TechStartup[Math.floor(Math.random() * TechStartup.length)];
    } else if (userInput === "e-commerce") {
      randomName = eCommerce[Math.floor(Math.random() * eCommerce.length)];
    } else if (userInput === "fashion brand") {
      randomName = fashionBrand[Math.floor(Math.random() * fashionBrand.length)];
    } else if (userInput === "ai tool") {
      randomName = aiTool[Math.floor(Math.random() * aiTool.length)];
    } else if (userInput === "game studio") {
      randomName = gameStudio[Math.floor(Math.random() * gameStudio.length)];
    } else {
      randomName = "Please select a valid category!";
    }
    document.getElementById("inputbox1").value = randomName;
}  