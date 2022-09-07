import React from "react";
import { useSelector } from "react-redux";
import { selectLinks } from "store/slice/linkSlice";
import styled from "styled-components";
import { Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useState } from "react";

const Wrapper = styled.div`
  margin-top: 30px;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div {
    height: 35px;
    display: flex;
    align-items: center;
  }
`;
const Target = styled.div`
  display: block;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Short = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 15%;
`;
// const Counter = styled.div``;

const ShortenLinks = () => {
  const [copiedLinks, setCopiedLinks] = useState(null);
  const links = useSelector(selectLinks);

  const copyShortLink = (link) => {
    navigator.clipboard.writeText("https://" + link).then(() => {
      setCopiedLinks(link);
    });
  };

  return (
    <Wrapper>
      <div>
        {links.map((item) => (
          <LinksContainer key={item.id}>
            <Target>{item.target}</Target>
            <Short>
            <a href={`https://${item.short}`} target="_blank" rel="noreferrer">{`https://${item.short}`}</a>
            </Short>
            <Button
              type="primary"
              shape="circle"
              icon={<CopyOutlined />}
              onClick={() => copyShortLink(item.short)}
            />
            {/* <Counter>{item.counter}</Counter> */}
          </LinksContainer>
        ))}
      </div>
    </Wrapper>
  );
};

export default ShortenLinks;
