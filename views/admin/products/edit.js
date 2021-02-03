const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ product, errors }) => {
  return layout({
    content: `
      <div class="box control">
        <p class="is-size-5">Products</p>  
        <div class="field has-addons">
          <p class="control">
            <a href="/admin/products">
              <button class="button">
                <span class="icon is-small has-text-black">
                  <i class="far fa-eye"></i>
                </span>
                <span>View all Products</span>
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
        <div class="columns is-centered">
          <div class="column is-half">
            <h1 class="subtitle">Edit a Product</h1>

            <form method="POST" enctype="multipart/form-data">
              <div class="field">
                <label class="label">Title</label>
                <input value="${product.title}" class="input" placeholder="Title" name="title">
                <p class="help is-danger">${getError(errors, 'title')}</p>
              </div>
              
              <div class="field">
                <label class="label">Price</label>
                <input value="${product.price}" class="input" placeholder="Price" name="price">
                <p class="help is-danger">${getError(errors, 'price')}</p>
              </div>
              
              <label class="label">Current Image</label>
              <div class="box container column">
                <div class="columns is-centered is-full">
                  <div class="notification product-card is-white">
                    <div class="is-centered">
                      <img class="image is-128x128" src="data:image/png;base64, ${product.image}" />
                    </div>
                  </div>
                </div>
              </div>
              
              <label class="label">Replace Image</label>  
              <div id="file-js-example" class="file has-name">
                <label class="file-label">
                  <input class="file-input" type="file" name="image">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name">
                    No file uploaded
                  </span>
                </label>
              </div>

              <br />
              <p class="control">
                <button class="button is-dark">
                <span class="icon is-small has-text-info">
                  <i class="fa fa-save"></i>
                </span>
                <span>Save Changes</span>
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>

      <script>
        const fileInput = document.querySelector('#file-js-example input[type=file]');
        fileInput.onchange = () => {
          if (fileInput.files.length > 0) {
            const fileName = document.querySelector('#file-js-example .file-name');
            fileName.textContent = fileInput.files[0].name;
          }
        }
      </script>
    `
  });
};
