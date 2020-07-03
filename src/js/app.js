import sal from "sal.js";
import { headerScroll } from "./modules/header-scroll";
import { navigation } from "./modules/navigation";
import "./modules/contact-form";

(function() {
  headerScroll.init();
  navigation.init();
  sal();
})();
