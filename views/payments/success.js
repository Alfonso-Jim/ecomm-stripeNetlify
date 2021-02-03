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
                        <h2 class="title has-text-centered">Order Placed!</h2>
                        <div class="columns">
                          <div class="column"></div>
                            <div class="column is-three-fifths">
                              <div class="notification is-success">
                                <h2 class="title is-2 has-text-light"><strong class="has-text-white">Thanks for your payment</strong></h2>
                                <h4 class="subtitle is-4"><i class="has-text-white">It's a pleasure doing business with you!</i></h4>
                              </div>
                              <a href="/" class="no-underline">
                                <button class="button is-dark is-medium">
                                  <span class="icon is-small has-text-success">
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