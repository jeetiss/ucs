import * as React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneLight";

const Header = styled.h3`
  margin: 24px 0 16px 0;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pre = styled.pre`
  margin: 0;
`

const Example = ({ title, demo, code }) => (
  <Block>
    <Header>{title}</Header>

    <Row>
      <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>

      <div>{demo}</div>
    </Row>
  </Block>
);

export default Example;
