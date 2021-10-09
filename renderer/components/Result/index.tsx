import * as S from './styles'

import {useSelector} from 'react-redux'

export default function Result() {

  const total = useSelector((store : any) => store.Global.total)
  return (
    <S.Container className="result">
      <div className="total">
        <div>
          <label>Total</label>
          <h4>{total}</h4>
        </div>
      </div>
    </S.Container>
  )
}