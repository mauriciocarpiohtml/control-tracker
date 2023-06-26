import { useEffect } from 'react'
import { useSpeechContext } from '@speechly/react-client'

export function useMicrophone(){

    // Dependendencias de speech
    const { listening, segment, attachMicrophone, start, stop } = useSpeechContext()

    // Funcion que activa el microfono
    async function handleClick(){
        if (listening) {
          await stop()
        } else {
          await attachMicrophone()
          await start()
        }
      }

      useEffect(() => {
        if (segment && segment.isFinal) {
          segment.entities.forEach((entitie) => {
            //El caso que voy a evaluar es el tipo de entidad
            switch(entitie.type){
              case 'word':
                setExpense(entitie.value)
                break
                // Convirtiendo la primera letra de categoria en mayuscula porque no coincide el value
              case 'category': setCategory(`${entitie.value.charAt(0)}${entitie.value.slice(1).toLowerCase()}`)
              break
              case 'cost': setCost(entitie.value)
              break
              case 'date': setDate(entitie.value)
              break
            }
          })
          
        }
      }, [segment])

    return {listening, handleClick }
}