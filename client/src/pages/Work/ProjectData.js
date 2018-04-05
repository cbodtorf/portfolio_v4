import React from "react";

import bamboo from "../../images/bamboo-juices-logo.png"
import sneaker from "../../images/sneaker-logo.jpg"
import fritz from "../../images/fritz-logo.png"
import sPittman from "../../images/spittman-logo.png"
import gigis from "../../images/gigis-logo.png"
import lesetta from "../../images/lesetta-logo.png"
import raven from "../../images/raven-logo.png"

const ProjectData = [
  {
    name: "Bamboo Juices",
    img_src: { bamboo },
    tech: ["javascript","css3","sass","shopify","html5","react","rails","ruby","heroku"],
    url: "http://bamboojuices.com",
    description: <p>
      A Full-stack ecommerce project built on Shopify.<br />
      This project consisted of a custom Shopify embedded app for the site admin to manage local delivery and pickup. This was built using Ruby on Rails and React, and hosted on Heroku. <br/>
      Outside of the core Shopify functionality, we implemented Local Delivery and pickup logic including custom carrier calculated rates based on store cutoff times and blackout dates.
      We created an editor to for product level metafields in order to designate bundles, ingredients, and benefits.
      Custom integration with a 3rd party Subscription Service, including Server based routines to our custom data was always up to date. <br />
      Additional work included legacy site migration or customers, subscriptions, and orders, which involved custom SQL database querying and restructring.
      </p>
  },
  {
    name: "Sneaker",
    img_src: { sneaker },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "http://sneakerchs.com",
    description: <p>
      A Front-end redesign built on Shopify.<br />
      We have worked hand in hand with Sneaker for a while creating immersive marketing campaigns with custom landing pages. Strategies include integrations with Google analytics and Mailchimp. <br />
      In December 2017 Sneaker rebranded with <a href="http://www.jfletcherdesign.com/">Jay Fletcher</a> <br />
      We were commissioned to redesign the Sneaker website to match the branding.
      </p>
  },
  {
    name: "Raven Roxanne",
    img_src: { raven },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "https://ravenroxanne.com",
    description: <p>
      A Front-end project ecommerce project.
      </p>
  },
  {
    name: "Fritz Porter",
    img_src: { fritz },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "https://fritzporter.com",
    description: <p>
      Fritz Porter Design Collective contacted us to develop an ecommerce experience for them on Shopify. <br />
      The Front-end project focued on connecting interior designers and the products they require.
      </p>
  },
  {
    name: "Sara Pittman",
    img_src: { sPittman },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "https://sarapittmanstudio.com/",
    description: <p>
      A Front-end project ecommerce project.
      </p>
  },
  {
    name: "Gigi's Cupcakes",
    img_src: { gigis },
    tech: ["javascript","css3","sass","shopify","html5","react","rails","ruby","heroku"],
    url: "",
    description: <p>
      A Front-end project ecommerce project. With a backend Delivery App.
      </p>
  },
  {
    name: "Lesetta",
    img_src: { lesetta },
    tech: ["javascript","css3","sass","shopify","html5"],
    url: "",
    description: <p>
      A Front-end project ecommerce project.
      </p>
  }
]

export default ProjectData
