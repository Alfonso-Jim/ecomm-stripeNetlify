const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class=" box column is-one-quarter">
          <!--
            <form method="POST">
              <h1 class="title has-text-centered">Sign Up</h1>
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input required class="input" placeholder="Password" name="password" type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
              <div class="field">
                <label class="label">Password Confirmation</label>
                <input required class="input" placeholder="Password Confirmation" name="passwordConfirmation" type="password" />
                <p class="help is-danger">${getError(errors, 'passwordConfirmation')}</p>
              </div>
              <div class="has-text-centered">
                <button class="button is-link">Submit</button>
              </div>
            </form>
            -->
            <a href="/signin">Have an account? <strong>Sign In</strong></a>
          </div>
        </div>
      </div>
    `
  });
};
