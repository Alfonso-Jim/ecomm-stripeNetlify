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
                                <h2 class="title has-text-centered">About this project</h2>
                                <div class="notification has-text-justified">
                                    A simple e-commerce experience including data store (JSON), the app also has an admin panel to create, read, update and delete products. 
                                    Images are stored in a base64 format(small images), sessions are saved and deleted depending on how the user interacts with the site (cart & admin).
                                </div>
                                <div class="columns is-vcentered">
                                    <div class="column">
                                        <article class="message">
                                            <div class="message-header">
                                                <p>Stack</p>
                                            </div>
                                            <div class="message-body">
                                                <div class="content">
                                                    <ul>
                                                        <li>ES6</li>
                                                        <li>Node.js</li>
                                                        <ul>
                                                            <li>body-parser v:1.19.0</li>
                                                            <li>cookie-session v:1.4.0</li>
                                                            <li>ejs v:3.1.5</li>
                                                            <li>express v:4.17.1,</li>
                                                            <li>express-validator v:6.9.2</li>
                                                            <li>multer v:1.4.2</li>
                                                            <li>nodemon v:2.0.6</li>
                                                            <li>stripe v:8.132.0</li>
                                                        </ul>
                                                        <li>Bulma CSS</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="column">
                                    <h2 class="title is-3 has-text-centered">The Creator</h2>
                                        <div class="card">
                                            <div class="card-content">
                                                <div class="media">
                                                <div class="media-left">
                                                    <figure class="image is-48x48">
                                                    <img src="/images/me.jpg" />
                                                    </figure>
                                                </div>
                                                <div class="media-content">
                                                    <p class="title is-4">Poncho Jim</p>
                                                    <p class="subtitle is-6"><a href="https://www.instagram.com/poncho_jim/">@poncho_jim</a></p>
                                                </div>
                                                </div>
                                                <div class="content has-text-justified">
                                                Another visitor! how nice. Hey there, I am Poncho the creator of this e-comm app.
                                                Make sure to check my other <a href="https://alfonso-dev.com/#portfolio"><strong>projects</strong></a> and my <a href="https://alfonso-dev.com/"><strong>blog</strong></a> where you can get to know me better.
                                                <br>
                                                <time datetime="2020-02-02">07:24 AM - 2 Feb 2020</time>
                                                </div>
                                            </div>
                                        </div></br>
                                        <h2 class="title is-3 has-text-centered">Payment Credentials</h2>
                                        <div class="notification has-text-justified card">
                                        <div class="content">
                                            <ul>
                                            <li><strong>Email</strong>: any@email.com</li>
                                            <li><strong>Card Information: </strong></li>
                                                <ul>
                                                    <li><strong>Card Number:</strong> 4242 4242 4242 4242 </li>
                                                    <li><strong>Expiration Date:</strong> 12/25 </li>
                                                    <li><strong>CVC:</strong> 242</li>
                                                    <li><strong>Name on card:</strong> </strong>John Doe</li>
                                                </ul>
                                            <li>Click <a href="https://stripe.com/docs/testing#cards">here</a> for more info</li>
                                            </ul>
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
        `
    });
};