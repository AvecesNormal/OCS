// function Button() {
//    const name = 'Button'
//    return (
//        <>
//           <button className="bg-tertiary px-5 py-2 text-white" >{name}</button>
//        </>
//    )
//}

const   Button = (props) => {

    const { name } = props;
    return (
        <>
           <button className="bg-primary px-5 py-2 text-white" >{name}</button>
        </>
    )
}

export default Button

