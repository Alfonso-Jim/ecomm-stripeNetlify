const layout = require('../layout');

module.exports = ({ items }) => {
  const totalPrice = items.reduce((prev, item) => {
    return prev + item.quantity * item.product.price;
  }, 0);

  const renderedItems = items
    .map(item => {
      return `
        <div class="cart-item notification">
          <h3 class="subtitle">${item.product.title}</h3>
          <div class="cart-right">
            <div>
              $${item.product.price.toFixed(2)}  X  ${item.quantity} = 
            </div>
            <div class="price is-size-4">
              $${(item.product.price * item.quantity).toFixed(2)}
            </div>
            <div class="remove">
              <form method="POST" action="/cart/products/delete">
                <input hidden value="${item.id}" name="itemId" />
                <button class="button is-danger">                  
                  <span class="icon is-small">
                    <i class="fas fa-times"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  return layout({
    
    content: `
    <section class="column">
      <div class="column">
        <div id="cart" class="container">
          <div class="columns">
            <div class="column"></div>
            <div class="box column is-four-fifths is-desktop is-vcentered">
              <h2 class="title has-text-centered">Shopping Cart</h2>
              <div>
                ${renderedItems}
              </div>
              <div class="total message is-dark">
                <div class="message-header">
                  Order Summary
                </div>
                <div class="column">
                  <div class="cart-item">
                    <h3 class="subtitle">Total</h3>
                    <div class="cart-right">
                      <h1 class="title has-text-right">$${totalPrice.toFixed(2)}</h1>
                    </div>
                  </div>
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="control">
                          <a href="/" class="no-underline">
                            <button class="button is-dark is-medium">
                              <span class="icon is-small has-text-info">
                                <i class="fas fa-cart-arrow-down"></i>
                              </span>
                              <span>Keep Shopping</span>
                            </button>
                          </a>
                        </p>
                      </div>  
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <form method="POST" action="/cart/products/buy">
                        <input hidden value="${totalPrice}" name="totalPrice" />
                          <p class="control">
                            <button type="button" id="checkout-button" class="button is-dark is-medium">
                              <span class="icon is-small has-text-success">
                                <i class="fas fa-credit-card"></i>
                              </span>
                              <span>Buy</span>
                            </button>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </section>

    <script type="text/javascript">
      // Create an instance of the Stripe object with your publishable API key
      var stripe = Stripe("pk_test_51IEv7wBxCo0Ef9k2DNmT1QyYi9XDeiYdE5bRJCZP4ZltvTWLR1Lwd2vObkFurMGuc67jiuWmBdi76YrnlPtFe9ov00VGhcYEtJ");
      var checkoutButton = document.getElementById("checkout-button");
      checkoutButton.addEventListener("click", function () {
        fetch("/cart/products/buy", {
          method: "POST",
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (session) {
            return stripe.redirectToCheckout({ sessionId: session.id });
          })
          .then(function (result) {
            // If redirectToCheckout fails due to a browser or network
            // error, you should display the localized error message to your
            // customer using error.message.
            if (result.error) {
              alert(result.error.message);
            }
          })
          .catch(function (error) {
            console.error("Error:", error);
          });
      });
    </script>
      
    `
  });
};
