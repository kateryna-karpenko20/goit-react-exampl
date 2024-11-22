const Modal = props => {
  return (
      <div>
          {/* в арс всі дані, а тут тільк спосіб їх показу, children - це зарезервоване слово, що значить показати всі елементи всередені елемента */}
          <h2>{props.title}</h2> 
          {props.children}
    </div>
  )
}

export default Modal