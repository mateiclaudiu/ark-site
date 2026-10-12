"use client"

import React from "react"
import styled from "styled-components"
import {activeColor, color3, textColor} from "./colors"

// Weergave van Sanity "portable text" voor artikels: alinea's, tussenkoppen, citaten,
// opsommingen, vet, cursief en links.
const RichTextStyled = styled.div`
  color: #2b2f38;
  font-size: 1.05rem;
  line-height: 1.75;

  p {
    margin: 0 0 1.25rem 0 !important;
  }

  h2 {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.3;
    color: ${textColor};
    margin: 2.25rem 0 0.75rem 0;
  }

  blockquote {
    margin: 2rem 0;
    padding: 0.25rem 0 0.25rem 1.5rem;
    border-left: 3px solid ${color3};
    font-size: 1.3rem;
    line-height: 1.5;
    font-style: italic;
    color: ${textColor};
  }

  ul,
  ol {
    margin: 0 0 1.25rem 1.4rem;
  }

  a {
    color: ${activeColor};
    text-decoration: underline;
  }
`

const renderSpan = (span, markDefs) => {
  let content = span.text
  for (const mark of span.marks || []) {
    if (mark === "strong") content = <strong>{content}</strong>
    else if (mark === "em") content = <em>{content}</em>
    else {
      const def = markDefs.find(d => d._key === mark)
      if (def?._type === "link" && def.href) {
        const external = /^https?:/.test(def.href)
        content = <a href={def.href} {...(external ? {target: "_blank", rel: "noopener noreferrer"} : {})}>{content}</a>
      }
    }
  }
  return <React.Fragment key={span._key}>{content}</React.Fragment>
}

const renderBlockContent = block => (block.children || []).map(span => renderSpan(span, block.markDefs || []))

export const RichText = ({value = []}) => {
  const output = []
  for (let i = 0; i < value.length; i++) {
    const block = value[i]
    if (block._type !== "block") continue
    if (block.listItem) {
      // Opeenvolgende lijstitems van hetzelfde soort samen in één lijst.
      const items = []
      while (i < value.length && value[i].listItem === block.listItem) items.push(value[i++])
      i--
      const List = block.listItem === "number" ? "ol" : "ul"
      output.push(<List key={block._key}>{items.map(item => <li key={item._key}>{renderBlockContent(item)}</li>)}</List>)
    } else if (block.style === "h2") {
      output.push(<h2 key={block._key}>{renderBlockContent(block)}</h2>)
    } else if (block.style === "blockquote") {
      output.push(<blockquote key={block._key}>{renderBlockContent(block)}</blockquote>)
    } else {
      output.push(<p key={block._key}>{renderBlockContent(block)}</p>)
    }
  }
  return <RichTextStyled>{output}</RichTextStyled>
}
