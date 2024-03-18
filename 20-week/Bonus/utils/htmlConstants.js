const styles = `<head><title>Fruit Basket Co</title><link rel="stylesheet" href="styles.css"></head>`;
const nav = `<nav><a href='/'>Home</a><a href="/schema">Schema</a><a href="/sweet-n-sour">Sweet & Sour</a><a href="/doge-to-the-moon">Doge Prices</a><a href="/remove-veggies">Remove Veggies</a><a href="/ba-na-na-s">Bananas</a></nav>`;
const splashTitle = "<h1>Fruit Basket Schema</h1>";
const beepBoop = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/49e536c8-d553-454a-815d-28d9399cb795/Axp21MoGIO.json" background="transparent" speed="1" style="width: 150px; height: 150px" loop autoplay direction="1" mode="normal"></lottie-player>`;
const schemaFAQ =
  "<div class='schema-talk'>For this practice, restart your server to see updates applied to your schema.</div>";
const freshBanana = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/e8b5acc5-5cc5-4ab3-a925-6b26fbc690ce/0dJNtwgfiD.json" background="transparent" speed="1" style="width: 225px; height: 225px" loop autoplay direction="1" mode="normal"></lottie-player>`;
const freshFAQ =
  "<div class='schema-talk'>We only want bananas that are 2-4 days old.  List the oldest ones first.</div>";
const snsFAQ =
  "<div class='schema-talk'>We only want fruits that are sweet or sour.  We want to see their freshness. List the newest ones first.</div>";
const veggieFAQ =
  "<div class='schema-talk'>There should be no more Veggie Baskets, and all the fruit in those basekts should be gone. Restart your server to add veggie baskets back to your DB.</div>";
const errMsg = `<p>Something went wrong.  Check your queries and schema.</p><p>Restart your server and try again!</p>`;
const closeDiv = `</div>`;
const bananaContainerTitle = `<div class='banana-container'><h1>Fresh Bananas</h1>`;
const sweetAndSour = `<div class='banana-container'><h1>Sweet n' Sour</h1>`;
const veggieTitle = `<div class='banana-container'><h1>Remove Veggie Baskets</h1>`;
const dodgeTitle = `<div class='banana-container'><h1>Dodge Price Check</h1>`;
const tableContainer = `<div class="table-container">`;
const dbContainer = `<div class='db-container'>`;
const snsLemonLottie = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/508553dc-d407-484a-b637-04b3979ef6ea/VctsesA3xh.json" background="transparent" speed="1" style="width: 180px; height: 180px" loop autoplay direction="1" mode="normal"></lottie-player>`
const tomatoLottie = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/ea343a20-6983-49bb-ad6b-49c517981f4e/AaqWIrYAxC.json" background="transparent" speed="1" style="width: 225px; height: 225px" loop autoplay direction="1" mode="normal"></lottie-player>`
const dodgeLottie = `<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/774f27f6-418a-4524-845d-70edd25821ff/xdL0Nxuk7l.json" background="transparent" speed="1" style="width: 225px; height: 225px" loop autoplay direction="1" mode="normal"></lottie-player>`
const dodgeFAQ =
  "<div class='schema-talk'>We should see all of the veggie baskets that're worth 1000-1999 dodge and see the basket names.  List the most expensive baskets first.  We should also see the type of fruits in the basket, and how old they are.</div>";
const cleanSchema =
  styles +
  nav +
  dbContainer +
  splashTitle +
  beepBoop +
  closeDiv +
  tableContainer;
let cleanRes =
  styles +
  nav +
  bananaContainerTitle +
  freshBanana +
  closeDiv +
  tableContainer +
  closeDiv +
  tableContainer;
  let sweetAndSourRes =
  styles +
  nav +
  sweetAndSour +
  snsLemonLottie +
  closeDiv +
  tableContainer +
  closeDiv +
  tableContainer;
  let removeVeggiePage = styles + nav + veggieTitle + tomatoLottie + veggieFAQ
  let dodgePage = styles + nav + dodgeTitle + dodgeLottie + closeDiv + tableContainer + closeDiv + tableContainer;
let closeFAQ = closeDiv + schemaFAQ;
let closeFresh = closeDiv + freshFAQ;
module.exports = {
  dodgePage,
    sweetAndSourRes,
    removeVeggiePage,
    snsFAQ,
  closeFresh,
  closeFAQ,
  cleanSchema,
  cleanRes,
  tableContainer,
  bananaContainerTitle,
  errMsg,
  styles,
  nav,
  splashTitle,
  beepBoop,
  schemaFAQ,
  freshBanana,
  freshFAQ,
  closeDiv,
  dodgeFAQ
};
