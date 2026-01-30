// Datos de categorías y subcategorías
const categories = [
    {
        name: "Amor",
        subcategories: ["Romántico", "Intimo"]
    },
    {
        name: "Cristal",
        subcategories: ["Blanco", "Negro"]
    },
    {
        name: "Mamá",
        subcategories: ["Amor", "Cristal"]
    },
    {
        name: "Papá",
        subcategories: ["Amor", "Cristal"]
    },
    {
        name: "Tía",
        subcategories: ["Amor", "Cristal"]
    },
    {
        name: "Tío",
        subcategories: ["Amor", "Cristal"]
    },
    {
        name: "Niña",
        subcategories: ["Amor", "Cristal"]
    },
    {
        name: "Niño",
        subcategories: ["Amor", "Cristal"]
    },
    {
        name: "Gato",
        subcategories: ["Amor", "Cristal"]
    },
    {
        name: "Perro",
        subcategories: ["Amor", "Cristal"]
    },
    {
        name: "Mascota",
        subcategories: ["Amor", "Cristal"]
    },
    {
        name: "Otro",
        subcategories: ["Amor", "Cristal"]
    }
];

// Cargar categorías y subcategorías
const categorySelect = document.getElementById("category-select");
const subcategorySelect = document.getElementById("subcategory-select");

function loadCategories() {
    const categoryList = document.getElementById("category-list");
    categoryList.innerHTML = "";

    categories.forEach((cat, index) => {
        const category = document.createElement("div");
        category.className = "category";
        category.textContent = cat.name;
        category.dataset.index = index;
        category.addEventListener("click", () => {
            loadSubcategories(index);
        });
        categoryList.appendChild(category);
    });
}

function loadSubcategories(categoryIndex) {
    const subcategories = categories[categoryIndex].subcategories;
    subcategorySelect.innerHTML = "";
    subcategorySelect.disabled = false;

    subcategories.forEach(subcat => {
        const option = document.createElement("option");
        option.value = subcat;
        option.textContent = subcat;
        subcategorySelect.appendChild(option);
    });
}

// Cargar categorías al cargar la página
loadCategories();

// Subir video
document.getElementById("upload-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("video-title").value;
    const file = document.getElementById("video-file").files[0];
    const category = document.getElementById("category-select").value;
    const subcategory = document.getElementById("subcategory-select").value;

    if (title && file && category && subcategory) {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";

        const videoImg = document.createElement("img");
        videoImg.src = URL.createObjectURL(file);

        const videoTitle = document.createElement("h3");
        videoTitle.textContent = title;

        videoCard.appendChild(videoImg);
        videoCard.appendChild(videoTitle);

        document.getElementById("video-list").appendChild(videoCard);

        // Limpiar formulario
        document.getElementById("video-title").value = "";
        document.getElementById("video-file").value = "";
        document.getElementById("category-select").value = "";
        document.getElementById("subcategory-select").value = "";
    }
});
