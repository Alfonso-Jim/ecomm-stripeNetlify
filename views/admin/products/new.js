const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
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
            <h1 class="subtitle">Create a Product</h1>
            <form method="POST" enctype="multipart/form-data">
              <div class="field">
                <label class="label">Title</label>
                <input class="input" placeholder="Title" name="title">
                <p class="help is-danger">${getError(errors, 'title')}</p>
              </div>
              
              <div class="field">
                <label class="label">Price</label>
                <input class="input" placeholder="Price" name="price">
                <p class="help is-danger">${getError(errors, 'price')}</p>
              </div>
            
              <label class="label">Image</label>  
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
                <span class="icon is-small has-text-success">
                  <i class="fa fa-plus"></i>
                </span>
                <span>Add product</span>
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
