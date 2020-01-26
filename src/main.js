import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}


import "./scripts/parallax";
import "./scripts/parallax-footer";
import "./scripts/reviews";
import "./scripts/skills";



