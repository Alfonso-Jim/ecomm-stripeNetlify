const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
      <tr>
        <td>${product.title}</td>
        <td>
          <div class="container column">
            <div class="columns is-centered is-full">
              <div class="card product-card">
              <figure>
                <div class="is-centered">
                  <img class="image is-128x128" src="data:image/png;base64, ${product.image}" />
                </div>
              </figure>
              </div>
            </div>
          </div>
        </td>
        <td><p class="has-text-centered">$${product.price}</p></td>
        <td>
          <div class="container column">
            <div class="columns is-centered is-full">
              <p class="control">
                  <a href="/admin/products/${product.id}/edit">
                    <button class="button is-dark">
                    <span class="icon is-small has-text-warning">
                      <i class="far fa-edit"></i>
                    </span>
                    <span>Edit</span>
                    </button>
                  </a>
              </p>
            </div
          </div>
        </td>
        <td>
          <form method="POST" action="/admin/products/${product.id}/delete">
            <div class="container column">
              <div class="columns is-centered is-full">
                <p class="control has-text-centered">
                  <button class="button is-dark">
                    <span class="icon is-small has-text-danger">
                      <i class="fa fa-times"></i>
                    </span>
                    <span>Delete</span>
                  </button>
                </p>
              </div>
            </div>
          </form>
        </td>
      </tr>
    `;
    })
    .join('');

  return layout({
    content: `
      <div class="box control">
        <p class="is-size-5">Product Control Center</p>  
        <div class="field has-addons">
          <p class="control">
            <a href="/admin/products/new">
              <button class="button">
                <span class="icon is-small has-text-success">
                  <i class="fa fa-plus"></i>
                </span>
                <span>New Product</span>
              </button>
            </a>
          </p>
          <p class="control">
            <a href="/signout">
              <button class="button">
                <span class="icon is-small has-text-danger">
                  <i class="fa fa-power-off"></i>
                </span>
                <span>Sign Out</span>
              </button>
            </a>
          </p>
        </div>
      </div>
      <div class="box">
        <table class="table is-fullwidth is-hoverable is-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th><p class="has-text-centered">Image</p></th>
              <th><p class="has-text-centered">Price</p></th>
              <th><p class="has-text-centered">Edit</p></th>
              <th><p class="has-text-centered">Delete</p></th>
            </tr>
          </thead>
          <tbody>
            ${renderedProducts}
          </tbody>
        </table>
      </div>
    `
  });
};
