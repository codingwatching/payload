import type { FormFieldBase } from '../shared'

export type Props = FormFieldBase & {
  hasMany?: boolean
  inputRef?: React.MutableRefObject<HTMLInputElement>
  maxRows?: number
  minRows?: number
  name?: string
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  path?: string
}
