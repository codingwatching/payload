import type { GenericClientFieldConfig } from '../../fields/config/client.js'
import type { ErrorComponent } from '../forms/Error.js'
import type { DescriptionComponent, FormFieldBase, LabelComponent } from '../types.js'

export type TabsFieldProps = {
  readonly field: GenericClientFieldConfig<'tabs'>
  readonly forceRender?: boolean
} & FormFieldBase

export type TabsFieldLabelComponent = LabelComponent<'tabs'>

export type TabsFieldDescriptionComponent = DescriptionComponent<'tabs'>

export type TabsFieldErrorComponent = ErrorComponent<'tabs'>
