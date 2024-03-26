import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FeaturedItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: rgba(15, 31, 88, 0.3);
  border-radius: 3px;

  p {
    color: var(--text-light);
  }
  .more {
    color: var(--green-text);
  }
  &:hover {
    outline: var(--green-text) 2px solid;
    scale: 1.01;
    .more {
      color: var(--teal-text);
    }
  }

  @media (min-width: 45rem) {
    flex-direction: row;

    .info {
      flex-grow: 2;
    }
    .image {
      flex-basis: 30%;
      flex-shrink: 0;
    }
  }
`;

const ReversedCard = styled(FeaturedItemStyles)`
  @media (min-width: 45rem) {
    flex-direction: row-reverse;
  }
`;

const FeaturedItem = ({ node, index }) => {
  const image = getImage(node.frontmatter.image);

  return (
    <>
      {index % 2 === 0 ? (
        <Link to={`/work/${node.frontmatter.slug}`}>
          <FeaturedItemStyles>
            <div className="info">
              <h3>{node.frontmatter.title}</h3>
              <p>{node.frontmatter.abstract}</p>
              <p className="more">
                More <span className="material-icons"> arrow_outward </span>
              </p>
            </div>
            <div className="image">
              <GatsbyImage image={image} alt={node.frontmatter.image_alt} />
            </div>
          </FeaturedItemStyles>
        </Link>
      ) : (
        <Link to={`/work/${node.frontmatter.slug}`}>
          <ReversedCard>
            <div className="info">
              <h3>{node.frontmatter.title}</h3>
              <p>{node.frontmatter.abstract}</p>
              <p className="more">
                More <span className="material-icons"> arrow_outward </span>
              </p>
            </div>
            <div className="image">
              <GatsbyImage image={image} alt={node.frontmatter.image_alt} />
            </div>
          </ReversedCard>
        </Link>
      )}
    </>
  );
};

export default FeaturedItem;
