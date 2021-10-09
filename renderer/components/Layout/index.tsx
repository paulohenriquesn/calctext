import * as S from './styles'

import Result from '../Result'
import Editor from '../Editor'

export default function Layout() {
  return (
    <S.Container>
      <Editor />
      <Result />
    </S.Container>
  )
}