'use client'
import type { ClientField, Description } from 'payload'

import { fieldIsSidebar } from 'payload/shared'
import React from 'react'

import { RenderFields } from '../../forms/RenderFields/index.js'
import { Gutter } from '../Gutter/index.js'
import { RenderIfInViewport } from '../RenderIfInViewport/index.js'
import './index.scss'

const baseClass = 'document-fields'

const fieldsBaseClass = 'render-fields'

type Args = {
  readonly AfterFields?: React.ReactNode
  readonly BeforeFields?: React.ReactNode
  readonly description?: Description
  readonly fields: ClientField[]
  readonly forceSidebarWrap?: boolean
}

export const DocumentFields: React.FC<Args> = ({
  AfterFields,
  BeforeFields,
  description,
  fields,
  forceSidebarWrap,
}) => {
  if (!fields) {
    return 'No fields to render'
  }

  const { mainFields, sidebarFields } = fields.reduce(
    (acc, field) => {
      if (fieldIsSidebar(field)) {
        acc.sidebarFields.push(field)
      } else {
        acc.mainFields.push(field)
      }
      return acc
    },
    {
      mainFields: [] as ClientField[],
      sidebarFields: [] as ClientField[],
    },
  )

  const hasSidebarFields = sidebarFields && sidebarFields.length > 0

  return (
    <div
      className={[
        baseClass,
        hasSidebarFields ? `${baseClass}--has-sidebar` : `${baseClass}--no-sidebar`,
        forceSidebarWrap && `${baseClass}--force-sidebar-wrap`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={`${baseClass}__main`}>
        <Gutter className={`${baseClass}__edit`}>
          <header className={`${baseClass}__header`}>
            {description && (
              <div className={`${baseClass}__sub-header`}>
                {/* <ViewDescription description={description} /> */}
              </div>
            )}
          </header>
          {BeforeFields}
          <RenderIfInViewport
            className={[
              fieldsBaseClass,
              // className,
              // margins && `${baseClass}--margins-${margins}`,
              // margins === false && `${baseClass}--margins-none`,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <RenderFields className={`${baseClass}__fields`} fields={mainFields} forceRender />
          </RenderIfInViewport>
          {AfterFields}
        </Gutter>
      </div>
      {hasSidebarFields ? (
        <div className={`${baseClass}__sidebar-wrap`}>
          <div className={`${baseClass}__sidebar`}>
            <div className={`${baseClass}__sidebar-fields`}>
              <RenderIfInViewport
                className={[
                  fieldsBaseClass,
                  // className,
                  // margins && `${baseClass}--margins-${margins}`,
                  // margins === false && `${baseClass}--margins-none`,
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <RenderFields fields={sidebarFields} forceRender />
              </RenderIfInViewport>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
