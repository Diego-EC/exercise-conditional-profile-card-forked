import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let nameAux = `<h1>Your name `;
  if (variables.name !== null) {
    nameAux = `<h1>${variables.name} `;
  }
  if (variables.lastname !== null) {
    nameAux += `${variables.lastname}</h1>`;
  } else {
    nameAux += `Your lastname</h1>`;
  }

  let roleAux = "<h2>Web Developer</h2>";
  if (variables.role !== null) {
    roleAux = `<h2>${variables.role}</h2>`;
  }

  let locationAux = "<h3>Miami,  ";
  if (variables.city !== null) {
    locationAux = `<h3>${variables.city}, `;
  }
  if (variables.country !== null) {
    locationAux += `${variables.country}</h3>`;
  } else {
    locationAux += `USA</h3>`;
  }

  let positionAux = "position-right";
  if (variables.socialMediaPosition !== "position-right") {
    positionAux = "position-left";
  }

  let twitterAux = "alesanchezr";
  if (variables.twitter !== null) {
    twitterAux = variables.twitter;
  }

  let githubAux = "alesanchezr";
  if (variables.github != "alesanchezr") {
    githubAux = variables.github;
  }

  let linkedinAux = "alesanchezr";
  if (variables.linkedin !== null) {
    linkedinAux = variables.linkedin;
  }

  let instagramAux = "alesanchezr";
  if (variables.instagram !== null) {
    instagramAux = variables.instagram;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          ${nameAux}
          ${roleAux}
          ${locationAux}
          <ul class=${positionAux}>
            <li><a href="https://twitter.com/${twitterAux}" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${githubAux}" target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${linkedinAux}" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagramAux}" target="_blank"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
