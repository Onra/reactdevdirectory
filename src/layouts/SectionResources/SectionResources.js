import React from "react";
import sources from "../../resources/sites.json";
import SectionResourcesStyled from "./styles/SectionResourcesStyled";
import CategoryTitleStyled from "./styles/CategoryTitleStyled";
import ResourcesContainerStyled from "./styles/ResourcesContainerStyled";
import ResourceCard from "../ResourceCard/ResourceCard";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faHeadphones,
  faBorderNone,
  faRss,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import SitesContainerStyled from "./styles/SitesContainerStyled";

const SectionResources = () => {
  return (
    <SectionResourcesStyled>
      <ResourcesContainerStyled>
        {sources.map((category, index) => {
          return (
            <>
              <CategoryTitleStyled>
                {category.category_name}
              </CategoryTitleStyled>
              <SitesContainerStyled>
                {category.sites.map((site, siteIndex) => {
                  const icon = (type => {
                    switch (type) {
                      case "Official":
                        return faReact;
                      case "Podcasts":
                        return faHeadphones;
                      case "Blogs":
                        return faRss;
                      case "Conferences":
                        return faUsers;
                      default:
                        return faBorderNone;
                    }
                  })(category.category_name);
                  return (
                    <ResourceCard
                      title={site.title}
                      description={site.description}
                      icon={icon}
                      link={site.site_url}
                    />
                  );
                })}
              </SitesContainerStyled>
            </>
          );
        })}
      </ResourcesContainerStyled>
    </SectionResourcesStyled>
  );
};

export default SectionResources;
