import React, { useEffect } from "react"
import styled, { css } from "styled-components"

const ResponsiveHeader = styled.div`
  height: 7vh;
  transition: 1s;
  position: fixed;
  top: 10px;
  left: 5px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  @media (max-width: 1368px) {
    top: 0;
    width: 100%;
    flex-direction: row;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
`

const MenuButtonWrapper = styled.div`
  line-height: 7vh;
  padding: 0 15px;
  transition: 0.5s;
  .my-name {
    color: #60e1d4;
    transition: 0.5s;
  }
  span {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      color: #60e1d4;
    }
  }
  @media (max-width: 1368px) {
    font-size: 14px;
    padding: 0 7px;
  }
`

const InnerHeader = ({ onClickUpTo }) => {
  return (
    <ResponsiveHeader>
      <MenuButtonWrapper>
        <span
          className="my-name"
          onClick={() => {
            onClickUpTo(0)
          }}
        >
          PARKJINHO
        </span>
      </MenuButtonWrapper>
      <MenuButtonWrapper>
        <span
          onClick={() => {
            onClickUpTo(1)
          }}
        >
          ABOUT
        </span>
      </MenuButtonWrapper>
      <MenuButtonWrapper>
        <span
          onClick={() => {
            onClickUpTo(2)
          }}
        >
          PROJECT
        </span>
      </MenuButtonWrapper>
      <MenuButtonWrapper>
        <span
          onClick={() => {
            onClickUpTo(3)
          }}
        >
          STACKS
        </span>
      </MenuButtonWrapper>
      <MenuButtonWrapper>
        <span
          onClick={() => {
            onClickUpTo(4)
          }}
        >
          CONTACT
        </span>
      </MenuButtonWrapper>
    </ResponsiveHeader>
  )
}

export default InnerHeader
