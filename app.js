var products = [
	{ "name": "Snikers #1", "price": 125.22, "image": "bg-01.jpg", "description": "This is a cool snikers for your sport life" },
	{ "name": "Snikers #2", "price": 180.99, "image": "bg-02.jpg", "description": "This is a cool snikers for your sport life" },
	{ "name": "Snikers #3", "price": 240.00, "image": "bg-03.jpg", "description": "This is a cool snikers for your sport life" },
	{ "name": "Snikers #4", "price": 100.99, "image": "bg-04.jpg", "description": "This is a cool snikers for your sport life" },
	{ "name": "Snikers #5", "price": 125.92, "image": "bg-05.jpg", "description": "This is a cool snikers for your sport life" },
	{ "name": "Snikers #6", "price": 199.22, "image": "bg-06.jpg", "description": "This is a cool snikers for your sport life" },
	{ "name": "Snikers #7", "price": 302.02, "image": "bg-07.jpg", "description": "This is a cool snikers for your sport life" },
	{ "name": "Snikers #8", "price": 145.01, "image": "bg-08.jpg", "description": "This is a cool snikers for your sport life" }
];

{/* <div class="col-lg3 col-md6 mb-2 catalog-item">
	<div class="card" style="width: 18rem;">
	<img class="card-img-top" src=".../100px180/" alt="Card image cap">
	<div class="card-body">
	  <h5 class="card-title">Card title</h5>
	  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	  <a href="#" class="btn btn-primary">Add to cart</a>
	</div>
  </div>
  </div>
*/}

function createNewElement(tagEl, innerContent = null, classStr = null, attr = null) {
	var el = document.createElement(tagEl);
	el.innerHTML = (innerContent) ? innerContent : "";
	el.className = (classStr) ? classStr : "";

	if (attr) {
		attr.map((attr_el) => el.setAttribute(attr_el.name, attr_el.value));
	}

	return el;
}

function createCard(product) {
	var link = createNewElement("a", "Add to cart", "btn btn-primary", [{ "name": "href", "value": "#" }]);
	var p = createNewElement("p", product.description, "card-text");
	var price = createNewElement("p", "Price: " + product.price, "card-text");
	var title = createNewElement("h5", product.name, "card-title");
	var cardBody = attachChildrenToParent(createNewElement("div", null, "card-body"), [title, p, price, link]);

	var image = createNewElement("img", null, "card-img-top", [{ "name": "src", "value": "images/" + product.image }, { "name": "alt", "value": product.name }]);
	var card = attachChildrenToParent(createNewElement("div", null, "card"), [image, cardBody]);

	var catalogItem = attachChildrenToParent(createNewElement("div", null, "col-lg-3 col-md6 mb-2 catalog-item"), [card]);
	return catalogItem;
}

function attachChildrenToParent(html, array_el) {
	array_el.map((el) => html.appendChild(el));
	return html;
}

var innerCatalog = document.getElementById("catalog");
var catalogArray = products.map((catEl) => innerCatalog.appendChild(createCard(catEl)));
console.log(catalogArray.length);


var visPaginations = [
	{ "name": "Previous", "linkPagination": "#" },
	{ "name": "1", "linkPagination": "#" },
	{ "name": "2", "linkPagination": "#" },
	{ "name": "3", "linkPagination": "#" },
	{ "name": "4", "linkPagination": "#" },
	{ "name": "Next", "linkPagination": "#" }
];

function createPagination(arrVis) {
	var ul = createNewElement("ul", null, "pagination justify-content-center");
	var li, a;
	for (var i = 0; i < arrVis.length; i++) {
		li = createNewElement("li", null, "page-item");
		a = createNewElement("a", arrVis[i].name, "page-link", [{ "name": "href", "value": arrVis[i].linkPagination }]);
		li.appendChild(a);
		ul.appendChild(li);
	}
	return ul;
}

var pagin = document.getElementById("pagination");
pagin.appendChild(createPagination(visPaginations));

var items = document.getElementById("amountItem");
items.appendChild(createNewElement("p", "Amount of items on this page: "+catalogArray.length));