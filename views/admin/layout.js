module.exports = ({ content }) => {
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Shop</title>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
          <link href="/css/main.css" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
        </head>
        <body class="admin">
          <section class="hero is-light is-fullheight">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
              <header>
                <nav class="navbar navbar-top is-link">
                  <div class="container navbar-container">
                    <div>
                      <ul class="social">
                        <li><p><strong>Admin Panel</strong></p></li>
                      </ul>
                    </div>
                    <div>
                      <ul class="social">
                        <li><a href="https://www.facebook.com/poncho.jim.7"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/poncho_jim/"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/alfonsojim1897/"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/Alfonso-Jim"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://alfonso-dev.com/"><i class="fa fa-link"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <nav class="navbar navbar-bottom">
                  <div class="container navbar-container">
                    <div>
                      <a href="/admin/products">
                      <img src="/images/pj.png" class="logo" />
                      </a>
                    </div>
                    <div class="box">
                      <div class="field has-addons">
                        <p class="control">
                          <a href="/">
                            <button class="button">
                              <span class="icon is-small has-text-info">
                                <i class="fa fa-store-alt"></i>
                              </span>
                              <span>View Store</span>
                            </button>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="column">
              <div class="container is-vcentered">
                ${content}
                <section class="banner"></section>
              </div>
            </div>

            <!-- Hero footer: will stick at the bottom -->
            <footer>
              <div class="hero-foot">
                <nav class="navbar navbar-top is-link">
                  <div class="container navbar-container">
                    <div>
                      <ul class="social">
                        <li>
                          <a href="https://alfonso-dev.com/">Copyright @ Alphus</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="social">
                        <li><a href="tel:+48533637633"><i class="fa fa-phone"></i>+48 533 637 633</a></li>
                        <li><a href="mailto:info@alfonso-dev.com"><i class="fa fa-envelope"></i>info@alfonso-dev.com</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </footer>
          </section>
        </body>
      </html>
    `;
  };
  