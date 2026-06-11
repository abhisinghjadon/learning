async function getData() {
  const input = document.getElementById("inp").value.trim();
  const url = `https://api.api-ninjas.com/v3/recipe?title=${input}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": "eqjpldN1PcbjhBl2ftRyDT5wdBtWy0k7nsfpEJJb",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    Recipe(data);
  } catch (error) {
    console.error("Error : ", error);
  }
}

function Recipe(recipesArray) {
  const container = document.getElementById("display");
  container.innerHTML = "";
  if (!container || !recipesArray || recipesArray.length === 0) return;

  recipesArray.forEach((recipe) => {
    let ingredientsHTML = "";
    if (recipe.ingredients && recipe.ingredients.length > 0) {
      recipe.ingredients.forEach((ing) => {
        ingredientsHTML += `<li><strong>${ing.name}:</strong> ${ing.quantity} ${ing.unit}</li>`;
      });
    }

    let instructionsHTML = "";
    if (recipe.instructions && recipe.instructions.length > 0) {
      recipe.instructions.forEach((step) => {
        instructionsHTML += `<li>${step}</li>`;
      });
    } else {
      instructionsHTML = "<p>No instructions provided.</p>";
    }

    const recipeHTML = `
      <div class="recipe-card" style="background: white;border: 1.5px solid black;margin:50px 10px; padding: 20px; border-radius: 8px; box-shadow: 0 7px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
        <h2 class="recipe-title" style="margin-bottom: 10px; color: #333;"><strong>${recipe.title}</strong></h2>
        <p class="recipe-servings" style="margin-bottom: 15px; color: #666;"><strong>Servings:</strong> ${recipe.servings}</p>
        
        <div class="recipe-ingredients" style="margin-bottom: 15px;">
          <h3><strong>Ingredients</strong></h3>
          <ul style="padding-left: 20px; margin-top: 5px;">
            ${ingredientsHTML}
          </ul>
        </div>
        
        <div class="recipe-instructions" style="margin-bottom: 15px;">
          <h3><strong>Instructions</strong></h3>
          <ol style="padding-left: 20px; margin-top: 5px;">
            ${instructionsHTML}
          </ol>
        </div>
        
        <div class="recipe-nutrition" style="padding-top: 10px; border-top: 1px dashed #ccc; color: #888; font-size: 14px;">
          <p><strong>Nutrition:</strong> ${recipe.nutrition}</p>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", recipeHTML);
  });
}
