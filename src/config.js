const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const SERVER_PORT = 8000;
const ROOT_URL = "http://localhost:" + SERVER_PORT;

const REGISTER_URL = ROOT_URL + "/register";
const LOGIN_URL = ROOT_URL + "/api/login_check";

// APIs
const SHOPS_URL = ROOT_URL + "/shops";
const DETAILS_URL = ROOT_URL + "/shopdetails/"; // + id
const DESTINATIONS_URL = ROOT_URL + "/destinations";
const LANGUAGES_URL = ROOT_URL + "/languages";
const POPULAR_URL = ROOT_URL + "/popular";
const DESTINATION_IMAGES_URL = ROOT_URL + "/images/destinations/"; // + filename.jpg
const SHOP_IMAGES_URL = ROOT_URL + "/images/shops/"; // + filename.jpg
const CLICKCOUNTER_URL = ROOT_URL + "/clickcounter";

// APIs protegidas
const POST_URL = ROOT_URL + "/api/post";
const CHECK_TOKEN_URL = ROOT_URL + "/api/token_check";
const DASHBOARD_URL = ROOT_URL + "/api/dashboard";
const DELETE_URL = ROOT_URL + "/api/delete";
const UPDATE_URL = ROOT_URL + "/api/update";
const ACCOUNT_URL = ROOT_URL + "/api/account";
const IMAGE_UPLOAD_URL = ROOT_URL + "/api/uploadshopimage/"; // + id
const IMAGE_UPDATE_URL = ROOT_URL + "/api/updateimage";

// Mailer
const MAILER_URL = ROOT_URL + "/mailer";

export { 
    GOOGLE_API_KEY,
    REGISTER_URL,
    LOGIN_URL,
    SHOPS_URL,
    DETAILS_URL,
    DESTINATIONS_URL,
    LANGUAGES_URL,
    POST_URL,
    CHECK_TOKEN_URL,
    DASHBOARD_URL,
    DELETE_URL,
    UPDATE_URL,
    ACCOUNT_URL,
    CLICKCOUNTER_URL,
    POPULAR_URL,
    DESTINATION_IMAGES_URL,
    MAILER_URL,
    IMAGE_UPLOAD_URL,
    IMAGE_UPDATE_URL,
    SHOP_IMAGES_URL
 }