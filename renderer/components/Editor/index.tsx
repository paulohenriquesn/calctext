import { useEffect, useState } from 'react'
import * as S from './styles'
import React from 'react';

import {useDispatch,useSelector} from 'react-redux'

export default function Editor() {

  const total = useSelector((store : any) => store.Global.total)
  const dispatch = useDispatch();

  function Eval(code: string) {
    try {
      let code_lines = code.split(/\r*\n/);
      code_lines.forEach((line, i) => {
        if (line) {
          try {
            let result = "";
            if (line.includes('=')) {
              let raw = line.split(' ')
              let constructor = `var ${raw[0]} = ${raw[2]}`
              if (raw[2]) {             
                window.eval(`${constructor}`)
              }
            } else {
              result = window.eval(`${line}`)
            }
            if (result) {
              dispatch({type: "SET_TOTAL", total: Number(result)})
            }
          } catch (err) { }
        }
      })

    } catch (err) { console.log('Error to compile math raw, ', err) }
  }



  return (
    <S.Container className="editor" onChange={(e) => {
      Eval(e.target.value);
    }} />
  )
}
