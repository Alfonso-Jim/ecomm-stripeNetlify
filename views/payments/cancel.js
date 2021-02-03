const layout = require('../layout');

module.exports = () => {
    return  layout({
        content: `
        <section class="column">
            <div class="column">
              <div class="container">
                <div class="columns">
                    <div class="column"></div>
                      <div class="box column is-four-fifths is-desktop">
                        <h2 class="title has-text-centered">Did you miss something?</h2>
                        <div class="columns">
                          <div class="column"></div>
                            <div class="column is-three-fifths">
                              <div class="notification is-link">
                                <h4 class="subtitle is-4"><p class="has-text-white">Just go back to the <strong><a href="/" class="has-text-white no-underline">store</a> </strong>and add whatever it is that you want to your cart!</p></h4>
                              </div>
                              <a href="/" class="no-underline">
                                <button class="button is-dark is-medium">
                                  <span class="icon is-small has-text-info">
                                    <i class="fas fa-arrow-left"></i>
                                  </span>
                                  <span>Back to store</span>
                                </button>
                              </a>
                            </div>
                          <div class="column"></div>
                        </div>
                      </div>
                    <div class="column"></div>
                </div>
              </div>
            </div>
          </section>
        `
    });
};