"use client"

import React from "react"

// Minimale weergave van Sanity "portable text": alinea's met vet en cursief.
const renderSpan = span => {
  let content = span.text
  if (span.marks?.includes("em")) content = <em>{content}</em>
  if (span.marks?.includes("strong")) content = <strong>{content}</strong>
  return <React.Fragment key={span._key}>{content}</React.Fragment>
}

export const SimplePortableText = ({ value = [] }) => (
  <>
    {value.filter(block => block._type === "block").map(block => (
      <p key={block._key}>{(block.children || []).map(renderSpan)}</p>
    ))}
  </>
)
